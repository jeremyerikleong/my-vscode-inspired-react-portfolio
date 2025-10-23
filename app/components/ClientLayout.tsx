'use client';

import { useState } from 'react';
import TitleBar from './TitleBar';
import SideBar from './SideBar';
import PrimarySideBar from './PrimarySideBar';
import Footer from './Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [showPrimarySideBar, setShowPrimarySideBar] = useState(true);

    return (
        <div className="flex flex-col min-h-screen">
            <TitleBar
                showPrimarySideBar={showPrimarySideBar}
                togglePrimarySideBar={() => setShowPrimarySideBar(prev => !prev)} />

            <div className="flex flex-1 overflow-hidden">
                <SideBar />
                {showPrimarySideBar && <PrimarySideBar />}

                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>

            <Footer />
        </div>
    );
}
