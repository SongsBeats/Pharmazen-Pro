 import { motion } from "framer-motion";
 import { LucideIcon } from "lucide-react";
 
 interface FloatingIconProps {
   icon: LucideIcon;
   className?: string;
   delay?: number;
   duration?: number;
 }
 
 export const FloatingIcon = ({ 
   icon: Icon, 
   className = "", 
   delay = 0,
   duration = 6
 }: FloatingIconProps) => {
   return (
     <motion.div
       initial={{ opacity: 0, scale: 0 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.5, delay }}
       className={`absolute ${className}`}
     >
       <motion.div
         animate={{
           y: [0, -15, 0],
           rotate: [0, 5, 0, -5, 0],
         }}
         transition={{
           duration,
           repeat: Infinity,
           ease: "easeInOut",
           delay,
         }}
         className="p-4 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 shadow-card"
       >
         <Icon className="w-8 h-8 text-primary" />
       </motion.div>
     </motion.div>
   );
 };