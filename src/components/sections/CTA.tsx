'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useModal } from '@/context/ModalContext';

export function CTA() {
    const { openDemoModal } = useModal();

    return (
        <section className="bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 py-24 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                        Ready to secure your entire payment lifecycle?
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                        Join the fastest-growing fintechs using DATZEN for intelligent fraud prevention and frictionless payments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="xl" className="shadow-blue-500/20 shadow-lg px-10 text-lg" onClick={openDemoModal}>
                            Start Free Trial
                        </Button>
                        <Button variant="secondary" size="xl" className="px-10 text-lg" onClick={openDemoModal}>
                            Request Demo
                        </Button>
                    </div>
                    <p className="mt-8 text-sm text-slate-600">
                        No credit card required for trial • SOC2 Compliant
                    </p>
                </div>
            </div>
        </section>
    );
}
