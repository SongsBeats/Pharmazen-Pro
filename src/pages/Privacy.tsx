import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const Privacy = () => {
    const sections = [
        {
            icon: Shield,
            title: "Information We Collect",
            content: [
                "Personal information (name, email, phone number) when you register or contact us",
                "Business information (pharmacy name, address, license details)",
                "Usage data and analytics to improve our services",
                "Payment information (processed securely through third-party providers)",
                "Device and browser information for security and optimization",
            ],
        },
        {
            icon: Lock,
            title: "How We Use Your Information",
            content: [
                "To provide and maintain our services",
                "To notify you about changes to our services",
                "To provide customer support",
                "To gather analysis or valuable information to improve our services",
                "To monitor the usage of our services",
                "To detect, prevent and address technical issues",
                "To send you marketing communications (with your consent)",
            ],
        },
        {
            icon: Eye,
            title: "Data Security",
            content: [
                "We use industry-standard encryption (AES-256) for data storage",
                "SSL/TLS encryption for all data transmission",
                "Regular security audits and penetration testing",
                "Strict access controls and authentication",
                "Regular backups and disaster recovery procedures",
                "Compliance with healthcare data protection standards (HIPAA)",
            ],
        },
        {
            icon: FileText,
            title: "Your Rights",
            content: [
                "Access your personal data",
                "Correct inaccurate data",
                "Request deletion of your data",
                "Object to processing of your data",
                "Request transfer of your data",
                "Withdraw consent at any time",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24 pb-20">
                <section className="container mx-auto px-4 lg:px-8 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Privacy <span className="gradient-text">Policy</span>
                        </h1>
                        <p className="text-muted-foreground mb-4">
                            Last updated: February 5, 2026
                        </p>
                        <p className="text-lg text-muted-foreground mb-12">
                            At PharmaZen, we take your privacy seriously. This Privacy Policy explains how we collect,
                            use, disclose, and safeguard your information when you use our platform.
                        </p>

                        <div className="space-y-8">
                            {sections.map((section, index) => {
                                const Icon = section.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="glass-card p-8"
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <h2 className="text-2xl font-display font-bold">{section.title}</h2>
                                        </div>
                                        <ul className="space-y-3">
                                            {section.content.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-12 glass-card p-8"
                        >
                            <h2 className="text-2xl font-display font-bold mb-4">Contact Us</h2>
                            <p className="text-muted-foreground mb-4">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="space-y-2 text-muted-foreground">
                                <p>Email: <a href="mailto:privacy@pharmazen.com" className="text-primary hover:underline">privacy@pharmazen.com</a></p>
                                <p>Phone: <a href="tel:+919876543210" className="text-primary hover:underline">+91 98765 43210</a></p>
                                <p>Address: 123 Healthcare Plaza, Mumbai, Maharashtra 400001</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Privacy;
