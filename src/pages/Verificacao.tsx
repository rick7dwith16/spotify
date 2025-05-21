
import { useLocation } from 'react-router-dom';
import VideoSection from '../components/VideoSection';
import Footer from '../components/Footer';

function VerificationPage() {
  const location = useLocation();
  const amount = location.state?.amount ?? 0;

  const handleVerification = () => {
    window.location.href = 'https://app.pushinpay.com.br/service/pay/9EF55D90-A547-45CE-B74B-E6CB0FEEE0BD';
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[#00B341]">
          DESBLOQUEIO DE SALDO
        </h1>
        
        <p className="text-lg md:text-xl text-center mb-8">
          Veja como <span className="text-[#00B341]">liberar seu saque</span> assistindo ao vídeo.
        </p>

        <p className="mb-4 text-center">
          Valor do saque: <strong>U${amount.toFixed(2)}</strong>
        </p>
        
        <div className="w-full max-w-3xl mx-auto">
          <VideoSection />
          
          <div className="mt-6 flex flex-col items-center">
            <button
              onClick={handleVerification}
              className="bg-[#00B341] text-white font-bold py-4 px-8 rounded-md text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md hover:bg-[#009938] focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 w-full max-w-md"
            >
              Realizar Verificação
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default VerificationPage;
