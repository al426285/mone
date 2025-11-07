import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    globals: true,  //podemos usar it,describe... en los test.js
    environment: 'jsdom',   // simula un navegador para pruebas React
    setupFiles: './src/setupTests.js', // carga jest-dom y configuraciones previas
    reporters: ['default', 'junit'],     // añade el formato JUnit
    outputFile: './test-results/junit.xml', // dónde guardar el informe
  },
})
