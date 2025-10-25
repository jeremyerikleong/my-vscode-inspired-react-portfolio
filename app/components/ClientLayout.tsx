'use client';

import { useState } from 'react';
import TitleBar from './TitleBar';
import SideBar from './SideBar';
import TabsBar from './TabsBar';
import PrimarySideBar from './PrimarySideBar';
import SecondarySideBar from './SecondarySideBar';
import Panel from './Panel';
import Footer from './Footer';
import { isMobile } from 'react-device-detect';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [showPrimarySideBar, setShowPrimarySideBar] = useState(() => !isMobile);
    const [showSecondarySideBar, setShowSecondarySideBar] = useState(false);
    const [showPanel, setShowPanel] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <TitleBar
                showPrimarySideBar={showPrimarySideBar}
                togglePrimarySideBar={() => setShowPrimarySideBar(prev => !prev)}
                showSecondarySideBar={showSecondarySideBar}
                toggleSecondarySideBar={() => setShowSecondarySideBar(prev => !prev)}
                showPanel={showPanel}
                togglePanel={() => setShowPanel(prev => !prev)}
            />

            <div className="flex flex-1 overflow-hidden">
                <SideBar />
                {showPrimarySideBar && <PrimarySideBar />}

                <div className="relative flex-1 overflow-hidden">
                    <TabsBar />
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main>

                    {showPanel && <Panel showPanel={showPanel} onClose={() => setShowPanel(false)} />}
                </div>

                {showSecondarySideBar && <SecondarySideBar />}
            </div>

            <Footer />
        </div>
    );
}
