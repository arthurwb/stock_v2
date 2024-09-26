export interface HistoricalPrice {
    id: string; 
    optionIdId: string | null; 
    historicalPrice: number; 
    dateRecorded: Date | null; 
}

export interface Option {
    option: { id: string; optionName: string; price: number; }; 
    historicalPrices: HistoricalPrice[]; 
}

export interface OptionDisplayProps {
    options: Option[];
}