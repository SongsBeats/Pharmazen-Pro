import { motion } from "framer-motion";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
    Target,
    Eye,
    Heart,
    Users,
    Award,
    TrendingUp,
    Shield,
    Zap,
    Globe
} from "lucide-react";

const About = () => {
    const stats = [
        { value: "10K+", label: "Active Users", icon: Users },
        { value: "50M+", label: "Prescriptions", icon: TrendingUp },
        { value: "99.9%", label: "Uptime", icon: Shield },
        { value: "₹500Cr+", label: "Revenue Protected", icon: Zap },
    ];

    const values = [
        {
            icon: Target,
            title: "Mission-Driven",
            description: "Transforming healthcare delivery through technology and innovation.",
        },
        {
            icon: Heart,
            title: "Patient-Centric",
            description: "Every decision we make prioritizes patient safety and care quality.",
        },
        {
            icon: Shield,
            title: "Trust & Security",
            description: "Bank-grade security and compliance with healthcare regulations.",
        },
        {
            icon: Zap,
            title: "Innovation First",
            description: "Continuously evolving with cutting-edge technology and AI.",
        },
    ];

    const team = [
        {
            name: "Dr. Rajesh Kumar",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
            bio: "15+ years in healthcare technology",
        },
        {
            name: "Priya Sharma",
            role: "CTO",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
            bio: "Former tech lead at major pharma companies",
        },
        {
            name: "Amit Patel",
            role: "Head of Product",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
            bio: "Product expert with pharmacy background",
        },
        {
            name: "Sneha Reddy",
            role: "VP of Operations",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
            bio: "Operations specialist in healthcare",
        },
    ];

    const milestones = [
        { year: "2024", event: "PharmaZen Founded", description: "Started our journey to revolutionize healthcare" },
        { year: "2025", event: "Officially Established", description: "Launched with mission-driven vision and technology excellence" },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24">
                {/* Hero Section */}
                <section className="container mx-auto px-4 lg:px-8 py-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                            Transforming <span className="gradient-text">Healthcare</span> Together
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            We're on a mission to make healthcare more accessible, efficient, and intelligent
                            through cutting-edge technology and unwavering commitment to excellence.
                        </p>
                    </motion.div>
                </section>

                {/* Stats */}
                <section className="container mx-auto px-4 lg:px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center glass-card p-6"
                                >
                                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                                    <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="container mx-auto px-4 lg:px-8 py-16">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card p-8"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-3xl font-display font-bold mb-4">Our Mission</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                To revolutionize the pharmaceutical and healthcare industry by providing
                                intelligent, integrated digital solutions that empower pharmacies, distributors,
                                doctors, and patients to deliver better healthcare outcomes.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card p-8"
                        >
                            <div className="w-12 h-12 rounded-xl bg-pharma-cyan/10 flex items-center justify-center mb-4">
                                <Eye className="w-6 h-6 text-pharma-cyan" />
                            </div>
                            <h2 className="text-3xl font-display font-bold mb-4">Our Vision</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                To become the world's most trusted healthcare technology platform,
                                connecting every stakeholder in the healthcare ecosystem and making
                                quality healthcare accessible to everyone, everywhere.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="container mx-auto px-4 lg:px-8 py-16 bg-muted/30">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass-card p-6 text-center"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold mb-2">{value.title}</h3>
                                    <p className="text-sm text-muted-foreground">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* Team Section - Hidden for future use
                    To enable this section, remove the {false && ...} wrapper.
                    The leadership team data is preserved in the 'team' array above.
                */}
                {false && (
                <section className="container mx-auto px-4 lg:px-8 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Meet Our Leadership
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Experienced professionals dedicated to transforming healthcare
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-6 text-center group hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-display font-bold mb-1">{member.name}</h3>
                                <p className="text-sm text-primary mb-2">{member.role}</p>
                                <p className="text-xs text-muted-foreground">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
                )}

                {/* Timeline */}
                <section className="container mx-auto px-4 lg:px-8 py-16 bg-muted/30">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Our Journey
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Key milestones in our mission to transform healthcare
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6 mb-8 last:mb-0"
                            >
                                <div className="flex-shrink-0 w-20 text-right">
                                    <div className="text-2xl font-display font-bold text-primary">
                                        {milestone.year}
                                    </div>
                                </div>
                                <div className="flex-shrink-0 flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                                    {index !== milestones.length - 1 && (
                                        <div className="w-0.5 h-full bg-border mt-2"></div>
                                    )}
                                </div>
                                <div className="glass-card p-6 flex-1 mb-4">
                                    <h3 className="text-xl font-display font-bold mb-2">{milestone.event}</h3>
                                    <p className="text-muted-foreground">{milestone.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
