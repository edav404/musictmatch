import React from 'react';
import { events } from '../data/events';

const Events = () => {
  const recommendedEvents = events.slice(0, 3);
  const allEvents = events.slice(3);

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-white">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        {/* Top App Bar */}
        <header className="sticky top-0 z-10 bg-background-dark/80 backdrop-blur-sm">
          <div className="flex items-center p-4">
            <div className="flex size-12 shrink-0 items-center justify-start">
              <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                arrow_back_ios_new
              </span>
            </div>
            <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em]">
              Próximos Eventos
            </h1>
            <div className="flex w-12 items-center justify-end">
              <button className="flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-transparent">
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                  search
                </span>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-5xl mx-auto w-full">
          {/* Chips / Filters */}
          <div className="flex gap-3 overflow-x-auto p-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
            <div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4">
              <span className="material-symbols-outlined text-[#F366FF]" style={{ fontSize: '20px' }}>
                location_on
              </span>
              <p className="text-sm font-medium leading-normal">Por Ubicación</p>
            </div>
            <div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4">
              <span className="material-symbols-outlined text-[#F366FF]" style={{ fontSize: '20px' }}>
                calendar_month
              </span>
              <p className="text-sm font-medium leading-normal">Por Fecha</p>
            </div>
            <div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4">
              <span className="material-symbols-outlined text-[#F366FF]" style={{ fontSize: '20px' }}>
                star
              </span>
              <p className="text-sm font-medium leading-normal">Por Relevancia</p>
            </div>
          </div>

          {/* Section Header: Recommended */}
          <h2 className="golos-text px-4 pb-3 pt-5 text-2xl font-bold leading-tight tracking-[-0.015em]">
            Eventos recomendados para Ti
          </h2>

          {/* Carousel */}
          <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch gap-4 px-4 pb-4">
              {recommendedEvents.map((event) => (
                <div key={event.id} className="flex h-full min-w-72 flex-1 flex-col gap-4 overflow-hidden rounded-xl bg-[#2a2a2a] shadow-lg">
                  <div className="w-full aspect-video bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${event.image}')` }}></div>
                  <div className="flex flex-1 flex-col justify-between gap-4 p-4 pt-0">
                    <div>
                      <h3 className="golos-text text-lg font-bold">{event.title}</h3>
                      <p className="text-sm font-normal leading-normal text-white/70">{event.artist}</p>
                    </div>
                    <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#F366FF] to-[#8A2BE2] px-4 text-sm font-bold leading-normal tracking-[0.015em]">
                      <span className="truncate">Me Interesa</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical List of Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {allEvents.map((event) => (
               <div key={event.id} className="flex flex-col items-stretch justify-start overflow-hidden rounded-xl bg-primary">
                <div className="w-full aspect-[2/1] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${event.image}')`}}></div>
                <div className="flex w-full grow flex-col items-stretch justify-center gap-3 p-4">
                  <h3 className="golos-text text-xl font-bold leading-tight tracking-[-0.015em]">{event.title}</h3>
                  <div className="flex items-end justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <p className="text-base font-normal leading-normal">{event.artist}</p>
                      <p className="text-sm font-normal leading-normal text-white/80">{event.date} ・ {event.location} ・ {event.distance} km</p>
                    </div>
                    <button className="flex h-10 min-w-[84px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#F366FF] to-[#8A2BE2] px-4 text-sm font-bold leading-normal shadow-lg">
                      <span className="truncate">Me Interesa</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Events;
