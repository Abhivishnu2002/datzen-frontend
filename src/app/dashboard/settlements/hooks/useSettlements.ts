'use client';

import { useCallback, useMemo, useState } from 'react';
import type { Settlement, SettlementStatus } from '../components/types';

const SEED: Settlement[] = [
    {
        id: 'setl_001',
        grossAmount: 45000,
        fee: 900,
        netAmount: 44100,
        status: 'settled',
        settlementDate: '2025-12-19',
        transactionCount: 15,
        utr: 'UTR123456789',
    },
    {
        id: 'setl_002',
        grossAmount: 32000,
        fee: 640,
        netAmount: 31360,
        status: 'processing',
        settlementDate: '2025-12-18',
        transactionCount: 12,
        utr: 'Pending',
    },
    {
        id: 'setl_003',
        grossAmount: 28500,
        fee: 570,
        netAmount: 27930,
        status: 'settled',
        settlementDate: '2025-12-17',
        transactionCount: 8,
        utr: 'UTR987654321',
    },
    {
        id: 'setl_004',
        grossAmount: 15000,
        fee: 300,
        netAmount: 14700,
        status: 'failed',
        settlementDate: '2025-12-16',
        transactionCount: 5,
        utr: 'Failed',
    },
];

export type SettlementFilter = SettlementStatus | 'all';

export type SettlementsSummary = {
    totalSettled: number;
    pending: number;
    fees: number;
};

export function useSettlements() {
    const [settlements] = useState<Settlement[]>(SEED);
    const [filter, setFilter] = useState<SettlementFilter>('all');
    const [isRefreshing, setIsRefreshing] = useState(false);

    const filtered = useMemo(
        () =>
            filter === 'all'
                ? settlements
                : settlements.filter((settlement) => settlement.status === filter),
        [filter, settlements],
    );

    const summary: SettlementsSummary = useMemo(() => {
        const totalSettled = settlements
            .filter((settlement) => settlement.status === 'settled')
            .reduce((sum, settlement) => sum + settlement.netAmount, 0);
        const pending = settlements
            .filter((settlement) => settlement.status === 'processing')
            .reduce((sum, settlement) => sum + settlement.netAmount, 0);
        const fees = settlements.reduce((sum, settlement) => sum + settlement.fee, 0);
        return { totalSettled, pending, fees };
    }, [settlements]);

    const refresh = useCallback(async () => {
        setIsRefreshing(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 350));
        } finally {
            setIsRefreshing(false);
        }
    }, []);

    return {
        settlements: filtered,
        filter,
        setFilter,
        summary,
        isRefreshing,
        refresh,
    };
}
