'use client';

import { Banknote, Clock, Download, IndianRupee, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '../components/helpers';
import { PageHeader } from '../components/shared/PageHeader';
import { SectionCard } from '../components/shared/SectionCard';
import { StatCard } from '../components/shared/StatCard';
import { SettlementList } from './components/SettlementList';
import { useSettlements, type SettlementFilter } from './hooks/useSettlements';

const FILTERS: { value: SettlementFilter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'settled', label: 'Settled' },
    { value: 'processing', label: 'Processing' },
    { value: 'failed', label: 'Failed' },
];

export default function SettlementsPage() {
    const { settlements, filter, setFilter, summary, isRefreshing, refresh } = useSettlements();

    return (
        <section className="px-4 py-8 sm:px-6 md:px-8 md:py-10">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
                <PageHeader
                    eyebrow="Payouts"
                    title="Settlements"
                    description="Track payouts to your registered bank account."
                    actions={
                        <>
                            <Button size="sm" variant="outline" onClick={refresh} isLoading={isRefreshing}>
                                <RefreshCw className="mr-2 h-3.5 w-3.5" />
                                Refresh
                            </Button>
                            <Button size="sm" variant="outline">
                                <Download className="mr-2 h-3.5 w-3.5" />
                                Export
                            </Button>
                        </>
                    }
                />

                <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <StatCard
                        label="Total Settled"
                        value={formatCurrency(summary.totalSettled)}
                        Icon={IndianRupee}
                        tone="positive"
                    />
                    <StatCard
                        label="Pending Settlement"
                        value={formatCurrency(summary.pending)}
                        Icon={Clock}
                        tone="warning"
                    />
                    <StatCard
                        label="Total Fees"
                        value={formatCurrency(summary.fees)}
                        Icon={Banknote}
                    />
                </section>

                <SectionCard
                    title="Settlement History"
                    description="Recent settlement records"
                    bodyClassName="p-0"
                    actions={
                        <div className="inline-flex items-center rounded-lg border border-slate-200 bg-white p-0.5">
                            {FILTERS.map((option) => {
                                const active = filter === option.value;
                                return (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => setFilter(option.value)}
                                        className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
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
                    }
                >
                    <SettlementList settlements={settlements} />
                </SectionCard>
            </div>
        </section>
    );
}
