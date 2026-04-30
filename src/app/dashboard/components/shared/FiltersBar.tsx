'use client';

import { Search } from 'lucide-react';
import type { ReactNode } from 'react';

export type FilterOption<T extends string = string> = {
    value: T;
    label: string;
};

type FiltersBarProps<T extends string = string> = {
    searchValue: string;
    searchPlaceholder?: string;
    onSearchChange: (value: string) => void;
    filterValue: T;
    filterOptions: FilterOption<T>[];
    onFilterChange: (value: T) => void;
    rightSlot?: ReactNode;
};

export function FiltersBar<T extends string = string>({
    searchValue,
    searchPlaceholder = 'Search…',
    onSearchChange,
    filterValue,
    filterOptions,
    onFilterChange,
    rightSlot,
}: FiltersBarProps<T>) {
    return (
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] md:flex-row md:items-center">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                    type="search"
                    value={searchValue}
                    placeholder={searchPlaceholder}
                    onChange={(event) => onSearchChange(event.target.value)}
                    className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
                />
            </div>

            <select
                value={filterValue}
                onChange={(event) => onFilterChange(event.target.value as T)}
                className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
            >
                {filterOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {rightSlot && <div className="flex items-center gap-2">{rightSlot}</div>}
        </div>
    );
}
