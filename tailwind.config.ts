/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // নিশ্চিত করুন এই পাথগুলো ঠিক আছে
  ],
  theme: {
    extend: {
      // এখানে এনিমেশনগুলো যোগ করা হলো
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 5s infinite',
      },
      // এখানে এনিমেশনগুলো কীভাবে কাজ করবে (Keyframes) তা বলে দেওয়া হলো
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
}