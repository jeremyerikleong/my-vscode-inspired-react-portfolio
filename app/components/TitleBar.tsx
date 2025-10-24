'use client';

import { useHotkeys } from 'react-hotkeys-hook';
import { developerInfo } from '@/constants';
import { VscLayoutSidebarLeftOff, VscLayoutSidebarLeft, VscLayoutPanelOff, VscLayoutPanel, VscLayoutSidebarRightOff, VscLayoutSidebarRight } from 'react-icons/vsc';
import Tooltip from './Tooltip';

const titleBarIconToolTip = {
    primarySideBar: 'Toggle Primary Side Bar (⌘B)',
    panel: 'Toggle Panel (⌘J)',
    secondarySideBar: 'Toggle Secondary Side Bar (⌥⌘B)',
}

interface TitleBarProps {
    showPrimarySideBar: boolean;
    togglePrimarySideBar: () => void;
    showSecondarySideBar: boolean;
    toggleSecondarySideBar: () => void;
    showPanel: boolean;
    togglePanel: () => void;
}

export default function TitleBar({ showPrimarySideBar, togglePrimarySideBar, showSecondarySideBar, toggleSecondarySideBar, showPanel, togglePanel }: TitleBarProps) {
    const ICON_SIZE = 18;

    useHotkeys('meta+b,ctrl+b', (evt) => {
        evt.preventDefault();
        togglePrimarySideBar();
    });

    useHotkeys('meta+j,ctrl+j', (evt) => {
        evt.preventDefault();
        togglePanel();
    });

    useHotkeys('meta+alt+b,ctrl+alt+b', (evt) => {
        evt.preventDefault();
        toggleSecondarySideBar();
    });

    return (
        <section className="flex items-center justify-between w-full p-2 overflow-visible bg-gray-800">
            <div>
                <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-green-600"></span>
                </div>
            </div>

            <p className="hidden lg:block text-sm">
                {`${developerInfo.name} - Visual Studio Code`}
            </p>

            <ul className="flex gap-2">
                <li className="cursor-pointer" onClick={togglePrimarySideBar}>
                    {showPrimarySideBar ?
                        (<Tooltip text={titleBarIconToolTip.primarySideBar}>
                            <VscLayoutSidebarLeft size={ICON_SIZE} />
                        </Tooltip>) :
                        (<Tooltip text={titleBarIconToolTip.primarySideBar}>
                            <VscLayoutSidebarLeftOff size={ICON_SIZE} />
                        </Tooltip>)}
                </li>

                <li className="cursor-pointer" onClick={togglePanel}>
                    {showPanel ?
                        (<Tooltip text={titleBarIconToolTip.panel}>
                            <VscLayoutPanel size={ICON_SIZE} />
                        </Tooltip>) :
                        (<Tooltip text={titleBarIconToolTip.panel}>
                            <VscLayoutPanelOff size={ICON_SIZE} />
                        </Tooltip>)}
                </li>

                <li className="cursor-pointer" onClick={toggleSecondarySideBar}>
                    {showSecondarySideBar ?
                        <Tooltip text={titleBarIconToolTip.secondarySideBar}>
                            <VscLayoutSidebarRight size={ICON_SIZE} />
                        </Tooltip> :
                        <Tooltip text={titleBarIconToolTip.secondarySideBar}>
                            <VscLayoutSidebarRightOff size={ICON_SIZE} />
                        </Tooltip>}
                </li>
            </ul>
        </section>
    )
}