
import { PrismaClient } from '@prisma/client';

import { Option } from '../requestDefs';

const prisma = new PrismaClient();

const querys = {
    getOptions: async () => {
        const options = await prisma.tOptions.findMany();
        let optionArr: Option[] = [];

        for (const option of options) {
            const historicalPrices = await prisma.tHistoricalPrices.findMany({
                where: {
                    optionIdId: option.id
                }
            });
            optionArr.push({
                option: option,
                historicalPrices: historicalPrices
            });
        }

        console.log(optionArr); // This will now print the populated array
        return optionArr;
    }
}


export default async function query(type: string, data?: string) {
    switch (type) {
        case 'get-allOptions':
            const allOptions = await querys.getOptions();
            return allOptions;
        default:
            return []
    }
};