import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FloatingIcon } from "./FloatingIcon";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  ArrowRight,
  Pill,
  Stethoscope,
  Truck,
  ShieldCheck,
  BarChart3,
  Users
} from "lucide-react";

export const HeroSection = () => {

  return (
    <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pharma-cyan/5 rounded-full blur-3xl" />
      </div>

      {/* Floating icons - hidden on mobile, visible on desktop */}
      <FloatingIcon icon={Pill} className="hidden lg:block top-[20%] left-[10%]" delay={0.2} />
      <FloatingIcon icon={Stethoscope} className="hidden lg:block top-[15%] right-[15%]" delay={0.4} duration={7} />
      <FloatingIcon icon={Truck} className="hidden lg:block bottom-[25%] left-[8%]" delay={0.6} duration={5} />
      <FloatingIcon icon={ShieldCheck} className="hidden lg:block bottom-[20%] right-[10%]" delay={0.8} duration={8} />
      <FloatingIcon icon={BarChart3} className="hidden lg:block top-[40%] right-[5%]" delay={1} duration={6} />
      <FloatingIcon icon={Users} className="hidden lg:block bottom-[35%] left-[15%]" delay={1.2} duration={7} />

      <div className="container mx-auto px-4 lg:px-8 pt-16 lg:pt-20 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            The Complete Digital Platform for Pharma & Healthcare
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6"
          >
            Transform Your{" "}
            <span className="gradient-text">Pharma Business</span>{" "}
            with Intelligence
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            PharmaZen is a next-generation digital ecosystem connecting pharmacies,
            distributors, doctors, patients, and administrators—automating operations,
            reducing losses, and enabling digital healthcare.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="glow text-base px-8 h-12 group">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Stats with Animated Counters */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: 10000, label: "Active Pharmacies", suffix: "+" },
              { value: 50, label: "Prescriptions Processed", suffix: "M+" },
              { value: 99.9, label: "Uptime Guaranteed", suffix: "%" },
              { value: 500, label: "Revenue Protected", prefix: "₹", suffix: "Cr+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};