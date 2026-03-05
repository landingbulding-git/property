export function ExpertSection() {
  return (
    <section className="py-16 bg-brand-teal text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="w-full md:w-1/3">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-gold/30">
              <img 
                src="https://picsum.photos/seed/realtor/600/800" 
                alt="Kovács Réka" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-gold">
              Kovács Réka
            </h2>
            <p className="text-xl font-medium opacity-90">
              GDN Ingatlanhálózat
            </p>
            <blockquote className="text-2xl font-serif italic leading-relaxed opacity-90 border-l-4 border-brand-gold pl-6">
              "Nem csak négyzetmétereket árulok, hanem lehetőségeket. Ismerem a Hernád utca minden kövét, és segítek Önnek látni azt az értéket, amit egy felújítandó lakás rejt."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
