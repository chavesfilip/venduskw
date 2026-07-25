"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, FileText, CreditCard, TrendingUp } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: Users,
    value: 15000,
    suffix: "+",
    label: "Empresas a faturar",
    description: "Confiam no Vendus diariamente",
  },
  {
    icon: FileText,
    value: 40,
    suffix: "M+",
    label: "Documentos emitidos",
    description: "Todos os dias em Angola",
  },
  {
    icon: CreditCard,
    value: 1000000,
    suffix: "+",
    label: "Transações processadas",
    description: "Com segurança e rapidez",
  },
  {
    icon: TrendingUp,
    value: 99,
    suffix: "%",
    label: "Uptime garantido",
    description: "Sempre online quando precisas",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-vendus-600/10 flex items-center justify-center mb-4 group-hover:bg-vendus-600/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-vendus-400" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm font-medium text-gray-300 mb-1">{stat.label}</p>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
