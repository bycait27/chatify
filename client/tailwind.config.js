/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // base theme colors
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: 'var(--destructive)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        
        // chat-specific colors
        chat: {
          background: 'var(--chat-background)',
          sidebar: 'var(--chat-sidebar)',
          header: 'var(--chat-header)',
          input: 'var(--chat-input-bg)',
        },
        
        // message colors
        message: {
          user: {
            bg: 'var(--message-user-bg)',
            text: 'var(--message-user-text)',
          },
          other: {
            bg: 'var(--message-other-bg)',
            text: 'var(--message-other-text)',
          },
          system: {
            bg: 'var(--message-system-bg)',
            text: 'var(--message-system-text)',
          },
        },
        
        // status colors
        online: 'var(--online-indicator)',
        typing: 'var(--typing-indicator)',
        timestamp: 'var(--timestamp-text)',
        
        // hover states
        hover: {
          bg: 'var(--hover-bg)',
          border: 'var(--hover-border)',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};