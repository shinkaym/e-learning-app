/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#615efc',
				grayDarkest: '#131316',
				grayDarker: '#212126',
				grayDark: '#9394A1'
  		},
  		fontFamily: {
  			primary: ["var(--font-manrope)"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default withUt(config);
