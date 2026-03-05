import { Calendar, FileText, Key, Home } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Személyes megtekintés",
    description: "Foglaljon időpontot egy 15 perces bejárásra Kovács Rékával."
  },
  {
    icon: FileText,
    title: "Hitel- és tervkonzultáció",
    description: "Szakértőink segítenek a 3%-os FIX hitel és a felújítási költségvetés optimalizálásában."
  },
  {
    icon: Key,
    title: "Adásvétel és kulcsátadás",
    description: "Biztonságos jogi háttérrel, gyors ügyintézéssel zárjuk az üzletet."
  },
  {
    icon: Home,
    title: "Élvezze az új otthonát",
    description: "Vegye birtokba a felújított, értéknövelt ingatlanát."
  }
];

export function ProcessSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark">
            Váljon tulajdonossá 3 egyszerű lépésben
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-100 -z-10 transform translate-y-4" />

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-brand-dark text-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:bg-brand-gold transition-colors z-10">
                <step.icon className="w-7 h-7" />
              </div>
              <div className="absolute top-0 right-0 bg-gray-100 text-gray-400 text-xs font-bold px-2 py-1 rounded-full -mt-2 -mr-2 md:hidden">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
