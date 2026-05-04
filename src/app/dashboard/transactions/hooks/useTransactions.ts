'use client';

import { useCallback, useMemo, useState } from 'react';
import type { Transaction, TransactionStatus } from '../components/types';

const SEED: Transaction[] = [
    {
        id: 'pay_RCvT4mTHyHvH6k',
        amount: 2000,
        fee: 40,
        status: 'failed',
        method: 'UPI',
        customerEmail: 'customer@example.com',
        description: 'Product Purchase',
        createdAt: '2025-12-18T14:30:00.000Z',
    },
    {
        id: 'pay_RCaFHe3KuHa0n',
        amount: 20000,
        fee: 400,
        status: 'success',
        method: 'Card',
        customerEmail: 'john.doe@email.com',
        description: 'Service Payment',
        createdAt: '2025-12-17T16:45:00.000Z',
    },
    {
        id: 'pay_RAy7ZmVqHFqaRk',
        amount: 15000,
        fee: 300,
        status: 'pending',
        method: 'Net Banking',
        customerEmail: 'jane.smith@email.com',
        description: 'Subscription Renewal',
        createdAt: '2025-12-17T12:20:00.000Z',
    },
    {
        id: 'pay_RAcCvJ2GvHe1e',
        amount: 5000,
        fee: 100,
        status: 'failed',
        method: 'UPI',
        customerEmail: 'user@domain.com',
        description: 'Order Payment',
        createdAt: '2025-12-16T09:15:00.000Z',
    },
    {
        id: 'pay_R9mHmHHqGHe',
        amount: 10000,
        fee: 200,
        status: 'success',
        method: 'Wallet',
        customerEmail: 'customer2@example.com',
        description: 'Bill Payment',
        createdAt: '2025-12-16T11:30:00.000Z',
    },
];

export type TransactionFilter = TransactionStatus | 'all';

export function useTransactions() {
    const [transactions] = useState<Transaction[]>(SEED);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<TransactionFilter>('all');
    const [isRefreshing, setIsRefreshing] = useState(false);

    const filtered = useMemo(() => {
        const term = search.trim().toLowerCase();
        return transactions.filter((transaction) => {
            const matchesSearch =
                term.length === 0 ||
                transaction.id.toLowerCase().includes(term) ||
                transaction.customerEmail.toLowerCase().includes(term);
            const matchesFilter = filter === 'all' || transaction.status === filter;
            return matchesSearch && matchesFilter;
        });
    }, [transactions, search, filter]);

    const refresh = useCallback(async () => {
        setIsRefreshing(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 350));
        } finally {
            setIsRefreshing(false);
        }
    }, []);

    return {
        transactions: filtered,
        totalCount: transactions.length,
        search,
        setSearch,
        filter,
        setFilter,
        isRefreshing,
        refresh,
    };
}
