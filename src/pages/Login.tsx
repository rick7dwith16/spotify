import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAppContext } from '../context/AppContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !email.includes('@')) {
      setError('Por favor, insira um email válido');
      return;
    }
    
    setUser(email);
    navigate('/evaluation');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black py-8 px-4">
      <div className="max-w-md mx-auto w-full flex-grow flex flex-col justify-center">
        <Logo />
        
        <div className="bg-zinc-900 rounded-xl p-6 mb-8 shadow-lg">
          <h1 className="text-xl font-bold text-center mb-6">
            Seja bem-vindo ao portal de avaliações do Spotify
          </h1>
          
          <p className="text-gray-300 text-center mb-8">
            Digite seu e-mail, avalie artistas e ganhe recompensas instantâneas.
          </p>
          
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
              fullWidth
            />
            
            <Button
              type="submit"
              variant="primary"
              fullWidth
              size="lg"
              className="mt-4"
            >
              Começar Avaliações
            </Button>
          </form>
        </div>
      </div>
      
      <footer className="text-center text-gray-500 text-sm mt-auto">
        Spotify 2023 - Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Login;