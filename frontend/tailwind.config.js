/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // 'phones': {'max':'382px'},
      'sPhone': '382px',
      // => @media (min-width: 640px) { ... }
      'phones':{'max': '846px'},
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  
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
        bg2:"url('../public/images/bg.jpg')"
      },
    },
  },
  plugins: [],
};
