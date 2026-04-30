import { Activity, AlertTriangle, CheckCircle2, Gauge } from 'lucide-react';
import { StatCard } from '../../components/shared/StatCard';
import type { MonitoringSummary } from '../hooks/useMonitoring';

type MetricsCardsProps = {
    summary: MonitoringSummary;
};

export function MetricsCards({ summary }: MetricsCardsProps) {
    return (
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard
                label="Healthy"
                value={summary.healthyCount}
                Icon={CheckCircle2}
                tone="positive"
            />
            <StatCard
                label="Warning"
                value={summary.warningCount}
                Icon={AlertTriangle}
                tone="warning"
            />
            <StatCard
                label="Critical"
                value={summary.criticalCount}
                Icon={Activity}
                tone="critical"
            />
            <StatCard
                label="Avg Latency"
                value={`${summary.averageLatencyMs}ms`}
                Icon={Gauge}
                hint="across services"
            />
        </section>
    );
}

import type { ServiceHealth } from './types';
import { StatusPill, type StatusTone } from '../../components/shared/StatusPill';

const SERVICE_TONE: Record<ServiceHealth['status'], StatusTone> = {
    healthy: 'success',
    warning: 'warning',
    critical: 'danger',
};

type ServicesGridProps = {
    services: ServiceHealth[];
};

export function ServicesGrid({ services }: ServicesGridProps) {
    return (
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {services.map((service) => (
                <li
                    key={service.id}
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                >
                    <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900">
                            {service.name}
                        </p>
                        <p className="mt-1 text-[11px] text-slate-500">
                            Uptime {service.uptime} · {service.latencyMs}ms p95
                        </p>
                    </div>
                    <StatusPill label={service.status} tone={SERVICE_TONE[service.status]} />
                </li>
            ))}
        </ul>
    );
}
