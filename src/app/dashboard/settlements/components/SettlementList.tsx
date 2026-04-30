import { SettlementItem } from './SettlementItem';
import type { Settlement } from './types';

type SettlementListProps = {
    settlements: Settlement[];
};

export function SettlementList({ settlements }: SettlementListProps) {
    if (settlements.length === 0) {
        return (
            <div className="px-5 py-12 text-center">
                <p className="text-sm font-medium text-slate-900">No settlements found</p>
                <p className="mt-1 text-xs text-slate-500">
                    Try adjusting the filter to see more results.
                </p>
            </div>
        );
    }

    return (
        <ul>
            {settlements.map((settlement) => (
                <SettlementItem key={settlement.id} settlement={settlement} />
            ))}
        </ul>
    );
}
