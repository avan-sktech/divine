/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom Industrial Architecture Colors
        obsidian: '#0A0A0A',
        'optical-white': '#F8F8F8',
        'silver-steel': '#E4E4E7',
        'accent-muted': '#A1A1AA',
        'tile-bg': '#161616',
        'gold': {
          DEFAULT: '#D4AF37',
          light: '#E5C158',
          dark: '#B8962E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'SF Mono', 'monospace'],
        // Restricted accent face. Permitted only on the italic accent phrase
        // inside a display heading, and on pull quotes. Never on eyebrows,
        // code stamps, numerals, buttons, nav or body copy.
        serif: ['Newsreader', 'Georgia', 'Times New Roman', 'serif'],
      },
      // Display scale ported from the 2026 design package. Each token carries
      // its own line-height and tracking so a heading needs one utility.
      fontSize: {
        'display-hero': ['clamp(2.5rem, 8.3vw, 8.6rem)', { lineHeight: '0.90', letterSpacing: '-0.020em' }],
        'display-1': ['clamp(2.25rem, 6.1vw, 5.75rem)', { lineHeight: '0.94', letterSpacing: '-0.038em' }],
        'display-2': ['clamp(2.1rem, 5.1vw, 4.25rem)', { lineHeight: '0.94', letterSpacing: '-0.036em' }],
        'display-3': ['clamp(1.95rem, 3.8vw, 3.4rem)', { lineHeight: '0.97', letterSpacing: '-0.032em' }],
        'display-4': ['clamp(1.45rem, 2.3vw, 2.1rem)', { lineHeight: '1.08', letterSpacing: '-0.028em' }],
        lede: ['clamp(1rem, 1.35vw, 1.18rem)', { lineHeight: '1.65', letterSpacing: '-0.008em' }],
        'body-copy': ['0.9375rem', { lineHeight: '1.75', letterSpacing: '0' }],
        micro: ['0.6875rem', { lineHeight: '1.1', letterSpacing: '0.16em' }],
        'micro-xs': ['0.625rem', { lineHeight: '1.1', letterSpacing: '0.18em' }],
      },
      maxWidth: {
        shell: '1240px',
        'shell-wide': '1440px',
        lede: '36rem',
        measure: '48ch',
      },
      spacing: {
        gutter: 'clamp(1.25rem, 4vw, 3.5rem)',
        section: 'clamp(4.5rem, 8vw, 8.5rem)',
        'section-tight': 'clamp(3.25rem, 5.5vw, 5.5rem)',
        'section-heading': 'clamp(2.5rem, 5vw, 5rem)',
      },
      transitionDuration: { 650: '650ms' },
      transitionTimingFunction: { reveal: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'tile-hover': '0 0 20px rgba(255,255,255,0.1)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "pulse-opacity": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "pulse-opacity": "pulse-opacity 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
