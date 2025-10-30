import { VscChromeClose, VscArrowSmallRight, VscSymbolEvent } from 'react-icons/vsc';
import { useState } from 'react';
import Button from './Button';

interface PanelProps {
    showPanel: boolean;
    onClose: () => void;
}

function Terminal() {
    return (
        <p className="terminal-git-lines">
            <span className="mr-3">
                <VscArrowSmallRight size={18} color={'green'} />
            </span>

            my-vscode-inspired-react-portfolio

            <p className="text-sky-500 mx-2">
                git:(<span className="text-red-500">main</span>)
            </p>

            <span>
                <VscSymbolEvent size={14} color={'yellow'} />
            </span>
        </p>
    )
}

export default function Panel({ showPanel, onClose }: PanelProps) {
    const ICON_SIZES = 14;
    const [activePanel, setActivePanel] = useState('problems');

    const panels = [
        { id: '1', title: 'problems' },
        { id: '2', title: 'output' },
        { id: '3', title: 'terminal' }
    ]

    return (
        <div className={`absolute bottom-0 left-0 right-0 transition-transform duration-300 ${showPanel ? 'translate-y-0' : 'translate-y-full'} bg-gray-700 px-4 border-t border-gray-500 z-50 h-50`}>
            <div className="flex items-center justify-between">
                <ul className="flex-center">
                    {panels.map((panel) => (
                        <li
                            key={panel.id}
                            onClick={() => setActivePanel(panel.title)}
                            className={`uppercase text-xs font-medium mx-2 cursor-pointer ${activePanel === panel.title
                                ? "text-white border-b-2 border-white"
                                : "text-gray-400 hover:text-gray-200 border-b-2 border-transparent"
                                }`}>
                            {panel.title}
                        </li>
                    ))}
                </ul>

                <Button
                    title=""
                    onClick={onClose}
                    className="cursor-pointer text-gray-400 hover:bg-transparent hover:text-white transition"
                >
                    <VscChromeClose size={ICON_SIZES} />
                </Button>
            </div>

            <div className="terminal-text">
                {activePanel === "problems" && <p>No problems have been detected in the workspace.</p>}
                {activePanel === "output" && <p>Build output will appear here.</p>}
                {activePanel === "terminal" && <Terminal />}
            </div>
        </div>
    )
}