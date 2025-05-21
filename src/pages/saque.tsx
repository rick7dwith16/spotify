import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import VerificationModal from '../components/VerificationModal';
import { useAppContext } from '../context/AppContext';
import { PixKeyType } from '../types';
import Header from '../components/Header';


const Saque: React.FC = () => {
  const { balance } = useAppContext();
  const [keyType, setKeyType] = useState<PixKeyType>('CPF');
  const [pixKey, setPixKey] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [amountBRL, setAmountBRL] = useState('0.00');
  const [dollarRate, setDollarRate] = useState(6.6);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [errors, setErrors] = useState({
    pixKey: '',
    phone: '',
    amount: ''
  });

  useEffect(() => {
    if (amount && !isNaN(Number(amount))) {
      const brlValue = (Number(amount) * dollarRate).toFixed(2);
      setAmountBRL(brlValue);
    } else {
      setAmountBRL('0.00');
    }
  }, [amount, dollarRate]);

  const validateForm = () => {
    const newErrors = {
      pixKey: '',
      phone: '',
      amount: ''
    };
    
    let isValid = true;

    if (!pixKey.trim()) {
      newErrors.pixKey = 'Chave PIX é obrigatória';
      isValid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
      isValid = false;
    } else if (!/^\d{10,11}$/.test(phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Formato de telefone inválido';
      isValid = false;
    }

    if (!amount.trim()) {
      newErrors.amount = 'Valor é obrigatório';
      isValid = false;
    } else if (isNaN(Number(amount)) || Number(amount) <= 0) {
      newErrors.amount = 'Valor inválido';
      isValid = false;
    } else if (Number(amount) > balance) {
      newErrors.amount = 'Saldo insuficiente';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setShowVerificationModal(true);
  };

  const handleKeyTypeChange = (type: PixKeyType) => {
    setKeyType(type);
    setPixKey('');
  };

  const getPixKeyPlaceholder = () => {
    switch (keyType) {
      case 'CPF':
        return 'Digite seu CPF (apenas números)';
      case 'Telefone':
        return 'Digite seu telefone (apenas números)';
      case 'Email':
        return 'Digite seu email';
      case 'Aleatória':
        return 'Digite sua chave aleatória';
      default:
        return 'Digite sua chave PIX';
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 pb-24">
      <Header />
      <h1 className="text-2xl font-bold mb-6">Saque</h1>
      
      <p className="text-gray-300 mb-6">
        Digite sua chave PIX e Telefone para receber o pagamento.
      </p>
      
      <div className="bg-zinc-900 rounded-xl p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">Saldo disponível:</span>
          <span className="text-xl font-bold">U${balance.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">Cotação do dólar:</span>
          <span>R${dollarRate.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Valor em reais:</span>
          <span className="text-green-500 font-medium">
            R${(balance * dollarRate).toFixed(2)}
          </span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-200">
            Tipo de Chave PIX
          </label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {(['CPF', 'Telefone', 'Email', 'Aleatória'] as PixKeyType[]).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => handleKeyTypeChange(type)}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  keyType === type
                    ? 'bg-green-500 text-black'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        
        <Input
          label="Chave PIX"
          placeholder={getPixKeyPlaceholder()}
          value={pixKey}
          onChange={(e) => setPixKey(e.target.value)}
          error={errors.pixKey}
          fullWidth
        />
        
        <Input
          label="Telefone com DDD"
          placeholder="Digite seu telefone com DDD"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={errors.phone}
          fullWidth
        />
        
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <Input
              label="Valor do saque (US$)"
              type="number"
              step="0.01"
              min="0.01"
              max={balance.toString()}
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              error={errors.amount}
              fullWidth
            />
          </div>
          <div className="flex-1">
            <Input
              label="Valor em R$"
              type="text"
              value={`R$ ${amountBRL}`}
              disabled
              fullWidth
            />
          </div>
        </div>
        
        <Button
          type="submit"
          fullWidth
          size="lg"
          className="mt-4"
        >
          Realizar Saque
        </Button>
      </form>

      <VerificationModal
        isOpen={showVerificationModal}
        onClose={() => setShowVerificationModal(false)}
       saqueAmount={Number(amount)}
      />
    </div>
  );
};

export default Saque;