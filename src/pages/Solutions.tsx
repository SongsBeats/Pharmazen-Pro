import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { SolutionsSection } from "@/components/landing/SolutionsSection";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <SolutionsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
