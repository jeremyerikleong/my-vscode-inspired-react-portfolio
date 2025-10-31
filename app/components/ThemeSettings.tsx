'use client';

import SectionTitle from '../components/SectionTitle';
import { themes } from '@/constants';
import Image from 'next/image';
import Button from './Button';
import { useState, useEffect } from 'react';

export default function ThemeSettings() {
    const [currentTheme, setCurrentTheme] = useState<string>(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "one-dark-pro";
        }
        return "one-dark-pro";
    });

    useEffect(() => {
        document.body.classList.remove(...Array.from(document.body.classList).filter(classList => classList.startsWith('theme-')));
        document.body.classList.add(`theme-${currentTheme}`);
        localStorage.setItem("theme", currentTheme);
    }, [currentTheme]);


    function handleSwitchTheme(theme: string) {
        setCurrentTheme(theme);
    }

    return (
        <section className="layout-container">
            <SectionTitle
                title="Themes"
                description1="You can change color theme in just one click." />

            <ul className="card-grid">
                {themes.map(theme => (
                    <li key={theme.theme_id} className="flex-center flex-col my-2 p-6 rounded-md">
                        <Image
                            src={theme.theme_icon}
                            width={48}
                            height={48}
                            alt="theme icon" />

                        <div className="my-3 text-center">
                            <h2 className="font-bold">
                                {theme.theme_name_display}
                            </h2>

                            <h3 className="section-title-h3 text-sm">
                                {theme.theme_creator}
                            </h3>
                        </div>

                        {
                            currentTheme === theme.theme_name ?
                                <div className="inline-flex items-center justify-center gap-2 w-fit my-4 px-4 py-2 rounded-md font-medium text-sm cursor-not-allowed bg-gray-600 opacity-50">
                                    Currently using
                                </div> :
                                <Button
                                    title="Set Color Theme"
                                    onClick={() => handleSwitchTheme(theme.theme_name)}
                                />
                        }

                    </li>
                ))}
            </ul>
        </section>
    )
}