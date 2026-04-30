export type TransactionStatus = 'success' | 'pending' | 'failed';

export type TransactionMethod = 'UPI' | 'Card' | 'Net Banking' | 'Wallet';

export type Transaction = {
    id: string;
    amount: number;
    fee: number;
    status: TransactionStatus;
    method: TransactionMethod;
    customerEmail: string;
    description: string;
    createdAt: string;
};
