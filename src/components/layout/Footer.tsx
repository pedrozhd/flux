import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import logo from '../../assets/logo.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Sobre', page: 'about' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contato', page: 'contact' }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Mail, label: 'Email', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="FLUX Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400">
              Revolucionando transições de carreira com IA preditiva.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              {socialLinks.map(social => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="mb-6 text-center">
            <p className="text-gray-300 font-semibold mb-3">Desenvolvedores</p>
            <div className="space-y-1 text-gray-400 text-sm">
              <p>Pedro Henrique Dias França - RM561940</p>
              <p>Olavo Porto Neves - RM563558</p>
              <p>Luiz Gustavo Gonçalves - RM564495</p>
              <p className="text-gray-500 mt-2">Turma: 1TDSR</p>
            </div>
          </div>
          <p className="text-center text-gray-400">
            © {currentYear} FLUX - Living Curriculum System. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
