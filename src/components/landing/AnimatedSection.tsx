 import { motion } from "framer-motion";
 import { ReactNode } from "react";
 
 interface AnimatedSectionProps {
   children: ReactNode;
   className?: string;
   delay?: number;
 }
 
 export const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
   return (
     <motion.div
       initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: "-100px" }}
       transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
       className={className}
     >
       {children}
     </motion.div>
   );
 };
 
 export const FadeIn = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
   return (
     <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay }}
       className={className}
     >
       {children}
     </motion.div>
   );
 };
 
 export const SlideInLeft = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
   return (
     <motion.div
       initial={{ opacity: 0, x: -50 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6, delay, ease: "easeOut" }}
       className={className}
     >
       {children}
     </motion.div>
   );
 };
 
 export const SlideInRight = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
   return (
     <motion.div
       initial={{ opacity: 0, x: 50 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6, delay, ease: "easeOut" }}
       className={className}
     >
       {children}
     </motion.div>
   );
 };
 
 export const ScaleIn = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
   return (
     <motion.div
       initial={{ opacity: 0, scale: 0.9 }}
       whileInView={{ opacity: 1, scale: 1 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay, ease: "easeOut" }}
       className={className}
     >
       {children}
     </motion.div>
   );
 };