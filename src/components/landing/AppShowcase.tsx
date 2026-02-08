import { motion } from "framer-motion";
import { LucideIcon, Check, TrendingUp, Package, Users, DollarSign, ShoppingCart, AlertCircle } from "lucide-react";

interface Feature {
  text: string;
}

interface AppShowcaseProps {
  icon: LucideIcon;
  badge: string;
  title: string;
  subtitle: string;
  features: Feature[];
  outcome: string;
  isReversed?: boolean;
  delay?: number;
}

export const AppShowcase = ({
  icon: Icon,
  badge,
  title,
  subtitle,
  features,
  outcome,
  isReversed = false,
  delay = 0,
}: AppShowcaseProps) => {
  // Dashboard widgets based on app type
  const getDashboardWidgets = () => {
    if (badge === "Retail Pro App") {
      return [
        { icon: DollarSign, label: "Today's Sales", value: "₹45,230", color: "text-green-500", bg: "bg-green-500/10" },
        { icon: ShoppingCart, label: "Orders", value: "127", color: "text-blue-500", bg: "bg-blue-500/10" },
        { icon: AlertCircle, label: "Low Stock", value: "23", color: "text-orange-500", bg: "bg-orange-500/10" },
        { icon: TrendingUp, label: "Growth", value: "+12%", color: "text-primary", bg: "bg-primary/10" },
      ];
    } else {
      // Distributor Pro App
      return [
        { icon: Package, label: "Pending Orders", value: "48", color: "text-blue-500", bg: "bg-blue-500/10" },
        { icon: Users, label: "Active Retailers", value: "156", color: "text-green-500", bg: "bg-green-500/10" },
        { icon: DollarSign, label: "Outstanding", value: "₹2.4L", color: "text-orange-500", bg: "bg-orange-500/10" },
        { icon: TrendingUp, label: "Dispatch Rate", value: "94%", color: "text-primary", bg: "bg-primary/10" },
      ];
    }
  };

  const widgets = getDashboardWidgets();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}
    >
      <div className={`space-y-6 ${isReversed ? "lg:order-2" : ""}`}>
        <div className="app-badge">
          <Icon className="w-5 h-5" />
          <span>{badge}</span>
        </div>

        <div>
          <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            {title}
          </h3>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: delay + 0.1 * index }}
              className="flex items-start gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-accent" />
              </div>
              <span className="text-foreground">{feature.text}</span>
            </motion.li>
          ))}
        </ul>

        <div className="pt-4 border-t border-border">
          <p className="text-sm font-medium text-primary">
            <span className="text-accent">✓ Outcome:</span> {outcome}
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className={`relative ${isReversed ? "lg:order-1" : ""}`}
      >
        <div className="glass-card p-8 lg:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display font-semibold text-foreground">{badge}</div>
              <div className="text-sm text-muted-foreground">PharmaZen Suite</div>
            </div>
          </div>

          {/* Dashboard Widgets */}
          <div className="grid grid-cols-2 gap-4">
            {widgets.map((widget, i) => {
              const WidgetIcon = widget.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: delay + 0.3 + i * 0.1 }}
                  className="relative overflow-hidden rounded-lg bg-card border border-border p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className={`w-8 h-8 rounded-lg ${widget.bg} flex items-center justify-center`}>
                      <WidgetIcon className={`w-4 h-4 ${widget.color}`} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className={`text-2xl font-bold ${widget.color}`}>
                      {widget.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {widget.label}
                    </div>
                  </div>
                  {/* Subtle gradient overlay */}
                  <div className={`absolute inset-0 ${widget.bg} opacity-5 pointer-events-none`} />
                </motion.div>
              );
            })}
          </div>

          {/* Mini Chart Visualization */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-muted-foreground">Performance Overview</span>
              <span className="text-xs text-accent">Live</span>
            </div>
            <div className="flex items-end gap-1 h-16">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: delay + 0.5 + i * 0.05 }}
                  className="flex-1 bg-gradient-to-t from-primary/50 to-primary rounded-t"
                  style={{ minHeight: "4px" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative glow */}
        <div className="absolute -z-10 inset-0 bg-primary/5 rounded-3xl blur-3xl" />
      </motion.div>
    </motion.div>
  );
};