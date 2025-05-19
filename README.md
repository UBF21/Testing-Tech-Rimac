# Testing-Tech / Rimac Seguros

Este repositorio contiene un proyecto de prueba técnica desarrollado con React y Vite, implementando los principios de Clean Architecture y Screaming Architecture. El proyecto utiliza Material UI para los componentes, mi librería de autoría Vali-Valid (publicada en npm: https://www.npmjs.com/package/vali-valid) para la validación de formularios, Fetch con React Query (TransackQuery) para las peticiones HTTP, Zustand para la gestión de estados globales, React Router DOM para la navegación entre rutas, y una mini-librería basada en SASS creada específicamente para este proyecto, enfocada en utilidades de estilo como rejillas, paletas de colores, breakpoints, márgenes y padding.

## Cómo Levantar el Proyecto

### Prerrequisitos:
- Node.js (versión 18 o superior) y npm instalados.
- Asegúrate de tener Git instalado para clonar el repositorio.

### Instalación:
- Clona el repositorio: `git clone <url-del-repositorio>`
- Navega al directorio del proyecto: `cd Testing-Tech-Rimac-Seguros`
- Instala las dependencias: `npm install`

### Ejecutar el Proyecto:
- Inicia el servidor de desarrollo: `npm run dev`
- Abre tu navegador y visita `http://localhost:5173` (o el puerto indicado en la terminal).

### Construir para Producción:
- Construye el proyecto: `npm run build`
- Los archivos de producción se generarán en la carpeta `dist`. Sírvelos usando un servidor estático o despliega según sea necesario.

### Notas:
- Verifica que todas las variables de entorno en `vite-env.d.ts` estén correctamente configuradas antes de ejecutar.
- Si encuentras problemas con las dependencias, elimina la carpeta `node_modules` y el archivo `package-lock.json`, luego vuelve a ejecutar `npm install`.

## Librerías y Herramientas Utilizadas

- **React con Vite**:
  - **Por qué**: Vite ofrece una experiencia de desarrollo rápida con reemplazo de módulos en caliente y un proceso de construcción optimizado. React fue elegido por su arquitectura basada en componentes, que se alinea con los principios de Clean Architecture.

- **Material UI**:
  - **Por qué**: Material UI proporciona un conjunto de componentes pre-diseñados y personalizables que aceleran el desarrollo y aseguran una interfaz consistente, siguiendo las directrices de Material Design. Ideal para prototipos rápidos y un aspecto profesional en la prueba técnica.

- **Vali-Valid (Librería de mi Autoría, Publicada en npm)**:
  - **Por qué**: Vali-Valid es una librería que yo, Felipe Rafael Montenegro Morriberon, desarrollé y publiqué en npm (https://www.npmjs.com/package/vali-valid). Está diseñada para la validación de formularios, ofreciendo una solución robusta y flexible para proyectos como este. La creé con el objetivo de simplificar y centralizar la lógica de validación, permitiendo un control preciso y adaptado a necesidades específicas, lo que la hace ideal para este proyecto.

- **Fetch con React Query (TransackQuery)**:
  - **Por qué**: Fetch es una API ligera integrada en el navegador para realizar peticiones HTTP, y se combinó con React Query (renombrado aquí como TransackQuery) para gestionar de manera eficiente la obtención, caché y estado de operaciones asíncronas. Esta combinación reduce el código repetitivo y mejora el rendimiento.

- **Zustand**:
  - **Por qué**: Zustand es una librería minimalista pero poderosa para la gestión de estados en React. Fue seleccionada por su simplicidad y rendimiento, ideal para manejar estados globales como datos de usuario y estados de formularios a lo largo de la aplicación.

- **React Router DOM**:
  - **Por qué**: React Router DOM fue elegido para manejar la navegación entre rutas de manera declarativa y eficiente en aplicaciones de una sola página (SPA). Su integración con React permite una experiencia de usuario fluida y es esencial para estructurar la aplicación según los principios de Clean Architecture, facilitando la separación de preocupaciones y la escalabilidad.

- **Mini-Librería SASS (Creada para este Proyecto)**:
  - **Por qué**: Esta mini-librería SASS fue creada específicamente para este proyecto con el propósito de centralizar utilidades de estilo (rejillas, paletas de colores, breakpoints, márgenes, padding, etc.), garantizando consistencia y reutilización en los estilos de la aplicación. Es el único componente desarrollado desde cero para esta prueba técnica, diseñado para cumplir con los requisitos específicos de presentación.

- **Variables de Entorno**:
  - **Por qué**: Se utilizaron variables de entorno (como `VITE_BASE_URL`) para gestionar configuraciones sensibles, como URLs de APIs o claves, de manera segura. Esto permite mantener la seguridad al evitar exponer datos sensibles en el código fuente y facilita la adaptación del proyecto a diferentes entornos (desarrollo, producción) sin modificar el código.

## División de Tareas

El proyecto se dividió en las siguientes tareas para completar la prueba técnica de manera eficiente:

- **Configuración de la Arquitectura**:
  - Se diseñó la estructura de Clean Architecture y Screaming Architecture, organizando el código en las carpetas `core`, `features`, `infrastructure` y `presentation`.
  - Asignado a: Desarrollador Principal.

- **Desarrollo de Componentes**:
  - Se construyeron componentes reutilizables usando Material UI, enfocándose en el diseño, navegación y formularios.
  - Asignado a: Desarrollador UI/UX.

- **Lógica de Estados y Validaciones**:
  - Se implementó Zustand para la gestión de estados globales y se integró mi librería Vali-Valid para validaciones de formularios.
  - Asignado a: Especialista en Gestión de Estados.

- **Integración de APIs**:
  - Se manejaron las peticiones HTTP con Fetch y se gestionaron los estados de datos con React Query (TransackQuery).
  - Asignado a: Especialista en Integración Backend.

- **Estilos y Utilidades**:
  - Se desarrolló la mini-librería SASS para utilidades de estilo y se aplicó en todo el proyecto.
  - Asignado a: Especialista en CSS/Estilos.

- **Pruebas y Optimización**:
  - Se aseguró la calidad del código con TypeScript y se optimizó el proceso de construcción con Vite.
  - Asignado a: Ingeniero de QA y Rendimiento.

La colaboración se facilitó mediante revisiones de código regulares y sesiones de programación en pareja para garantizar la alineación con los objetivos arquitectónicos.

## Consideraciones Importantes

- **Configuración del Entorno**:
  - Asegúrate de que las configuraciones de TypeScript (`tsconfig.app.json`, `tsconfig.node.json`) y de Vite (`vite.config.ts`) estén correctamente establecidas antes de ejecutar el proyecto.
  - Las variables de entorno (como `VITE_BASE_URL`) deben definirse en un archivo `.env` en la raíz del proyecto (no dentro de `src`) para temas de seguridad.
  - Este archivo debe estar en `.gitignore` para evitar exponer datos sensibles.

- **Gestión de Dependencias**:
- La carpeta `node_modules` y el archivo `package-lock.json` deben estar intactos. Evita editar manualmente `package.json` sin entender el impacto en las dependencias.

- **Manejo de Imágenes y Assets**:
- Las imágenes en la carpeta `src/assets` se incluyen en la carpeta `dist` al construir el proyecto, pero deben ser importadas en el código (por ejemplo, usando `import myImage from './assets/my-image.png'` o `new URL('./assets/my-image.png', import.meta.url).href`) para que Vite las procese y las copie a `dist/assets`. Si no se importan, no se incluirán en la build.

- **Librerías Personalizadas**:
- Mi paquete Vali-Valid está disponible en npm (https://www.npmjs.com/package/vali-valid) y debe instalarse como dependencia. La mini-librería SASS, creada específicamente para este proyecto, ya está incluida en el repositorio.

- **Rendimiento**:
- El caché de React Query debe monitorearse para evitar datos obsoletos; ajusta los tiempos de vida (TTL) según sea necesario.

- **Compatibilidad de Navegadores**:
- Prueba en navegadores modernos (Chrome, Firefox, Edge) debido a las dependencias de Material UI y Vite.

## Notas Adicionales

- Este proyecto fue desarrollado como una prueba técnica para Rimac Seguros, mostrando las mejores prácticas en arquitectura, gestión de estados y estilos.
- Estoy orgulloso de haber integrado mi librería Vali-Valid, que he publicado en npm para que otros desarrolladores puedan beneficiarse de ella. La mini-librería SASS, por otro lado, es un desarrollo exclusivo para este proyecto y está orientada a cumplir con los requisitos específicos de la prueba técnica.
- ¡Las contribuciones o retroalimentaciones son bienvenidas! Por favor, abre un issue o envía un pull request con mejoras.
