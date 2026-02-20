'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { Menu, X, ChevronDown, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isPlatformOpen, setIsPlatformOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    const { openDemoModal } = useModal();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hide Navbar on Auth pages
    if (pathname === '/login' || pathname === '/signup') return null;

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed z-50 transition-all duration-500 ease-in-out ${scrolled
                ? 'top-4 left-4 right-4 md:left-0 md:right-0 md:max-w-7xl md:mx-auto rounded-2xl bg-white/70 backdrop-blur-xl shadow-lg border border-white/50'
                : 'top-0 left-0 right-0 w-full bg-transparent'
                }`}
        >
            <div className={`container mx-auto px-4 md:px-6 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="rounded-xl overflow-hidden bg-white p-1 transition-all duration-300">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/assets/logo.png"
                                alt="DATZEN"
                                className="h-10 w-auto block"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-2 bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-2xl border border-white/50 shadow-sm mx-auto z-50">
                        <Link href="/#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 px-5 py-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-300">
                            Features
                        </Link>

                        {/* Platform Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 px-5 py-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-300">
                                Platform
                                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] p-6 bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-slate-100"></div>
                                <div className="grid grid-cols-2 gap-8 relative z-10">
                                    {/* Column 1: Fraud Watch */}
                                    <div>
                                        <h4 className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-4">
                                            Fraud Watch
                                        </h4>
                                        <div className="flex flex-col gap-3">
                                            {['Browser Intelligence', 'Device Intelligence', 'IP Intelligence', 'Fraud Risk Management'].map((item) => (
                                                <Link
                                                    key={item}
                                                    href={`/platform/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="text-sm text-slate-600 hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-200"
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Column 2: Payment */}
                                    <div>
                                        <h4 className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-4">
                                            Payment
                                        </h4>
                                        <div className="flex flex-col gap-3">
                                            {['UPI Intent Flow', 'UPI Collect Flow', 'Payouts'].map((item) => (
                                                <Link
                                                    key={item}
                                                    href={`/platform/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="text-sm text-slate-600 hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-200"
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link href="#solutions" className="text-sm font-medium text-slate-600 hover:text-slate-900 px-5 py-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-300">
                            Solutions
                        </Link>
                        {/* Company Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 px-5 py-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-300">
                                Company
                                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                            </button>

                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-slate-100"></div>
                                <div className="flex flex-col gap-2 relative z-10">
                                    <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors">
                                        About Us
                                    </Link>
                                    <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/login" className="text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors">
                            Log in
                        </Link>
                        <Button size="md" className="shadow-lg shadow-blue-500/20 px-6" onClick={openDemoModal}>
                            Request Demo
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 hover:text-slate-900 bg-white/50 rounded-lg"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-xl md:hidden animate-in slide-in-from-top-2 overflow-hidden mx-auto max-w-[calc(100%-2rem)] left-4 right-4">
                    <div className="container mx-auto px-4 py-8 flex flex-col items-center gap-6">
                        <Link
                            href="/#features"
                            className="w-full py-2 text-lg font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Features
                        </Link>
                        {/* Platform Mobile Dropdown */}
                        <div className="w-full flex flex-col items-center">
                            <button
                                onClick={() => setIsPlatformOpen(!isPlatformOpen)}
                                className="w-full py-2 text-lg font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors text-center flex items-center justify-center gap-2"
                            >
                                Platform
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isPlatformOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isPlatformOpen && (
                                <div className="flex flex-col gap-6 w-full py-4 bg-slate-50/50 rounded-xl mt-2 animate-in slide-in-from-top-2">
                                    {/* Fraud Watch */}
                                    <div className="flex flex-col gap-3 items-center">
                                        <h4 className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                                            Fraud Watch
                                        </h4>
                                        {['Browser Intelligence', 'Device Intelligence', 'IP Intelligence', 'Fraud Risk Management'].map((item) => (
                                            <Link
                                                key={item}
                                                href={`/platform/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="text-sm text-slate-600 hover:text-[var(--color-primary)] transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item}
                                            </Link>
                                        ))}
                                    </div>

                                    {/* Payment */}
                                    <div className="flex flex-col gap-3 items-center">
                                        <h4 className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                                            Payment
                                        </h4>
                                        {['UPI Intent Flow', 'UPI Collect Flow', 'Payouts'].map((item) => (
                                            <Link
                                                key={item}
                                                href={`/platform/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="text-sm text-slate-600 hover:text-[var(--color-primary)] transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link
                            href="#solutions"
                            className="w-full py-2 text-lg font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Solutions
                        </Link>

                        {/* Company Mobile Dropdown */}
                        <div className="w-full flex flex-col items-center">
                            <button
                                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                                className="w-full py-2 text-lg font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors text-center flex items-center justify-center gap-2"
                            >
                                Company
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCompanyOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isCompanyOpen && (
                                <div className="flex flex-col gap-3 w-full py-4 bg-slate-50/50 rounded-xl mt-2 animate-in slide-in-from-top-2 items-center">
                                    <Link href="/about" className="text-sm text-slate-600 hover:text-[var(--color-primary)] transition-colors" onClick={() => setIsOpen(false)}>
                                        About Us
                                    </Link>
                                    <Link href="/contact" className="text-sm text-slate-600 hover:text-[var(--color-primary)] transition-colors" onClick={() => setIsOpen(false)}>
                                        Contact Us
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="w-32 h-px bg-slate-100 my-2" />

                        <Link
                            href="/login"
                            className="w-full py-2 text-lg font-medium text-slate-700 hover:text-[var(--color-primary)] text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Log in
                        </Link>
                        <Button className="w-full max-w-sm shadow-lg shadow-blue-500/20 py-6 text-lg" onClick={openDemoModal}>
                            Request Demo
                        </Button>
                    </div>
                </div>
            )}
        </motion.header>
    );
}
