import { CheckCircle2, Clock, IndianRupee, TrendingUp } from 'lucide-react';
import { formatCurrency } from './helpers';

export type DashboardStatsValue = {
    totalOrders: number;
    totalVolume: number;
    paid: number;
    pending: number;
};

type DashboardStatsProps = {
    stats: DashboardStatsValue;
};

export function DashboardStats({ stats }: DashboardStatsProps) {
    const cards = [
        { label: 'Total Orders', value: stats.totalOrders, Icon: TrendingUp },
        { label: 'Total Volume', value: formatCurrency(stats.totalVolume), Icon: IndianRupee },
        { label: 'Paid', value: stats.paid, Icon: CheckCircle2 },
        { label: 'Pending', value: stats.pending, Icon: Clock },
    ];

    return (
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {cards.map(({ label, value, Icon }) => (
                <article
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-[var(--color-primary)]">
                        <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                            {label}
                        </p>
                        <p className="mt-0.5 truncate text-base font-semibold text-slate-900 sm:text-lg">
                            {value}
                        </p>
                    </div>
                </article>
            ))}
        </section>
    );
}
