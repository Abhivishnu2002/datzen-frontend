import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Datzen Tech Private Limited',
    description: 'Terms of Service for Datzen Tech Private Limited — governing the use of our payment intelligence platform under Indian law.',
};

export default function TermsOfServicePage() {
    return (
        <main className="pt-32 pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Terms of Service
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </div>

                <div className="prose prose-slate max-w-none space-y-10 text-slate-700 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Parties & Acceptance</h2>
                        <p>
                            These Terms of Service (<strong>"Terms"</strong>) constitute a legally binding agreement between <strong>Datzen Tech Private Limited</strong>, a company incorporated under the Companies Act, 2013, having its registered office at 18/1, 4th Cross, 2nd Floor, Rahmath Nagar, R T Nagar, Bangalore North, Bangalore – 560032, Karnataka, India (hereinafter <strong>"Datzen"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"Company"</strong>), and you, the individual, business entity, or organisation accessing or using our platform, website, or services (<strong>"You"</strong>, <strong>"User"</strong>, or <strong>"Merchant"</strong>).
                        </p>
                        <p className="mt-3">
                            By clicking "Agree", accessing our website at <strong>datzen.tech</strong>, or using any of our services, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, please discontinue use immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Description of Services</h2>
                        <p>Datzen provides the following services (collectively, <strong>"Services"</strong>):</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li><strong>Payment Infrastructure:</strong> UPI Intent Flow, UPI Collect Flow, and Payout solutions for merchants and enterprises.</li>
                            <li><strong>Fraud Detection & Risk Intelligence:</strong> Browser Intelligence, Device Intelligence, IP Intelligence, and Fraud Risk Management tools.</li>
                            <li><strong>KYC & Onboarding:</strong> Merchant onboarding, identity verification, and compliance workflows.</li>
                            <li><strong>APIs & Integrations:</strong> RESTful APIs and SDKs enabling platform integration.</li>
                            <li><strong>Dashboard & Analytics:</strong> Transaction monitoring, reporting, and risk analytics.</li>
                        </ul>
                        <p className="mt-3">
                            Datzen operates as a payment aggregator / payment technology provider and is subject to guidelines issued by the Reserve Bank of India (<strong>RBI</strong>). Services are provided subject to applicable RBI, NPCI, and other regulatory approvals.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Eligibility</h2>
                        <p>To use our Services, you must:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Be at least <strong>18 years of age</strong> and legally competent to enter into a contract under the Indian Contract Act, 1872.</li>
                            <li>Be a duly registered business entity (where applicable) compliant with applicable Indian laws.</li>
                            <li>Not be on any RBI/government watchlist or debarred from operating payment services.</li>
                            <li>Have completed Datzen's KYC and merchant onboarding process.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Merchant Onboarding & KYC</h2>
                        <p>
                            You agree to provide accurate, complete, and current information during onboarding, including but not limited to PAN, GSTIN, CIN, bank account details, and authorised signatory information. You acknowledge that Datzen is required to conduct due diligence under RBI guidelines for payment aggregators and the Prevention of Money Laundering Act, 2002 (<strong>PMLA</strong>). Providing false information constitutes grounds for immediate termination and may be reported to relevant authorities.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Acceptable Use</h2>
                        <p>You agree NOT to use the Services to:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Process transactions related to activities prohibited by RBI, FEMA, PMLA, or any other applicable Indian law.</li>
                            <li>Facilitate money laundering, terrorist financing, or any other financial crime.</li>
                            <li>Accept payments for goods or services that violate Indian law (e.g., illegal gambling, narcotics, counterfeit goods).</li>
                            <li>Attempt to reverse-engineer, decompile, or bypass Datzen's security or fraud detection mechanisms.</li>
                            <li>Engage in transaction laundering or processing payments on behalf of undisclosed merchants.</li>
                            <li>Use the platform in a manner that disrupts or degrades service for other users.</li>
                        </ul>
                        <p className="mt-3">
                            Datzen reserves the right to suspend or terminate accounts engaged in prohibited activities and to report such activities to the appropriate authorities, including FIU-IND, NPCI, and RBI.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Fees & Settlements</h2>
                        <p>
                            Applicable platform fees, transaction charges, and settlement timelines will be specified in your individual merchant agreement or service order form. Datzen reserves the right to revise fees with <strong>30 days' prior written notice</strong>. Settlement of collected funds to your designated bank account will be performed as per the agreed settlement cycle, subject to any holds applied for risk management, fraud prevention, or regulatory compliance.
                        </p>
                        <p className="mt-3">
                            Datzen may withhold settlements if there is a reasonable suspicion of fraudulent activity, chargebacks exceeding permissible thresholds, or regulatory inquiry. All amounts are exclusive of applicable taxes (GST) unless stated otherwise.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Chargebacks & Disputes</h2>
                        <p>
                            You are responsible for managing and resolving disputes with your end customers. Chargebacks will be debited from your settlement account as per the acquiring bank's policies. You agree to cooperate fully with Datzen and the acquiring bank in dispute resolution processes. Excessive chargeback rates may result in suspension of services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Intellectual Property</h2>
                        <p>
                            All content, software, APIs, trademarks, logos, and technology forming part of the Datzen platform are the exclusive intellectual property of Datzen Tech Private Limited and are protected under the Copyright Act, 1957, the Trade Marks Act, 1999, and the Information Technology Act, 2000. You are granted a limited, non-exclusive, non-transferable, revocable licence to use the Services solely for your business purposes in accordance with these Terms. No licence is granted to copy, modify, distribute, or create derivative works of any Datzen intellectual property.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Confidentiality</h2>
                        <p>
                            Each party agrees to keep confidential any non-public information of the other party disclosed in connection with the Services, including API keys, integration details, pricing, and business data. This obligation survives termination of the agreement for a period of <strong>3 years</strong>. API keys and credentials are personal to you, and you are responsible for all activity under your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Data Protection</h2>
                        <p>
                            Your use of the Services is also governed by our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference. You, as a Merchant, are independently responsible for ensuring compliance with the Digital Personal Data Protection Act, 2023 (<strong>DPDPA 2023</strong>) and applicable RBI data localisation requirements with respect to data you collect from your end customers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">11. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted under applicable Indian law, Datzen's total liability to you for any claim arising from or related to these Terms or the Services shall not exceed the fees paid by you to Datzen in the <strong>3 months preceding</strong> the event giving rise to the claim.
                        </p>
                        <p className="mt-3">
                            Datzen shall not be liable for indirect, incidental, consequential, special, or punitive damages, including loss of profits, data, goodwill, or business opportunities, even if advised of the possibility of such damages. This limitation shall not apply to claims arising out of gross negligence, wilful misconduct, or fraudulent misrepresentation by Datzen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">12. Indemnification</h2>
                        <p>
                            You agree to indemnify, defend, and hold harmless Datzen, its officers, directors, employees, and agents from and against any claims, liabilities, losses, damages, penalties, and expenses (including reasonable legal fees) arising out of: (a) your violation of these Terms; (b) your breach of applicable law or regulatory requirements; (c) third-party claims related to your products or services; or (d) fraudulent or unauthorised transactions originating from your merchant account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">13. Suspension & Termination</h2>
                        <p>
                            Datzen may suspend or terminate your access to the Services immediately and without prior notice if: (a) you breach these Terms or applicable law; (b) you are subject to regulatory action; (c) there is evidence of fraudulent activity; (d) you become insolvent or subject to insolvency proceedings; or (e) continuation of services poses a risk to Datzen, its partners, or end customers.
                        </p>
                        <p className="mt-3">
                            You may terminate the agreement by providing <strong>30 days' written notice</strong> to Datzen, subject to settlement of all outstanding obligations. Upon termination, your data will be retained as required by applicable law and then deleted in accordance with our Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">14. Disclaimer of Warranties</h2>
                        <p>
                            The Services are provided on an <strong>"as is"</strong> and <strong>"as available"</strong> basis. Datzen makes no representations or warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or uninterrupted availability. Datzen does not warrant that the Services will be error-free or that any defects will be corrected.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">15. Force Majeure</h2>
                        <p>
                            Datzen shall not be liable for delays or failure to perform Services resulting from events beyond its reasonable control, including acts of God, internet outages, RBI or government directives, NPCI system downtime, natural disasters, pandemics, or civil unrest.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">16. Amendments</h2>
                        <p>
                            Datzen reserves the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised effective date. Continued use of the Services after the updated Terms take effect constitutes your acceptance of the changes. For material changes, we will provide <strong>14 days' advance notice</strong> via email or in-platform notification.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">18. Governing Law & Dispute Resolution</h2>
                        <p>
                            These Terms are governed by and construed in accordance with the laws of India. Any dispute, controversy, or claim arising out of or in connection with these Terms shall first be attempted to be resolved through good-faith negotiations. If unresolved within 30 days, disputes shall be referred to binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, with the seat of arbitration in <strong>Bangalore, Karnataka</strong>, and conducted in the English language. Notwithstanding the foregoing, either party may seek interim or injunctive relief from competent courts in Bangalore.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">19. Entire Agreement</h2>
                        <p>
                            These Terms, together with the Privacy Policy, Merchant Agreement, and any applicable Service Order Forms, constitute the entire agreement between you and Datzen with respect to the Services and supersede all prior agreements and understandings.
                        </p>
                    </section>

                    <div className="border-t border-slate-200 pt-8 text-sm text-slate-500">
                        <p>For general inquiries, please contact us at <a href="mailto:contact@datzen.tech" className="text-blue-600 hover:underline">contact@datzen.tech</a>.</p>
                        <p className="mt-2">© 2026 Datzen Tech Private Limited. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
