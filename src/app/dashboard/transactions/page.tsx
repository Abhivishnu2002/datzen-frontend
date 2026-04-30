'use client';

import { Download, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '../components/shared/PageHeader';
import { SectionCard } from '../components/shared/SectionCard';
import { FiltersBar } from '../components/shared/FiltersBar';
import { TransactionsTable } from './components/TransactionsTable';
import { useTransactions, type TransactionFilter } from './hooks/useTransactions';

const FILTER_OPTIONS = [
    { value: 'all' as const, label: 'All status' },
    { value: 'success' as const, label: 'Success' },
    { value: 'pending' as const, label: 'Pending' },
    { value: 'failed' as const, label: 'Failed' },
];

export default function TransactionsPage() {
    const {
        transactions,
        totalCount,
        search,
        setSearch,
        filter,
        setFilter,
        isRefreshing,
        refresh,
    } = useTransactions();

    return (
        <section className="px-4 py-8 sm:px-6 md:px-8 md:py-10">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
                <PageHeader
                    eyebrow="Activity"
                    title="Transactions"
                    description="Search and review all payment activity."
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

                <FiltersBar<TransactionFilter>
                    searchValue={search}
                    onSearchChange={setSearch}
                    searchPlaceholder="Search by transaction ID or customer email"
                    filterValue={filter}
                    onFilterChange={setFilter}
                    filterOptions={FILTER_OPTIONS}
                />

                <SectionCard
                    title="All Transactions"
                    description={`${transactions.length} of ${totalCount} matching`}
                    bodyClassName="p-0"
                >
                    <TransactionsTable transactions={transactions} />
                </SectionCard>
            </div>
        </section>
    );
}
