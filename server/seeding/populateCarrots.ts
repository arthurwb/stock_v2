import { PrismaClient } from '@prisma/client';
import { Decimal } from '@keystone-6/core/types';
import { Option, User, Carrot } from './types';


async function populate(
    prisma: PrismaClient,
    data: Carrot[]
) {
    const carrotPopulator = () => {
        data.forEach(async carrot => {
            await prisma.tCarrots.create({ 
                data: {
                    userIdId: carrot.userId,
                    optionIdId: carrot.optionId,
                    purchasePrice: carrot.purchasePrice,
                    datePurchased: carrot.purchaseDate,
                }
            }) 
        });
    }
    return carrotPopulator();
}

export async function populateCarrots(
    prisma: PrismaClient, 
    options: {
        google: Option,
        microsoft: Option,
        amazon:Option
    },
    users: {
        admin: User,
        sample: User
    }
) {
    const usersData: Carrot[] = [
        {
            userId: users.admin.id, 
            optionId: options.google.id,
            purchasePrice: 200.00 as unknown as Decimal,
            purchaseDate: new Date('2024-09-18 08:00:00.000')
        },
        {
            userId: users.admin.id, 
            optionId: options.microsoft.id,
            purchasePrice: 100.00 as unknown as Decimal,
            purchaseDate: new Date('2024-09-18 08:05:00.000')
        },
        {
            userId: users.admin.id, 
            optionId: options.amazon.id,
            purchasePrice: 400.00 as unknown as Decimal,
            purchaseDate: new Date('2024-09-18 08:10:00.000')
        },
        {
            userId: users.sample.id, 
            optionId: options.google.id,
            purchasePrice: 100.00 as unknown as Decimal,
            purchaseDate: new Date('2024-09-18 08:10:00.000')
        },
        {
            userId: users.sample.id, 
            optionId: options.google.id,
            purchasePrice: 800.00 as unknown as Decimal,
            purchaseDate: new Date('2024-09-18 08:35:00.000')
        },
    ]
    await populate(prisma, usersData);

}