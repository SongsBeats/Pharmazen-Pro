 import { motion } from "framer-motion";
 import { LucideIcon } from "lucide-react";
 
 interface FeatureCardProps {
   icon: LucideIcon;
   title: string;
   description: string;
   delay?: number;
 }
 
 export const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
   return (
     <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay }}
       whileHover={{ y: -8, transition: { duration: 0.3 } }}
       className="feature-card group cursor-default"
     >
       <div className="icon-container mb-5 group-hover:scale-110 transition-transform duration-300">
         <Icon className="w-7 h-7" />
       </div>
       <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
       <p className="text-muted-foreground leading-relaxed">{description}</p>
     </motion.div>
   );
 };