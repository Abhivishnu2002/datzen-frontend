'use client';

import { useCallback, useState } from 'react';
import type { Payment } from '../helpers';

export type CreatePaymentInput = {
    amount: string;
    name: string;
    phone: string;
    email: string;
};

const SEED_PAYMENTS: Payment[] = [
    {
        id: 'PAY-1024',
        amount: 4200,
        status: 'paid',
        name: 'Rohan Mehta',
        phone: '9876543210',
        email: 'rohan@example.com',
        createdAt: new Date(Date.now() - 1000 * 60 * 14).toISOString(),
    },
    {
        id: 'PAY-1023',
        amount: 950,
        status: 'pending',
        name: 'Aanya Sharma',
        phone: '9123456789',
        email: 'aanya@example.com',
        createdAt: new Date(Date.now() - 1000 * 60 * 42).toISOString(),
    },
    {
        id: 'PAY-1022',
        amount: 1800,
        status: 'paid',
        name: 'Vikram Rao',
        phone: '9988776655',
        email: 'vikram@example.com',
        createdAt: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
    },
];

function makeId() {
    return `PAY-${Math.floor(1000 + Math.random() * 9000)}`;
}

export function usePayments() {
    const [payments, setPayments] = useState<Payment[]>(SEED_PAYMENTS);
    const [isCreating, setIsCreating] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [checkingId, setCheckingId] = useState<string | null>(null);

    const refreshPayments = useCallback(async () => {
        setIsRefreshing(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 350));
            setPayments((prev) =>
                [...prev].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
            );
        } finally {
            setIsRefreshing(false);
        }
    }, []);

    const createPayment = useCallback(async (input: CreatePaymentInput): Promise<Payment> => {
        setIsCreating(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 500));
            const next: Payment = {
                id: makeId(),
                amount: Number(input.amount),
                status: 'pending',
                name: input.name.trim(),
                phone: input.phone.trim(),
                email: input.email.trim(),
                createdAt: new Date().toISOString(),
            };
            setPayments((prev) => [next, ...prev]);
            return next;
        } finally {
            setIsCreating(false);
        }
    }, []);

    const checkStatus = useCallback(async (id: string) => {
        setCheckingId(id);
        try {
            await new Promise((resolve) => setTimeout(resolve, 400));
            setPayments((prev) =>
                prev.map((payment) =>
                    payment.id === id && payment.status === 'pending'
                        ? { ...payment, status: 'paid' }
                        : payment,
                ),
            );
        } finally {
            setCheckingId(null);
        }
    }, []);

    return {
        payments,
        isCreating,
        isRefreshing,
        checkingId,
        createPayment,
        refreshPayments,
        checkStatus,
    };
}
