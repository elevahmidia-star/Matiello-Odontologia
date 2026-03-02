import Image from "next/image";
import { ChevronRight, Calendar, Sparkles, Clock, Flower } from "lucide-react";

// Custom Tooth Icon
const ToothIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10 21.5V16a2 2 0 0 1 4 0v5.5" />
    <path d="M14 21.5c2.5 0 4.5-2 4.5-4.5V11c0-3-2-5-6-5s-6 2-6 5v6c0 2.5 2 4.5 4.5 4.5" />
    <path d="M8 6.5c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5" />
  </svg>
);

const PHONE_NUMBER = "54999153605"; // Replace with actual number

const links = [
  {
    id: 1,
    title: "Especial Dia da Mulher",
    subtitle: "50% no Clareamento",
    icon: <Flower className="w-6 h-6 text-[#E1C699]" />,
    message:
      "Olá, gostaria de participar da Campanha Especial Dia da Mulher da Matiello Odontologia. Tenho interesse em receber as orientações sobre o benefício exclusivo no clareamento dental e agendar minha avaliação personalizada.",
  },
  {
    id: 2,
    title: "Agendar Avaliação",
    subtitle: "",
    icon: <Calendar className="w-6 h-6 text-[#E1C699]" />,
    message:
      "Olá, gostaria de agendar uma avaliação personalizada na Matiello Odontologia. Tenho interesse em receber um planejamento individualizado para meu sorriso.",
  },
  {
    id: 3,
    title: "Lentes de Contato Dental",
    subtitle: "Estética dental de alto padrão.",
    icon: <Sparkles className="w-6 h-6 text-[#E1C699]" />,
    message:
      "Olá, tenho interesse em realizar lentes de contato dental. Gostaria de agendar uma avaliação para entender as possibilidades de planejamento estético personalizado.",
  },
  {
    id: 4,
    title: "Implantes Dentários",
    subtitle: "Reabilitação oral com precisão.",
    icon: <ToothIcon className="w-6 h-6 text-[#E1C699]" />,
    message:
      "Olá, gostaria de receber informações sobre implantes dentários. Tenho interesse em agendar uma avaliação para planejamento de reabilitação oral.",
  },
  {
    id: 5,
    title: "Atendimento Prioritário",
    subtitle: "Avaliação rápida para urgências.",
    icon: <Clock className="w-6 h-6 text-[#E1C699]" />,
    message:
      "Olá, preciso de atendimento prioritário. Estou com desconforto e gostaria de verificar disponibilidade para avaliação o quanto antes.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-[#E1C699] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md z-10 flex flex-col items-center">
        {/* Logo Section */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#E1C699] opacity-20 blur-2xl rounded-full" />
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-[#E1C699]/20 shadow-[0_0_30px_rgba(225,198,153,0.15)]">
            <Image
              src="https://i.postimg.cc/8zd2GMYS/llll.png"
              alt="Matiello Odontologia Logo"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Header Text */}
        <div className="text-center mb-6 space-y-2">
          <h1 className="font-serif text-2xl sm:text-3xl font-medium tracking-normal text-white">
            MATIELLO ODONTOLOGIA
          </h1>
          <p className="text-[#E1C699] text-sm sm:text-base font-light tracking-wide px-4">
            Implantes dentários, lentes de contato e protocolos de reabilitação.
          </p>
          <p className="text-white/50 text-xs uppercase tracking-[0.2em] mt-2">
            Clínica Odontológica
          </p>
        </div>

        {/* Bloco de Dor */}
        <div className="w-full mb-10">
          <div className="w-12 h-px bg-[#E1C699]/30 mx-auto mb-4"></div>
          <a
            href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Olá, preciso de atendimento prioritário. Estou com dor/desconforto e gostaria de verificar disponibilidade para avaliação o quanto antes.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center group"
          >
            <div className="flex items-center justify-center space-x-2 mb-1">
              <span className="text-sm">🚨</span>
              <span className="text-[#E1C699] text-sm font-medium group-hover:text-white transition-colors">
                Está com dor ou desconforto?
              </span>
            </div>
            <p className="text-white/60 text-xs font-light group-hover:text-white/80 transition-colors">
              Atendimento prioritário para casos urgentes.
            </p>
          </a>
        </div>

        {/* Links Section */}
        <div className="w-full space-y-4">
          {links.map((link) => {
            const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(link.message)}`;

            return (
              <a
                key={link.id}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center p-4 sm:p-5 w-full bg-[#141414] border rounded-2xl transition-all duration-300 hover:bg-[#1a1a1a] hover:-translate-y-0.5 ${
                  link.id === 1
                    ? "border-[#E1C699]/40 hover:border-[#E1C699]/60 shadow-[0_0_15px_rgba(225,198,153,0.1)] hover:shadow-[0_0_25px_rgba(225,198,153,0.25)]"
                    : "border-[#E1C699]/20 hover:border-[#E1C699]/40 hover:shadow-[0_0_20px_rgba(225,198,153,0.15)]"
                }`}
              >
                {/* Exclusivo Badge */}
                {link.id === 1 && (
                  <div className="absolute -top-2.5 right-4 bg-[#E1C699] text-[#0a0a0a] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(225,198,153,0.3)]">
                    Exclusivo
                  </div>
                )}

                {/* Icon */}
                <div className="flex-shrink-0 mr-4 p-2 bg-[#E1C699]/5 rounded-xl group-hover:bg-[#E1C699]/10 transition-colors duration-300">
                  {link.icon}
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0 pr-4">
                  <h2 className={`text-base sm:text-lg font-medium text-white leading-tight group-hover:text-[#E1C699] transition-colors duration-300 ${link.subtitle ? 'mb-1' : ''}`}>
                    {link.title}
                  </h2>
                  {link.subtitle && (
                    <p className="text-xs sm:text-sm text-white/60 leading-snug line-clamp-2">
                      {link.subtitle}
                    </p>
                  )}
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0">
                  <ChevronRight className="w-5 h-5 text-[#E1C699]/50 group-hover:text-[#E1C699] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Social Proof */}
        <div className="mt-12 mb-6 flex flex-col items-center space-y-2 text-center">
          <div className="flex items-center space-x-2 text-[#E1C699]/80 text-xs">
            <span className="text-[10px]">⭐</span>
            <span>+35 anos de experiência</span>
          </div>
          <div className="flex items-center space-x-2 text-[#E1C699]/80 text-xs">
            <span className="text-[10px]">⭐</span>
            <span>Atendimento com hora marcada</span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pb-8">
          <p className="text-white/30 text-xs tracking-wider">
            © {new Date().getFullYear()} Matiello Odontologia. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </main>
  );
}
