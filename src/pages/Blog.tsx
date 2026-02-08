import { motion } from "framer-motion";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const blogPosts = [
        {
            title: "10 Ways to Reduce Medicine Wastage in Your Pharmacy",
            excerpt: "Learn practical strategies to minimize inventory losses and improve profitability through smart inventory management.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
            author: "Dr. Rajesh Kumar",
            date: "Feb 1, 2026",
            readTime: "5 min read",
            category: "Inventory Management",
        },
        {
            title: "Understanding GST Compliance for Pharmacies in 2026",
            excerpt: "A comprehensive guide to GST regulations, filing requirements, and best practices for pharmaceutical businesses.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
            author: "Priya Sharma",
            date: "Jan 28, 2026",
            readTime: "8 min read",
            category: "Compliance",
        },
        {
            title: "The Future of Digital Healthcare in India",
            excerpt: "Exploring emerging trends in telemedicine, e-prescriptions, and digital health records that are transforming patient care.",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
            author: "Dr. Sneha Reddy",
            date: "Jan 25, 2026",
            readTime: "6 min read",
            category: "Healthcare Trends",
        },
        {
            title: "How AI is Revolutionizing Pharmacy Operations",
            excerpt: "Discover how artificial intelligence and machine learning are optimizing inventory, predicting demand, and improving customer service.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
            author: "Amit Patel",
            date: "Jan 22, 2026",
            readTime: "7 min read",
            category: "Technology",
        },
        {
            title: "Building Customer Loyalty in Your Pharmacy",
            excerpt: "Proven strategies to increase customer retention, improve satisfaction, and build a loyal customer base.",
            image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop",
            author: "Kavita Menon",
            date: "Jan 20, 2026",
            readTime: "5 min read",
            category: "Business Growth",
        },
        {
            title: "Essential Metrics Every Pharmacy Owner Should Track",
            excerpt: "Key performance indicators and analytics that help you make data-driven decisions for your pharmacy business.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
            author: "Rajiv Kumar",
            date: "Jan 18, 2026",
            readTime: "6 min read",
            category: "Analytics",
        },
    ];

    const categories = ["All", "Inventory Management", "Compliance", "Healthcare Trends", "Technology", "Business Growth", "Analytics"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24 pb-20">
                {/* Hero Section */}
                <section className="container mx-auto px-4 lg:px-8 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                            Healthcare <span className="gradient-text">Insights</span> & Resources
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                            Expert advice, industry trends, and practical tips for pharmacy and healthcare professionals
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 h-14 text-lg"
                            />
                        </div>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-wrap gap-3 justify-center mb-12"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === category
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "bg-muted hover:bg-muted/80 text-muted-foreground"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                                        {post.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Read More */}
                                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                                        Read More
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredPosts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <p className="text-muted-foreground text-lg">
                                No articles found matching your criteria.
                            </p>
                        </motion.div>
                    )}

                    {/* Newsletter CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-16 glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl font-display font-bold mb-4">
                            Stay Updated with Latest Insights
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Subscribe to our newsletter and get the latest healthcare trends, tips, and updates delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="h-12"
                            />
                            <Button className="h-12 px-8 glow">
                                Subscribe
                            </Button>
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Blog;
