export type ReportRange = '7d' | '30d' | '90d';

export type PaymentMethodSlice = {
    method: string;
    percentage: number;
    amount: number;
};

export type TopCustomer = {
    email: string;
    transactions: number;
    amount: number;
};

export type ReportSummary = {
    revenue: number;
    transactions: number;
    successRate: number;
    averageTicket: number;
};
