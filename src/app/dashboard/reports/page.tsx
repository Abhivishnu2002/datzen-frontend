'use client';

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '../components/shared/PageHeader';
import { SectionCard } from '../components/shared/SectionCard';
import {
    PaymentMethodsBreakdown,
    ReportsSummary,
    TopCustomersList,
} from './components/ReportsSummary';
import { ReportsFilter } from './components/ReportsFilter';
import { useReports } from './hooks/useReports';

export default function ReportsPage() {
    const {
        range,
        setRange,
        summary,
        methods,
        topCustomers,
        isExporting,
        exportReport,
    } = useReports();

    return (
        <section className="px-4 py-8 sm:px-6 md:px-8 md:py-10">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
                <PageHeader
                    eyebrow="Insights"
                    title="Reports & Analytics"
                    description="Revenue, success rate, and customer breakdowns."
                    actions={
                        <>
                            <ReportsFilter range={range} onRangeChange={setRange} />
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={exportReport}
                                isLoading={isExporting}
                            >
                                <Download className="mr-2 h-3.5 w-3.5" />
                                Export
                            </Button>
                        </>
                    }
                />

                <ReportsSummary summary={summary} />

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <SectionCard
                        title="Payment Methods"
                        description="Distribution by payment instrument."
                    >
                        <PaymentMethodsBreakdown methods={methods} />
                    </SectionCard>

                    <SectionCard
                        title="Top Customers"
                        description="Customers ranked by total volume."
                    >
                        <TopCustomersList customers={topCustomers} />
                    </SectionCard>
                </div>
            </div>
        </section>
    );
}
