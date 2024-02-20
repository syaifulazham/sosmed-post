module.exports = {
  content: [
    "./views/**/*.ejs", // Adjust this path to where your EJS templates are located
    "./public/**/*.html",
    "./public/**/*.js"
  ],
  theme: {
    extend: {
      // Example of extending colors
      colors: {
        'brand-blue': '#007bff',
        'brand-red': '#dc3545',
        'blue': '#4287f5',
        'gray': '#858585'
      },
      // Example of extending fontFamily
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      },
      // Add custom configurations here
    },
  },
  plugins: [
    // Add plugins here
  ],
  // Enable any core plugins and add custom configurations
};
