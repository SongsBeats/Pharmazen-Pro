import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const WhatsAppChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const phoneNumber = "8919216351"; // Replace with actual WhatsApp business number
    const defaultMessage = "Hi! I'm interested in PharmaZen. Can you help me?";

    const handleSendMessage = () => {
        const textToSend = message || defaultMessage;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textToSend)}`;
        window.open(whatsappUrl, "_blank");
        setIsOpen(false);
        setMessage("");
    };

    const quickMessages = [
        "I want to schedule a demo",
        "What are your pricing plans?",
        "I need help with implementation",
        "Tell me about features",
    ];

    return (
        <>
            {/* Chat Widget */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: "spring", damping: 25 }}
                        className="fixed bottom-24 right-4 md:right-8 z-50 w-[90vw] max-w-sm"
                    >
                        <div className="glass-card overflow-hidden shadow-2xl">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 text-white">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                            <MessageCircle className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">PharmaZen Support</h3>
                                            <p className="text-xs opacity-90">Typically replies instantly</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="hover:bg-white/10 p-1 rounded transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-4 bg-background">
                                <div className="mb-4">
                                    <div className="bg-muted/50 rounded-lg p-3 mb-3">
                                        <p className="text-sm">
                                            👋 Hi there! How can we help you today?
                                        </p>
                                    </div>
                                </div>

                                {/* Quick Replies */}
                                <div className="space-y-2 mb-4">
                                    <p className="text-xs text-muted-foreground font-medium">Quick replies:</p>
                                    {quickMessages.map((msg, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setMessage(msg)}
                                            className="w-full text-left text-sm p-2 rounded-lg border border-border hover:bg-muted transition-colors"
                                        >
                                            {msg}
                                        </button>
                                    ))}
                                </div>

                                {/* Message Input */}
                                <div className="space-y-3">
                                    <Textarea
                                        placeholder="Type your message..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={3}
                                        className="resize-none"
                                    />
                                    <Button
                                        onClick={handleSendMessage}
                                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
                                    >
                                        <Send className="w-4 h-4 mr-2" />
                                        Send on WhatsApp
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", damping: 15 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-4 md:right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
                aria-label="Open WhatsApp chat"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <MessageCircle className="w-6 h-6" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notification Badge */}
                {!isOpen && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold"
                    >
                        1
                    </motion.div>
                )}

                {/* Pulse Animation */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
            </motion.button>
        </>
    );
};
