/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Near-black editorial canvas
        bg: '#07070A',
        surface: '#0E0E13',
        surface2: '#15151C',
        line: 'rgba(237, 233, 224, 0.10)',
        'line-strong': 'rgba(237, 233, 224, 0.20)',
        // Warm bone type system
        bone: '#EDE9E0',
        'bone-dim': '#A7A399',
        'bone-faint': '#6B6860',
        // Single restrained electric accent
        accent: '#3D5AFE',
        'accent-bright': '#6B80FF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        'label': '0.22em',
      },
      maxWidth: {
        shell: '1600px',
      },
      transitionTimingFunction: {
        // Expressive, premium easing
        swift: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'reveal-up': {
          '0%': { transform: 'translateY(110%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'spin-slow': 'spin-slow 22s linear infinite',
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
}
