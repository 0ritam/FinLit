import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
	fontFamily: {
		sans: ['Poppins', 'sans-serif']
	},
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			color: {
  				'1': '#AC6AFF',
  				'2': '#FFC876',
  				'3': '#FF776F',
  				'4': '#7ADB78',
  				'5': '#858DFF',
  				'6': '#FF98E2'
  			},
  			stroke: {
  				'1': '#26242C'
  			},
  			n: {
  				'1': '#FFFFFF',
  				'2': '#CAC6DD',
  				'3': '#ADA8C3',
  				'4': '#757185',
  				'5': '#3F3A52',
  				'6': '#252134',
  				'7': '#15131D',
  				'8': '#0E0C15',
  				'9': '#474060',
  				'10': '#43435C',
  				'11': '#1B1B2E',
  				'12': '#2E2A41',
  				'13': '#6C7275'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
			primary2: {
				DEFAULT: 'hsl(var(--primary2))',
  				foreground: 'hsl(var(--primary2-foreground))'
			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-sora)',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'Roboto',
  				'Oxygen',
  				'Ubuntu',
  				'sans-serif'
  			],
  			code: 'var(--font-code)',
  			grotesk: 'var(--font-grotesk)'
  		},
  		letterSpacing: {
  			tagline: '.15em'
  		},
  		spacing: {
  			'15': '3.75rem',
  			'0.25': '0.0625rem',
  			'7.5': '1.875rem'
  		},
  		opacity: {
  			'15': '.15'
  		},
  		transitionDuration: {
  			DEFAULT: '200ms'
  		},
  		transitionTimingFunction: {
  			DEFAULT: 'linear'
  		},
  		zIndex: {
  			'1': '1',
  			'2': '2',
  			'3': '3',
  			'4': '4',
  			'5': '5'
  		},
  		borderWidth: {
  			DEFAULT: '0.0625rem'
  		},
  		backgroundImage: {
  			'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
  			'conic-gradient': 'conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({
        body: {
          "@apply font-sans bg-n-8 text-n-1 text-base": {},
        },
      });
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]": {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]": {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight": {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8": {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase": {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
} satisfies Config;
