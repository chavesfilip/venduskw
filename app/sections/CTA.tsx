"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="relative py-32 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-vendus-950/50 to-dark-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vendus-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass-strong rounded-3xl p-12 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-vendus-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 rounded-2xl bg-vendus-600/20 flex items-center justify-center mx-auto mb-6"
            >
              <Sparkles className="w-8 h-8 text-vendus-400" />
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Pronto para simplificar a tua{" "}
              <span className="gradient-text">faturação</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Junta-te a mais de 15.000 empresas em Angola que já usam o Vendus.
              30 dias gratuitos, sem compromisso.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-vendus-600 hover:bg-vendus-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-vendus-500/30 overflow-hidden"
              >
                <span className="relative z-10">Experimentar Grátis 30 Dias</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-vendus-500 to-vendus-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 glass rounded-2xl hover:bg-white/5 text-gray-300 hover:text-white font-medium transition-all duration-300"
              >
                Falar com Vendas
              </a>
            </div>

            <p className="text-sm text-gray-600 mt-6">
              Sem cartão de crédito necessário • Setup em 5 minutos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
