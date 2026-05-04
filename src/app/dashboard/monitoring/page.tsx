'use client';

import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '../components/shared/PageHeader';
import { SectionCard } from '../components/shared/SectionCard';
import { ActivityLog } from './components/ActivityLog';
import { MetricsCards, ServicesGrid } from './components/MetricsCards';
import { useMonitoring } from './hooks/useMonitoring';

export default function MonitoringPage() {
    const { services, activity, summary, isRefreshing, refresh } = useMonitoring();

    return (
        <section className="px-4 py-8 sm:px-6 md:px-8 md:py-10">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
                <PageHeader
                    eyebrow="Operations"
                    title="System Monitoring"
                    description="Service health and recent activity at a glance."
                    actions={
                        <Button size="sm" variant="outline" onClick={refresh} isLoading={isRefreshing}>
                            <RefreshCw className="mr-2 h-3.5 w-3.5" />
                            Refresh
                        </Button>
                    }
                />

                <MetricsCards summary={summary} />

                <SectionCard
                    title="Services"
                    description="Live status of core infrastructure components."
                >
                    <ServicesGrid services={services} />
                </SectionCard>

                <SectionCard
                    title="Recent Activity"
                    description="Alerts and events from the last 24 hours."
                >
                    <ActivityLog entries={activity} />
                </SectionCard>
            </div>
        </section>
    );
}
