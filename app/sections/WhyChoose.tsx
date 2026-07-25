"use client";

import { motion } from "framer-motion";
import { Sparkles, XCircle, FileX, Clock, HeartHandshake, Infinity } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Simples, Prático e Intuitivo",
    description:
      "Estes são os principais adjetivos usados pelos nossos clientes. Se gosta de soluções descomplicadas, nós somos a escolha ideal.",
    image: "simple",
  },
  {
    icon: XCircle,
    title: "Sem Contratos, Nem Burocracias",
    description:
      "Cancele a sua subscrição a qualquer momento. A verdadeira fidelização advém da satisfação, não de cláusulas de permanência.",
    image: "contract",
  },
  {
    icon: HeartHandshake,
    title: "Melhor Suporte ao Cliente",
    description:
      "Equipa de suporte dedicada que responde quase de imediato. Suporte ilimitado e gratuito para todos os clientes.",
    image: "support",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative py-32 bg-dark-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-vendus-400 font-medium mb-4">
            Porquê Vendus?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            A escolha de <span className="gradient-text">+15.000 empresas</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Empresas e profissionais em Angola confiam no Vendus como o seu 
            software de faturação online e POS.
          </p>
        </motion.div>

        {/* Reasons */}
        <div className="space-y-24">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="w-14 h-14 rounded-2xl bg-vendus-600/10 flex items-center justify-center">
                  <reason.icon className="w-7 h-7 text-vendus-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">{reason.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {reason.description}
                </p>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 text-vendus-400 hover:text-vendus-300 font-medium transition-colors group"
                >
                  Experimente Grátis
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Visual */}
              <div className={`relative ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="absolute -inset-4 bg-vendus-600/10 rounded-3xl blur-2xl" />
                <div className="relative glass-strong rounded-3xl p-1 overflow-hidden">
                  <div className="bg-dark-800 rounded-2xl p-6">
                    {reason.image === "simple" && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full bg-vendus-600/20 flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-vendus-400" />
                          </div>
                          <div>
                            <p className="text-white font-medium">Experiência do Cliente</p>
                            <p className="text-sm text-gray-500">Baseado em 2.000+ avaliações</p>
                          </div>
                        </div>
                        {[
                          { label: "Facilidade de Uso", value: 98 },
                          { label: "Velocidade", value: 95 },
                          { label: "Design Intuitivo", value: 97 },
                          { label: "Satisfação Geral", value: 96 },
                        ].map((item, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-300">{item.label}</span>
                              <span className="text-vendus-400 font-medium">{item.value}%</span>
                            </div>
                            <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.value}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: idx * 0.1 }}
                                className="h-full bg-gradient-to-r from-vendus-600 to-vendus-400 rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {reason.image === "contract" && (
                      <div className="text-center py-8">
                        <div className="relative inline-block mb-6">
                          <div className="w-24 h-32 bg-dark-700 rounded-lg border-2 border-dashed border-gray-600 flex items-center justify-center">
                            <FileX className="w-10 h-10 text-gray-500" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                            <XCircle className="w-5 h-5 text-red-400" />
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Zero Burocracia</h4>
                        <p className="text-gray-400 text-sm max-w-xs mx-auto mb-6">
                          Sem contratos de fidelização. Sem taxas de cancelamento. 
                          Só pagas se estiveres satisfeito.
                        </p>
                        <div className="flex justify-center gap-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-emerald-400">0</p>
                            <p className="text-xs text-gray-500">Contratos</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-emerald-400">0</p>
                            <p className="text-xs text-gray-500">Taxas</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-emerald-400">100%</p>
                            <p className="text-xs text-gray-500">Liberdade</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {reason.image === "support" && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-vendus-600/20 flex items-center justify-center">
                              <HeartHandshake className="w-5 h-5 text-vendus-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-white">Suporte Vendus</p>
                              <div className="flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-xs text-emerald-400">Online agora</span>
                              </div>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">Agora</span>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-dark-700/50 rounded-xl p-4 ml-8">
                            <p className="text-sm text-gray-300">
                              "Olá! Preciso de ajuda para configurar as taxas de IVA no meu perfil."
                            </p>
                            <span className="text-xs text-gray-600 mt-1 block">Cliente • há 2 min</span>
                          </div>
                          <div className="bg-vendus-600/10 rounded-xl p-4 border border-vendus-600/20">
                            <p className="text-sm text-gray-200">
                              "Olá! Claro que sim. Vou guiá-lo passo a passo. Primeiro, aceda a Configurações → Impostos..."
                            </p>
                            <span className="text-xs text-vendus-400 mt-1 block">Suporte Vendus • há 1 min</span>
                          </div>
                          <div className="bg-emerald-600/10 rounded-xl p-4 ml-8 border border-emerald-600/20">
                            <p className="text-sm text-emerald-300">
                              "Perfeito! Consegui configurar. Muito obrigado pela rapidez! ⭐"
                            </p>
                            <span className="text-xs text-emerald-600 mt-1 block">Cliente • há 30 seg</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                          <Infinity className="w-4 h-4 text-vendus-400" />
                          <span className="text-xs text-gray-500">Suporte ilimitado e gratuito</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
