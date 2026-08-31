# AGENTS.md - BuhoGrafika Landing Page

## Project Description
Landing page de presentación para BuhoGrafika, una gráfica especializada en cartelería, estampado, diseño gráfico y cuadros de neón.

## Tech Stack
- **Framework:** Vite 8 + React 19
- **Routing:** React Router DOM 7
- **Styling:** Tailwind CSS v4 (configurado via `@theme` en index.css, sin tailwind.config.js)
- **Animations:** Framer Motion 13
- **Icons:** react-icons
- **Lint:** oxlint
- **Language:** JavaScript (no TypeScript)
- **Forms:** Formspree
- **Deploy:** Vercel

## Project Structure
```
buhografika/
├── public/
│   ├── favicon.png
│   ├── icons.svg
│   └── videos/
│       └── instalacion.mp4
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Header con logo y navegación (mobile menu)
│   │   ├── Hero.jsx            # Sección principal con logo + CTAs
│   │   ├── Services.jsx        # 5 cards de servicios
│   │   ├── VideoSection.jsx    # Video de instalación en mockup celular
│   │   ├── Gallery.jsx         # Carrusel de trabajos (auto 15s)
│   │   ├── Testimonials.jsx    # Testimonios con auto-scroll (20s)
│   │   ├── FAQ.jsx             # Preguntas frecuentes (acordeón)
│   │   ├── CtaFinal.jsx        # CTA final con botón WhatsApp
│   │   ├── WhatsAppButton.jsx  # Botón flotante neón fijo
│   │   ├── ContactForm.jsx     # Formulario Formspree
│   │   ├── ContactCard.jsx     # Card reutilizable para datos de contacto
│   │   ├── InputForm.jsx       # Input reutilizable para formularios
│   │   ├── Privacidad.jsx      # Políticas de privacidad
│   │   └── Footer.jsx          # Footer con info y redes
│   ├── pages/
│   │   ├── Home.jsx            # Página principal (todas las secciones)
│   │   ├── Contact.jsx         # Página de contacto (formulario + cards)
│   │   └── GalleryPage.jsx     # Galería con filtros y lightbox
│   ├── assets/
│   │   ├── buhosinfondo.png    # Logo sin fondo (usado en Navbar y Hero)
│   │   ├── hero.png            # Imagen hero (no usada)
│   │   └── images/             # 12 fotos de trabajos (3 neon, 3 estampado, 3 cartelería, 3 carrusel)
│   ├── index.css               # Estilos base + tema Tailwind v4 + utilidades neon
│   ├── App.jsx                 # Router principal
│   └── main.jsx
├── vite.config.js              # Plugins: react() + tailwindcss()
├── vercel.json                 # SPA rewrites para React Router
└── package.json
```

## Design Guidelines
- **Theme:** Dark mode (fondo `#0a0a0a`)
- **Primary color:** Rojo `#DC2626` (definido como `--color-primary` en index.css)
- **Dark shades:**
  - `--color-dark`: `#0a0a0a` (fondo principal)
  - `--color-dark-card`: `#141414` (fondo de cards/paneles)
  - `--color-dark-lighter`: `#1a1a1a` (gradientes intermedios)
- **Accent:** Efectos neón rojo (clases utilitarias en index.css)
- **Typography:** Inter, Poppins, sans-serif (declaradas en CSS pero NO importadas en index.html)
- **Layout:** Mobile-first, responsive
- **WhatsApp:** Verde `#25D366` (hardcodeado)

### CSS Utility Classes Custom (index.css)
- `.neon-glow` — Sombra neon roja intensa (4 capas box-shadow)
- `.neon-glow-subtle` — Sombra neon roja suave (2 capas)
- `.neon-text` — Text-shadow neon rojo (3 capas)
- `.neon-border` — Borde rojo con sombra neon

### Design Patterns
- **Gradientes de fondo:** `bg-gradient-to-b from-dark via-dark-lighter to-dark` en todos los componentes
- **Glow orb decorativo:** `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]`
- **Headers de sección:**
  ```jsx
  <span className="inline-block text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">
    Subtítulo
  </span>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
    Título <span className="text-primary neon-text">resaltado</span>
  </h2>
  <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Descripción</p>
  ```
- **Cards:** `bg-dark-card/80 backdrop-blur-sm border border-white/5 rounded-2xl`
- **Botón WhatsApp:** Mismo estilo inline con boxShadow neon en Hero, VideoSection, CtaFinal, WhatsAppButton

## Component Rules
1. Un componente por archivo
2. Usar functional components con hooks
3. Tailwind inline (no CSS modules, no styled-components)
4. Cada componente debe ser responsivo (mobile-first)
5. Usar Framer Motion con `whileInView` + `viewport={{ once: true }}` para animaciones de entrada

## Animation Rules
- **Hero:** Animación de entrada al cargar la página (logo flotante con animación)
- **Gallery:** Carrusel automático cada 15 segundos con AnimatePresence
- **Testimonials:** Auto-scroll cada 20 segundos
- **WhatsApp button:** Efecto ping neon pulsante
- **Cards:** Hover effects + animaciones de entrada al hacer scroll (whileInView)
- **FAQ:** Acordeón con AnimatePresence para expandir/colapsar

## Sections (Home — in order)
1. **Navbar** — Logo texto "BUHO"+"GRAFIKA" + links (Inicio, Trabajos, FAQ, Contacto) + menu mobile
2. **Hero** — Título "BUHO GRAFIKA" + descripción + logo flotante + botones CTA (WhatsApp + Servicios)
3. **Gallery** — Carrusel automático 15s (Cartelería, Neon, Estampado, Lonas)
4. **Services** — 5 cards: Corpor, Neon LED, Carteles, Pastillas, Impresiones
5. **VideoSection** — Video `/videos/instalacion.mp4` en mockup celular + 4 beneficios + CTA WhatsApp
6. **Testimonials** — 10 testimonios con estrellas y auto-scroll
7. **FAQ** — 4 preguntas en acordeón
8. **CtaFinal** — CTA final "Listo para destacar tu negocio?" + botón WhatsApp
9. **WhatsAppButton** — Botón flotante fijo (esquina inferior derecha)
10. **Footer** — Info contacto, redes (Instagram @buhografika), copyright, link privacidad

## Routing
| Ruta | Página | Descripción |
|---|---|---|
| `/` | Home | Todas las secciones |
| `/contacto` | Contact | Formulario Formspree + cards info |
| `/galeria` | GalleryPage | Grid fotos + filtros (Todos/Neon/Estampado/Cartelería) + lightbox |
| `/privacidad` | Privacidad | Políticas de privacidad (sin Navbar ni Footer) |

## Contact Data
- **Email:** buhografika@gmail.com
- **WhatsApp:** 11-2238-9792 / 11-6740-1899
- **Dirección:** Eva Perón 2923, B1614CLF Villa de Mayo, Buenos Aires
- **Horarios:** Lunes a sábados, 9:00 am - 6:00 pm
- **Instagram:** @buhografika

## Commands
```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build producción
npm run build

# Preview build
npm run preview

# Lint (oxlint)
npm run lint
```

## Important Notes
- El formulario usa Formspree (envía emails a buhografika@gmail.com)
- Hay 12 fotos reales de trabajos en `src/assets/images/`
- El número de WhatsApp en Hero usa formato `541122389792` (inconsistente con el resto que usa `5491122389792`)
- Priorizar siempre el diseño oscuro con acentos rojos
- Todos los textos en español
- La página `/privacidad` no tiene Navbar ni Footer
- Assets sin usar: `hero.png`, `react.svg`, `vite.svg`, `icons.svg`, video duplicado en `src/assets/videos/`
