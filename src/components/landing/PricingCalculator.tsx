import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const PricingCalculator = () => {
    const [locations, setLocations] = useState(1);
    const [users, setUsers] = useState(3);
    const [transactions, setTransactions] = useState(1000);

    const calculatePrice = () => {
        let basePrice = 2999;

        // Location multiplier
        if (locations > 1) {
            basePrice += (locations - 1) * 1500;
        }

        // User multiplier
        if (users > 5) {
            basePrice += (users - 5) * 500;
        }

        // Transaction volume
        if (transactions > 5000) {
            basePrice += 2000;
        } else if (transactions > 2000) {
            basePrice += 1000;
        }

        return basePrice;
    };

    const features = [
        "Unlimited SKUs",
        "GST Compliance",
        "Mobile App Access",
        "Cloud Backup",
        "Email Support",
        "Advanced Analytics",
        "Multi-location Support",
        "API Access",
    ];

    return (
        <section className="section-padding bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        Calculate Your <span className="gradient-text">Custom Price</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Adjust the sliders to match your business needs and see your estimated monthly cost
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Calculator */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8"
                    >
                        <h3 className="text-xl font-display font-bold mb-6">Your Requirements</h3>

                        <div className="space-y-8">
                            {/* Locations */}
                            <div>
                                <div className="flex justify-between mb-3">
                                    <label className="font-medium">Number of Locations</label>
                                    <span className="text-primary font-bold">{locations}</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="20"
                                    value={locations}
                                    onChange={(e) => setLocations(parseInt(e.target.value))}
                                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                    <span>1</span>
                                    <span>20+</span>
                                </div>
                            </div>

                            {/* Users */}
                            <div>
                                <div className="flex justify-between mb-3">
                                    <label className="font-medium">Number of Users</label>
                                    <span className="text-primary font-bold">{users}</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="50"
                                    value={users}
                                    onChange={(e) => setUsers(parseInt(e.target.value))}
                                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                    <span>1</span>
                                    <span>50+</span>
                                </div>
                            </div>

                            {/* Transactions */}
                            <div>
                                <div className="flex justify-between mb-3">
                                    <label className="font-medium">Monthly Transactions</label>
                                    <span className="text-primary font-bold">{transactions.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="100"
                                    max="10000"
                                    step="100"
                                    value={transactions}
                                    onChange={(e) => setTransactions(parseInt(e.target.value))}
                                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                    <span>100</span>
                                    <span>10,000+</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Price Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8"
                    >
                        <h3 className="text-xl font-display font-bold mb-6">Your Estimated Price</h3>

                        <div className="mb-8">
                            <div className="text-5xl font-display font-bold gradient-text mb-2">
                                ₹{calculatePrice().toLocaleString()}
                            </div>
                            <div className="text-muted-foreground">per month</div>
                            <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                                <p className="text-sm text-accent font-semibold">
                                    💰 Save 17% with annual billing: ₹{Math.round(calculatePrice() * 12 * 0.83).toLocaleString()}/year
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3 mb-8">
                            <h4 className="font-semibold mb-4">Included Features:</h4>
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-accent" />
                                    </div>
                                    <span className="text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Button
                            className="w-full glow h-12"
                            onClick={() => {
                              const phoneNumber = "8919216351";
                              const message = "Hi! I'm interested in PharmaZen. Can you help me?";
                              window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
                            }}
                        >
                            Start Your Transformation
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
