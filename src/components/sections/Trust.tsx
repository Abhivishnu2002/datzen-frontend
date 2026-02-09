import { ShieldCheck, CheckCircle } from 'lucide-react';

export function Trust() {
    return (
        <section className="py-20 bg-white border-y border-slate-100">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-10">
                    Global Compliance Standards & Security
                </p>

                {/* Certifications Row */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 mb-20 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Mock Logos with text */}
                    <div className="flex items-center gap-2 font-bold text-slate-800 text-xl border border-slate-200 px-4 py-2 rounded-lg">
                        <ShieldCheck className="text-blue-600" />
                        ISO 27001
                    </div>
                    <div className="flex items-center gap-2 font-bold text-slate-800 text-xl border border-slate-200 px-4 py-2 rounded-lg">
                        <ShieldCheck className="text-green-600" />
                        SOC 2 Type II
                    </div>
                    <div className="flex items-center gap-2 font-bold text-slate-800 text-xl border border-slate-200 px-4 py-2 rounded-lg">
                        <ShieldCheck className="text-purple-600" />
                        GDPR Ready
                    </div>
                    <div className="flex items-center gap-2 font-bold text-slate-800 text-xl border border-slate-200 px-4 py-2 rounded-lg">
                        <ShieldCheck className="text-orange-600" />
                        PCI DSS
                    </div>
                </div>

                {/* Testimonial / Trust Block */}
                <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-6">
                            Bank-Grade Security infrastructure.
                        </h3>
                        <div className="space-y-4">
                            {[
                                "End-to-End Encryption (AES-256)",
                                "99.99% Guaranteed SLA Uptime",
                                "Real-time Threat Monitoring",
                                "Automated Compliance Audits"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-blue-500" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
                        <div className="text-slate-600 italic mb-6 leading-relaxed">
                            &quot;Datzen unified our entire risk stack. We replaced 4 different vendors with one platform, reducing false positives by 40% in the first month.&quot;
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                                JD
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">John Doe</div>
                                <div className="text-sm text-slate-500">CTO, FinScale Inc.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
