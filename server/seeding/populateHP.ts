import { PrismaClient } from '@prisma/client';
import { Decimal } from '@keystone-6/core/types';
import { Option, HistoricalPrice } from './types';

async function populate(
    prisma: PrismaClient,
    data: HistoricalPrice[]
) {
    const populator = () => {
        data.forEach(async hp => {
            await prisma.tHistoricalPrices.create({ 
                data: {
                    optionIdId: hp.optionId,
                    historicalPrice: hp.historicalPrice,
                    dateRecorded: hp.dateRecorded
                }
            }) 
        });
    }
    return populator();
}

export async function populateHistoricalPrices(
    prisma: PrismaClient, 
    options: {
        google: Option,
        microsoft: Option,
        amazon: Option
    }
) {
    const usersData: HistoricalPrice[] = [
        {
            optionId: options.google.id,
            historicalPrice: 495.00 as unknown as Decimal,
            dateRecorded: new Date('2024-09-18 08:00:00.000')
        },
        {
            optionId: options.google.id,
            historicalPrice: 496.00 as unknown as Decimal,
            dateRecorded: new Date('2024-09-18 08:05:00.000')
        },
        {
            optionId: options.google.id,
            historicalPrice: 497.00 as unknown as Decimal,
            dateRecorded: new Date('2024-09-18 08:10:00.000')
        },
        {
            optionId: options.google.id,
            historicalPrice: 498.00 as unknown as Decimal,
            dateRecorded: new Date('2024-09-18 08:15:00.000')
        },
        {
            optionId: options.google.id,
            historicalPrice: 499.00 as unknown as Decimal,
            dateRecorded: new Date('2024-09-18 08:20:00.000')
        },
        {
            optionId: options.microsoft.id,
            historicalPrice: 505.00 as unknown as Decimal,
            dateRecorded: new Date('2024-09-18 08:00:00.000')
        },
        {
            optionId: options.microsoft.id,
            historicalPrice: 504.00 as unknown as Decimal,
            dateRecorded: new Date('2024-09-18 08:05:00.000')
        },
        {
            optionId: options.microsoft.id,
            historicalPrice: 503.00 as unknown as Decimal,
            dateRecorded: new Date('2024-09-18 08:10:00.000')
        },
        {
            optionId: options.microsoft.id,
            historicalPrice: 502.00 as unknown as Decimal,
            dateRecorded: new Date('2024-09-18 08:15:00.000')
        },
        {
            optionId: options.microsoft.id,
            historicalPrice: 501.00 as unknown as Decimal,
            dateRecorded: new Date('2024-09-18 08:20:00.000')
        },
        {
            optionId: options.amazon.id,
            historicalPrice: 100.00 as unknown as Decimal,
            dateRecorded: new Date('2024-09-18 08:00:00.000')
        },
        {
            optionId: options.amazon.id,
            historicalPrice: 200.00 as unknown as Decimal,
            dateRecorded: new Date('2024-09-18 08:05:00.000')
        },
        {
            optionId: options.amazon.id,
            historicalPrice: 300.00 as unknown as Decimal,
            dateRecorded: new Date('2024-09-18 08:10:00.000')
        },
        {
            optionId: options.amazon.id,
            historicalPrice: 400.00 as unknown as Decimal,
            dateRecorded: new Date('2024-09-18 08:15:00.000')
        },
        {
            optionId: options.amazon.id,
            historicalPrice: 450.00 as unknown as Decimal,
            dateRecorded: new Date('2024-09-18 08:20:00.000')
        },
    ]
    await populate(prisma, usersData);
}