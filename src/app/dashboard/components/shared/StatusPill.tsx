export type StatusTone = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

type StatusPillProps = {
    label: string;
    tone: StatusTone;
};

const TONE_CLASSES: Record<StatusTone, string> = {
    success: 'bg-emerald-50/80 text-emerald-700 border-emerald-200/70',
    warning: 'bg-amber-50/80 text-amber-700 border-amber-200/70',
    danger: 'bg-red-50/80 text-red-700 border-red-200/70',
    info: 'bg-sky-50/80 text-sky-700 border-sky-200/70',
    neutral: 'bg-slate-50/90 text-slate-700 border-slate-200/80',
};

const DOT_CLASSES: Record<StatusTone, string> = {
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    danger: 'bg-red-500',
    info: 'bg-sky-500',
    neutral: 'bg-slate-400',
};

export function StatusPill({ label, tone }: StatusPillProps) {
    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold capitalize ${TONE_CLASSES[tone]}`}
        >
            <span className={`h-1.5 w-1.5 rounded-full ${DOT_CLASSES[tone]}`} />
            {label}
        </span>
    );
}
