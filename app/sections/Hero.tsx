"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Shield, Clock, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

function FloatingOrb({ delay, size, x, y }: { delay: number; size: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function ParticleField() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    const p = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(p);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-vendus-400/30"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-900">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <ParticleField />

      <FloatingOrb delay={0} size={400} x="10%" y="20%" />
      <FloatingOrb delay={2} size={300} x="70%" y="60%" />
      <FloatingOrb delay={4} size={250} x="50%" y="10%" />

      {/* Mouse spotlight */}
      <div
        className="absolute pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm text-gray-300">Software Validado AGT Nº 142</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              Fature em{" "}
              <span className="gradient-text">segundos</span>,
              <br />
              <span className="text-white">cresça sempre.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              Software de faturação e POS completo para o teu negócio em Angola. 
              Funciona em qualquer dispositivo — computador, tablet ou telemóvel.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#cta"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-vendus-600 hover:bg-vendus-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-vendus-500/30 overflow-hidden"
              >
                <span className="relative z-10">Experimente Grátis 30 Dias</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-vendus-500 to-vendus-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <button className="group inline-flex items-center gap-3 px-6 py-4 glass rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-vendus-600/20 flex items-center justify-center group-hover:bg-vendus-600/30 transition-colors">
                  <Play className="w-4 h-4 text-vendus-400 fill-current ml-0.5" />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Ver Demo</span>
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              {[
                { icon: Zap, text: "Setup em 5 min" },
                { icon: Shield, text: "Dados seguros" },
                { icon: Clock, text: "Suporte 24/7" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                  <item.icon className="w-4 h-4 text-vendus-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-10 bg-vendus-600/20 rounded-3xl blur-3xl" />

              {/* Dashboard mockup */}
              <div className="relative glass-strong rounded-3xl p-1 overflow-hidden">
                <div className="bg-dark-800 rounded-2xl overflow-hidden">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-dark-700 rounded-md px-3 py-1 text-xs text-gray-500 text-center">
                        app.vendus.co.ao
                      </div>
                    </div>
                  </div>

                  {/* Dashboard content */}
                  <div className="p-6 space-y-4">
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Vendas Hoje", value: "45.230 Kz", change: "+12%", color: "text-emerald-400" },
                        { label: "Faturas", value: "128", change: "+8%", color: "text-vendus-400" },
                        { label: "Clientes", value: "342", change: "+23%", color: "text-purple-400" },
                      ].map((stat, i) => (
                        <div key={i} className="bg-dark-700/50 rounded-xl p-4">
                          <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                          <p className="text-lg font-bold text-white">{stat.value}</p>
                          <p className={`text-xs ${stat.color}`}>{stat.change}</p>
                        </div>
                      ))}
                    </div>

                    {/* Chart area */}
                    <div className="bg-dark-700/50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-sm font-medium text-white">Vendas Mensais</p>
                        <div className="flex gap-2">
                          <span className="text-xs px-2 py-1 rounded bg-vendus-600/20 text-vendus-400">2024</span>
                        </div>
                      </div>
                      <div className="flex items-end gap-2 h-24">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }}
                            className="flex-1 bg-gradient-to-t from-vendus-600 to-vendus-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-600">
                        <span>Jan</span><span>Dez</span>
                      </div>
                    </div>

                    {/* Recent invoices */}
                    <div className="bg-dark-700/50 rounded-xl p-4">
                      <p className="text-sm font-medium text-white mb-3">Últimas Faturas</p>
                      <div className="space-y-2">
                        {[
                          { id: "FT 001/2024", client: "Empresa ABC", amount: "12.500 Kz", status: "Pago" },
                          { id: "FT 002/2024", client: "Loja XYZ", amount: "8.300 Kz", status: "Pendente" },
                          { id: "FT 003/2024", client: "Café Sol", amount: "3.450 Kz", status: "Pago" },
                        ].map((inv, i) => (
                          <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                            <div>
                              <p className="text-sm text-white">{inv.id}</p>
                              <p className="text-xs text-gray-500">{inv.client}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-white">{inv.amount}</p>
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                inv.status === "Pago" ? "bg-emerald-500/20 text-emerald-400" : "bg-yellow-500/20 text-yellow-400"
                              }`}>
                                {inv.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass-strong rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Fatura Emitida</p>
                    <p className="text-xs text-gray-400">FT 004/2024 • 5.200 Kz</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
    </section>
  );
}
