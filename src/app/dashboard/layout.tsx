import type { ReactNode } from 'react';
import { DashboardNavbar } from './components/DashboardNavbar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100/70">
            <DashboardNavbar />
            <main>{children}</main>
        </div>
    );
}
