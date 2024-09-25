import 'dotenv/config';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createNoise() {
    try {
        const options = await prisma.tOptions.findMany();
        options.forEach(async option => {
            let change = Math.ceil(Math.random() * 11) * (Math.round(Math.random()) ? 1 : -1); // -10-10
            console.log(`${option.optionName}: ${change}`);
            await prisma.tOptions.update({
                where: {
                    id: option.id
                },
                data: {
                    price: option.price = option.price.plus(change)
                }
            })
        });
    } catch (error) {
        
    }
}

export default async function runner() {
    setInterval(await createNoise, Number(process.env.TICKCOUNT));
}