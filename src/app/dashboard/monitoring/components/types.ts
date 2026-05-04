export type ServiceStatus = 'healthy' | 'warning' | 'critical';

export type ServiceHealth = {
    id: string;
    name: string;
    status: ServiceStatus;
    uptime: string;
    latencyMs: number;
};

export type ActivityEntry = {
    id: string;
    severity: 'info' | 'warning' | 'critical';
    title: string;
    description: string;
    timestamp: string;
};
