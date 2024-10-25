/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rthin: ["RobotoMonoThin", "sans-serif"],
        rthinitalic: ["RobotoMonoThinItalic", "sans-serif"],
        rlight: ["RobotoMonoLight", "sans-serif"],
        rlightitalic: ["RobotoMonoLightItalic", "sans-serif"],
        rregular: ["RobotoMonoRegular", "sans-serif"],
        ritalic: ["RobotoMonoItalic", "sans-serif"],
        rmedium: ["RobotoMonoMedium", "sans-serif"],
        rmediumitalic: ["RobotoMonoMediumItalic", "sans-serif"],
        rbold: ["RobotoMonoBold", "sans-serif"],
        rbolditalic: ["RobotoMonoBoldItalic", "sans-serif"],
        rsemibold: ["RobotoMonoSemiBold", "sans-serif"],
        rsemibolditalic: ["RobotoMonoSemiBoldItalic", "sans-serif"],
        rthin: ["RobotoMonoThin", "sans-serif"],
        rthinitalic: ["RobotoMonoThinItalic", "sans-serif"],
      }

    },
  },
  plugins: [],
}

