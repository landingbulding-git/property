import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Tag, Home } from "lucide-react";

export function CloserSection() {
  return (
    <section className="py-16 bg-brand-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
            Szerezze meg ezt az ingatlant, mielőtt a befektetők lecsapnak rá!
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto mb-8">
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <Tag className="w-6 h-6 text-brand-gold shrink-0" />
              <div>
                <div className="font-bold text-lg">122,55 M Ft</div>
                <div className="text-xs opacity-70">irányár (piaci átlag alatt)</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <Clock className="w-6 h-6 text-brand-gold shrink-0" />
              <div>
                <div className="font-bold text-lg">Azonnal</div>
                <div className="text-xs opacity-70">birtokba vehető</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <Home className="w-6 h-6 text-brand-gold shrink-0" />
              <div>
                <div className="font-bold text-lg">Ingyenes</div>
                <div className="text-xs opacity-70">CSOK+ és hiteltanácsadás</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto text-center">
            <Button size="lg" className="w-full text-base lg:text-lg font-bold uppercase tracking-wide px-8 py-6 h-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all mb-4">
              Kérem az ingyenes visszahívást
            </Button>
            <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
              <CheckCircle className="w-3 h-3 text-green-500" />
              Válasz 24 órán belül. Nincs rejtett költség.
            </p>
        </div>
      </div>
    </section>
  );
}
