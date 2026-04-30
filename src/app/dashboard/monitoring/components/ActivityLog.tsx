import { StatusPill, type StatusTone } from '../../components/shared/StatusPill';
import type { ActivityEntry } from './types';

const SEVERITY_TONE: Record<ActivityEntry['severity'], StatusTone> = {
    info: 'info',
    warning: 'warning',
    critical: 'danger',
};

type ActivityLogProps = {
    entries: ActivityEntry[];
};

export function ActivityLog({ entries }: ActivityLogProps) {
    if (entries.length === 0) {
        return (
            <p className="px-1 text-sm text-slate-500">No recent activity.</p>
        );
    }

    return (
        <ul className="divide-y divide-slate-100">
            {entries.map((entry) => (
                <li key={entry.id} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                    <StatusPill label={entry.severity} tone={SEVERITY_TONE[entry.severity]} />
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-slate-900">
                            {entry.title}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-500">{entry.description}</p>
                    </div>
                    <span className="shrink-0 text-[11px] text-slate-500">{entry.timestamp}</span>
                </li>
            ))}
        </ul>
    );
}
