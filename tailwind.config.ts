/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // ডার্ক মোডকে 'class' বা 'media' এর উপর নির্ভর না করে সরাসরি কন্ট্রোল করার জন্য
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        // আপনার থিমের মেইন ডার্ক কালারগুলো এখানে ডিফাইন করে দিন
        navy: {
          dark: '#0a192f',
          light: '#0d213b',
        },
        emerald: {
          500: '#10b981',
        }
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 5s infinite',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [],
}