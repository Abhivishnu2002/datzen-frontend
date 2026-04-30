'use client';

import { Loader2, Phone, RefreshCw, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import {
    Avatar,
    StatusBadge,
    formatCurrency,
    formatDate,
    truncId,
    type Payment,
} from './helpers';

type PaymentHistoryListProps = {
    payments: Payment[];
    isRefreshing: boolean;
    checkingId: string | null;
    onRefresh: () => void;
    onCheckStatus: (paymentId: string) => void;
};

export function PaymentHistoryList({
    payments,
    isRefreshing,
    checkingId,
    onRefresh,
    onCheckStatus,
}: PaymentHistoryListProps) {
    return (
        <section className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
            <header className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50/50 px-5 py-4">
                <div>
                    <h2 className="text-base font-semibold text-slate-900">Payment History</h2>
                    <p className="text-xs text-slate-500">Recent transactions · latest first</p>
                </div>
                <Button size="sm" variant="outline" onClick={onRefresh} isLoading={isRefreshing}>
                    <RefreshCw className="mr-2 h-3.5 w-3.5" />
                    Refresh
                </Button>
            </header>

            {payments.length === 0 ? (
                <EmptyState />
            ) : (
                <ul className="divide-y divide-slate-100">
                    {payments.map((payment) => (
                        <PaymentRow
                            key={payment.id}
                            payment={payment}
                            isChecking={checkingId === payment.id}
                            onCheckStatus={() => onCheckStatus(payment.id)}
                        />
                    ))}
                </ul>
            )}

            {payments.length > 0 && (
                <footer className="border-t border-slate-200 px-5 py-3">
                    <p className="text-xs text-slate-500">
                        Showing <span className="font-medium text-slate-900">{payments.length}</span>{' '}
                        transaction{payments.length === 1 ? '' : 's'}
                    </p>
                </footer>
            )}
        </section>
    );
}

type PaymentRowProps = {
    payment: Payment;
    isChecking: boolean;
    onCheckStatus: () => void;
};

function PaymentRow({ payment, isChecking, onCheckStatus }: PaymentRowProps) {
    return (
        <li className="px-5 py-4 transition-colors hover:bg-slate-50">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 items-start gap-3">
                    <Avatar name={payment.name} />
                    <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                            <p className="truncate text-sm font-medium text-slate-900">
                                {payment.name || 'Unknown Customer'}
                            </p>
                            <StatusBadge status={payment.status} />
                        </div>
                        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-500">
                            <span className="inline-flex items-center gap-1">
                                <Phone className="h-3 w-3" />
                                {payment.phone || '—'}
                            </span>
                            <span className="inline-flex items-center gap-1 font-mono">
                                {truncId(payment.id, 18)}
                            </span>
                            <span>{formatDate(payment.createdAt)}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
                    <p className="text-base font-semibold text-slate-900">
                        {formatCurrency(payment.amount)}
                    </p>
                    <button
                        type="button"
                        onClick={onCheckStatus}
                        disabled={isChecking}
                        title="Check status"
                        className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isChecking ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        ) : (
                            <ShieldCheck className="h-3.5 w-3.5" />
                        )}
                        Status
                    </button>
                </div>
            </div>
        </li>
    );
}

function EmptyState() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-2 px-5 py-16 text-center">
            <p className="text-sm font-medium text-slate-900">No transactions yet</p>
            <p className="text-xs text-slate-500">Create a payment to get started.</p>
        </div>
    );
}
