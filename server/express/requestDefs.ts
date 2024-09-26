import { Decimal } from '@keystone-6/core/types';
import { Request } from 'express';

export interface OptionByName extends Request {
    optionName: string
}

export interface Option { 
    option: { id: string; optionName: string; price: Decimal; }; 
    historicalPrices: { 
        id: string; 
        optionIdId: string | null; 
        historicalPrice: Decimal; 
        dateRecorded: Date | null; 
    }[]; 
}