'use client';

import { useCallback, useState } from 'react';
import type { ActivityEntry, ServiceHealth } from '../components/types';

const SEED_SERVICES: ServiceHealth[] = [
    { id: 'svc-api', name: 'API Gateway', status: 'healthy', uptime: '99.99%', latencyMs: 124 },
    { id: 'svc-pay', name: 'Payment Service', status: 'warning', uptime: '99.71%', latencyMs: 312 },
    { id: 'svc-db', name: 'Primary Database', status: 'healthy', uptime: '99.97%', latencyMs: 86 },
    { id: 'svc-cache', name: 'Cache Layer', status: 'critical', uptime: '97.42%', latencyMs: 540 },
];

const SEED_ACTIVITY: ActivityEntry[] = [
    {
        id: 'act-1',
        severity: 'critical',
        title: 'Cache layer memory pressure',
        description: 'Memory usage above 90%.',
        timestamp: '2 min ago',
    },
    {
        id: 'act-2',
        severity: 'warning',
        title: 'Payment service latency spike',
        description: 'p95 latency above 300ms for 10 minutes.',
        timestamp: '15 min ago',
    },
    {
        id: 'act-3',
        severity: 'info',
        title: 'Daily backup completed',
        description: 'Database backup completed successfully.',
        timestamp: '1 hr ago',
    },
];

export type MonitoringSummary = {
    healthyCount: number;
    warningCount: number;
    criticalCount: number;
    averageLatencyMs: number;
};

export function useMonitoring() {
    const [services, setServices] = useState<ServiceHealth[]>(SEED_SERVICES);
    const [activity] = useState<ActivityEntry[]>(SEED_ACTIVITY);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const summary: MonitoringSummary = {
        healthyCount: services.filter((service) => service.status === 'healthy').length,
        warningCount: services.filter((service) => service.status === 'warning').length,
        criticalCount: services.filter((service) => service.status === 'critical').length,
        averageLatencyMs: Math.round(
            services.reduce((sum, service) => sum + service.latencyMs, 0) / services.length,
        ),
    };

    const refresh = useCallback(async () => {
        setIsRefreshing(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 350));
            setServices((prev) =>
                prev.map((service) => ({
                    ...service,
                    latencyMs: Math.max(60, service.latencyMs + Math.round((Math.random() - 0.5) * 60)),
                })),
            );
        } finally {
            setIsRefreshing(false);
        }
    }, []);

    return { services, activity, summary, isRefreshing, refresh };
}
