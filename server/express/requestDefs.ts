import { Request } from 'express';

export interface OptionByName extends Request {
    optionName: string
}