/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,js}', // tambahkan ts
    // Add other paths to your template files here
  ],
  safelist: [
    {
      pattern:
        /(bg|from|to|via)-(gradient-to-(r|l|t|b|tr|tl|br|bl)|green|red|yellow|blue)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus'],
    },
    'bg-gradient-to-r',
    'bg-gradient-to-br',
    'from-green-500',
    'to-green-400',
    'from-red-500',
    'to-red-400',
    'from-yellow-500',
    'to-yellow-400',
    'from-blue-500',
    'to-blue-400',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
