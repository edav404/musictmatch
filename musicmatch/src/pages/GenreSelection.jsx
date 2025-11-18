import React, { useState } from 'react';
import { genres } from '../data/genres';

const GenreSelection = () => {
  const [selectedGenres, setSelectedGenres] = useState(['pop', 'reggaeton', 'jazz']);

  const toggleGenre = (genreId) => {
    setSelectedGenres((prevSelected) =>
      prevSelected.includes(genreId)
        ? prevSelected.filter((id) => id !== genreId)
        : [...prevSelected, genreId]
    );
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col font-body bg-background-dark text-text-light">
      <header className="sticky top-0 z-10 bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center p-4">
          <div className="flex size-12 shrink-0 items-center justify-start">
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-xl font-bold leading-tight tracking-tight">Elige tus géneros</h1>
            <p className="text-sm font-normal leading-normal text-text-muted-dark pt-1">
              Elige 3 o más para empezar
            </p>
          </div>
          <div className="flex w-12 items-center justify-end"></div>
        </div>
      </header>

      <main className="flex-grow px-4 pb-28 max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-6">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className={`relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl bg-primary p-4 aspect-square ${
                selectedGenres.includes(genre.id) ? 'ring-2 ring-accent' : ''
              }`}
              onClick={() => toggleGenre(genre.id)}
            >
              <span
                className={`material-symbols-outlined text-4xl ${
                  selectedGenres.includes(genre.id) ? 'text-accent' : 'text-white'
                }`}
              >
                {genre.icon}
              </span>
              <p className="text-base font-medium leading-tight text-white">{genre.name}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-background-dark via-background-dark to-transparent px-6 pb-6 pt-8">
        <button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 bg-accent text-background-dark text-lg font-bold leading-normal shadow-lg shadow-accent/30">
          <span className="truncate">Continuar</span>
        </button>
      </footer>
    </div>
  );
};

export default GenreSelection;
