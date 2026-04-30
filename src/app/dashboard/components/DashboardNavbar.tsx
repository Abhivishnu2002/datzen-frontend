'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const NAV_ITEMS = [
    { href: '/dashboard', label: 'Overview' },
    { href: '/dashboard/transactions', label: 'Transactions' },
    { href: '/dashboard/settlements', label: 'Settlements' },
    { href: '/dashboard/reports', label: 'Reports' },
    { href: '/dashboard/monitoring', label: 'Monitoring' },
];

export function DashboardNavbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (href: string) =>
        href === '/dashboard' ? pathname === '/dashboard' : pathname?.startsWith(href);

    return (
        <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
                <Link href="/dashboard" className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/logo.png" alt="DATZEN" className="h-8 w-auto rounded-md" />
                    <span className="hidden text-sm font-semibold text-slate-900 sm:inline">
                        Merchant Console
                    </span>
                </Link>

                <nav className="hidden items-center gap-1 rounded-xl border border-slate-200/80 bg-white/80 p-1 shadow-sm md:flex">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                                isActive(item.href)
                                    ? 'bg-slate-900 text-white shadow-sm'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="hidden md:inline-flex"
                    >
                        Logout
                    </Button>
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        onClick={() => setOpen((value) => !value)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50 md:hidden"
                    >
                        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="border-t border-slate-200 bg-white/95 shadow-sm md:hidden">
                    <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                    isActive(item.href)
                                        ? 'bg-slate-100 text-slate-900'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
