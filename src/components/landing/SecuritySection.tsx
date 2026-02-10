import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import {
  Zap,
  Cloud,
  Lock,
  Shield,
  Server,
  KeyRound
} from "lucide-react";

const securityFeatures = [
  {
    icon: Zap,
    title: "Smart Automation",
    description: "Replace manual work with intelligent automation that handles billing, inventory, and compliance.",
  },
  {
    icon: Cloud,
    title: "Secure Cloud Backup",
    description: "Automatic encrypted backups to cloud with point-in-time recovery options.",
  },
  {
    icon: Lock,
    title: "Role-Based Access",
    description: "Granular permissions ensure users only access what they need.",
  },
  {
    icon: Shield,
    title: "Encrypted Records",
    description: "All health and financial records encrypted at rest and in transit.",
  },
  {
    icon: Server,
    title: "High Availability",
    description: "99.9% uptime SLA with disaster recovery and failover systems.",
  },
  {
    icon: KeyRound,
    title: "Compliance Ready",
    description: "Built to align with Indian regulations, with secure audit trails and digital registers for business transparency.",
  },
];

export const SecuritySection = () => {
  return (
    <section id="security" className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="app-badge mb-4">Enterprise Security</span>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-display font-bold text-foreground mb-6">
            Security, Reliability &{" "}
            <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built with enterprise-grade security and reliability from the ground up.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 lg:p-8 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
