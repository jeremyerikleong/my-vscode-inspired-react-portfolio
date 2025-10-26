'use client';

import SectionTitle from '../components/SectionTitle';
import { themes } from '@/constants';
import Image from 'next/image';

export default function ThemeSettings() {
    return (
        <section className="py-10 px-6 max-w-[900px] mx-auto font-mono text-gray-200">
            <SectionTitle
                title="Themes"
                description1="You can change color theme in just one click." />

            <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
                {themes.map(theme => (
                    <li key={theme.theme_id} className="flex flex-col justify-center items-center my-2 p-6 rounded-md">
                        <Image
                            src={theme.theme_icon}
                            width={48}
                            height={48}
                            alt="theme icon" />

                        <div className="my-3 text-center">
                            <h2 className="font-bold">
                                {theme.theme_name}
                            </h2>

                            <h3 className="font-medium text-gray-500 text-sm mb-2">
                                {theme.theme_creator}
                            </h3>
                        </div>

                        <button className="cursor-pointer p-2 bg-gray-600 rounded-sm" onClick={() => console.log('set theme:', `${theme.theme_name}`)}>
                            set color theme
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}