import type { ReactNode } from 'react';

type SectionCardProps = {
    title: string;
    description?: string;
    actions?: ReactNode;
    children: ReactNode;
    bodyClassName?: string;
};

export function SectionCard({
    title,
    description,
    actions,
    children,
    bodyClassName,
}: SectionCardProps) {
    return (
        <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur">
            <header className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50/50 px-5 py-4">
                <div>
                    <h2 className="text-base font-semibold text-slate-900">{title}</h2>
                    {description && (
                        <p className="mt-0.5 text-xs text-slate-600">{description}</p>
                    )}
                </div>
                {actions && <div className="flex items-center gap-2">{actions}</div>}
            </header>
            <div className={bodyClassName ?? 'p-5'}>{children}</div>
        </section>
    );
}
