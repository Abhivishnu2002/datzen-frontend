import { Activity, IndianRupee, ListChecks, TrendingUp } from 'lucide-react';
import { StatCard } from '../../components/shared/StatCard';
import { formatCurrency } from '../../components/helpers';
import type { ReportSummary } from './types';

type ReportsSummaryProps = {
    summary: ReportSummary;
};

export function ReportsSummary({ summary }: ReportsSummaryProps) {
    return (
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard
                label="Revenue"
                value={formatCurrency(summary.revenue)}
                Icon={IndianRupee}
            />
            <StatCard
                label="Transactions"
                value={summary.transactions.toLocaleString('en-IN')}
                Icon={Activity}
            />
            <StatCard
                label="Success Rate"
                value={`${summary.successRate.toFixed(1)}%`}
                Icon={TrendingUp}
                tone="positive"
            />
            <StatCard
                label="Avg Ticket"
                value={formatCurrency(summary.averageTicket)}
                Icon={ListChecks}
            />
        </section>
    );
}

type PaymentMethodsBreakdownProps = {
    methods: { method: string; percentage: number; amount: number }[];
};

export function PaymentMethodsBreakdown({ methods }: PaymentMethodsBreakdownProps) {
    return (
        <ul className="space-y-3">
            {methods.map((slice) => (
                <li key={slice.method}>
                    <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-900">{slice.method}</span>
                        <div className="text-right">
                            <span className="font-semibold text-slate-900">{slice.percentage}%</span>
                            <span className="ml-2 text-xs text-slate-500">
                                {formatCurrency(slice.amount)}
                            </span>
                        </div>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                        <div
                            className="h-full rounded-full bg-[var(--color-primary)]"
                            style={{ width: `${slice.percentage}%` }}
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
}

type TopCustomersListProps = {
    customers: { email: string; transactions: number; amount: number }[];
};

export function TopCustomersList({ customers }: TopCustomersListProps) {
    if (customers.length === 0) {
        return <p className="text-sm text-slate-500">No customer data.</p>;
    }
    return (
        <ul className="divide-y divide-slate-100">
            {customers.map((customer, index) => (
                <li
                    key={customer.email}
                    className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                >
                    <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-slate-900">
                            {customer.email}
                        </p>
                        <p className="text-[11px] text-slate-500">
                            {customer.transactions} transactions
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-semibold text-slate-900">
                            {formatCurrency(customer.amount)}
                        </p>
                        <p className="text-[11px] text-slate-500">#{index + 1}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
