import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            // Show after 2 seconds
            setTimeout(() => setIsVisible(true), 2000);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="container mx-auto max-w-6xl">
                        <div className="glass-card p-6 md:p-8 shadow-2xl">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Cookie className="w-6 h-6 text-primary" />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-display font-bold text-lg mb-2">
                                        We value your privacy
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        We use cookies to enhance your browsing experience, serve personalized content,
                                        and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                                        Read our{" "}
                                        <a href="/privacy" className="text-primary hover:underline">
                                            Privacy Policy
                                        </a>{" "}
                                        and{" "}
                                        <a href="/terms" className="text-primary hover:underline">
                                            Terms of Service
                                        </a>
                                        .
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                    <Button
                                        variant="outline"
                                        onClick={handleDecline}
                                        className="w-full sm:w-auto"
                                    >
                                        Decline
                                    </Button>
                                    <Button
                                        onClick={handleAccept}
                                        className="w-full sm:w-auto glow"
                                    >
                                        Accept All
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
