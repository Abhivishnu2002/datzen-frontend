import { TransactionRow } from './TransactionRow';
import type { Transaction } from './types';

type TransactionsTableProps = {
    transactions: Transaction[];
};

export function TransactionsTable({ transactions }: TransactionsTableProps) {
    if (transactions.length === 0) {
        return (
            <div className="px-5 py-12 text-center">
                <p className="text-sm font-medium text-slate-900">No transactions found</p>
                <p className="mt-1 text-xs text-slate-500">
                    Try adjusting search or filters.
                </p>
            </div>
        );
    }

    return (
        <ul>
            {transactions.map((transaction) => (
                <TransactionRow key={transaction.id} transaction={transaction} />
            ))}
        </ul>
    );
}
