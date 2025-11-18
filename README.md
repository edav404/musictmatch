# MusicMatch

MusicMatch es una aplicación web de descubrimiento musical que permite a los usuarios encontrar nueva música y conectar con otras personas con gustos similares. La aplicación está construida con React, Vite y Tailwind CSS, y utiliza almacenamiento local para la persistencia de datos, sin necesidad de un backend.

## Características

- **Descubrimiento de música:** Desliza para dar "like" o "dislike" a canciones.
- **Match y Chat:** Conecta con otros usuarios que tengan tus mismos gustos musicales.
- **Eventos:** Descubre próximos conciertos y eventos musicales.
- **Diseño Responsivo:** Funciona perfectamente en dispositivos móviles, tablets y de escritorio.
- **Datos Locales:** Toda la información se almacena localmente en tu navegador.

## Tecnologías Utilizadas

- **React:** Biblioteca para construir interfaces de usuario.
- **Vite:** Entorno de desarrollo rápido para proyectos web modernos.
- **Tailwind CSS:** Framework de CSS para un diseño rápido y personalizado.
- **React Router:** Para la navegación y el enrutamiento del lado del cliente.

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno de desarrollo local.

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/edav404/musictmatch.git
    cd musicmatch
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

## Uso

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
```

Esto iniciará la aplicación en modo de desarrollo. Abre [http://localhost:5173](http://localhost:5173) (o el puerto que indique la consola) para verla en tu navegador.

## Despliegue

Este proyecto está listo para ser desplegado en Vercel.

1.  **Crea una cuenta en Vercel:** Si aún no tienes una, regístrate en [vercel.com](https://vercel.com).

2.  **Importa tu proyecto:**
    - Conecta tu cuenta de Git (GitHub, GitLab, Bitbucket) a Vercel.
    - Importa el repositorio de MusicMatch.

3.  **Configura el despliegue:**
    - Vercel detectará automáticamente que es un proyecto de Vite y aplicará la configuración correcta.
    - El **Framework Preset** debe ser `Vite`.
    - Los **Build and Output Settings** generalmente no necesitan cambios.
      - **Build Command:** `npm run build` o `vite build`
      - **Output Directory:** `dist`

4.  **Despliega:** Haz clic en el botón "Deploy". Vercel construirá y desplegará tu aplicación, y te proporcionará una URL pública.
