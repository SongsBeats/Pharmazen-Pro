import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    Linkedin,
    Twitter,
    Facebook,
    Instagram
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    company: z.string().optional(),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Form data:", data);

        toast({
            title: "Message sent successfully!",
            description: "We'll get back to you within 24 hours.",
        });

        reset();
        setIsSubmitting(false);
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            content: "unifiedhealthtech@gmail.com",
            link: "mailto:unifiedhealthtech@gmail.com",
        },
        {
            icon: Phone,
            title: "Call Us",
            content: "+91 891 921 6351",
            link: "tel:+918919216351",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            content: "132, Chandragiri Villas, Nalgonda, Telangana",
            link: "https://www.google.com/maps?q=132%20Chandragiri%20Villas%2C%20Nalgonda",
        },
        {
            icon: Clock,
            title: "Business Hours",
            content: "Mon-Fri: 9:00 AM - 6:00 PM IST",
            link: null,
        },
    ];

    const socialLinks = [
        { icon: Linkedin, link: "https://linkedin.com", label: "LinkedIn" },
        { icon: Twitter, link: "https://twitter.com", label: "Twitter" },
        { icon: Facebook, link: "https://facebook.com", label: "Facebook" },
        { icon: Instagram, link: "https://instagram.com", label: "Instagram" },
    ];

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
                            Get in <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </motion.div>
                </section>

                {/* Contact Info Cards */}
                <section className="container mx-auto px-4 lg:px-8 py-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass-card p-6 text-center hover:-translate-y-1 transition-transform duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">{info.title}</h3>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            target={info.link.startsWith("http") ? "_blank" : undefined}
                                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                        >
                                            {info.content}
                                        </a>
                                    ) : (
                                        <p className="text-sm text-muted-foreground">{info.content}</p>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* Contact Form & Map */}
                <section className="container mx-auto px-4 lg:px-8 py-16">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <MessageSquare className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="text-2xl font-display font-bold">Send us a Message</h2>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <Label htmlFor="name">Full Name *</Label>
                                    <Input
                                        id="name"
                                        {...register("name")}
                                        placeholder="John Doe"
                                        className="mt-1.5"
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                                    )}
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            {...register("email")}
                                            placeholder="john@example.com"
                                            className="mt-1.5"
                                        />
                                        {errors.email && (
                                            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Label htmlFor="phone">Phone *</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            {...register("phone")}
                                            placeholder="+91 891 921 6351"
                                            className="mt-1.5"
                                        />
                                        {errors.phone && (
                                            <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="company">Company (Optional)</Label>
                                    <Input
                                        id="company"
                                        {...register("company")}
                                        placeholder="Your Company Name"
                                        className="mt-1.5"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="subject">Subject *</Label>
                                    <Input
                                        id="subject"
                                        {...register("subject")}
                                        placeholder="How can we help?"
                                        className="mt-1.5"
                                    />
                                    {errors.subject && (
                                        <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="message">Message *</Label>
                                    <Textarea
                                        id="message"
                                        {...register("message")}
                                        placeholder="Tell us more about your inquiry..."
                                        rows={5}
                                        className="mt-1.5"
                                    />
                                    {errors.message && (
                                        <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full glow"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    <Send className="ml-2 w-4 h-4" />
                                </Button>
                            </form>
                        </motion.div>

                        {/* Map & Social */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            {/* Map */}
                            <div className="glass-card p-2 h-[400px] overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.082177513217388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, borderRadius: "0.75rem" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            {/* Social Links */}
                            <div className="glass-card p-8">
                                <h3 className="text-xl font-display font-bold mb-4">Connect With Us</h3>
                                <p className="text-muted-foreground mb-6">
                                    Follow us on social media for the latest updates and healthcare insights.
                                </p>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={social.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 group"
                                                aria-label={social.label}
                                            >
                                                <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
