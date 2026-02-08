import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const FAQSection = () => {
    const faqs = [
        {
            category: "General",
            questions: [
                {
                    q: "What is PharmaZen?",
                    a: "PharmaZen is a comprehensive digital platform designed for the pharmaceutical and healthcare industry. It connects pharmacies, distributors, doctors, and patients in one unified ecosystem, offering features like inventory management, billing, analytics, and e-prescriptions.",
                },
                {
                    q: "Who can use PharmaZen?",
                    a: "PharmaZen is designed for pharmacies (retail and hospital), pharmaceutical distributors, doctors/clinics, and healthcare administrators. We offer tailored solutions for each user type.",
                },
                {
                    q: "Is PharmaZen available on mobile?",
                    a: "Yes! PharmaZen is available as a web application and mobile apps for both iOS and Android. You can manage your pharmacy from anywhere, anytime.",
                },
            ],
        },
        {
            category: "Pricing & Plans",
            questions: [
                {
                    q: "How much does PharmaZen cost?",
                    a: "We offer flexible pricing plans starting from ₹2,999/month for small pharmacies. We also have Professional and Enterprise plans with advanced features. All plans include a 14-day free trial with no credit card required.",
                },
                {
                    q: "Can I switch plans later?",
                    a: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.",
                },
                {
                    q: "Are there any hidden fees?",
                    a: "No hidden fees! Our pricing is transparent. The plan price includes all features, updates, and support. No setup fees, no surprise charges.",
                },
            ],
        },
        {
            category: "Features & Functionality",
            questions: [
                {
                    q: "Does PharmaZen support GST compliance?",
                    a: "Yes! PharmaZen is fully GST-compliant. It automatically calculates GST, generates GST-compliant invoices, and helps you file GST returns with ease.",
                },
                {
                    q: "Can I manage multiple pharmacy locations?",
                    a: "Yes, our Professional and Enterprise plans support multi-location management. You can track inventory, sales, and staff across all your locations from a single dashboard.",
                },
                {
                    q: "Does it integrate with existing systems?",
                    a: "PharmaZen offers robust API integrations with popular accounting software, payment gateways, and healthcare systems. We also provide custom integration support for Enterprise customers.",
                },
                {
                    q: "How does the inventory management work?",
                    a: "Our smart inventory system tracks stock levels in real-time, monitors expiry dates, sends automated reorder alerts, and provides insights to reduce wastage and optimize stock levels.",
                },
            ],
        },
        {
            category: "Security & Compliance",
            questions: [
                {
                    q: "Is my data secure?",
                    a: "Absolutely! We use bank-grade encryption (AES-256) for data storage and SSL/TLS for data transmission. Our infrastructure is hosted on secure cloud servers with regular backups and 99.9% uptime guarantee.",
                },
                {
                    q: "Is PharmaZen HIPAA compliant?",
                    a: "Yes, PharmaZen follows healthcare data protection standards including HIPAA compliance for handling patient information and medical records.",
                },
                {
                    q: "Who has access to my data?",
                    a: "Only you and authorized users in your organization have access to your data. We never share, sell, or use your data for any purpose other than providing our services.",
                },
            ],
        },
        {
            category: "Support & Training",
            questions: [
                {
                    q: "What kind of support do you provide?",
                    a: "We offer email support for all plans, priority 24/7 support for Professional plans, and dedicated account managers for Enterprise customers. We also have extensive documentation and video tutorials.",
                },
                {
                    q: "Do you provide training?",
                    a: "Yes! We provide free onboarding training for all new customers. This includes staff training, data migration assistance, and ongoing support to ensure smooth adoption.",
                },
                {
                    q: "How long does implementation take?",
                    a: "Most pharmacies are up and running within 1-2 days. We handle data migration, system setup, and staff training to ensure a smooth transition.",
                },
            ],
        },
    ];

    return (
        <section className="section-padding">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <HelpCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-display font-bold mb-4">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to know about PharmaZen. Can't find what you're looking for?
                        <a href="/contact" className="text-primary hover:underline ml-1">Contact our support team</a>.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {faqs.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                                    {categoryIndex + 1}
                                </span>
                                {category.category}
                            </h3>

                            <Accordion type="single" collapsible className="space-y-2">
                                {category.questions.map((faq, faqIndex) => (
                                    <AccordionItem
                                        key={faqIndex}
                                        value={`${categoryIndex}-${faqIndex}`}
                                        className="glass-card px-6 border-0"
                                    >
                                        <AccordionTrigger className="text-left hover:no-underline py-4">
                                            <span className="font-semibold pr-4">{faq.q}</span>
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </motion.div>
                    ))}
                </div>

                {/* Still have questions CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center glass-card p-8 max-w-2xl mx-auto"
                >
                    <h3 className="text-2xl font-display font-bold mb-3">
                        Still have questions?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                        Our support team is here to help you with any questions or concerns.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                        >
                            Contact Support
                        </a>
                        <a
                            href="mailto:support@pharmazen.com"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border font-semibold hover:bg-muted transition-colors"
                        >
                            Email Us
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
