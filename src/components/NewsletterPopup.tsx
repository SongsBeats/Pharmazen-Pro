import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Check if user has already subscribed or dismissed
        const hasSubscribed = localStorage.getItem("newsletter_subscribed");
        const hasDismissed = localStorage.getItem("newsletter_dismissed");

        if (!hasSubscribed && !hasDismissed) {
            // Show popup after 5 seconds or on exit intent
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 5000);

            // Exit intent detection
            const handleMouseLeave = (e: MouseEvent) => {
                if (e.clientY <= 0 && !hasSubscribed && !hasDismissed) {
                    setIsVisible(true);
                }
            };

            document.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                clearTimeout(timer);
                document.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            console.log("Newsletter subscription:", email);
            setIsSubmitted(true);
            localStorage.setItem("newsletter_subscribed", "true");

            setTimeout(() => {
                setIsVisible(false);
            }, 2000);
        }
    };

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem("newsletter_dismissed", "true");
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        onClick={handleDismiss}
                    />

                    {/* Popup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
                    >
                        <div className="glass-card p-8 m-4 relative">
                            <button
                                onClick={handleDismiss}
                                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {!isSubmitted ? (
                                <>
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-pharma-cyan flex items-center justify-center mx-auto mb-4">
                                            <span className="text-3xl">📧</span>
                                        </div>
                                        <h3 className="text-2xl font-display font-bold mb-2">
                                            Stay Updated!
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Get the latest healthcare insights and platform updates delivered to your inbox.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <Input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="h-12"
                                        />
                                        <Button type="submit" className="w-full h-12 glow">
                                            Subscribe Now
                                        </Button>
                                    </form>

                                    <p className="text-xs text-muted-foreground text-center mt-4">
                                        We respect your privacy. Unsubscribe at any time.
                                    </p>
                                </>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-3xl">✅</span>
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-2">
                                        Thank You!
                                    </h3>
                                    <p className="text-muted-foreground">
                                        You're now subscribed to our newsletter.
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
