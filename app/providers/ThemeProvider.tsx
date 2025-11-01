'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<string>(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'one-dark-pro';
        }
        return 'one-dark-pro';
    });

    useEffect(() => {
        const body = document.body;
        const themeClasses = Array.from(body.classList).filter(className => className.startsWith('theme-'));
        body.classList.remove(...themeClasses);
        body.classList.add(`theme-${theme}`);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}
