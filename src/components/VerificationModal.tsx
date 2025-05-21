import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import Button from './Button';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  saqueAmount: number;
}

const VerificationModal: React.FC<VerificationModalProps> = ({
  isOpen,
  onClose,
  saqueAmount,
}) => {
  const navigate = useNavigate();

  const handleVerification = () => {
    onClose();
    navigate('/Verificacao', { state: { amount: saqueAmount } });
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-zinc-900 p-6 shadow-xl">
          <div className="font- poppins flex flex-col items-center text-center">
            <div className="mb-6 rounded-full bg-green-500/10 p-4">
              <Lock size={32} className="text-green-500" />
            </div>
            
            <Dialog.Title className=" font-poppins mb-4 text-xl font-bold text-white">
              Verificação de Segurança
            </Dialog.Title>

            
            <Dialog.Description className="font-poppins mb-6 text-gray-400">
              Para sua segurança, precisamos validar sua conta antes de processar o saque de U${saqueAmount.toFixed(2)}. A taxa de verificação será totalmente reembolsada junto com seu saque.
            </Dialog.Description>
            
            <Button
              onClick={handleVerification}
              fullWidth
              size="lg"
              className="font-poppins mb-4"
            >
              Verificar Conta
            </Button>
            
            <button
              onClick={onClose}
              className="font-poppins text-sm text-gray-400 hover:text-white transition-colors"
            >
              Cancelar
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default VerificationModal;