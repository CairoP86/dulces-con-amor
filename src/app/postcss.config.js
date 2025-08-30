// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {}, // ✅ plugin correcto para Next.js 15
    autoprefixer: {},
  },
}
