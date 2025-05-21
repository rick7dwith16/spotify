import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react'; // ícone opcional

const nomes = [
  'Lucas', 'Amanda', 'João', 'Mariana', 'Rafael', 'Beatriz', 'Carlos', 'Juliana',
  'Fernando', 'Larissa', 'Gustavo', 'Camila', 'Pedro', 'Isabela', 'Thiago', 'Aline',
  'André', 'Bruna', 'Eduardo', 'Patrícia', 'Vinícius', 'Natália', 'Ricardo', 'Sofia',
  'Felipe', 'Gabriela', 'Daniel', 'Letícia', 'Leandro', 'Bianca', 'Henrique', 'Paula',
  'Rodrigo', 'Daniela', 'Alexandre', 'Renata', 'Márcio', 'Tatiane', 'Diego', 'Elaine'
];

function gerarValor() {
  const min = 82;
  const max = 632;
  return (Math.random() * (max - min) + min).toFixed(2);
}

function gerarNomeAleatorio() {
  const index = Math.floor(Math.random() * nomes.length);
  return nomes[index];
}

const Notification: React.FC = () => {
  const [visivel, setVisivel] = useState(false);
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');

  useEffect(() => {
    const mostrarNotificacao = () => {
      setNome(gerarNomeAleatorio());
      setValor(gerarValor());
      setVisivel(true);

      setTimeout(() => {
        setVisivel(false);
      }, 5000); // Mostra por 5s
    };

    mostrarNotificacao(); // Mostra a primeira ao carregar
    const intervalo = setInterval(mostrarNotificacao, 8000); // 5s visível + 3s invisível

    return () => clearInterval(intervalo);
  }, []);

  return visivel ? (
    <div className="fixed bottom-6 left-6 bg-zinc-900 border border-zinc-800 text-white shadow-xl px-5 py-4 rounded-xl flex items-center gap-3 animate-fade-in-out z-50 w-[290px] md:w-[340px]">
      <CheckCircle className="text-green-500" size={24} />
      <div className="text-sm leading-tight">
        <p className="font-medium">{nome} acabou de sacar</p>
        <p className="text-green-400 font-semibold">R${valor}</p>
      </div>
    </div>
  ) : null;
};

export default Notification;
