import { Decimal } from '@keystone-6/core/types';

export type Option = {
    id: string;
    optionName: string;
    price: Decimal;
}
export type User = {
    id: string;
    username: string;
    password: string;
    wallet: Decimal;
}
export type HistoricalPrice = {
    optionId: string,
    historicalPrice: Decimal,
    dateRecorded: Date
}
export type Carrot = {
    userId: string;
    optionId: string;
    purchasePrice: Decimal;
    purchaseDate: Date;
}