'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Globe, Users, Target, Zap, Building2, Lock } from 'lucide-react';
import Image from 'next/image';

const stats = [
    { label: 'Transactions Secured', value: '10M+' },
    { label: 'Global Partners', value: '50+' },
    { label: 'Fraud Prevented', value: '$500M+' },
    { label: 'Uptime Guarantee', value: '99.9%' },
];

const values = [
    {
        title: 'Trust First',
        description: 'We believe trust is the currency of the digital economy. Every solution we build is designed to strengthen the bond between businesses and their users.',
        icon: ShieldCheck,
    },
    {
        title: 'Innovation Driven',
        description: 'We constantly push boundaries, leveraging AI, blockchain, and advanced analytics to stay ahead of emerging threats and market needs.',
        icon: Zap,
    },
    {
        title: 'Customer Centric',
        description: 'Your success is our success. We build scalable, adaptable solutions that grow with your business and solve your specific challenges.',
        icon: Users,
    },
    {
        title: 'Global Compliance',
        description: 'Navigating the complex landscape of global regulations so you can expand into new markets with confidence and ease.',
        icon: Globe,
    },
];

export default function AboutPage() {
    return (
        <main className="pt-32 pb-24 overflow-hidden bg-white">
            {/* Hero Section */}
            <section className="container mx-auto px-4 md:px-6 mb-24 pt-12 md:pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-5xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                        Securing the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Digital Trust</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-16 font-medium">
                        DATZEN is a next-generation risk intelligence and payments platform. We empower businesses to operate securely, verify identities instantly, and process payments seamlessly—all through a single, powerful API.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mt-12 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
                        >
                            <div className="text-3xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-3 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base font-semibold text-slate-500 uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Mission Section */}
            <section className="bg-white py-20 md:py-32 my-12 md:my-24 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[var(--color-primary)] text-sm font-bold mb-6 tracking-wide uppercase border border-blue-100">
                                <Target className="w-4 h-4" /> Our Mission
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Enabling a Safer <br className="hidden md:block" /> Digital Economy
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                                <p>
                                    In a world where digital interactions are the norm, fraud and mistrust are the biggest barriers to growth. Our mission is to dismantle these barriers.
                                </p>
                                <p>
                                    We combine cutting-edge technology with deep industry expertise to provide a holistic view of risk. Whether it's onboarding a new user, processing a high-value transaction, or expanding into a new territory, DATZEN ensures you're protected every step of the way.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                                {/* Replacemed dark bg with light premium gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
                                    <Building2 className="w-40 h-40 text-blue-100/50" />
                                </div>

                                {/* Animated decorative circles */}
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"
                                />

                                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                                    <div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-lg border border-white/40">
                                        <div className="flex items-center gap-5">
                                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg shadow-blue-500/20">
                                                <Lock className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-lg font-bold text-slate-900 mb-1">Bank-Grade Security</div>
                                                <div className="text-sm font-medium text-slate-500">SOC2 Type II Certified Platform</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="container mx-auto px-4 md:px-6 mb-32">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Core Values</h2>
                    <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
                        The principles that guide our innovation and commitment to our partners.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
                        >
                            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                                <value.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
