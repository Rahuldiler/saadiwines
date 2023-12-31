/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      "rest-bg-img": "url('/assets/bg-1.png')",
    },
    extend: {
      fontFamily: {
        Alex: ["Alex Brush"],
        Cardo: ["Cardo"],
      },
      colors: {
        themePrimaryColor: "#9CAB8D",
      },
    },
  },
  plugins: [],
};

// corePlugins: {
//   preflight: false,
// },
// content: [
//   "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//   "./components/**/*.{js,ts,jsx,tsx,mdx}",
//   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   // Or if using `src` directory:
//   "./src/**/*.{js,ts,jsx,tsx,mdx}",
// ],
