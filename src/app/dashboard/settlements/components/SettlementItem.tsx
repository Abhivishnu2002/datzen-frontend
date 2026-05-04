import { formatCurrency, formatDate } from '../../components/helpers';
import { StatusPill, type StatusTone } from '../../components/shared/StatusPill';
import type { Settlement, SettlementStatus } from './types';

const STATUS_TONE: Record<SettlementStatus, StatusTone> = {
    settled: 'success',
    processing: 'warning',
    failed: 'danger',
};

type SettlementItemProps = {
    settlement: Settlement;
};

export function SettlementItem({ settlement }: SettlementItemProps) {
    return (
        <li className="grid grid-cols-2 gap-3 border-b border-slate-100 px-5 py-4 last:border-b-0 sm:grid-cols-6 sm:items-center">
            <div className="col-span-2 sm:col-span-1">
                <p className="font-mono text-xs text-slate-700">{settlement.id}</p>
                <p className="mt-0.5 text-[11px] text-slate-500">{formatDate(settlement.settlementDate)}</p>
            </div>
            <div>
                <p className="text-xs text-slate-500">Gross</p>
                <p className="text-sm font-medium text-slate-900">
                    {formatCurrency(settlement.grossAmount)}
                </p>
            </div>
            <div>
                <p className="text-xs text-slate-500">Fee</p>
                <p className="text-sm text-slate-700">−{formatCurrency(settlement.fee)}</p>
            </div>
            <div>
                <p className="text-xs text-slate-500">Net</p>
                <p className="text-sm font-semibold text-emerald-700">
                    {formatCurrency(settlement.netAmount)}
                </p>
            </div>
            <div>
                <p className="text-xs text-slate-500">Txns</p>
                <p className="text-sm text-slate-700">{settlement.transactionCount}</p>
            </div>
            <div className="flex items-center justify-between gap-2 sm:justify-end">
                <span className="font-mono text-[11px] text-slate-500">{settlement.utr}</span>
                <StatusPill label={settlement.status} tone={STATUS_TONE[settlement.status]} />
            </div>
        </li>
    );
}
