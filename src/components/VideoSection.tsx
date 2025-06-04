
import React, { useState } from 'react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // In a real implementation, you would trigger video playback here
    console.log('Video play triggered');
  };

  return (
    <section className="flex flex-col relative z-0 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/19ebc25d2d348d991a45fe54ffe88163345cc586?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Video background"
      />
      <div className="relative bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-24 md:py-32 lg:py-48">
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto text-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Modern House Video
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed mt-4 sm:mt-6 md:mt-8 px-2">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <button
            onClick={handlePlayClick}
            className="bg-[rgba(94,165,29,1)] flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mt-6 sm:mt-8 rounded-full hover:bg-[rgba(94,165,29,0.9)] transition-all duration-300 hover:scale-105"
            aria-label="Play video"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/200d18bd37630617019456842c3c658e3a411e4c?placeholderIfAbsent=true"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
              alt="Play button"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
