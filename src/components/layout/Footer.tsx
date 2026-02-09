'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const footerLinks = {
    platform: {
        title: 'Platform',
        links: [
            { label: 'Fraud Detection', href: '#' },
            { label: 'KYC & Onboarding', href: '#' },
            { label: 'Payment Orchestration', href: '#' },
            { label: 'Risk Intelligence', href: '#' },
        ],
    },
    company: {
        title: 'Company',
        links: [
            { label: 'About Us', href: '/about' },
            { label: 'Careers', href: '#' },
            { label: 'Contact', href: '#' },
            { label: 'Partners', href: '#' },
        ],
    },
    resources: {
        title: 'Resources',
        links: [
            { label: 'Documentation', href: '#' },
            { label: 'API Reference', href: '#' },
            { label: 'Compliance Guide', href: '#' },
            { label: 'Case Studies', href: '#' },
        ],
    },
};

export function Footer() {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    if (pathname === '/login' || pathname === '/signup') return null;

    return (
        // This step is just a verification, but I can use replace to tweak the logo styling if needed.
        // Actually, I'll add a subtle gradient border to the top to make it pop more.
        <footer className="bg-slate-950 text-slate-300 py-20 border-t border-slate-800 relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-50" />
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-16">
                    {/* Brand Column */}
                    <div className="lg:w-1/3">
                        <Link href="/" className="inline-block mb-8">
                            <div className="relative h-12 w-32 rounded-xl overflow-hidden bg-white p-1">
                                <Image
                                    src="/assets/logo.png"
                                    alt="DATZEN"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-sm mb-8">
                            Enterprise-grade risk intelligence and payment infrastructure for the modern digital economy.
                        </p>

                        {/* Certifications / Badges Placeholder - Adds 'Premium' feel */}
                        <div className="flex gap-4 items-center">
                            <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-medium text-slate-500">
                                SOC2 Type II
                            </div>
                            <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-medium text-slate-500">
                                ISO 27001
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
                        {Object.values(footerLinks).map((section) => (
                            <div key={section.title}>
                                <h4 className="text-white font-semibold mb-6 text-sm tracking-wide uppercase opacity-90">
                                    {section.title}
                                </h4>
                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-slate-400 hover:text-[var(--color-primary)] transition-colors duration-200"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {currentYear} DATZEN Technologies. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Security</Link>
                        <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
