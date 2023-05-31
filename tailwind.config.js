/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,jsx}",
  ],
  theme: {
    extend: {
      height:{
        'todo-list': '350px',
      },
    },
  },
  plugins: [],
}

