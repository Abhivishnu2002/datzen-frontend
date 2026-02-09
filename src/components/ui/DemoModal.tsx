'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { Button } from '@/components/ui/Button';

export function DemoModal() {
    const { isDemoModalOpen, closeDemoModal } = useModal();
    const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
    const [selectedProtection, setSelectedProtection] = useState<string[]>([]);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const toggleSelection = (item: string, currentSelections: string[], setSelections: any) => {
        if (currentSelections.includes(item)) {
            setSelections(currentSelections.filter(i => i !== item));
        } else {
            setSelections([...currentSelections, item]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission logic (api call)
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            closeDemoModal();
        }, 2000);
    };

    if (!isDemoModalOpen) return null;

    return (
        <AnimatePresence>
            {isDemoModalOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeDemoModal}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl pointer-events-auto relative">
                            <button
                                onClick={closeDemoModal}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors z-10"
                            >
                                <X size={24} />
                            </button>

                            <div className="p-8 md:p-10">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Contact Us</h2>
                                    <p className="text-slate-600 text-lg">Get Started Today</p>
                                </div>

                                {formSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12 flex flex-col items-center"
                                    >
                                        <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                                            <Check size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                        <p className="text-slate-600">We'll be in touch shortly.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700">First Name <span className="text-red-500">*</span></label>
                                                <input required type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700">Last Name</label>
                                                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700">Company Email <span className="text-red-500">*</span></label>
                                                <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700">Company Name <span className="text-red-500">*</span></label>
                                                <input required type="text" placeholder="Company Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Contact Number <span className="text-red-500">*</span></label>
                                            <div className="flex">
                                                <div className="px-4 py-3 bg-slate-50 border border-slate-200 border-r-0 rounded-l-xl text-slate-600 font-medium flex items-center whitespace-nowrap">
                                                    🇮🇳 +91 (India)
                                                </div>
                                                <input required type="tel" placeholder="Enter your contact number" className="w-full px-4 py-3 rounded-r-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900" />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-sm font-semibold text-slate-700">The platform(s) you're looking to protect: <span className="text-red-500">*</span></label>
                                            <div className="flex flex-wrap gap-3">
                                                {['Mobile App', 'Website'].map((platform) => (
                                                    <label key={platform} className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all ${selectedPlatforms.includes(platform) ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                                                        <input
                                                            type="checkbox"
                                                            className="rounded text-blue-600 focus:ring-blue-500"
                                                            checked={selectedPlatforms.includes(platform)}
                                                            onChange={() => toggleSelection(platform, selectedPlatforms, setSelectedPlatforms)}
                                                        />
                                                        <span className="text-sm font-medium">{platform}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-sm font-semibold text-slate-700">What are you looking to protect against: <span className="text-red-500">*</span></label>
                                            <div className="grid grid-cols-2 gap-3">
                                                {[
                                                    'Account Takeover', 'Fake Accounts',
                                                    'Referral Promo Abuse', 'Payment Fraud',
                                                    'Incentive Abuse', 'Spam Abuse',
                                                    'Identity Fraud', 'Ad Fraud'
                                                ].map((protection) => (
                                                    <label key={protection} className={`flex items-start gap-2 p-3 rounded-lg border cursor-pointer transition-all ${selectedProtection.includes(protection) ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                                                        <input
                                                            type="checkbox"
                                                            className="mt-1 rounded text-blue-600 focus:ring-blue-500 shrink-0"
                                                            checked={selectedProtection.includes(protection)}
                                                            onChange={() => toggleSelection(protection, selectedProtection, setSelectedProtection)}
                                                        />
                                                        <span className="text-sm font-medium leading-tight">{protection}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Brief description of your requirements (optional)</label>
                                            <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none text-slate-900" />
                                        </div>

                                        <div className="text-xs text-slate-500 text-center">
                                            By submitting this form, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                                        </div>

                                        <Button className="w-full py-4 text-lg font-bold shadow-lg shadow-blue-500/20 rounded-xl">
                                            Book a Demo
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

