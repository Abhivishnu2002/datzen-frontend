import { CheckCircle2, Clock } from 'lucide-react';

export type PaymentStatus = 'paid' | 'pending';

export type Payment = {
    id: string;
    amount: number;
    status: PaymentStatus;
    name: string;
    phone: string;
    email: string;
    createdAt: string;
};

export function formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(value);
}

export function formatDate(iso: string): string {
    if (!iso) return '—';
    return new Date(iso).toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
}

export function truncId(id: string, len = 14): string {
    if (!id) return '—';
    return id.length > len ? `${id.slice(0, len)}…` : id;
}

const STATUS_STYLES: Record<PaymentStatus, { label: string; pill: string; dot: string }> = {
    paid: {
        label: 'Paid',
        pill: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        dot: 'bg-emerald-500',
    },
    pending: {
        label: 'Pending',
        pill: 'bg-amber-50 text-amber-700 border-amber-200',
        dot: 'bg-amber-500',
    },
};

export function StatusBadge({ status }: { status: PaymentStatus }) {
    const cfg = STATUS_STYLES[status];
    const Icon = status === 'paid' ? CheckCircle2 : Clock;
    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${cfg.pill}`}
        >
            <Icon className="h-3 w-3" />
            {cfg.label}
        </span>
    );
}

export function Avatar({ name }: { name: string }) {
    const initials = (name || '?')
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
    return (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50">
            <span className="text-xs font-semibold text-slate-600">{initials}</span>
        </div>
    );
}
