import { Check } from "lucide-react";

export function ComparisonSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark mb-4">
            Miért a Hernád utca 3. emelete a legjobb befektetés most?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-dark text-white">
                <th className="p-4 sm:p-6 font-serif text-lg">Jellemző</th>
                <th className="p-4 sm:p-6 font-serif text-lg bg-brand-gold/20">Hernád utcai ingatlan</th>
                <th className="p-4 sm:p-6 font-serif text-lg opacity-80">Piaci átlag</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 sm:p-6 font-medium text-gray-900">Négyzetméterár</td>
                <td className="p-4 sm:p-6 font-bold text-brand-dark bg-brand-gold/5">1,36 millió Ft/m²</td>
                <td className="p-4 sm:p-6 text-gray-500">1,32 millió Ft/m²</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 sm:p-6 font-medium text-gray-900">Belmagasság</td>
                <td className="p-4 sm:p-6 font-bold text-brand-dark bg-brand-gold/5">3,5 méter</td>
                <td className="p-4 sm:p-6 text-gray-500">2,7 méter</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 sm:p-6 font-medium text-gray-900">Extrák</td>
                <td className="p-4 sm:p-6 font-bold text-brand-dark bg-brand-gold/5 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  Erkély + Lift
                </td>
                <td className="p-4 sm:p-6 text-gray-500 italic">Gyakran hiányzik</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
