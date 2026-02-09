'use client';

import { ShieldAlert, Fingerprint, Banknote, Smartphone, Globe, Lock, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: "Fraud & Risk Intelligence",
        description: "Detect anomalies in real-time with device fingerprinting and behavioral biometrics.",
        icon: ShieldAlert,
        color: "text-red-500",
        bg: "bg-red-50",
    },
    {
        title: "KYC & Identity Verification",
        description: "Automated onboarding with global document coverage and instant liveness checks.",
        icon: Fingerprint,
        color: "text-blue-500",
        bg: "bg-blue-50",
    },
    {
        title: "Global Payments & Payouts",
        description: "Accept payments and disburse funds globally via UPI, cards, and bank transfers.",
        icon: Banknote,
        color: "text-green-500",
        bg: "bg-green-50",
    },
];

const capabilities = [
    {
        title: "Device Fingerprinting",
        description: "Identify returning users even after cookie deletion or incognito mode.",
        icon: Smartphone,
    },
    {
        title: "Behavioral Analytics",
        description: "Track mouse movements and typing patterns to spot bots.",
        icon: Search,
    },
    {
        title: "AML Compliance",
        description: "Screen against global watchlists and PEPs instantly.",
        icon: Globe,
    },
    {
        title: "Account Takeover",
        description: "Prevent unauthorized access with risk-based authentication.",
        icon: Lock,
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
                    >
                        Complete Financial Infrastructure
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600 leading-relaxed"
                    >
                        From onboarding to transaction monitoring, DATZEN provides the tools you need to scale securely with enterprise-grade reliability.
                    </motion.p>
                </div>

                {/* Main 3 Features */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className={`h-14 w-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                    <feature.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Detailed Capabilities Section - Modernized */}
                <motion.div
                    id="solutions"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 text-white p-8 md:p-16 border border-slate-800 shadow-2xl scroll-mt-32"
                >
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-slate-900 to-slate-900" />
                    <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />

                    <div className="relative z-10 grid lg:grid-cols-3 gap-12 lg:gap-20 items-start">
                        {/* Header Column */}
                        <div className="lg:col-span-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/20">
                                <ShieldAlert size={14} /> Only at DATZEN
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                Deep Risk <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Capabilities</span>
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Advanced forensic tools designed for high-volume fintech operations. Go beyond surface-level checks.
                            </p>
                        </div>

                        {/* Capabilities Grid */}
                        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                            {capabilities.map((cap, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm"
                                >
                                    <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                        <cap.icon size={24} />
                                    </div>
                                    <h4 className="font-bold text-lg mb-2 text-slate-100 group-hover:text-blue-300 transition-colors">
                                        {cap.title}
                                    </h4>
                                    <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {cap.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
