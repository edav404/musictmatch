import React, { useState } from 'react';
import { songs } from '../data/songs';

const Home = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  return (
    <div className="relative flex h-screen w-full flex-col bg-background-dark group/design-root overflow-hidden font-display">
      <div className="absolute top-0 left-0 w-full h-full opacity-60">
        <div className="w-full h-full bg-gradient-to-br from-[#F366FF] to-[#8A2BE2] blur-[150px]"></div>
      </div>
      <div className="relative z-10 flex items-center p-4">
        <div className="flex w-12 items-center justify-start">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined text-2xl">person</span>
          </button>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Discover
        </h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined text-2xl">settings</span>
          </button>
        </div>
      </div>
      <div className="relative z-10 flex flex-1 flex-col items-center justify-between p-6">
        <div className="flex w-full max-w-sm lg:max-w-md flex-col items-stretch justify-start rounded-xl">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-2xl"
            style={{ backgroundImage: `url("${currentSong.cover}")` }}
          ></div>
          <div className="flex w-full grow flex-col items-stretch justify-center gap-4 py-4 pt-6">
            <div className="flex flex-col items-center text-center">
              <p className="font-heading text-white text-3xl font-bold">{currentSong.title}</p>
              <p className="text-white/80 text-lg font-normal leading-normal">{currentSong.artist}</p>
            </div>
            <div className="flex gap-2 justify-center">
              {currentSong.genre.map((g) => (
                <div key={g} className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full border border-white/20 bg-white/10 px-3 backdrop-blur-sm">
                  <p className="text-white text-xs font-medium leading-normal">{g}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 px-2 pt-4">
              <div className="flex items-center justify-center gap-1 h-6">
                <div className="w-1 h-2 bg-white/50 rounded-full"></div>
                <div className="w-1 h-4 bg-white rounded-full"></div>
                <div className="w-1 h-5 bg-white rounded-full"></div>
                <div className="w-1 h-3 bg-white/80 rounded-full"></div>
                <div className="w-1 h-2 bg-white/50 rounded-full"></div>
              </div>
              <div className="flex-1 rounded-full bg-white/20 h-1.5">
                <div className="h-1.5 rounded-full bg-white" style={{ width: '45%' }}></div>
              </div>
              <button className="flex items-center justify-center h-12 w-12 rounded-full bg-white/20 text-white">
                <span className="material-symbols-outlined text-3xl">pause</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-around pb-6 pt-4">
          <button onClick={handleNextSong} className="flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 text-white/50 shadow-lg backdrop-blur-sm">
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <button onClick={handleNextSong} className="flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 text-white/50 shadow-lg backdrop-blur-sm">
            <span className="material-symbols-outlined text-4xl -rotate-90">redo</span>
          </button>
          <button onClick={handleNextSong} className="flex h-[88px] w-[88px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-action-pink text-white shadow-lg backdrop-blur-sm">
            <span className="material-symbols-outlined text-5xl" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
