import React, { useState } from 'react';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col items-center justify-center dark group/design-root overflow-x-hidden p-6 bg-background-dark font-body text-white">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent-pink/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/20 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center sm:max-w-md md:max-w-lg">
        <div className="flex flex-col items-center gap-4 mb-10">
          <span className="material-symbols-outlined text-white text-5xl bg-gradient-to-br from-accent-pink to-primary p-3 rounded-2xl">
            equalizer
          </span>
          <span className="font-display text-4xl font-bold tracking-tight">MusicMatch</span>
        </div>

        <h1 className="font-display text-white tracking-light text-[32px] font-bold leading-tight text-center pb-8">
          Bienvenido de nuevo
        </h1>

        <div className="w-full space-y-5">
          <div className="flex flex-col">
            <label className="text-white/80 text-sm font-medium leading-normal pb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-pink/50 border border-white/20 bg-white/5 h-14 px-4 text-base font-normal leading-normal"
                id="email"
                placeholder="Ingresa tu email"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-white/80 text-sm font-medium leading-normal pb-2" htmlFor="password">
              Contraseña
            </label>
            <div className="relative">
              <input
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-pink/50 border border-white/20 bg-white/5 h-14 px-4 pr-12 text-base font-normal leading-normal"
                id="password"
                placeholder="Ingresa tu contraseña"
                type={passwordVisible ? 'text' : 'password'}
              />
              <button
                className="text-white/60 absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer hover:text-white"
                onClick={togglePasswordVisibility}
              >
                <span className="material-symbols-outlined">
                  {passwordVisible ? 'visibility' : 'visibility_off'}
                </span>
              </button>
            </div>
          </div>
          <p className="text-white/60 text-sm font-normal leading-normal text-right underline cursor-pointer hover:text-white transition-colors">
            ¿Olvidaste tu contraseña?
          </p>
        </div>

        <div className="w-full mt-8 space-y-4">
          <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-gradient-to-r from-accent-pink to-primary text-white text-base font-bold leading-normal tracking-wide transition-transform duration-200 ease-in-out hover:scale-[1.03] active:scale-100">
            <span className="truncate">Iniciar Sesión</span>
          </button>
          <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-background-dark border border-accent-pink text-white text-base font-medium leading-normal tracking-wide transition-colors hover:bg-white/10">
            <img
              className="w-6 h-6 mr-3"
              alt="Google logo"
              src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1OLro_VvL4PSLC41H-HhGplClpdVupNbZsLvMkbcOKH7Qw0LzvUVErChHxX8rhIOz_HDrJOhHI9"
            />
            <span className="truncate">Continuar con Google</span>
          </button>
        </div>

        <p className="text-white/60 text-sm font-normal leading-normal mt-10 text-center">
          ¿No tienes una cuenta?{' '}
          <a href="#" className="font-bold text-white underline hover:text-accent-pink transition-colors">
            Crear una cuenta
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
