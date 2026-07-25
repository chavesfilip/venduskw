"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Shield,
} from "lucide-react";

const footerLinks = {
  Produto: [
    { label: "Faturação", href: "#" },
    { label: "Retalho", href: "#" },
    { label: "Restauração", href: "#" },
    { label: "Preços", href: "#pricing" },
    { label: "Atualizações", href: "#" },
  ],
  Empresa: [
    { label: "Sobre Nós", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Carreiras", href: "#" },
    { label: "Contactos", href: "#" },
  ],
  Suporte: [
    { label: "Centro de Ajuda", href: "#" },
    { label: "Documentação", href: "#" },
    { label: "API", href: "#" },
    { label: "Estado do Sistema", href: "#" },
  ],
  Legal: [
    { label: "Termos de Serviço", href: "#" },
    { label: "Política de Privacidade", href: "#" },
    { label: "LGPD", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-vendus-600 rounded-xl rotate-3" />
                <div className="absolute inset-0 bg-vendus-500 rounded-xl" />
                <span className="relative text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold text-white">vendus</span>
            </a>
            <p className="text-sm text-gray-500 mb-6 max-w-xs">
              Software de faturação e POS completo para empresas em Angola.
              Simples, seguro e validado pela AGT.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <social.icon className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-vendus-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="grid md:grid-cols-3 gap-6 py-8 border-t border-white/5 mb-8">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-vendus-400" />
            <span className="text-sm text-gray-400">suporte@vendus.co.ao</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-vendus-400" />
            <span className="text-sm text-gray-400">+244 000 000 000</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-vendus-400" />
            <span className="text-sm text-gray-400">Luanda, Angola</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Vendus. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs text-emerald-400 font-medium">
              Validado AGT Nº 142
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
