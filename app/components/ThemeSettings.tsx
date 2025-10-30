'use client';

import SectionTitle from '../components/SectionTitle';
import { themes } from '@/constants';
import Image from 'next/image';
import Button from './Button';

export default function ThemeSettings() {
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
                                {theme.theme_name}
                            </h2>

                            <h3 className="section-title-h3 text-sm">
                                {theme.theme_creator}
                            </h3>
                        </div>

                        <Button
                            title="Set Color Theme"
                            onClick={() => console.log('set theme:', `${theme.theme_name}`)}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}