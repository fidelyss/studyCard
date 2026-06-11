import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Zap, Shield, Users } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Landing Page de Alta Conversão - Carteira de Estudante Digital
 * Design Philosophy: Modern Conversion-Focused Minimalism
 * 
 * Estrutura:
 * 1. Hero (Ultra Direto)
 * 2. Prova Social (Imediata)\n * 3. Como Funciona (Passos)
 * 4. Benefícios (Ícones)
 * 5. Plano de Preço
 * 6. FAQ (Mínimo)
 * 7. Footer
 * 
 * Objetivo: Usuário entende em <5 segundos e clica em <15 segundos
 */

export default function Home() {
  const [userCount, setUserCount] = useState(12847);
  const [isScrolled, setIsScrolled] = useState(false);

  // Simular crescimento de usuários
  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Detectar scroll para sticky button
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTA = () => {
    // Simular ação de compra
    alert("Redirecionando para checkout...");
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-soft">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-poppins font-bold text-sm">C</span>
            </div>
            <span className="font-poppins font-bold text-lg text-foreground">Carteira Digital</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-foreground border-border hover:bg-secondary"
          >
            Entrar
          </Button>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-blue-50 py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Copy */}
            <div className="flex flex-col gap-6 order-2 md:order-1">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground leading-tight">
                  Pare de pagar inteiro
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 font-poppins font-semibold">
                  Use sua carteirinha digital e pague <span className="text-primary">metade</span>
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm md:text-base text-foreground/70 font-inter">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Fica pronta rápido</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Funciona em todo o Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Documento oficial</span>
                </div>
              </div>

              <Button
                onClick={handleCTA}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-poppins font-semibold text-lg md:text-xl py-7 md:py-8 rounded-lg shadow-soft-lg w-full md:w-fit transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                <Zap className="w-6 h-6 mr-2" />
                Quero pagar meia agora
              </Button>

              <p className="text-xs md:text-sm text-foreground/60 font-inter font-medium">
                ⏱️ Leva menos de 5 minutos • Sem burocracia • Começa agora
              </p>
            </div>

            {/* Right: Image */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663128109836/cQTKQVKsnCSufzfikoo3y3/hero-carteira-idCBJKKnr5Wc7mTLQCyH4B.webp"
                  alt="Carteira Digital no Celular"
                  className="relative w-full h-auto rounded-2xl shadow-soft-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROVA SOCIAL RÁPIDA ===== */}
      <section className="bg-white py-8 md:py-12 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Usuários */}
            <div className="flex flex-col items-center text-center gap-2">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl md:text-4xl font-poppins font-bold text-primary">
                  {userCount.toLocaleString("pt-BR")}
                </span>
                <span className="text-sm text-foreground/60 font-inter">+</span>
              </div>
              <p className="text-sm md:text-base text-foreground/70 font-inter">
                Estudantes já economizando
              </p>
            </div>

            {/* Aceitação */}
            <div className="flex flex-col items-center text-center gap-2">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-accent">
                100%
              </div>
              <p className="text-sm md:text-base text-foreground/70 font-inter">
                Válida em todo o Brasil
              </p>
            </div>

            {/* Satisfação */}
            <div className="flex flex-col items-center text-center gap-2">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-primary">
                4.9★
              </div>
              <p className="text-sm md:text-base text-foreground/70 font-inter">
                Avaliação dos usuários
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section className="bg-white py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12 text-foreground">
            4 passos para economizar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
            {[
              { step: 1, title: "Envie documentos", desc: "RG, CPF e comprovante de matrícula" },
              { step: 2, title: "Validação rápida", desc: "Nossa equipe verifica em minutos" },
              { step: 3, title: "Receba no celular", desc: "Carteirinha digital pronta para usar" },
              { step: 4, title: "Comece a economizar", desc: "Use em cinema, shows, eventos..." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-3 text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-poppins font-bold text-lg mx-auto shadow-soft">
                  {item.step}
                </div>
                <h3 className="font-poppins font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-foreground/60 font-inter">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEMONSTRAÇÃO VISUAL ===== */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-10 text-foreground">
            Funciona em qualquer lugar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663128109836/cQTKQVKsnCSufzfikoo3y3/cinema-usage-TWxHAeNRRRdUFmWEs5N4Hn.webp",
                title: "No Cinema",
                desc: "Pague meia entrada",
              },
              {
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663128109836/cQTKQVKsnCSufzfikoo3y3/event-usage-dH26q3yCpLy4BDpQ9SUUse.webp",
                title: "Em Eventos",
                desc: "Acesso garantido com desconto",
              },
            ].map((item, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl shadow-soft">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 md:h-72 object-cover"
                />
                <div className="bg-white p-4 flex flex-col gap-1">
                  <h3 className="font-poppins font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground/60 font-inter">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFÍCIOS ===== */}
      <section className="bg-white py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-10 text-foreground">
            Onde você economiza
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: "🎬", label: "Cinema" },
              { icon: "🎵", label: "Shows" },
              { icon: "🎭", label: "Teatro" },
              { icon: "⚽", label: "Esportes" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 p-4 md:p-6 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors"
              >
                <span className="text-4xl md:text-5xl">{item.icon}</span>
                <span className="font-inter font-medium text-sm md:text-base text-foreground text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REDUÇÃO DE OBJEÇÃO ===== */}
      <section className="bg-blue-50 py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Seguro",
                desc: "Você recebe direto no celular. Ninguém mais acessa.",
              },
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "Rápido",
                desc: "Processo simples. Sem burocracia complicada.",
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Confiável",
                desc: "Documento oficial reconhecido em todo Brasil.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-3 text-center">
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="font-poppins font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-foreground/70 font-inter">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROVA SOCIAL (DEPOIMENTOS) ===== */}
      <section className="bg-white py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-10 text-foreground">
            O que os estudantes dizem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Maria Silva",
                role: "Estudante de Engenharia",
                text: "Muito fácil, usei no mesmo dia. Já economizei R$ 150 em cinemas!",
                avatar: "👩",
              },
              {
                name: "João Santos",
                role: "Estudante de Direito",
                text: "Valeu muito a pena. Rápido, seguro e funciona em tudo.",
                avatar: "👨",
              },
              {
                name: "Ana Costa",
                role: "Estudante de Medicina",
                text: "Melhor investimento que fiz. Recomendo para todos!",
                avatar: "👩‍🦰",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="p-6 bg-secondary/30 border-border hover:shadow-soft transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{item.avatar}</div>
                  <div>
                    <p className="font-poppins font-semibold text-foreground text-sm">
                      {item.name}
                    </p>
                    <p className="text-xs text-foreground/60 font-inter">{item.role}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 font-inter italic">"{item.text}"</p>
                <div className="mt-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLANO DE PREÇO ===== */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-10 text-foreground">
            Plano Simples
          </h2>

          <div className="max-w-md mx-auto">
            <Card className="border-2 border-primary shadow-soft-lg overflow-hidden">
              <div className="bg-primary text-white p-6 md:p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-2">
                  Plano Digital
                </h3>
                <p className="text-sm text-white/80 font-inter">Tudo que você precisa</p>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div className="text-center">
                  <span className="text-5xl md:text-6xl font-poppins font-bold text-primary">
                    R$ 49,90
                  </span>
                  <p className="text-sm text-foreground/60 font-inter mt-2">
                    Válida por 1 ano
                  </p>
                </div>

                <div className="space-y-3 border-t border-b border-border py-6">
                  {[
                    "✔ Acesso imediato",
                    "✔ Uso nacional",
                    "✔ Documento digital",
                    "✔ Válida em todo Brasil",
                    "✔ Suporte 24/7",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-inter">
                      <span className="text-accent font-bold">{item.split(" ")[0]}</span>
                      <span className="text-foreground">{item.slice(3)}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={handleCTA}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-poppins font-semibold text-lg py-7 rounded-lg shadow-soft-lg transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  Emitir agora
                </Button>

                <p className="text-xs text-foreground/50 text-center font-inter">
                  🔒 Pagamento seguro • Sem compromisso
                </p>
              </div>
            </Card>
          </div>

          {/* Urgência */}
          <div className="text-center mt-8">
            <p className="text-sm md:text-base text-primary font-poppins font-semibold">
              ⚡ Desconto disponível hoje • Pode sair do ar a qualquer momento
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-12 md:py-16">
        <div className="container max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-10 text-foreground">
            Dúvidas Frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: "Quanto tempo leva para receber?",
                a: "A carteirinha fica pronta em até 24 horas. Você recebe direto no seu celular.",
              },
              {
                q: "É realmente válida em todo Brasil?",
                a: "Sim! É um documento oficial reconhecido por lei em todo o território nacional.",
              },
              {
                q: "E se eu perder meu celular?",
                a: "Sem problemas. Você acessa sua conta em qualquer outro celular. Seus dados estão seguros.",
              },
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg px-4">
                <AccordionTrigger className="font-poppins font-semibold text-foreground hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-inter text-foreground/70">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-foreground text-white py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-white/10">
            <div>
              <h4 className="font-poppins font-bold mb-3">Empresa</h4>
              <ul className="space-y-2 text-sm font-inter text-white/70">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-poppins font-bold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm font-inter text-white/70">
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-poppins font-bold mb-3">Redes Sociais</h4>
              <ul className="space-y-2 text-sm font-inter text-white/70">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">TikTok</a></li>
                <li><a href="#" className="hover:text-white transition">YouTube</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-inter text-white/60">
            <p>© 2026 Carteira Digital. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <span>🔒 ICP-Brasil</span>
              <span>✓ Lei Federal</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== FLOATING CTA (Sticky Button) ===== */}
      {isScrolled && (
        <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <Button
            onClick={handleCTA}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-poppins font-semibold rounded-full shadow-soft-lg px-8 py-4 flex items-center gap-2 text-base md:text-lg transition-all duration-200 hover:shadow-lg hover:scale-110 active:scale-95"
          >
            <Zap className="w-5 h-5" />
            Comprar agora
          </Button>
        </div>
      )}
    </div>
  );
}
