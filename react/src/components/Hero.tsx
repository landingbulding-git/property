import { Button } from "@/components/ui/button";
import { Star, CheckCircle, ShieldCheck } from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export function Hero() {
  return (
    <section className="relative overflow-hidden flex items-center justify-center min-h-[100dvh] pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-10">
          
          {/* Social Proof Badges */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center text-xs lg:text-sm font-medium text-gray-600">
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-sm border border-gray-100 justify-center">
              <ShieldCheck className="w-3 h-3 lg:w-4 lg:h-4 text-brand-gold" />
              <span>A GDN Ingatlanhálózat kiemelt ajánlata</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-sm border border-gray-100 justify-center">
              <div className="flex text-brand-gold">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span>4.9 (1000+ értékelés)</span>
            </div>
          </div>

          {/* Headlines */}
          <div className="space-y-4 lg:space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight text-brand-dark">
              Költözzön be Erzsébetváros legstílusosabb otthonába 90 napon belül – egy polgári lakás eleganciája, az Ön igényeire szabva.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Elege van a drága, de rossz ízléssel felújított lakásokból? Használja ki ezt a ritka lehetőséget: vegyen egy értékálló alapot a Hernád utcában, és valósítsa meg álmai belsőépítészeti terveit a mi segítségünkkel.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-3 lg:gap-4">
            <Button size="lg" className="text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wide px-8 py-4 lg:px-10 lg:py-6 h-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
              Kérem az ingyenes visszahívást
            </Button>
            <p className="text-[10px] sm:text-xs text-gray-500 flex items-center justify-center gap-1">
              <CheckCircle className="w-3 h-3 text-green-500" />
              Nincs kötelezettség. Ingyenes hitelügyintézés 3%-os kamattal elérhető.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
