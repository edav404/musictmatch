import React, { useState } from 'react';

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-brand-bg dark group/design-root overflow-x-hidden p-6 text-white font-sans">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
        <div className="text-center mb-10">
          <svg
            className="h-12 w-12 mx-auto mb-4 text-brand-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3h-6Z"></path>
          </svg>
          <h1 className="font-display text-4xl font-bold tracking-tight">Crea tu cuenta</h1>
          <p className="text-neutral-400 mt-2">Únete a la comunidad de MusicMatch.</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-neutral-700 bg-transparent text-white placeholder:text-neutral-500 focus:border-brand-primary focus:ring-brand-primary/50 h-14 p-4 text-base font-normal leading-normal transition-all duration-200"
              id="username"
              placeholder="Nombre de usuario"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-neutral-700 bg-transparent text-white placeholder:text-neutral-500 focus:border-brand-primary focus:ring-brand-primary/50 h-14 p-4 text-base font-normal leading-normal transition-all duration-200"
              id="email"
              placeholder="Correo electrónico"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <div className="relative flex w-full flex-1 items-stretch">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-neutral-700 bg-transparent text-white placeholder:text-neutral-500 focus:border-brand-primary focus:ring-brand-primary/50 h-14 p-4 text-base font-normal leading-normal transition-all duration-200 pr-12"
                id="password"
                placeholder="Contraseña"
                type={passwordVisible ? 'text' : 'password'}
              />
              <button
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-400 hover:text-white transition-colors duration-200"
                type="button"
                onClick={togglePasswordVisibility}
              >
                <span className="material-symbols-outlined">
                  {passwordVisible ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-base font-bold leading-normal tracking-wide transition-transform duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98]">
            <span className="truncate">Registrarse</span>
          </button>
          <div className="flex items-center my-2">
            <div className="flex-grow border-t border-neutral-800"></div>
            <span className="px-4 text-neutral-500 text-sm">O</span>
            <div className="flex-grow border-t border-neutral-800"></div>
          </div>
          <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full h-14 px-5 bg-brand-bg text-white border border-brand-primary text-base font-bold leading-normal tracking-wide transition-transform duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98]">
            <img
              alt="Google logo"
              className="h-6 w-6"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRYe0Dl3lOlS7nDDd71ta3LsObldq3_yHdbyzUfW3QAAQwdBsqY8acH4ROvVd_F0jN67bnIXWxo-5vFHT1rvAfrKQRwHDozY8_VKwe0-VfcpwK4BYDFXy8Wjomh35OXVeq21ZR1VPyfmtcVE9jkO-maciluVtMXz5wwYKJXz4-xbUpxksa2RuNuDsw5bSY_jxUWGPfNaIQGsmXuzrFyIyKB4kZ5yZWttAEDlKB3guUPYPrbTtTQinDf1Pmrz-K_fGPYutFohr0ni8"
            />
            <span className="truncate">Continuar con Google</span>
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-neutral-400 text-sm">
            ¿Ya tienes una cuenta?{' '}
            <a href="#" className="font-bold text-white hover:underline">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
