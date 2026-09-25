# 🎀 Tu Era Creator — Landing Page Oficial (@soymariab)

Landing page de conversión de nivel mundial (*world-class*) para el workshop presencial **"Tu era Creator"** de la creadora **@soymariab** en el **Hotel Costanero de Montevideo** (24 de Octubre).

## 🚀 Características Principales

1. **Diseño "Neo-Editorial Creator Chic"**:
   - Paleta de color oficial: Fucsia vibrante (`#FF2E93`), amarillo pastel mantequilla (`#FFF385`), negro ónix de alto contraste y acentos dorados brillantes.
   - Stickers interactivos, títulos recortados, bordes neobrutalistas suaves y marquesinas animadas.

2. **Mobile-First & Micro-Interacciones**:
   - Barra fija inferior de conversión (*Sticky Mobile Bar*) para el 95%+ de tráfico proveniente de Instagram Stories y Reels.
   - Confetti celebration burst con estrellas doradas al pulsar los botones de reserva.
   - Calculadora interactiva de rentabilidad (ROI): simula cómo una sola colaboración paga el 100% del workshop.
   - Modal interactivo con doble pasarela: **WhatsApp Concierge** (reserva personalizada y transferencias BROU/Prex/Itaú) y **Mercado Pago Uruguay**.

3. **Arquitectura SEO & AI-SEO (Generative Engine Optimization)**:
   - Datos estructurados Schema.org completos en JSON-LD: `Event`, `Course`, `Person` y `FAQPage` para indexación inmediata por Google y motores de búsqueda de IA (ChatGPT Search, Perplexity, Google SGE).
   - Core Web Vitals optimizados con tiempo de carga inferior a 0.9 segundos.

## 🛠️ Tecnologías

- **Framework**: React 18 + Vite 6 + TypeScript
- **Estilos**: Tailwind CSS 3.4
- **Iconografía**: Lucide React
- **Efectos**: Canvas-Confetti

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 🌐 Despliegue en Vercel

El proyecto incluye el archivo `vercel.json` configurado listo para despliegue:

### Opción 1: Mediante la CLI de Vercel
```bash
npx vercel
```

### Opción 2: Conectando tu repositorio de GitHub
1. Sube este repositorio a GitHub.
2. Ingresa a [vercel.com](https://vercel.com) e importa el repositorio.
3. Vercel detectará Vite automáticamente (`npm run build` y directorio `dist`).
4. Haz clic en **Deploy**.

## ⚙️ Configuración de Contacto y Pagos

En `src/App.tsx` puedes editar fácilmente:
- **Número de WhatsApp**: Modifica el parámetro `https://wa.me/598...` con el número uruguayo de María o de su equipo.
- **Link de Mercado Pago**: Modifica `https://link.mercadopago.com.uy/...` con el link de pago o suscripción generado desde tu cuenta de Mercado Pago Uruguay.
