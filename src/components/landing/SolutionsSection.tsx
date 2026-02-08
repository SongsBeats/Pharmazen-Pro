import { AnimatedSection } from "./AnimatedSection";
import { AppShowcase } from "./AppShowcase";
import { Store, Truck } from "lucide-react";

const solutions = [
  {
    icon: Store,
    badge: "Retail Pro App",
    title: "High-Speed Counters, Zero Losses",
    subtitle: "Designed for pharmacies that need speed, accuracy, and complete control.",
    features: [
      { text: "Ultra-fast GST billing with auto batch, expiry, HSN, and tax rules" },
      { text: "Offline-first billing with automatic cloud sync" },
      { text: "Smart expiry alerts with return recommendations" },
      { text: "Doctor account and e-prescription integration" },
      { text: "Digital Schedule H & H1 registers for compliance" },
      { text: "Patient-wise outstanding and treatment history" },
    ],
    outcome: "Faster billing. Lower expiry losses. Better doctor trust. Stronger patient loyalty.",
    isReversed: false,
  },
  {
    icon: Truck,
    badge: "Distributor Pro App",
    title: "Scale, Speed, and Credit Protection",
    subtitle: "Built for distributors who need efficient order management and cash flow control.",
    features: [
      { text: "Digital retailer order intake—no calls, no WhatsApp" },
      { text: "FIFO and expiry-priority dispatch logic" },
      { text: "Auto credit-limit enforcement before dispatch" },
      { text: "Retailer outstanding and aging analysis" },
      { text: "Complete return request management with tracking" },
      { text: "Multi-branch and multi-warehouse support" },
    ],
    outcome: "Fewer errors. Faster dispatch. Stronger cash flow. Lower returns and expiry risk.",
    isReversed: true,
  },
];

export const SolutionsSection = () => {
  return (
    <section id="solutions" className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="app-badge mb-4">Integrated Solutions</span>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-display font-bold text-foreground mb-6">
            Two Powerful Apps,{" "}
            <span className="gradient-text">One Unified Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a pharmacy or distributor—PharmaZen has the tools you need.
          </p>
        </AnimatedSection>

        <div className="space-y-12 lg:space-y-16">
          {solutions.map((solution, index) => (
            <AppShowcase
              key={solution.badge}
              {...solution}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};