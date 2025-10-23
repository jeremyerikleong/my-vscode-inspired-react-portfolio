import { ReactNode } from 'react';

interface TooltipProps {
    text: string;
    children: ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
    return (
        <div className="relative group flex items-center overflow-visible">
            {children}
            <span className="absolute top-full right-0 mb-2 hidden group-hover:block bg-black shadow text-white text-sm px-2 py-1 rounded whitespace-nowrap z-99">
                {text}
            </span>
        </div>
    )
}