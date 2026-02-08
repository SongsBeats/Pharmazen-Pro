 import { AnimatedSection } from "./AnimatedSection";
 import { FeatureCard } from "./FeatureCard";
 import { 
   Zap, 
   Bell, 
   Heart, 
   TrendingUp, 
  BarChart3,
   DollarSign 
 } from "lucide-react";
 
 const features = [
   {
     icon: Zap,
     title: "Smart Automation",
     description: "Replace manual work with intelligent automation that handles billing, inventory, and compliance.",
   },
   {
     icon: Bell,
     title: "Action-Based Alerts",
     description: "Proactive notifications for expiry, reorders, and payments—not passive reports you forget.",
   },
   {
     icon: Heart,
     title: "Healthcare Integration",
     description: "Connect doctors, patients, and pharmacies with EHR, e-prescriptions, and teleconsultation.",
   },
   {
     icon: TrendingUp,
     title: "Growth Tools",
     description: "Revenue enablers, not just record keeping—analytics and insights to scale your business.",
   },
  {
    icon: BarChart3,
    title: "Action-Driven Reports",
    description: "Actionable reports that convert data into prioritized next steps—expiry risks, reorder priorities, and revenue opportunities.",
  },
   {
     icon: DollarSign,
     title: "Revenue Optimization",
     description: "Reduce losses from expiry, improve cash flow, and unlock new revenue streams.",
   },
 ];
 
 export const FeaturesSection = () => {
   return (
     <section id="features" className="section-padding relative overflow-hidden">
       <div className="absolute inset-0 bg-muted/30" />
       
       <div className="container mx-auto px-4 lg:px-8 relative z-10">
         <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
           <span className="app-badge mb-4">What We Built Different</span>
             <h2 className="text-3xl md:text-4xl lg:text-4xl font-display font-bold text-foreground mb-6">
             Beyond Billing—A Complete{" "}
             <span className="gradient-text">Pharma Ecosystem</span>
           </h2>
           <p className="text-lg text-muted-foreground">
             PharmaZen goes beyond billing. It connects the entire pharma supply chain and care journey.
           </p>
         </AnimatedSection>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
           {features.map((feature, index) => (
             <FeatureCard
               key={feature.title}
               icon={feature.icon}
               title={feature.title}
               description={feature.description}
               delay={index * 0.1}
             />
           ))}
         </div>
       </div>
     </section>
   );
 };