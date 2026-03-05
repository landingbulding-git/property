import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Ruler, Flame, Eye, ArrowRight } from "lucide-react";

const items = [
  {
    title: "Reprezentatív nappali polgári eleganciával",
    description: "Klasszikus stukkók és modern kényelem ötvözete, hogy Ön büszkén fogadhassa vendégeit. Az eredeti cserépkályha és a 3,5 méteres belmagasság megőrzése mellett modern, sötét tölgyfa parkettát és elegáns falfelületeket terveztünk, így a lakás megőrzi történelmi báját, miközben minden mai luxusigényt kielégít.",
    beforeImage: "https://fgmrfarmye1aovqu.public.blob.vercel-storage.com/1before.webp",
    afterImage: "https://fgmrfarmye1aovqu.public.blob.vercel-storage.com/1after.webp",
  },
  {
    title: "Gasztronómiai élmény prémium környezetben",
    description: "Márványfelületek és beépített technológia, hogy a főzés ne házimunka, hanem kikapcsolódás legyen. A tágas konyhában a függőleges csempeburkolat és a rejtett világítás tágítja a teret, a márványmintás pult pedig tartós és elegáns felületet biztosít a mindennapi használathoz.",
    beforeImage: "https://fgmrfarmye1aovqu.public.blob.vercel-storage.com/2before.webp",
    afterImage: "https://fgmrfarmye1aovqu.public.blob.vercel-storage.com/2after.webp",
  },
  {
    title: "Intelligens tárolás és letisztult érkezés",
    description: "Beépített gardróbrendszer és tágas előtér, hogy az otthonába lépve azonnal a rend és nyugalom fogadja. A boltíves átjárók és az egyedi gyártású, fa borítású tárolóegységek maximalizálják a helykihasználást, így a 92 m² minden négyzetmétere hasznos és esztétikus marad.",
    beforeImage: "https://fgmrfarmye1aovqu.public.blob.vercel-storage.com/3before.webp",
    afterImage: "https://fgmrfarmye1aovqu.public.blob.vercel-storage.com/3after.webp",
  },
  {
    title: "Saját privát spa a város szívében",
    description: "Márvány burkolatok és arany szerelvények, hogy minden reggel ötcsillagos szállodai élménnyel induljon. A tágas fürdőszobát modern gépészeti megoldásokkal (villanybojler helyett esztétikus burkolt megoldásokkal) és egyedi világítással álmodtuk meg, ahol a mosókonyha funkció is észrevétlenül simul a designba.",
    beforeImage: "https://fgmrfarmye1aovqu.public.blob.vercel-storage.com/4before.webp",
    afterImage: "https://fgmrfarmye1aovqu.public.blob.vercel-storage.com/4after.webp",
  },
  {
    title: "Értékálló terek és építészeti örökség",
    description: "Hagyományos kazettás falburkolatok és tágas terek, amelyek évtizedekig megőrzik piaci fölényüket. Az üresen álló szobák látványtervei bizonyítják: a halszálka parketta és a míves nyílászárók olyan alapot adnak, amely a VII. kerületben kiemelkedő befektetési értéket képvisel.",
    beforeImage: "https://fgmrfarmye1aovqu.public.blob.vercel-storage.com/5before.webp",
    afterImage: "https://fgmrfarmye1aovqu.public.blob.vercel-storage.com/5after.webp",
  },
  {
    title: "Inspiráló fényár és természetes terek",
    description: "Hatalmas nyílászárók és északkeleti tájolás, hogy otthona egész nap világos és energiával teli legyen. A nagy ablakok előtt kialakított dolgozósarok és a kényelmes pihenőzóna ideális helyszínt biztosít a home office-hoz és az esti relaxációhoz egyaránt.",
    beforeImage: "https://fgmrfarmye1aovqu.public.blob.vercel-storage.com/6before.webp",
    afterImage: "https://fgmrfarmye1aovqu.public.blob.vercel-storage.com/6after.webp",
  },
  {
    title: "Rugalmas belső elrendezés",
    description: "Különnyíló szobák és optimális térszervezés, hogy a lakás az Ön életviteléhez igazodjon. Legyen szó vendégszobáról, gyerekszobáról vagy csendes hálóról, a 3 külön bejáratú helyiség biztosítja a család minden tagjának a privát szférát és a csendet.",
    beforeImage: "https://fgmrfarmye1aovqu.public.blob.vercel-storage.com/7before.webp",
    afterImage: "https://fgmrfarmye1aovqu.public.blob.vercel-storage.com/7after.webp",
  },
];

export function TzikTzakSection() {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="space-y-24">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            const showCTA = (index + 1) % 2 === 0; // Show CTA after every 2nd item (2, 4, 6)

            return (
              <div key={index} className="flex flex-col gap-12">
                <div className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Text Content */}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Icon Row */}
                    <div className="flex flex-wrap gap-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <Ruler className="w-5 h-5 text-brand-gold" />
                        <span>Belmagasság: 3,5 m</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <Flame className="w-5 h-5 text-brand-gold" />
                        <span>Fűtés: Modernizálható</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <Eye className="w-5 h-5 text-brand-gold" />
                        <span>Kilátás: Utcai</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Content */}
                  <div className="flex-1 w-full">
                    {/* TEMPORARY CHANGE FOR DIAGNOSIS */}
                    {index === 0 ? (
                      <div className="flex gap-4">
                        <img
                          src={item.beforeImage}
                          alt="Before renovation - Diagnostic View"
                          className="w-1/2 h-auto object-cover rounded-xl shadow-2xl border-4 border-white"
                          draggable={false}
                        />
                        <img
                          src={item.afterImage}
                          alt="After renovation - Diagnostic View"
                          className="w-1/2 h-auto object-cover rounded-xl shadow-2xl border-4 border-white"
                          draggable={false}
                        />
                      </div>
                    ) : (
                      <div className="shadow-2xl rounded-2xl overflow-hidden border-4 border-white">
                        <BeforeAfterSlider
                          beforeImage={item.beforeImage}
                          afterImage={item.afterImage}
                          beforeLabel="Jelenlegi állapot"
                          afterLabel="Látványterv"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Conditional CTA */}
                {showCTA && (
                  <div className="flex justify-center pt-4">
                    <Button size="lg" className="text-base lg:text-lg font-bold uppercase tracking-wide px-10 py-6 h-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                      Kérem az ingyenes visszahívást
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
