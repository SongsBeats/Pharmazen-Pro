import { motion } from "framer-motion";
import {
    Star,
    Quote,
    Building2,
    MapPin
} from "lucide-react";

export const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Dr. Ramesh Patel",
            role: "Owner, MedPlus Pharmacy",
            location: "Mumbai, Maharashtra",
            company: "MedPlus Pharmacy Chain",
            rating: 5,
            text: "PharmaZen has completely transformed how we manage our 5 pharmacy locations. The inventory management alone has saved us lakhs in reduced wastage. Highly recommended!",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
        },
        {
            name: "Priya Sharma",
            role: "Pharmacist",
            location: "Bangalore, Karnataka",
            company: "HealthFirst Pharmacy",
            rating: 5,
            text: "The billing system is incredibly fast and accurate. Our customers love the digital prescriptions feature. Customer service is also top-notch!",
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
        },
        {
            name: "Amit Desai",
            role: "Managing Director",
            location: "Delhi NCR",
            company: "Wellness Distributors Pvt Ltd",
            rating: 5,
            text: "As a distributor, the B2B features are game-changing. Real-time inventory sync with retailers and automated invoicing have streamlined our entire operation.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        },
        {
            name: "Dr. Sneha Reddy",
            role: "General Physician",
            location: "Hyderabad, Telangana",
            company: "City Care Clinic",
            rating: 5,
            text: "The e-prescription integration is seamless. My patients can get their medicines from any PharmaZen-connected pharmacy. It's the future of healthcare!",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
        },
        {
            name: "Rajiv Kumar",
            role: "Pharmacy Manager",
            location: "Pune, Maharashtra",
            company: "Apollo Pharmacy",
            rating: 5,
            text: "The analytics dashboard gives us insights we never had before. We can now predict demand, optimize stock, and improve our margins significantly.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        },
        {
            name: "Kavita Menon",
            role: "Owner",
            location: "Chennai, Tamil Nadu",
            company: "Care & Cure Pharmacy",
            rating: 5,
            text: "Switching to PharmaZen was the best decision for our business. The mobile app lets me monitor everything even when I'm not at the store. Absolutely love it!",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
        },
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
                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-display font-bold mb-4">
                        Trusted by <span className="gradient-text">10,000+</span> Healthcare Professionals
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        See what our customers have to say about their experience with PharmaZen
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-6 hover:-translate-y-2 transition-transform duration-300"
                        >
                            {/* Quote Icon */}
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <Quote className="w-5 h-5 text-primary" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 pt-4 border-t border-border">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                                />
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold truncate">{testimonial.name}</h4>
                                    <p className="text-sm text-muted-foreground truncate">{testimonial.role}</p>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                        <Building2 className="w-3 h-3" />
                                        <span className="truncate">{testimonial.company}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <MapPin className="w-3 h-3" />
                                        <span>{testimonial.location}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
