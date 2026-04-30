'use client';

import type { ReportRange } from './types';

const OPTIONS: { value: ReportRange; label: string }[] = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' },
];

type ReportsFilterProps = {
    range: ReportRange;
    onRangeChange: (range: ReportRange) => void;
};

export function ReportsFilter({ range, onRangeChange }: ReportsFilterProps) {
    return (
        <div className="inline-flex items-center rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm">
            {OPTIONS.map((option) => {
                const active = option.value === range;
                return (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => onRangeChange(option.value)}
                        className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                            active
                                ? 'bg-slate-900 text-white'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
}
