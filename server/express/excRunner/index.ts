import 'dotenv/config';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createNoise() {
    try {
        const databaseMax = Number(process.env.DATABASE_COUNT);
        const tOptions = prisma.tOptions;
        const tHistoricalPrices = prisma.tHistoricalPrices;
        const options = await tOptions.findMany();
        const historicalPrices = await tHistoricalPrices.findMany();
        if (historicalPrices.length > databaseMax) {
            console.log(`greater than max length - deleting first ${options.length * 4} entries`);
            let priceIdArr = [];
            for (let i = 0; i < (options.length * 4); i++) {
                priceIdArr.push(historicalPrices[i].id);
            }
            await tHistoricalPrices.deleteMany({
                where: {
                    id: {
                        in: priceIdArr
                    }
                }
            })
        }
        options.forEach(async option => {
            let change = Math.ceil(Math.random() * 11) * (Math.round(Math.random()) ? 1 : -1); // -10-10
            console.log(`${option.optionName}: ${change}`);
            await tHistoricalPrices.create({
                data: {
                    optionIdId: option.id,
                    historicalPrice: option.price,
                    dateRecorded: new Date()
                }
            });
            await tOptions.update({
                where: {
                    id: option.id
                },
                data: {
                    price: option.price = option.price.plus(change)
                }
            });
        });
    } catch (error) {
        
    }
}

export default async function runner() {
    setInterval(await createNoise, Number(process.env.TICKCOUNT));
}