'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useModal } from '@/context/ModalContext';

export function Hero() {
    const { openDemoModal } = useModal();

    return (
        <section className="relative pt-24 pb-12 lg:pt-40 lg:pb-32 overflow-hidden bg-white">

            {/* Background GIF */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-[600px] md:w-[800px] opacity-20">
                    <Image
                        src="/assets/control-panel.gif"
                        alt="Background Animation"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                        priority
                        unoptimized
                    />
                </div>
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-600 text-sm font-medium mb-12 hover:bg-slate-50 transition-colors cursor-pointer shadow-sm"
                >
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    New: Real-time AML Screening via API
                </motion.div>

                {/* Headline */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.1
                            }
                        }
                    }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-10 text-center">
                        <motion.span
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="block"
                        >
                            Secure Payments,
                        </motion.span>
                        <motion.span
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mt-2"
                        >
                            Smarter Protection.
                        </motion.span>
                    </h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="text-lg md:text-xl text-slate-600 mb-16 leading-relaxed max-w-2xl mx-auto"
                    >
                        The unified platform for enterprise fraud detection, global KYC verification, and seamless payment infrastructure.
                    </motion.p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 mb-24 w-full sm:w-auto"
                >
                    <Button size="lg" className="shadow-lg shadow-blue-500/25 px-8 h-12 text-base" onClick={openDemoModal}>
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="px-8 h-12 text-base border-slate-200 hover:bg-slate-50 text-slate-700 bg-white/80 backdrop-blur-sm" onClick={openDemoModal}>
                        Request Demo
                    </Button>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-slate-500"
                >
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>SOC2 Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-blue-500" />
                        <span>99.99% Uptime</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-slate-400" />
                        <span>Bank-Grade Security</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
