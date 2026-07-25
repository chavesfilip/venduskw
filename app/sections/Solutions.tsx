"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Receipt,
  Store,
  UtensilsCrossed,
  Check,
  ArrowRight,
  Smartphone,
  Printer,
  Clock,
  Users,
  Package,
  Building2,
  Coffee,
} from "lucide-react";

const solutions = [
  {
    id: "faturacao",
    icon: Receipt,
    title: "Faturação",
    subtitle: "Simples para si, rápida para os clientes",
    description:
      "Emita faturas, recibos, notas de crédito e todos os documentos obrigatórios em segundos. Compatível com qualquer equipamento.",
    features: [
      "Compatível com qualquer equipamento",
      "Impressão em A4 e fatura eletrónica",
      "Pagamentos a prazo",
      "Conta corrente de clientes",
      "Relatórios detalhados",
    ],
    idealFor: [
      { icon: Building2, label: "Escritórios" },
      { icon: Users, label: "Agências" },
      { icon: Smartphone, label: "Freelancers" },
    ],
    color: "from-vendus-600 to-vendus-400",
    bgColor: "bg-vendus-600/10",
    accentColor: "text-vendus-400",
  },
  {
    id: "retalho",
    icon: Store,
    title: "Retalho",
    subtitle: "O POS pensado para o teu negócio",
    description:
      "Ponto de venda completo com gestão de stocks, múltiplas lojas e vendas simultâneas. Funciona em computador, tablet ou telemóvel.",
    features: [
      "Emissão de faturas e orçamentos",
      "Gestão de tamanhos e cores",
      "Múltiplas vendas simultâneas",
      "Gestão de stocks em tempo real",
      "Múltiplas lojas e POS",
    ],
    idealFor: [
      { icon: Store, label: "Sapatarias" },
      { icon: Package, label: "Lojas de Roupa" },
      { icon: Printer, label: "Floristas" },
    ],
    color: "from-purple-600 to-purple-400",
    bgColor: "bg-purple-600/10",
    accentColor: "text-purple-400",
  },
  {
    id: "restauracao",
    icon: UtensilsCrossed,
    title: "Restauração",
    subtitle: "Gestão completa do teu restaurante",
    description:
      "POS que garante a gestão de todo o negócio numa só aplicação. Salas, mesas, menus compostos e muito mais.",
    features: [
      "Gestão de salas e mesas",
      "Menus compostos (bebida + prato + café)",
      "Gestão de pedidos para cozinha",
      "Consultas de mesa",
      "Divisão e separação de conta",
      "Controlo de caixa e movimentos",
    ],
    idealFor: [
      { icon: UtensilsCrossed, label: "Restaurantes" },
      { icon: Coffee, label: "Cafés" },
      { icon: Store, label: "Venda Ambulante" },
    ],
    color: "from-emerald-600 to-emerald-400",
    bgColor: "bg-emerald-600/10",
    accentColor: "text-emerald-400",
  },
];

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState("faturacao");
  const activeSolution = solutions.find((s) => s.id === activeTab)!;

  return (
    <section id="solutions" className="relative py-32 bg-dark-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-vendus-950/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-vendus-400 font-medium mb-4">
            Soluções Completas
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Para cada tipo de <span className="gradient-text">negócio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Software de faturação online ideal para escritórios, retalho e restauração.
            Escolhe a solução que melhor se adapta ao teu negócio.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 glass rounded-2xl">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === solution.id
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {activeTab === solution.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <solution.icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{solution.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Info */}
          <div className="space-y-8">
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${activeSolution.bgColor} mb-4`}>
                <activeSolution.icon className={`w-4 h-4 ${activeSolution.accentColor}`} />
                <span className={`text-sm font-medium ${activeSolution.accentColor}`}>
                  {activeSolution.title}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">
                {activeSolution.subtitle}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {activeSolution.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {activeSolution.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-5 h-5 rounded-full ${activeSolution.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <Check className={`w-3 h-3 ${activeSolution.accentColor}`} />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Ideal for */}
            <div>
              <p className="text-sm text-gray-500 mb-3">Ideal para:</p>
              <div className="flex flex-wrap gap-3">
                {activeSolution.idealFor.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-gray-300"
                  >
                    <item.icon className="w-4 h-4 text-gray-500" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-6 py-3 bg-vendus-600 hover:bg-vendus-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-vendus-500/25 group"
            >
              Experimente Grátis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className={`absolute -inset-4 bg-gradient-to-br ${activeSolution.color} opacity-10 rounded-3xl blur-2xl`} />
            <div className="relative glass-strong rounded-3xl p-1 overflow-hidden">
              <div className="bg-dark-800 rounded-2xl p-6 space-y-4">
                {/* Mock UI based on solution type */}
                {activeTab === "faturacao" && (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-vendus-600/20 flex items-center justify-center">
                          <Receipt className="w-5 h-5 text-vendus-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Nova Fatura</p>
                          <p className="text-xs text-gray-500">FT 005/2024</p>
                        </div>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400">Rascunho</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-dark-700/50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Cliente</p>
                        <p className="text-sm text-white">Empresa ABC, Lda</p>
                      </div>
                      <div className="bg-dark-700/50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Artigos</p>
                        <div className="space-y-2 mt-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">Consultoria Fiscal</span>
                            <span className="text-white font-medium">25.000 Kz</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">Relatório Mensal</span>
                            <span className="text-white font-medium">15.000 Kz</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-white/5">
                        <span className="text-sm text-gray-400">Total</span>
                        <span className="text-xl font-bold text-white">40.000 Kz</span>
                      </div>
                      <button className="w-full py-3 bg-vendus-600 hover:bg-vendus-500 text-white font-medium rounded-xl transition-colors">
                        Emitir Fatura
                      </button>
                    </div>
                  </>
                )}

                {activeTab === "retalho" && (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center">
                          <Store className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Ponto de Venda</p>
                          <p className="text-xs text-gray-500">Loja Principal</p>
                        </div>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">Aberto</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {["Sapatilhas Nike", "T-shirt Adidas", "Calças Jeans", "Casaco Winter"].map((item, i) => (
                        <div key={i} className="bg-dark-700/50 rounded-lg p-3 text-center hover:bg-dark-700 transition-colors cursor-pointer">
                          <Package className="w-6 h-6 text-purple-400 mx-auto mb-1" />
                          <p className="text-xs text-gray-300">{item}</p>
                          <p className="text-sm font-medium text-white">{(i + 1) * 5000} Kz</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-dark-700/50 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Carrinho</span>
                        <span className="text-lg font-bold text-white">15.000 Kz</span>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "restauracao" && (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center">
                          <UtensilsCrossed className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Gestão de Mesas</p>
                          <p className="text-xs text-gray-500">Restaurante Sol</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { num: 1, status: "livre", color: "bg-gray-700" },
                        { num: 2, status: "ocupada", color: "bg-emerald-600/30" },
                        { num: 3, status: "ocupada", color: "bg-emerald-600/30" },
                        { num: 4, status: "reservada", color: "bg-yellow-600/30" },
                        { num: 5, status: "livre", color: "bg-gray-700" },
                        { num: 6, status: "ocupada", color: "bg-emerald-600/30" },
                      ].map((mesa) => (
                        <div key={mesa.num} className={`${mesa.color} rounded-lg p-3 text-center`}>
                          <p className="text-lg font-bold text-white">{mesa.num}</p>
                          <p className="text-xs text-gray-400 capitalize">{mesa.status}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-dark-700/50 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-2">Pedido Mesa 2</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Frango Grelhado</span>
                          <span className="text-white">3.500 Kz</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Coca-Cola</span>
                          <span className="text-white">500 Kz</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
