import { Maximize2, Coffee, Accessibility } from "lucide-react";

const features = [
  {
    icon: Maximize2,
    title: "Polgári terek, korlátlan lehetőségekkel",
    description: "A 3,5 méteres belmagasság és a hatalmas nyílászárók nemcsak presztízst sugároznak, hanem lehetővé teszik galéria kialakítását is, így növelve a hasznos területet."
  },
  {
    icon: Coffee,
    title: "Reggeli kávé a saját erkélyén",
    description: "A 4 m²-es, utcai kilátással rendelkező erkély ritka kincs a VII. kerületben – teremtsen egy privát szigetet a város felett."
  },
  {
    icon: Accessibility,
    title: "Akadálymentes közlekedés, klasszikus környezetben",
    description: "Bár az épület 1950 előtt épült, a lift biztosítja a kényelmet minden generáció számára, miközben az ikonikus mozaikcsempés lépcsőház megőrzi a ház patináját."
  }
];

export function ValueProps() {
  return (
    <section className="py-16 bg-brand-cream">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6 text-brand-gold">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
