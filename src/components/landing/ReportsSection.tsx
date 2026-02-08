 import { motion } from "framer-motion";
 import { AnimatedSection } from "./AnimatedSection";
 import { 
   BarChart3, 
   Users, 
   ShoppingCart, 
   Package, 
   Calendar, 
   CreditCard,
   RotateCcw,
   FileText
 } from "lucide-react";
 
 const reports = [
   { icon: BarChart3, name: "Sales Report", color: "bg-primary/10 text-primary" },
   { icon: Users, name: "Customer Analysis", color: "bg-pharma-emerald/10 text-pharma-emerald" },
   { icon: ShoppingCart, name: "Purchase Report", color: "bg-pharma-cyan/10 text-pharma-cyan" },
   { icon: Package, name: "Stock Report", color: "bg-pharma-amber/10 text-pharma-amber" },
   { icon: Calendar, name: "Expiry Report", color: "bg-destructive/10 text-destructive" },
   { icon: CreditCard, name: "Outstanding Report", color: "bg-primary/10 text-primary" },
   { icon: RotateCcw, name: "Returns Report", color: "bg-pharma-emerald/10 text-pharma-emerald" },
   { icon: FileText, name: "GST Compliance", color: "bg-pharma-cyan/10 text-pharma-cyan" },
 ];
 
 const reportFeatures = [
   "Real-time data updates",
   "One-click export to Excel/PDF",
   "Alert-linked for action triggers",
   "Decision-ready insights",
 ];
 
 export const ReportsSection = () => {
   return (
     <section id="reports" className="section-padding relative overflow-hidden">
       <div className="absolute inset-0 bg-muted/30" />
       
       <div className="container mx-auto px-4 lg:px-8 relative z-10">
         <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
           <span className="app-badge mb-4">Smart Analytics</span>
           <h2 className="text-3xl md:text-4xl lg:text-4xl font-display font-bold text-foreground mb-6">
             Action-Driven Reports,{" "}
             <span className="gradient-text">Not Static Data</span>
           </h2>
           <p className="text-lg text-muted-foreground">
             Every report is designed to drive action—real-time, exportable, alert-linked, and decision-ready.
           </p>
         </AnimatedSection>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
           {reports.map((report, index) => (
             <motion.div
               key={report.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: index * 0.05 }}
               whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
               className="glass-card p-5 flex items-center gap-4 cursor-default"
             >
               <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${report.color}`}>
                 <report.icon className="w-6 h-6" />
               </div>
               <span className="font-medium text-foreground">{report.name}</span>
             </motion.div>
           ))}
         </div>
 
         <AnimatedSection delay={0.3} className="flex flex-wrap justify-center gap-4">
           {reportFeatures.map((feature, index) => (
             <motion.span
               key={feature}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm"
             >
               <span className="w-2 h-2 rounded-full bg-accent" />
               {feature}
             </motion.span>
           ))}
         </AnimatedSection>
       </div>
     </section>
   );
 };