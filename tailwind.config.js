/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'illustration-pattern': "url('/illustration.png')",
        'website-pattern': "url('/websites.jpg')",
        'app-pattern':"url('/apps.jpg')",
      }
    },
  },
  plugins: [],
};