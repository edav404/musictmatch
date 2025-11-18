import React from 'react';
import { songs } from '../data/songs';

const SongDetail = () => {
  const song = songs[1]; // Using "Starlight" by Muse as an example

  return (
    <div className="bg-[#181818] font-inter text-white">
      <div className="relative flex min-h-screen w-full flex-col">
        <div className="flex items-center p-4">
          <button className="flex size-10 shrink-0 items-center justify-center text-white">
            <span className="material-symbols-outlined text-3xl">arrow_back</span>
          </button>
          <div className="flex-1"></div>
          <button className="flex size-10 shrink-0 items-center justify-center text-white">
            <span className="material-symbols-outlined text-3xl">more_vert</span>
          </button>
        </div>

        <main className="flex flex-grow flex-col md:flex-row items-center md:items-start gap-8 px-6 pb-12 pt-4 max-w-4xl mx-auto w-full">
          <div className="w-full max-w-sm md:w-1/2">
            <div
              className="aspect-square w-full overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat shadow-2xl shadow-black/50"
              style={{ backgroundImage: `url("${song.cover}")` }}
            ></div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h1 className="font-golos text-3xl font-bold leading-tight text-white">{song.title}</h1>
                <p className="mt-2 text-lg font-medium text-white/90">{song.artist}</p>
                <p className="mt-1 text-base font-normal text-white/70">{song.album} • 2006</p>
              </div>
              <button className="group mt-1">
                <span className="material-symbols-outlined filled text-4xl text-[#F366FF]">favorite</span>
              </button>
            </div>

            <button className="flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#F366FF] to-[#8A2BE2] py-4 text-center text-lg font-bold text-white shadow-lg shadow-purple-900/50 transition-transform active:scale-95">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.184 14.375c-.2.299-.599.399-.899.199-2.5-1.5-5.6-1.8-9.3-.999-.399.1-.7-.1-.8-.5-.1-.399.1-.7.5-.8 4-.899 7.5-.5 10.3 1.1.299.2.399.599.199.899zm.899-2.299c-.3.399-.8.499-1.2.199-2.8-1.7-7-2.2-10.2-.999-.4.1-.9-.1-.9-.5-.1-.4.1-.9.5-.9 3.6-1.1 8.2-.5 11.4 1.4.399.3.499.8.199 1.2zm.1-2.7c-.3.5-.9.7-1.4.3-3.2-2-8.5-2.5-11.9-1.4-.5.1-.9-.2-1-.7-.1-.5.2-.9.7-1 3.8-1.2 9.6-.7 13.2 1.5.5.3.7.9.3 1.3z"></path>
              </svg>
              Escuchar ahora
            </button>

            <div className="mt-2">
              <h2 className="font-golos text-xl font-bold leading-tight">Géneros relacionados</h2>
              <div className="noscrollbar -mx-6 flex gap-3 overflow-x-auto px-6 pt-4">
                {song.genre.map((g) => (
                  <span key={g} className="whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">{g}</span>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SongDetail;
