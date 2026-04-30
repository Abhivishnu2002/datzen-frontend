import { formatCurrency, formatDate } from '../../components/helpers';
import { StatusPill, type StatusTone } from '../../components/shared/StatusPill';
import type { Transaction, TransactionStatus } from './types';

const STATUS_TONE: Record<TransactionStatus, StatusTone> = {
    success: 'success',
    pending: 'warning',
    failed: 'danger',
};

type TransactionRowProps = {
    transaction: Transaction;
};

export function TransactionRow({ transaction }: TransactionRowProps) {
    return (
        <li className="grid grid-cols-2 gap-3 border-b border-slate-100 px-5 py-4 last:border-b-0 sm:grid-cols-6 sm:items-center">
            <div className="col-span-2 sm:col-span-2 min-w-0">
                <p className="truncate font-mono text-xs text-slate-700">{transaction.id}</p>
                <p className="mt-0.5 truncate text-[11px] text-slate-500">
                    {transaction.customerEmail}
                </p>
            </div>
            <div>
                <p className="text-xs text-slate-500">Amount</p>
                <p className="text-sm font-semibold text-slate-900">
                    {formatCurrency(transaction.amount)}
                </p>
            </div>
            <div>
                <p className="text-xs text-slate-500">Method</p>
                <p className="text-sm text-slate-700">{transaction.method}</p>
            </div>
            <div>
                <p className="text-xs text-slate-500">Date</p>
                <p className="text-sm text-slate-700">{formatDate(transaction.createdAt)}</p>
            </div>
            <div className="flex items-center justify-between sm:justify-end">
                <StatusPill
                    label={transaction.status}
                    tone={STATUS_TONE[transaction.status]}
                />
            </div>
        </li>
    );
}
