'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScanEye, Fingerprint, Smartphone, UserCheck } from 'lucide-react';

const tabs = [
    {
        id: 'fraud',
        title: 'Fraud Watch',
        description: 'Fraud Watch detects and prevents fraud by monitoring transactions, verifying identities, and flagging suspicious activities, ensuring user and business security.',
        icon: ScanEye,
    },
    {
        id: 'ssi',
        title: 'Self Sovereign Identity (SSI)',
        description: 'SSI enables individuals to own and control their digital identities using decentralized technologies like blockchain, enhancing privacy, security, and trust.',
        icon: Fingerprint,
    },
    {
        id: 'upi',
        title: 'Payments (UPI)',
        description: 'UPI revolutionizes digital transactions by enabling instant, secure, and seamless fund transfers between bank accounts via mobile devices.',
        icon: Smartphone,
    },
    {
        id: 'kyc',
        title: 'Onboarding (KYC)',
        description: 'Onboarding KYC streamlines user verification by collecting and validating identity documents, ensuring compliance, reducing fraud, and enhancing customer trust efficiently.',
        icon: UserCheck,
    },
];

export function VerticalFeatures() {
    const [activeTab, setActiveTab] = useState('fraud');

    return (
        <section id="features" className="py-24 bg-white scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight md:whitespace-nowrap">
                        Secure <span className="text-[var(--color-primary)]">Payments</span>, Smarter <span className="text-[var(--color-primary)]">Protection</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed px-4">
                        From real-time fraud detection and advanced data intelligence to multi-layered security and adaptive risk scoring, DATZEN empowers your business to detect, prevent, and mitigate fraud, ensuring robust protection and seamless operations.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 h-[800px] lg:h-[500px]">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <motion.div
                                key={tab.id}
                                layout
                                onHoverStart={() => setActiveTab(tab.id)}
                                onClick={() => setActiveTab(tab.id)}
                                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-colors duration-500 ease-in-out ${isActive
                                    ? 'bg-[var(--color-primary)] flex-[3]'
                                    : 'bg-blue-50/50 flex-[1] hover:bg-blue-50'
                                    }`}
                            >
                                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between h-full">
                                    {isActive ? (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                            className="flex flex-col h-full justify-between relative z-10"
                                        >
                                            <div className="bg-white/10 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-4">
                                                <tab.icon className="text-white w-6 h-6 md:w-8 md:h-8" />
                                            </div>

                                            <div className="mt-auto">
                                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 tracking-tight">
                                                    {tab.title}
                                                </h3>
                                                <p className="text-blue-50 text-base md:text-lg leading-relaxed max-w-xl">
                                                    {tab.description}
                                                </p>
                                            </div>

                                            {/* Decorative background Icon */}
                                            <tab.icon className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-24 h-24 md:w-32 md:h-32 text-white/5 rotate-12 pointer-events-none" />
                                        </motion.div>
                                    ) : (
                                        <div className="flex flex-col h-full items-center justify-center lg:py-4">
                                            <div className="hidden lg:block mt-auto lg:mt-0 lg:rotate-180 lg:[writing-mode:vertical-rl] text-xl font-bold text-slate-500 whitespace-nowrap tracking-tight">
                                                {tab.title}
                                            </div>
                                            <div className="hidden lg:flex mt-auto bg-white w-12 h-12 rounded-xl items-center justify-center shadow-sm">
                                                <tab.icon className="text-[var(--color-primary)] w-6 h-6" />
                                            </div>
                                            {/* Mobile View: Horizontal text */}
                                            <div className="lg:hidden flex items-center gap-4 w-full px-2">
                                                <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center shadow-sm shrink-0">
                                                    <tab.icon className="text-[var(--color-primary)] w-5 h-5" />
                                                </div>
                                                <span className="text-base font-bold text-slate-700">{tab.title}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
