/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        karla: ["Karla", "sans-serif"],
        kumbh: ["Kumbh Sans", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}