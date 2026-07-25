"use client";

import { motion } from "framer-motion";
import { Check, Zap, Building2, Store, UtensilsCrossed } from "lucide-react";

const plans = [
  {
    name: "Faturação",
    icon: Zap,
    price: "4.900",
    period: "/mês",
    description: "Perfeito para escritórios, freelancers e agências",
    features: [
      "Faturas e recibos ilimitados",
      "Fatura eletrónica",
      "Relatórios básicos",
      "1 utilizador",
      "Suporte por email",
      "App móvel",
    ],
    cta: "Começar Grátis",
    popular: false,
    color: "border-gray-700",
    badgeColor: "bg-gray-700",
  },
  {
    name: "Retalho",
    icon: Store,
    price: "7.900",
    period: "/mês",
    description: "Ideal para lojas, sapatarias e floristas",
    features: [
      "Tudo do plano Faturação",
      "Gestão de stocks",
      "Múltiplos POS",
      "Gestão de tamanhos/cores",
      "Vendas offline",
      "3 utilizadores",
      "Suporte prioritário",
    ],
    cta: "Começar Grátis",
    popular: true,
    color: "border-vendus-500",
    badgeColor: "bg-vendus-600",
  },
  {
    name: "Restauração",
    icon: UtensilsCrossed,
    price: "9.900",
    period: "/mês",
    description: "Completo para restaurantes, cafés e bares",
    features: [
      "Tudo do plano Retalho",
      "Gestão de mesas e salas",
      "Menus compostos",
      "Pedidos para cozinha",
      "Divisão de conta",
      "5 utilizadores",
      "Suporte dedicado 24/7",
    ],
    cta: "Começar Grátis",
    popular: false,
    color: "border-gray-700",
    badgeColor: "bg-gray-700",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 bg-dark-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-vendus-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-vendus-400 font-medium mb-4">
            Preços Transparentes
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Escolhe o teu <span className="gradient-text">plano</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Sem contratos, sem taxas escondidas. Paga apenas pelo que usas. 
            30 dias gratuitos em todos os planos.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative group ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1.5 bg-vendus-600 text-white text-xs font-semibold rounded-full shadow-lg shadow-vendus-600/30">
                    Mais Popular
                  </span>
                </div>
              )}

              <div
                className={`relative h-full glass rounded-3xl p-8 border ${plan.color} hover:bg-white/[0.04] transition-all duration-500 ${
                  plan.popular ? "shadow-2xl shadow-vendus-600/10" : ""
                }`}
              >
                {/* Plan header */}
                <div className="text-center mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${plan.popular ? "bg-vendus-600/20" : "bg-gray-700/30"} flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className={`w-7 h-7 ${plan.popular ? "text-vendus-400" : "text-gray-400"}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-gray-400">Kz</span>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full ${plan.popular ? "bg-vendus-600/20" : "bg-gray-700/30"} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className={`w-3 h-3 ${plan.popular ? "text-vendus-400" : "text-gray-500"}`} />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#cta"
                  className={`block w-full py-3.5 text-center font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-vendus-600 hover:bg-vendus-500 text-white shadow-lg shadow-vendus-600/25 hover:shadow-vendus-500/40"
                      : "glass hover:bg-white/5 text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          Todos os preços em Kwanzas (Kz). IVA incluído. Cancela a qualquer momento.
        </motion.p>
      </div>
    </section>
  );
}
