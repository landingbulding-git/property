import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Mennyibe fog kerülni a teljes felújítás?",
    answer: "A látványterveink alapján készült kalkulációt a megtekintéskor átadjuk. Segítünk a költséghatékony alapanyagok kiválasztásában."
  },
  {
    question: "Milyen a környék zaja?",
    answer: "A ház előtt egyirányú a forgalom, így a Hernád utca ezen szakasza kifejezetten csendes, ideális pihenésre."
  },
  {
    question: "Van parkolási lehetőség?",
    answer: "Az utcán közterületi parkolás biztosított, de a közelben több parkolóház is található."
  }
];

export function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark">
            Gyakori kérdések
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium text-brand-dark">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
