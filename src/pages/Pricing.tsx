import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, X, ArrowRight, Sparkles, Zap, Crown } from "lucide-react";

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

    const plans = [
        {
            name: "Starter",
            description: "Perfect for small pharmacies getting started",
            icon: Sparkles,
            monthlyPrice: 2999,
            annualPrice: 29990,
            color: "from-blue-500 to-cyan-500",
            features: [
                { name: "Up to 1,000 SKUs", included: true },
                { name: "Basic billing & invoicing", included: true },
                { name: "Inventory management", included: true },
                { name: "GST compliance", included: true },
                { name: "Email support", included: true },
                { name: "Mobile app access", included: true },
                { name: "Advanced analytics", included: false },
                { name: "Multi-location support", included: false },
                { name: "API access", included: false },
                { name: "Dedicated account manager", included: false },
            ],
            cta: "Start Free Trial",
            popular: false,
        },
        {
            name: "Professional",
            description: "For growing pharmacies and chains",
            icon: Zap,
            monthlyPrice: 6999,
            annualPrice: 69990,
            color: "from-primary to-pharma-cyan",
            features: [
                { name: "Unlimited SKUs", included: true },
                { name: "Advanced billing & invoicing", included: true },
                { name: "Smart inventory management", included: true },
                { name: "GST compliance & filing", included: true },
                { name: "Priority support (24/7)", included: true },
                { name: "Mobile app access", included: true },
                { name: "Advanced analytics & reports", included: true },
                { name: "Up to 5 locations", included: true },
                { name: "API access", included: true },
                { name: "Dedicated account manager", included: false },
            ],
            cta: "Get Started",
            popular: true,
        },
        {
            name: "Enterprise",
            description: "For large chains and distributors",
            icon: Crown,
            monthlyPrice: null,
            annualPrice: null,
            color: "from-purple-500 to-pink-500",
            features: [
                { name: "Unlimited everything", included: true },
                { name: "Custom workflows", included: true },
                { name: "AI-powered insights", included: true },
                { name: "Full compliance suite", included: true },
                { name: "White-glove support", included: true },
                { name: "Custom integrations", included: true },
                { name: "Advanced analytics & BI", included: true },
                { name: "Unlimited locations", included: true },
                { name: "Full API access", included: true },
                { name: "Dedicated account manager", included: true },
            ],
            cta: "Contact Sales",
            popular: false,
        },
    ];

    const getPrice = (plan: typeof plans[0]) => {
        if (!plan.monthlyPrice) return "Custom";
        const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice;
        return `₹${price?.toLocaleString("en-IN")}`;
    };

    const getSavings = () => {
        if (billingCycle === "annual") return "Save up to 17%";
        return null;
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24 pb-20">
                {/* Hero Section */}
                <section className="container mx-auto px-4 lg:px-8 py-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                            Simple, <span className="gradient-text">Transparent Pricing</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                            Choose the perfect plan for your pharmacy. All plans include a 14-day free trial.
                        </p>

                        {/* Billing Toggle */}
                        <div className="flex items-center justify-center gap-4 mb-12">
                            <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>
                                Monthly
                            </span>
                            <Switch
                                checked={billingCycle === "annual"}
                                onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")}
                            />
                            <span className={`text-sm font-medium ${billingCycle === "annual" ? "text-foreground" : "text-muted-foreground"}`}>
                                Annual
                            </span>
                            {getSavings() && (
                                <span className="ml-2 px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full">
                                    {getSavings()}
                                </span>
                            )}
                        </div>
                    </motion.div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {plans.map((plan, index) => {
                            const Icon = plan.icon;
                            return (
                                <motion.div
                                    key={plan.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative glass-card p-8 ${plan.popular ? "ring-2 ring-primary shadow-card-hover" : ""
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                                    <div className="mb-6">
                                        <div className="text-4xl font-display font-bold">
                                            {getPrice(plan)}
                                            {plan.monthlyPrice && (
                                                <span className="text-lg text-muted-foreground font-normal">
                                                    /{billingCycle === "monthly" ? "mo" : "yr"}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <Button
                                        className={`w-full mb-8 ${plan.popular ? "glow" : ""
                                            }`}
                                        variant={plan.popular ? "default" : "outline"}
                                    >
                                        {plan.cta}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>

                                    <div className="space-y-3 text-left">
                                        {plan.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                {feature.included ? (
                                                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                                ) : (
                                                    <X className="w-5 h-5 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                                                )}
                                                <span className={feature.included ? "text-foreground" : "text-muted-foreground/60"}>
                                                    {feature.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="container mx-auto px-4 lg:px-8 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Frequently Asked Questions
                        </h2>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            {
                                q: "Can I switch plans later?",
                                a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
                            },
                            {
                                q: "What payment methods do you accept?",
                                a: "We accept all major credit cards, debit cards, UPI, and net banking. Enterprise customers can also pay via bank transfer.",
                            },
                            {
                                q: "Is there a setup fee?",
                                a: "No setup fees! We'll help you get started for free, including data migration and staff training.",
                            },
                            {
                                q: "What happens after the free trial?",
                                a: "After 14 days, you'll be automatically enrolled in your chosen plan. Cancel anytime before the trial ends with no charges.",
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-6"
                            >
                                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                                <p className="text-muted-foreground">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Pricing;
