import React, { useState } from 'react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // In a real implementation, you would trigger video playback here
    console.log('Video play triggered');
  };

  return (
    <section className="flex flex-col relative z-0 min-h-[600px] w-full max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/19ebc25d2d348d991a45fe54ffe88163345cc586?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Video background"
      />
      <div className="relative bg-black flex flex-col items-center justify-center px-20 py-[196px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
        <div className="flex mb-[-38px] w-[539px] max-w-full flex-col items-center max-md:mb-2.5">
          <h2 className="text-white text-center text-[40px] font-bold">
            Modern House Video
          </h2>
          <p className="text-[#999999] text-center text-base font-normal leading-[29px] self-stretch mt-[33px] max-md:max-w-full">
            Far far away, behind the word mountains, far from the countries
            Vokalia and
            <br />
            Consonantia, there live the blind texts.
          </p>
          <button
            onClick={handlePlayClick}
            className="bg-[rgba(94,165,29,1)] flex min-h-20 w-20 items-center justify-center h-20 mt-6 rounded-[40px] hover:bg-[rgba(94,165,29,0.9)] transition-colors"
            aria-label="Play video"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/200d18bd37630617019456842c3c658e3a411e4c?placeholderIfAbsent=true"
              className="aspect-[0.5] object-contain w-[25px] self-stretch my-auto"
              alt="Play button"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
