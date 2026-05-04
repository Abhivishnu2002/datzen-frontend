'use client';

import { useCallback, useMemo, useState } from 'react';
import type {
    PaymentMethodSlice,
    ReportRange,
    ReportSummary,
    TopCustomer,
} from '../components/types';

const DATA_BY_RANGE: Record<
    ReportRange,
    {
        summary: ReportSummary;
        methods: PaymentMethodSlice[];
        topCustomers: TopCustomer[];
    }
> = {
    '7d': {
        summary: { revenue: 142000, transactions: 86, successRate: 96.5, averageTicket: 1651 },
        methods: [
            { method: 'UPI', percentage: 70, amount: 99400 },
            { method: 'Cards', percentage: 22, amount: 31240 },
            { method: 'Net Banking', percentage: 6, amount: 8520 },
            { method: 'Wallets', percentage: 2, amount: 2840 },
        ],
        topCustomers: [
            { email: 'enterprise@company.com', transactions: 14, amount: 38500 },
            { email: 'business@startup.in', transactions: 9, amount: 21400 },
            { email: 'customer@domain.com', transactions: 7, amount: 16200 },
        ],
    },
    '30d': {
        summary: { revenue: 612000, transactions: 348, successRate: 94.8, averageTicket: 1758 },
        methods: [
            { method: 'UPI', percentage: 65, amount: 397800 },
            { method: 'Cards', percentage: 25, amount: 153000 },
            { method: 'Net Banking', percentage: 8, amount: 48960 },
            { method: 'Wallets', percentage: 2, amount: 12240 },
        ],
        topCustomers: [
            { email: 'enterprise@company.com', transactions: 45, amount: 125000 },
            { email: 'business@startup.in', transactions: 32, amount: 98000 },
            { email: 'customer@domain.com', transactions: 28, amount: 76000 },
            { email: 'user@business.org', transactions: 22, amount: 54000 },
        ],
    },
    '90d': {
        summary: { revenue: 1840000, transactions: 1042, successRate: 95.2, averageTicket: 1766 },
        methods: [
            { method: 'UPI', percentage: 64, amount: 1177600 },
            { method: 'Cards', percentage: 26, amount: 478400 },
            { method: 'Net Banking', percentage: 7, amount: 128800 },
            { method: 'Wallets', percentage: 3, amount: 55200 },
        ],
        topCustomers: [
            { email: 'enterprise@company.com', transactions: 132, amount: 365000 },
            { email: 'business@startup.in', transactions: 96, amount: 274000 },
            { email: 'customer@domain.com', transactions: 78, amount: 198000 },
            { email: 'user@business.org', transactions: 65, amount: 162000 },
        ],
    },
};

export function useReports() {
    const [range, setRange] = useState<ReportRange>('30d');
    const [isExporting, setIsExporting] = useState(false);

    const data = useMemo(() => DATA_BY_RANGE[range], [range]);

    const exportReport = useCallback(async () => {
        setIsExporting(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 600));
        } finally {
            setIsExporting(false);
        }
    }, []);

    return {
        range,
        setRange,
        summary: data.summary,
        methods: data.methods,
        topCustomers: data.topCustomers,
        isExporting,
        exportReport,
    };
}
