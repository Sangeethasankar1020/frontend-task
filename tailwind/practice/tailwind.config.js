module.exports = {
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "custom-bg": "url('../image/img_5.jpg.webp')",
      }),
      button: {
        // Primary button
        primary: {
          padding: ".75rem 1.5rem",
          borderRadius: ".5rem",
          backgroundColor: "#4CAF50", // Green color
          color: "#FFF", // White text color
        },
        // Secondary button
        secondary: {
          padding: ".75rem 1.5rem",
          borderRadius: ".5rem",
          backgroundColor: "#FF5722", // Orange color
          color: "#FFF", // White text color
        },
        // Custom button variant
        custom: {
          padding: ".75rem 1.5rem",
          borderRadius: ".5rem",
          backgroundColor: "#2196F3", // Blue color
          color: "#FFF", // White text color
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
