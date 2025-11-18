import React from 'react';

const Welcome = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-between p-8 bg-brand-bg font-body text-white">
      <header className="flex w-full max-w-md justify-center pt-8">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-4xl" style={{ color: '#F366FF' }}>
            equalizer
          </span>
          <span className="font-display text-3xl font-bold tracking-tight">MusicMatch</span>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-12 text-center w-full max-w-md mx-auto">
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-full bg-brand-purple/20 blur-3xl"></div>
          <img
            alt="Ilustración de una persona con auriculares flotando en un espacio abstracto con elementos musicales."
            className="relative w-full h-full object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHrZoefGEpw2R_v1dnNnb22hQj9xGkTIXXFsLMoQTZ1DrTiG4xnQsYH9WpMY3Wj3-rZ7hQmcTIQW7cW4Rv9iOPUF__Qf2X3ZJYFhNGepgriPEMU8o879ZSNYF3RAwh7gqqQZB4GApSZGedf5PU51-sZ3ammMVTwkN7Db1NSthSjihZFQN5vS-NvwiY68PkN_Af3YaBcRZeFtcOu1WC9EAFRgSMCEON5K1JprdjfpB20ZW8UbHC1PoRXA1p9IcIQ5QsKv-ZoyB85KQ"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white">
            Descubre música
            <br />
            deslizando
          </h1>
          <p className="font-body text-base sm:text-lg font-normal leading-normal text-slate-300 max-w-xs sm:max-w-md mx-auto">
            La banda sonora de tu vida está a solo un swipe de distancia.
          </p>
        </div>
      </main>

      <footer className="w-full max-w-md pb-8">
        <button className="h-14 w-full rounded-full bg-gradient-to-r from-brand-pink to-brand-purple px-6 text-lg font-bold text-white shadow-lg shadow-brand-purple/30 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-100">
          Comenzar
        </button>
      </footer>
    </div>
  );
};

export default Welcome;
