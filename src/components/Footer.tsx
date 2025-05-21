import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 px-4 bg-gray-50 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <Shield className="w-5 h-5 mr-2 text-[#00B341]" />
            <p className="text-sm text-gray-600">Conexão segura e verificada</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;