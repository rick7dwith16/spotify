import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ThumbsUp, ThumbsDown, Users } from 'lucide-react';
import Button from '../components/Button';
import { useAppContext } from '../context/AppContext';
import Notification from '../components/Notification';
import HomeHeader from '../components/HomeHeader';


const Home: React.FC = () => {
  const { balance, addToBalance, currentArtist, getRandomArtist } = useAppContext();
  const [artist, setArtist] = useState(currentArtist);
  const [rating, setRating] = useState<number | null>(null);
  const [recommend, setRecommend] = useState<boolean | null>(null);
  const [ageGroup, setAgeGroup] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!artist) {
      setArtist(getRandomArtist());
    }
  }, [artist, getRandomArtist]);

  const handleSubmit = () => {
    if (rating === null || recommend === null || ageGroup === null) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      // Add balance for completing Home
      addToBalance(9.20);
      setShowFeedback(true);
      
      // Reset form after showing feedback
      setTimeout(() => {
        setRating(null);
        setRecommend(null);
        setAgeGroup(null);
        setIsSubmitting(false);
        setShowFeedback(false);
        setArtist(getRandomArtist());
      }, 2000);
    }, 1000);
  };

  if (!artist) return <div className="p-4">Carregando...</div>;

  return (
    <div className="max-w-md mx-auto p-4 pb-24">
      <HomeHeader />
      <Notification />
      

      {/* Artist card */}
      <div className="bg-zinc-900 rounded-xl overflow-hidden mb-6 shadow-lg">
        <div className="h-48 overflow-hidden">
          <img 
            src={artist.imageUrl}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-1">{artist.name}</h2>
          <p className="text-gray-400 text-sm">Avalie e ganhe U$9.20</p>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-8">
        {/* Rating question */}
        <div className="bg-zinc-900 rounded-xl p-4">
          <h3 className="text-lg font-medium mb-4">
            De 1 a 5, qual nota você daria para as músicas do {artist.name}?
          </h3>
          <div className="flex justify-between">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => setRating(value)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  rating === value
                    ? 'bg-green-500 text-black'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                <span className="text-lg font-medium">{value}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recommendation question */}
        <div className="bg-zinc-900 rounded-xl p-4">
          <h3 className="text-lg font-medium mb-4">
            Recomendaria o(a) artista {artist.name} para seus amigos e familiares?
          </h3>
          <div className="flex gap-4">
            <button
              onClick={() => setRecommend(true)}
              className={`flex-1 py-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
                recommend === true
                  ? 'bg-green-500 text-black'
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}
            >
              <ThumbsUp size={20} />
              <span>Sim</span>
            </button>
            <button
              onClick={() => setRecommend(false)}
              className={`flex-1 py-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
                recommend === false
                  ? 'bg-green-500 text-black'
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}
            >
              <ThumbsDown size={20} />
              <span>Não</span>
            </button>
          </div>
        </div>

        {/* Age group question */}
        <div className="bg-zinc-900 rounded-xl p-4">
          <h3 className="text-lg font-medium mb-4">
            Qual faixa etária você acha que mais escuta o(a) artista {artist.name}?
          </h3>
          <div className="flex gap-4">
            <button
              onClick={() => setAgeGroup('-18 anos')}
              className={`flex-1 py-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
                ageGroup === '-18 anos'
                  ? 'bg-green-500 text-black'
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}
            >
              <Users size={20} />
              <span>-18 anos</span>
            </button>
            <button
              onClick={() => setAgeGroup('+18 anos')}
              className={`flex-1 py-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
                ageGroup === '+18 anos'
                  ? 'bg-green-500 text-black'
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}
            >
              <Users size={20} />
              <span>+18 anos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Submit button */}
      <div className="mt-8">
        <Button
          onClick={handleSubmit}
          disabled={rating === null || recommend === null || ageGroup === null || isSubmitting}
          fullWidth
          size="lg"
          className={`relative ${isSubmitting ? 'bg-zinc-700' : ''}`}
        >
          {showFeedback ? (
            <span className="flex items-center gap-2">
              <Star className="animate-spin" size={20} />
              Avaliação enviada! +U$9.20
            </span>
          ) : isSubmitting ? (
            'Enviando...'
          ) : (
            'Enviar respostas'
          )}
        </Button>
      </div>
    </div>
  );
};

export default Home;