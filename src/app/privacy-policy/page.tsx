import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Datzen Tech Private Limited',
    description: 'Privacy Policy for Datzen Tech Private Limited — how we collect, use, and protect your personal data under Indian law.',
};

export default function PrivacyPolicyPage() {
    return (
        <main className="pt-32 pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Privacy Policy
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </div>

                <div className="prose prose-slate max-w-none space-y-10 text-slate-700 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Introduction</h2>
                        <p>
                            Datzen Tech Private Limited (<strong>"Datzen"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>), a company incorporated under the Companies Act, 2013 and having its registered office at 18/1, 4th Cross, 2nd Floor, Rahmath Nagar, R T Nagar, Bangalore North, Bangalore – 560032, Karnataka, India, is committed to protecting the privacy and security of personal data entrusted to us.
                        </p>
                        <p className="mt-3">
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (<strong>datzen.tech</strong>) or use our payment intelligence and fraud-prevention platform. Please read this policy carefully. By accessing or using our services, you agree to the terms of this policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Applicable Law</h2>
                        <p>
                            This Policy is formulated in compliance with:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>The Information Technology Act, 2000 (<strong>IT Act</strong>) and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (<strong>SPDI Rules</strong>).</li>
                            <li>The Digital Personal Data Protection Act, 2023 (<strong>DPDPA 2023</strong>) and rules framed thereunder.</li>
                            <li>Guidelines issued by the Reserve Bank of India (<strong>RBI</strong>) on payment aggregators, data localisation, and cybersecurity.</li>
                            <li>Any other applicable sectoral regulations issued by SEBI, IRDAI, or NPCI as relevant.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Information We Collect</h2>
                        <p>We may collect the following categories of information:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li><strong>Identity & Contact Data:</strong> Name, email address, mobile number, organisation name, designation.</li>
                            <li><strong>KYC & Onboarding Data:</strong> PAN, Aadhaar (masked), GST number, CIN, or other government-issued identifiers required for merchant onboarding under RBI guidelines.</li>
                            <li><strong>Financial Data:</strong> Bank account details, UPI IDs, transaction history, settlement information — collected only to the extent required to provide payment services.</li>
                            <li><strong>Device & Technical Data:</strong> IP address, browser fingerprint, device identifiers, operating system, session tokens — used for fraud detection and risk scoring.</li>
                            <li><strong>Usage Data:</strong> Pages visited, features used, API call logs, clickstream data.</li>
                            <li><strong>Communication Data:</strong> Emails, support tickets, demo requests you submit to us.</li>
                        </ul>
                        <p className="mt-3">We do not collect full card numbers (PAN/CVV) on our servers. Card data is tokenised in compliance with RBI tokenisation guidelines.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">4. How We Use Your Information</h2>
                        <p>We use collected data for the following purposes:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Providing, operating, and improving our payment infrastructure and fraud-detection services.</li>
                            <li>Merchant onboarding, KYC verification, and compliance with RBI/FEMA requirements.</li>
                            <li>Risk scoring, fraud detection, and transaction monitoring.</li>
                            <li>Processing payments, refunds, and settlements.</li>
                            <li>Sending transactional notifications, service alerts, and support communications.</li>
                            <li>Complying with legal obligations, including reporting to financial intelligence units.</li>
                            <li>Analysing usage patterns to improve platform security and user experience.</li>
                        </ul>
                        <p className="mt-3">We do not sell, rent, or trade your personal data to third parties for marketing purposes.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Legal Basis for Processing</h2>
                        <p>Under the DPDPA 2023, we process personal data on the following grounds:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li><strong>Consent:</strong> For processing data beyond what is strictly necessary for service delivery.</li>
                            <li><strong>Contractual Necessity:</strong> To fulfil our obligations under merchant agreements and service contracts.</li>
                            <li><strong>Legal Obligation:</strong> To comply with applicable Indian laws (RBI, PMLA, FEMA, IT Act).</li>
                            <li><strong>Legitimate Interest:</strong> For fraud prevention, security, and platform integrity.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Data Localisation</h2>
                        <p>
                            In accordance with RBI's circular on storage of payment system data, all payment transaction data of Indian customers is stored exclusively within India. We do not transfer such data outside India unless expressly permitted under applicable RBI guidelines.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Sharing of Information</h2>
                        <p>We may share your information with:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li><strong>Payment Partners & Banks:</strong> NPCI, acquiring banks, issuing banks, and payment networks for transaction processing.</li>
                            <li><strong>Regulatory Authorities:</strong> RBI, SEBI, Financial Intelligence Unit-India (FIU-IND), or other statutory bodies when required by law.</li>
                            <li><strong>Service Providers:</strong> Cloud infrastructure providers, KYC verification agencies, and analytics partners who process data only on our behalf under confidentiality obligations.</li>
                            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred subject to equivalent privacy protections.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Data Retention</h2>
                        <p>
                            We retain personal data only as long as necessary for the purposes described in this policy, or as required by applicable law. Payment transaction records are retained for a minimum of <strong>five (5) years</strong> in accordance with RBI guidelines and the Prevention of Money Laundering Act, 2002 (PMLA). KYC records are retained for <strong>ten (10) years</strong> from the date of cessation of the business relationship.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Data Security</h2>
                        <p>
                            We implement industry-standard technical and organisational security measures, including:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>AES-256 encryption for data at rest, TLS 1.2+ for data in transit.</li>
                            <li>Role-based access controls (RBAC) and least-privilege principles.</li>
                            <li>Regular vulnerability assessments and penetration testing.</li>
                            <li>SOC 2 Type II and ISO 27001-aligned security practices.</li>
                            <li>Multi-factor authentication for platform access.</li>
                        </ul>
                        <p className="mt-3">
                            Despite these measures, no internet transmission is completely secure. In the event of a data breach affecting your rights, we will notify you and relevant authorities as required under applicable law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Your Rights as a Data Principal</h2>
                        <p>Under the DPDPA 2023, you have the right to:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li><strong>Access:</strong> Obtain a summary of personal data we hold about you and the processing activities.</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete personal data.</li>
                            <li><strong>Erasure:</strong> Request deletion of personal data where it is no longer necessary for the purpose collected, subject to legal retention requirements.</li>
                            <li><strong>Grievance Redressal:</strong> Lodge a complaint with our Grievance Officer.</li>
                            <li><strong>Withdrawal of Consent:</strong> Withdraw consent at any time, which will not affect lawfulness of prior processing.</li>
                            <li><strong>Nominate:</strong> Nominate an individual to exercise rights on your behalf in the event of death or incapacity.</li>
                        </ul>
                        <p className="mt-3">To exercise any of the above rights, please contact us at <a href="mailto:privacy@datzen.tech" className="text-blue-600 hover:underline">privacy@datzen.tech</a>.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">11. Cookies & Tracking Technologies</h2>
                        <p>
                            We use cookies and similar tracking technologies for session management, security, analytics, and fraud detection. You may control cookie preferences through your browser settings. Disabling certain cookies may impact platform functionality. We do not use cookies for cross-site targeted advertising.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">13. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect changes in law, regulatory requirements, or our operations. The revised policy will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">14. Governing Law & Jurisdiction</h2>
                        <p>
                            This Privacy Policy is governed by the laws of India. Any disputes arising in connection with this policy shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.
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
