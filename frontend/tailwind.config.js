/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBanner: "url('../public/images/homeBanner.jpg')",
        island: "url('../public/images/island.jpg')",
        pool: "url('../public/images/pool.jpg')",
        beachfront: "url('../public/images/beachfront.jpg')",
        windmill: "url('../public/images/windmill.jpg')",
        iconic: "url('../public/images/iconic.jpg')",
        countryside: "url('../public/images/countryside.jpg')",
        signupBanner: "url('../public/images/signupBanner1.jpg')",
        loginBanner: "url('../public/images/loginBanner1.jpg')",
      },
    },
  },
  plugins: [],
};
