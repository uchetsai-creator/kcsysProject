/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f', // 深藍色
          dark: '#0f1f3d',
          light: '#2c5282',
        },
        secondary: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
        },
        accent: '#0ea5e9', // 亮藍色
      },
    },
  },
  plugins: [],
}
