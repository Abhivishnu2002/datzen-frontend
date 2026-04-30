export type SettlementStatus = 'settled' | 'processing' | 'failed';

export type Settlement = {
    id: string;
    grossAmount: number;
    fee: number;
    netAmount: number;
    status: SettlementStatus;
    settlementDate: string;
    transactionCount: number;
    utr: string;
};
