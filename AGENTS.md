# AGENTS.md - BuhoGrafika Landing Page

## Project Description
Landing page de presentación para BuhoGrafika, una gráfica especializada en cartelería, estampado, diseño gráfico y cuadros de neón.

## Tech Stack
- **Framework:** Vite + React
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** react-icons / lucide-react
- **Language:** JavaScript (no TypeScript)

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx        # Header con logo y navegación
│   ├── Hero.jsx          # Sección principal
│   ├── Services.jsx      # Cards de servicios (4)
│   ├── VideoSection.jsx  # Video de instalación
│   ├── Gallery.jsx       # Carrusel de trabajos (auto 15s)
│   ├── WhatsAppButton.jsx # Botón flotante neón
│   ├── FAQ.jsx           # Preguntas frecuentes (acordeón)
│   └── Footer.jsx        # Footer con info y redes
├── pages/
│   ├── Home.jsx          # Página principal (todas las secciones menos contacto)
│   └── Contact.jsx       # Página de contacto (formulario separado)
├── assets/
│   └── logo.png
├── App.jsx               # Router principal
└── main.jsx
```

## Design Guidelines
- **Theme:** Dark mode (fondo negro/gris oscuro)
- **Primary color:** Rojo (#DC2626 o similar, inspirado en el logo)
- **Accent:** Efectos neón rojo en botones y elementos destacados
- **Typography:** Fuente moderna (Inter, Poppins o similar)
- **Layout:** Mobile-first, responsive

## Component Rules
1. Un componente por archivo
2. Usar functional components con hooks
3. Separar estilos de Tailwind inline (no CSS modules)
4. Cada componente debe ser responsivo
5. Usar Framer Motion para animaciones de entrada

## Animation Rules
- **Hero:** Animación de entrada al cargar la página
- **Gallery:** Carrusel automático cada 15 segundos
- **WhatsApp button:** Efecto neón pulsante
- **Cards:** Hover effects y animaciones de entrada al hacer scroll

## Sections (in order)
1. Navbar - Logo + links (Inicio, Nosotros, Preguntas Frecuentes, Contacto)
2. Hero - Título "BUHOGRAFIKA" + descripción + imagen del local
3. Services - Cuadros de Neón, Estampado de Remeras, Diseño Gráfico, Cartelería Comercial
4. Video - Video de instalación de carteles
5. Gallery - Carrusel automático de trabajos realizados
6. WhatsApp - Botón flotante con efecto neón
7. FAQ - Acordeón de preguntas frecuentes
8. Footer - Info contacto, redes sociales, copyright

## Routing
- **Home (/)**: Navbar + Hero + Services + Video + Gallery + WhatsApp + FAQ + Footer
- **Contact (/contacto)**: Navbar + Contact Form + Footer

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

# Lint
npm run lint
```

## Important Notes
- El formulario es solo visual (sin envío de emails por ahora)
- Solo el logo está disponible, el resto de imágenes son placeholders
- Priorizar siempre el diseño oscuro con acentos rojos
- Todos los textos en español
