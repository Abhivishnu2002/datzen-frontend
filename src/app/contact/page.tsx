'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    return (
        <main className="pt-32 pb-24 overflow-hidden bg-white">
            {/* Header */}
            <section className="container mx-auto px-4 md:px-6 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Touch</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                        Have a question about our platform? Our team is ready to help you secure your future.
                    </p>
                </motion.div>
            </section>

            <section className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                                        <p className="text-slate-600 mb-1">General Inquiries</p>
                                        <a href="mailto:contact@datzen.com" className="text-blue-600 font-medium hover:underline">contact@datzen.com</a>
                                    </div>
                                </div>

                                {/* <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                                        <p className="text-slate-600 mb-1">Mon-Fri from 9am to 6pm</p>
                                        <a href="tel:+1234567890" className="text-blue-600 font-medium hover:underline">+1 (555) 123-4567</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            123 Innovation Drive, Suite 100<br />
                                            Tech City, TC 94000
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
                        <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you shortly.</p>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold text-slate-700">Subject</label>
                                <select id="subject" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-600 bg-white cursor-pointer">
                                    <option>Sales Inquiry</option>
                                    <option>Technical Support</option>
                                    <option>Partnership Opportunity</option>
                                    <option>General Question</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 resize-none" placeholder="How can we help you?"></textarea>
                            </div>

                            <Button className="w-full py-4 text-lg font-bold shadow-lg shadow-blue-500/20">
                                Send Message <Send className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
