"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Headphones,
  FileCheck,
  Globe,
  BarChart3,
  Lock,
  Smartphone,
  Cloud,
  Receipt,
  Users,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Faturação Ultra-Rápida",
    description: "Emita qualquer documento em segundos. Interface intuitiva que reduz o tempo de faturação em 80%.",
    color: "from-vendus-500 to-vendus-300",
    bgColor: "bg-vendus-600/10",
    iconColor: "text-vendus-400",
  },
  {
    icon: Shield,
    title: "Validado pela AGT",
    description: "Software certificado e validado pela Administração Geral Tributária de Angola. Total conformidade fiscal.",
    color: "from-emerald-500 to-emerald-300",
    bgColor: "bg-emerald-600/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: Smartphone,
    title: "Multi-Dispositivo",
    description: "Funciona perfeitamente em computador, tablet e telemóvel. Aceda ao seu negócio de qualquer lugar.",
    color: "from-purple-500 to-purple-300",
    bgColor: "bg-purple-600/10",
    iconColor: "text-purple-400",
  },
  {
    icon: Cloud,
    title: "100% na Nuvem",
    description: "Dados sincronizados em tempo real. Sem instalações complexas nem backups manuais.",
    color: "from-sky-500 to-sky-300",
    bgColor: "bg-sky-600/10",
    iconColor: "text-sky-400",
  },
  {
    icon: BarChart3,
    title: "Relatórios Inteligentes",
    description: "Dashboards e relatórios detalhados para tomar as melhores decisões para o seu negócio.",
    color: "from-orange-500 to-orange-300",
    bgColor: "bg-orange-600/10",
    iconColor: "text-orange-400",
  },
  {
    icon: Headphones,
    title: "Suporte Ilimitado",
    description: "Equipa de suporte dedicada disponível para ajudar. Resposta quase imediata a todas as solicitações.",
    color: "from-pink-500 to-pink-300",
    bgColor: "bg-pink-600/10",
    iconColor: "text-pink-400",
  },
  {
    icon: Lock,
    title: "Segurança Máxima",
    description: "Encriptação de nível bancário, backups automáticos e conformidade com GDPR e legislação angolana.",
    color: "from-red-500 to-red-300",
    bgColor: "bg-red-600/10",
    iconColor: "text-red-400",
  },
  {
    icon: Receipt,
    title: "Todos os Documentos",
    description: "Faturas, recibos, notas de crédito, notas de débito, orçamentos, guias de transporte e mais.",
    color: "from-teal-500 to-teal-300",
    bgColor: "bg-teal-600/10",
    iconColor: "text-teal-400",
  },
  {
    icon: Clock,
    title: "Sem Contratos",
    description: "Cancele a sua subscrição a qualquer momento. Sem burocracias nem letras miúdas.",
    color: "from-amber-500 to-amber-300",
    bgColor: "bg-amber-600/10",
    iconColor: "text-amber-400",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 bg-dark-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vendus-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-vendus-400 font-medium mb-4">
            Funcionalidades
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tudo o que precisas,{" "}
            <span className="gradient-text">num só lugar</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Uma plataforma completa com todas as ferramentas para gerir o teu negócio 
            de forma simples, segura e eficiente.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative"
            >
              <div className="relative h-full glass rounded-2xl p-6 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden">
                {/* Hover glow */}
                <div className={`absolute -inset-px bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 blur-xl`} />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-vendus-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
