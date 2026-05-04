import type { ReactNode } from 'react';

type PageHeaderProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    actions?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, actions }: PageHeaderProps) {
    return (
        <header className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-gradient-to-r from-white to-slate-50/70 px-5 py-4 shadow-sm sm:flex-row sm:items-end sm:justify-between">
            <div>
                {eyebrow && (
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                        {eyebrow}
                    </p>
                )}
                <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                    {title}
                </h1>
                {description && (
                    <p className="mt-1 text-sm text-slate-600">{description}</p>
                )}
            </div>
            {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
        </header>
    );
}
