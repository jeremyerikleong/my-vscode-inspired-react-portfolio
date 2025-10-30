import { ReactNode } from 'react';

interface TooltipProps {
    text: string;
    children: ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
    return (
        <div className="tooltip-container group">
            {children}
            <span className="tooltip-content group-hover:block">
                {text}
            </span>
        </div>
    )
}