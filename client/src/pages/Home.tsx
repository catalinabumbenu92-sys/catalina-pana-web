import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, Quote } from "lucide-react";

/**
 * Cătălina Pană — Business online cu AI și produse digitale
 * 
 * Design Philosophy:
 * - Premium, elegant aesthetic with warm neutrals and strategic accents
 * - Preserve existing layout and color palette
 * - Add trust-building sections: emotional story, audience clarity, testimonials, FAQ
 * - Use full name "Cătălina Pană" throughout
 * - Maintain all Stan Store links and buttons
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-stone-50 to-stone-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="container flex items-center justify-between h-16">
          <div className="text-xl font-bold text-stone-900">
            <span className="text-amber-600">C</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-stone-700">
            <a href="#" className="hover:text-amber-600 transition">
              Acasă
            </a>
            <a href="#" className="hover:text-amber-600 transition">
              Program
            </a>
            <a href="#" className="hover:text-amber-600 transition">
              Mentorat
            </a>
            <a href="#" className="hover:text-amber-600 transition">
              Resurse
            </a>
          </div>
          <Button
            className="bg-stone-900 hover:bg-stone-800 text-white"
            size="sm"
          >
            Începe gratuit
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xs font-semibold text-amber-600 tracking-widest uppercase">
                  Business online cu AI · Produse digitale · România
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight">
                  Construiește primul tău business online cu AI.
                </h1>
              </div>

              <p className="text-lg text-stone-700 leading-relaxed max-w-lg">
                Îți arăt pas cu pas cum să alegi o nișă profitabilă, să creezi
                produse digitale cu AI și să le vânzi prin conținut organic —
                practic, fără reclame plătite și fără scurtături.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-stone-900 hover:bg-stone-800 text-white"
                  onClick={() => window.location.href = 'https://stan.store/CatalinaPana/p/primul-business-online-cu-ai'}
                >
                  Descarcă ghidul gratuit
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-stone-300 text-stone-900 hover:bg-stone-50"
                >
                  Vezi roadmap-ul
                </Button>
              </div>

              {/* Framework Pills */}
              <div className="pt-8 space-y-3 text-sm text-stone-600">
                <div className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-amber-600 rounded-full"></span>
                  <span>Problemă înainte de produs</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-amber-600 rounded-full"></span>
                  <span>Execuție înainte de automatizare</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-amber-600 rounded-full"></span>
                  <span>Încredere înainte de vânzare</span>
                </div>
              </div>
            </div>

            {/* Right: Portrait Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/manus-storage/1785618775624_ceec3920.png"
                  alt="Cătălina Pană"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-100 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-stone-200 rounded-full opacity-30 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-12 md:py-16 bg-white border-y border-stone-200">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2">
                Framework
              </p>
              <p className="text-2xl font-bold text-stone-900">
                Idee <span className="text-amber-600">→</span> Produs{" "}
                <span className="text-amber-600">→</span> Vânzare
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2">
                Începe simplu
              </p>
              <p className="text-stone-700">
                AI accelerează munca. Strategia îi dă direcție.
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2">
                100% organic
              </p>
              <p className="text-stone-700">
                Rigoare în strategie. Căldură în comunicare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Story Section */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8">
                Și eu am fost în locul tău...
              </h2>
            </div>

            <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
              <div className="space-y-4">
                <p className="font-semibold text-stone-900">Te simți copleșit?</p>
                <p className="font-semibold text-stone-900">Nu știi de unde să începi?</p>
                <p className="font-semibold text-stone-900">Te întrebi dacă online-ul chiar funcționează?</p>
                <p className="font-semibold text-stone-900">Ți-e teamă să investești timp și bani fără rezultate?</p>
              </div>

              <p className="text-xl font-semibold text-amber-600 pt-4">
                Și eu am fost exact în locul tău.
              </p>

              <p>
                Sunt Cătălina Pană, soție și mamă. Ca multe femei, mi-am dorit mai
                multă libertate, mai mult timp cu familia și un venit care să nu
                depindă de un program fix.
              </p>

              <p>
                Am început fără experiență în online și am învățat pas cu pas cum
                să folosesc inteligența artificială și produsele digitale pentru
                a construi un business real, care generează venit.
              </p>

              <p>
                Astăzi te ajut și pe tine să pornești de la zero și să-ți
                creezi propriul business online, fără să fi expert în
                tehnologie. Știu exact cum se simte să nu știi de unde să începi,
                și știu și cum se ajunge la rezultate.
              </p>

              <p className="text-stone-600 italic">
                Diferența între a dori și a face este un plan clar și ghidare pas cu pas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900">
              Pentru cine este acest program?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Oricine vrea să pornească de la zero",
              "Mame care doresc libertate și flexibilitate",
              "Persoane cu un job care vor venit suplimentar",
              "Cei care vor o sursă de venit independentă",
              "Cei care vor să construiască un business online cu AI și produse digitale",
            ].map((item, idx) => (
              <Card
                key={idx}
                className="p-6 border-stone-200 bg-stone-50 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-stone-900 font-medium">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold text-amber-600 tracking-widest uppercase mb-4">
              Scara de produse
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Începe unde ești. Crește cu nivelul potrivit de suport.
            </h2>
            <p className="text-lg text-stone-700">
              Începi gratuit, construiești independent în programul de €147 și
              alegi mentoratul de €599 numai când ai nevoie de ghidare personală.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Guide */}
            <Card className="p-8 border-stone-200 bg-white flex flex-col">
              <div className="mb-6">
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">
                  01 · Începe
                </p>
                <h3 className="text-2xl font-bold text-stone-900">
                  Primul meu Business Online cu AI
                </h3>
              </div>

              <div className="mb-6">
                <p className="text-3xl font-bold text-stone-900">Gratuit</p>
              </div>

              <div className="space-y-4 mb-6 flex-grow text-sm text-stone-700">
                <div>
                  <p className="font-semibold text-stone-900 mb-1">Pentru cine:</p>
                  <p>Oricine vrea să înceapă un business online de la zero, fără experiență.</p>
                </div>
                <div>
                  <p className="font-semibold text-stone-900 mb-1">Ce conține:</p>
                  <p>Matrice de nișă, prompturi AI explicate, plan de execuție în 14 zile.</p>
                </div>
                <div>
                  <p className="font-semibold text-stone-900 mb-1">Ce vei învăța:</p>
                  <p>Cum să alegi o nișă profitabilă, cum să validezi o problemă reală, cum să creezi prima idee de produs digital.</p>
                </div>
                <div>
                  <p className="font-semibold text-stone-900 mb-1">Structura:</p>
                  <p>PDF practic cu 13 pagini, gândite pentru implementare rapidă în 14 zile.</p>
                </div>
                <div>
                  <p className="font-semibold text-stone-900 mb-1">De ce este ideal:</p>
                  <p>Gratuit, rapid, practic, fără teorie inutilă. Primești exact ce ai nevoie pentru a face primul pas.</p>
                </div>
                <div>
                  <p className="font-semibold text-stone-900 mb-1">Rezultate:</p>
                  <p>După aplicare, vei avea o nișă validată, o problemă confirmată și o idee de produs gata de testat.</p>
                </div>
              </div>

              <Button 
                className="w-full bg-stone-900 hover:bg-stone-800 text-white"
                onClick={() => window.location.href = 'https://stan.store/CatalinaPana/p/primul-business-online-cu-ai'}
              >
                Obține ghidul gratuit
              </Button>
            </Card>

            {/* €147 Program */}
            <Card className="p-8 border-2 border-amber-600 bg-white flex flex-col shadow-lg">
              <div className="mb-6">
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">
                  02 · Construiește
                </p>
                <h3 className="text-2xl font-bold text-stone-900">
                  Primul meu Business Online cu AI
                </h3>
              </div>

              <div className="mb-6">
                <p className="text-3xl font-bold text-amber-600">€147</p>
              </div>

              <div className="mb-6 space-y-4 flex-grow text-sm text-stone-700">
                <div>
                  <p className="font-semibold text-stone-900 mb-1">Pentru cine:</p>
                  <p>Oricine vrea să construiască un business online complet, de la zero până la lansare.</p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900 mb-1">Ce conține:</p>
                  <p>15 module aplicate, template-uri, prompturi AI, worksheet-uri, plan săptămânal de 6 săptămâni.</p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900 mb-1">Ce vei învăța:</p>
                  <p>Cum să alegi nișa, cum să creezi produsul, cum să construiești brandul, cum să creezi conținut, cum să lansezi organic.</p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900 mb-1">Structura:</p>
                  <p>6 săptămâni, 3-5 ore pe săptămână, fiecare modul cu template-uri gata de folosit și AI prompts explicate.</p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900 mb-1">Ce primești:</p>
                  <p>Acces la 15 module video, template-uri descărcabile, prompturi AI, worksheet-uri, comunitate de suport.</p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900 mb-1">De ce este ideal:</p>
                  <p>Practic, structurat, affordable, implementabil de oricine. Fără teorie inutilă, doar acțiune și rezultate.</p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900 mb-1">Rezultate posibile:</p>
                  <p>Nișă validată, produs lansat, primii clienți, sistem testat, business care generează venit.</p>
                </div>
              </div>

              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => window.location.href = 'https://stan.store/CatalinaPana/p/primul-business-online-cu-aiprogram-complet'}
              >
                Accesează programul
              </Button>
            </Card>

            {/* €599 Mentoring */}
            <Card className="p-8 border-stone-200 bg-white flex flex-col">
              <div className="mb-6">
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">
                  03 · Accelerează
                </p>
                <h3 className="text-2xl font-bold text-stone-900">
                  AI Business Accelerator
                </h3>
              </div>

              <div className="mb-6">
                <p className="text-3xl font-bold text-stone-900">€599</p>
              </div>

              <div className="mb-6 space-y-4 flex-grow text-sm text-stone-700">
                <div>
                  <p className="font-semibold text-stone-900 mb-1">Pentru cine:</p>
                  <p>Oricine vrea ghidare personală și implementare accelerată, nu doar conținut.</p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900 mb-1">Cum funcționează:</p>
                  <p>Mentorat 1 la 1 direct cu mine, 8 sesiuni live în 8 săptămâni, plus feedback asincron de 2 ori pe săptămână.</p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900 mb-1">Ghidarea 1 la 1 înseamnă:</p>
                  <p>Audit individual al situației tale, plan personalizat, feedback direct pe munca ta, ajutor la probleme specifice.</p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900 mb-1">Implementare pas cu pas:</p>
                  <p>Fiecare săptămână are obiective clare, feedback pe ceea ce ai făcut, ajustări pentru săptămâna următoare.</p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900 mb-1">Ce primești:</p>
                  <p>8 sesiuni live (1 oră fiecare), 2 review-uri asincrone pe săptămână, acces la template-uri și resurse, suport direct.</p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900 mb-1">De ce să alegi mentoratul:</p>
                  <p>Rezultate mai rapide, feedback personalizat, evitezi greșeli costisitoare, implementezi cu încredere.</p>
                </div>
              </div>

              <Button
                className="w-full bg-stone-900 hover:bg-stone-800 text-white"
                onClick={() => window.location.href = 'https://stan.store/CatalinaPana/p/mentorat-ai-business-accelerator'}
              >
                Alege mentoratul
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900">
              Oameni care au construit cu Cătălina Pană
            </h2>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {/* €147 Program Testimonials */}
            <div>
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-8">
                Primul meu Business Online cu AI
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Andreea M.",
                    text: "Am început complet pierdută, fără să știu ce să fac. Programul a făcut totul clar. Fiecare pas era explicat, template-urile erau gata de folosit, iar AI prompt-urile m-au ajutat să lucrez mai repede. După 6 săptămâni aveam un produs lansat.",
                  },
                  {
                    name: "Bianca R.",
                    text: "Cel mai bun lucru a fost că nu era teorie inutilă. Doar acțiune. Fiecare modul avea ceva concret de făcut, iar rezultatele au venit repede. Acum mă simt încrezută să vorbesc despre business-ul meu.",
                  },
                  {
                    name: "Elena D.",
                    text: "Eram sceptică că pot face asta de la zero. Dar cu ghidarea pas cu pas, template-urile și prompturile AI, totul a devenit posibil. Acum am o nișă validată și clienți reali. Mersi, Cătălina!",
                  },
                ].map((testimonial, idx) => (
                  <Card key={idx} className="p-6 border-stone-200 bg-stone-50">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-600">★</span>
                      ))}
                    </div>
                    <p className="text-stone-700 mb-4 italic">{testimonial.text}</p>
                    <p className="font-semibold text-stone-900">{testimonial.name}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* €599 Mentorship Testimonials */}
            <div>
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-8">
                AI Business Accelerator
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Alexandra P.",
                    text: "Mentoratul a schimbat totul. Aveam o idee dar nu știam cum s-o implementez. Cu feedback-ul personal al Cătălinei, fiecare săptămână aveam progres clar. M-a ajutat să evit greșeli costisitoare și să lansez cu încredere. Investiția s-a recuperat de 10 ori.",
                  },
                  {
                    name: "Cristina D.",
                    text: "Am urmat programul independent dar m-am blocat. Mentoratul a fost exact ce aveam nevoie. Sesiunile live cu Cătălina au fost practice și personalizate. Acum am un business care generează venit consistent. Nu aș fi făcut-o fără ghidarea ei.",
                  },
                ].map((testimonial, idx) => (
                  <Card key={idx} className="p-6 border-stone-200 bg-stone-50">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-600">★</span>
                      ))}
                    </div>
                    <p className="text-stone-700 mb-4 italic">{testimonial.text}</p>
                    <p className="font-semibold text-stone-900">{testimonial.name}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900">
                Răspunsuri la întrebările tale
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-stone-200">
                <AccordionTrigger className="text-lg font-semibold text-stone-900 hover:text-amber-600 py-4">
                  Este pentru începători?
                </AccordionTrigger>
                <AccordionContent className="text-stone-700 pb-4">
                  Da, absolut! Programul este special conceput pentru cei care
                  abia încep. Nu ai nevoie de experiență prealabilă în online
                  sau tehnologie. Voi te ghidez pas cu pas prin fiecare etapă,
                  de la alegerea nișei până la lansarea produsului.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-stone-200">
                <AccordionTrigger className="text-lg font-semibold text-stone-900 hover:text-amber-600 py-4">
                  Am nevoie de experiență?
                </AccordionTrigger>
                <AccordionContent className="text-stone-700 pb-4">
                  Nu. Singurul lucru de care ai nevoie este dorința de a învăța
                  și de a construi ceva. Voi te voi învăța cum să folosești AI
                  și cum să creezi produse digitale de la zero. Toate instrumentele
                  și platformele sunt explicate pas cu pas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-stone-200">
                <AccordionTrigger className="text-lg font-semibold text-stone-900 hover:text-amber-600 py-4">
                  Cât durează?
                </AccordionTrigger>
                <AccordionContent className="text-stone-700 pb-4">
                  Ghidul gratuit poate fi parcurs în câteva ore. Programul de
                  €147 este structurat pe 6 săptămâni cu aproximativ 3-5 ore pe
                  săptămână. Mentoratul de €599 durează 8 săptămâni cu sesiuni
                  live săptămânale și feedback asincron.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-stone-200">
                <AccordionTrigger className="text-lg font-semibold text-stone-900 hover:text-amber-600 py-4">
                  Pot face asta din România?
                </AccordionTrigger>
                <AccordionContent className="text-stone-700 pb-4">
                  Da, cu siguranță! Programul este special conceput pentru
                  antreprenori din România. Poți vinde produse digitale din
                  orice țară, iar Cătălina Pană te va ajuta să construiești
                  un business 100% online, adaptat pieței românești.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-stone-200">
                <AccordionTrigger className="text-lg font-semibold text-stone-900 hover:text-amber-600 py-4">
                  De ce am nevoie pentru a începe?
                </AccordionTrigger>
                <AccordionContent className="text-stone-700 pb-4">
                  Ai nevoie de: un computer, o conexiune la internet, și
                  disponibilitate de câteva ore pe săptămână. Asta e tot!
                  Voi te voi ghida prin toate instrumentele și platformele
                  pe care trebuie să le folosești. Investiția inițială este
                  minimă.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Decision Helper Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-amber-50 to-stone-50">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Nu știi ce program ți se potrivește?
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="p-8 border-stone-200 bg-white">
              <p className="text-lg text-stone-700 leading-relaxed mb-4">
                <span className="font-semibold text-stone-900">Dacă ești la început:</span>{" "}
                Începe cu ghidul gratuit. Vei înțelege cum funcționează totul,
                vei face primii pași și vei ști exact ce vrei să construiești.
              </p>
              <Button 
                className="bg-stone-900 hover:bg-stone-800 text-white"
                onClick={() => window.location.href = 'https://stan.store/CatalinaPana/p/primul-business-online-cu-ai'}
              >
                Descarcă ghidul gratuit
              </Button>
            </Card>

            <Card className="p-8 border-2 border-amber-600 bg-white">
              <p className="text-lg text-stone-700 leading-relaxed mb-4">
                <span className="font-semibold text-stone-900">Dacă vrei ghidare personală:</span>{" "}
                Alege mentoratul de €599. Vei lucra direct cu Cătălina Pană,
                vei primi feedback pe implementarea ta și vei accelera rezultatele.
              </p>
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => window.location.href = 'https://stan.store/CatalinaPana/p/mentorat-ai-business-accelerator'}
              >
                Vezi mentoratul
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-stone-900 to-stone-800 text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Primul pas</h2>
          <p className="text-xl text-stone-200 mb-8">
            Pornește de la zero cu un plan de 14 zile.
          </p>
          <p className="text-lg text-stone-300 mb-12">
            Descarcă PDF-ul gratuit și construiește direcția înainte să
            investești luni într-un produs pe care piața nu l-a cerut.
          </p>
          <Button
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white"
            onClick={() => window.location.href = 'https://stan.store/CatalinaPana/p/primul-business-online-cu-ai'}
          >
            Descarcă ghidul
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold text-white mb-4">
                <span className="text-amber-600">C</span>
              </div>
              <p className="text-sm">
                AI, produse digitale și creștere organică pentru începătorii din
                România care vor să construiască pas cu pas — fără reclame plătite.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Explorează</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-amber-600 transition">
                    Acasă
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-600 transition">
                    Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-600 transition">
                    Mentorat
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-600 transition">
                    Resurse
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Conversație</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.instagram.com/catalinabusinessonline/"
                    className="hover:text-amber-600 transition"
                  >
                    @catalinabusinessonline
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-amber-600 transition">
                    Termeni și condiții
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-600 transition">
                    Politica de confidențialitate
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center text-sm">
            <p>© 2026 Cătălina Pană. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
