import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import { ThemeProvider } from "next-themes";
import { init } from '@emailjs/browser';

init(import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY);

createRoot(document.getElementById('root')!).render(
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
)