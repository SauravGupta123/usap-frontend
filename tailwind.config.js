/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'local-image': "url('../src/Assets/communitie.png')",
        'member-image': "url('../src/Assets/image15.png')",
        'about-image': "url('../src/Assets/image14.png')",
        'gallery-image': "url('../src/Assets/gallery.png')",
        'events01-image': "url('../src/Assets/SustainableAgriculture.png')",
        'events02-image': "url('../src/Assets/Agri-Tech.png')",
        'events03-image': "url('../src/Assets/events03.png')",
        'team01-image': "url('../src/Assets/team3.png')",
        'team02-image': "url('../src/Assets/team4.png')",
        'schoolCollege-image': "url('../scr/Assets/schoolCollege.jpg')",
        'comp2-background': "url('../src/Assets/comp2-background.png')",
        'researchexpert-background': "url('../src/Assets/background-2.svg')",
        'researchandinnovation-background':
          "url('../src/Assets/background-3.jpg')",
        'researchandinnovation-background2':
          "url('../src/Assets/background-4.svg')",
        'dronepage-background': "url('../src/Assets/background-5.svg')",
     'custom-gradient': 
    'linear-gradient(90deg, rgba(30, 64, 175, 0.84) -14.92%, rgba(0, 112, 255, 0.84) 119.6%)',

      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lemon: ['Lemon', 'cursive'],
        poppins: ['Poppins', 'sans'],
        inter: ['Inter', 'sans'],
      },
      boxShadow: {
        custom: '8px 8px 8px 0 rgba(0, 0, 0, 0.25)',
        innershadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
      },
      screens: {
        SmallScreen: '0px',
        Mobile: '390px',
        Tablet: '600px',
        'Laptop-sm': '905px',
        'Laptop-lg': '1240px',
        Desktop: '1440px',
      },
    },
    plugins: [],
  },
});
