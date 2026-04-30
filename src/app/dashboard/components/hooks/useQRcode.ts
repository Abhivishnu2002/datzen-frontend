'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Payment } from '../helpers';

export type QRPayload = {
    paymentId: string;
    amount: number;
    name: string;
    status: 'pending' | 'paid';
};

type StartPollingOptions = {
    onSettled?: (paymentId: string) => void;
};

export function useQRCode() {
    const [payload, setPayload] = useState<QRPayload | null>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const stopPolling = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const openQR = useCallback(
        (payment: Payment, options: StartPollingOptions = {}) => {
            stopPolling();

            setPayload({
                paymentId: payment.id,
                amount: payment.amount,
                name: payment.name,
                status: payment.status,
            });

            intervalRef.current = setInterval(() => {
                setPayload((prev) => {
                    if (!prev) return prev;
                    if (prev.status === 'paid') return prev;
                    if (Math.random() > 0.65) {
                        options.onSettled?.(prev.paymentId);
                        stopPolling();
                        return { ...prev, status: 'paid' };
                    }
                    return prev;
                });
            }, 2500);
        },
        [stopPolling],
    );

    const closeQR = useCallback(() => {
        stopPolling();
        setPayload(null);
    }, [stopPolling]);

    useEffect(() => {
        return () => stopPolling();
    }, [stopPolling]);

    return {
        qr: payload,
        isOpen: payload !== null,
        openQR,
        closeQR,
    };
}
