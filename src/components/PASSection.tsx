import { AlertTriangle, TrendingUp, Lightbulb, CheckCircle2, XCircle } from "lucide-react";

export function PASSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Problem Phase */}
          <div className="bg-red-50 rounded-3xl p-8 lg:p-12 border border-red-100">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0 text-red-600">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-red-900">
                  A "Tökéletes Otthon" Délibábja
                </h3>
                <p className="text-lg text-red-800/80 leading-relaxed">
                  „Unja már, hogy hetek óta csak túlárazott, de ízléstelenül felújított lakásokat talál?” Tudjuk, milyen érzés: órákat tölteni az ingatlanportálok böngészésével, csak azért, hogy olyan lakásokba fusson bele, ahol a felújítás nem az Ön ízlését tükrözi, de a vételárban már meg kell fizetnie a felárat.
                </p>
              </div>
            </div>
          </div>

          {/* Agitate & Solve Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Agitate Phase */}
            <div className="space-y-6 h-full flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0 text-orange-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-brand-dark">
                  A Halogatás és a Bizonytalanság Költsége
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                A legtöbb „felújítandó” lakásnál csak a sötét szobákat, az elavult konvektorokat és a málló vakolatot látja. Fél belekezdeni egy ekkora projektbe, mert:
              </p>
              <ul className="space-y-4">
                {[
                  "Nem tudja vizualizálni a tereket a 3,5 méteres belmagasság ellenére sem.",
                  "Retteg a rejtett költségektől és a megbízhatatlan kivitelezőktől.",
                  "Fél, hogy a végén egy sötét, élhetetlen ingatlanra költ el tízmilliókat. Minél tovább vár, a piaci árak annál magasabbra szöknek, az álomotthon pedig egyre távolabb kerül."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <XCircle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solve Phase */}
            <div className="bg-brand-teal text-white rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden relative h-full flex flex-col justify-center">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center shrink-0 text-brand-dark">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-brand-gold">
                    Az Új Mechanizmus – Lássa a Jövőt, Mielőtt Megvenné
                  </h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  A jó hír? Nem kell többé látatlanban döntenie. Mi nem csak egy 92 m²-es, téglaépítésű ingatlant kínálunk a Hernád utcában. Egy kész víziót adunk a kezébe:
                </p>
                <ul className="space-y-4">
                  {[
                    { title: "Interaktív látványtervek", desc: "Használja a \"csúsztatható\" (swipe) képünket, és nézze meg, hogyan válik a felújítandó polgári lakás egy modern, napfényes, amerikai konyhás otthonná." },
                    { title: "Tervezhető költségek", desc: "A liftes házban található, tágas terekre szabott felújítási kalkulációval segítünk, hogy pontosan tudja, mire számíthat." },
                    { title: "Értékálló alapok", desc: "Az impozáns épület, a frissen felújított mozaikcsempés lépcsőház és a kiváló közlekedés garantálja, hogy befektetése hosszú távon is kamatozik." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block">{item.title}:</strong>
                        <span className="text-gray-400">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
