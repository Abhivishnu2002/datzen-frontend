import type { LucideIcon } from 'lucide-react';

type StatCardProps = {
    label: string;
    value: string | number;
    Icon?: LucideIcon;
    hint?: string;
    tone?: 'default' | 'positive' | 'warning' | 'critical';
};

const TONE: Record<NonNullable<StatCardProps['tone']>, string> = {
    default: 'text-[var(--color-primary)] bg-slate-50',
    positive: 'text-emerald-600 bg-emerald-50',
    warning: 'text-amber-600 bg-amber-50',
    critical: 'text-red-600 bg-red-50',
};

export function StatCard({ label, value, Icon, hint, tone = 'default' }: StatCardProps) {
    return (
        <article className="group flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-transform duration-200 hover:-translate-y-0.5">
            {Icon && (
                <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${TONE[tone]} transition-colors group-hover:bg-white`}
                >
                    <Icon className="h-4 w-4" />
                </div>
            )}
            <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                    {label}
                </p>
                <p className="mt-0.5 truncate text-base font-semibold text-slate-900 sm:text-lg">
                    {value}
                </p>
                {hint && <p className="mt-0.5 text-[11px] text-slate-500">{hint}</p>}
            </div>
        </article>
    );
}
