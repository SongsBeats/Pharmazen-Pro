import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";

const Terms = () => {
    const sections = [
        {
            icon: FileText,
            title: "1. Acceptance of Terms",
            content: "By accessing and using PharmaZen's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our services.",
        },
        {
            icon: CheckCircle,
            title: "2. Use License",
            content: "Permission is granted to temporarily access and use PharmaZen for personal or commercial use. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose without our consent; attempt to decompile or reverse engineer any software contained on PharmaZen's platform; remove any copyright or other proprietary notations from the materials.",
        },
        {
            icon: Scale,
            title: "3. User Responsibilities",
            content: "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account. You agree not to use the service for any illegal or unauthorized purpose. You must not transmit any worms, viruses, or any code of a destructive nature.",
        },
        {
            icon: AlertCircle,
            title: "4. Service Availability",
            content: "We strive to provide 99.9% uptime but do not guarantee that our services will be uninterrupted, timely, secure, or error-free. We reserve the right to modify or discontinue the service with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.",
        },
        {
            icon: FileText,
            title: "5. Payment Terms",
            content: "Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law. We reserve the right to change our pricing with 30 days notice. Failure to pay fees may result in suspension or termination of your account.",
        },
        {
            icon: Scale,
            title: "6. Intellectual Property",
            content: "The service and its original content, features, and functionality are owned by PharmaZen and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not duplicate, copy, or reuse any portion of the HTML/CSS, JavaScript, or visual design elements without express written permission.",
        },
        {
            icon: AlertCircle,
            title: "7. Limitation of Liability",
            content: "In no event shall PharmaZen, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.",
        },
        {
            icon: CheckCircle,
            title: "8. Data Protection",
            content: "We are committed to protecting your data and complying with applicable data protection laws including GDPR and HIPAA. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your data.",
        },
        {
            icon: FileText,
            title: "9. Termination",
            content: "We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will immediately cease.",
        },
        {
            icon: Scale,
            title: "10. Governing Law",
            content: "These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.",
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
                            Terms of <span className="gradient-text">Service</span>
                        </h1>
                        <p className="text-muted-foreground mb-4">
                            Last updated: February 5, 2026
                        </p>
                        <p className="text-lg text-muted-foreground mb-12">
                            Please read these Terms of Service carefully before using PharmaZen's platform.
                            These terms govern your use of our services and constitute a legally binding agreement between you and PharmaZen.
                        </p>

                        <div className="space-y-6">
                            {sections.map((section, index) => {
                                const Icon = section.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className="glass-card p-8"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-display font-bold mb-3">{section.title}</h2>
                                                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                                            </div>
                                        </div>
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
                            <h2 className="text-2xl font-display font-bold mb-4">Questions About Terms?</h2>
                            <p className="text-muted-foreground mb-4">
                                If you have any questions about these Terms of Service, please contact us:
                            </p>
                            <div className="space-y-2 text-muted-foreground">
                                <p>Email: <a href="mailto:legal@pharmazen.com" className="text-primary hover:underline">legal@pharmazen.com</a></p>
                                <p>Phone: <a href="tel:+919876543210" className="text-primary hover:underline">+91 98765 43210</a></p>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Terms;
