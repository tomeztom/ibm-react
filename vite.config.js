import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: "https://tomeztom.github.io/ibm-react/",
  plugins: [react()],
})
