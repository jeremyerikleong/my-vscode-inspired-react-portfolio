'use client';

import Link from 'next/link';

interface ButtonProps {
    title: string;
    href?: string;
    external?: boolean;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
}

export default function Button({ title, href, external = false, onClick, className = '', children }: ButtonProps) {
    const baseClasses = 'btn-base';

    if (href && external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseClasses} ${className}`}
            >
                {children || title}
            </a>
        );
    }

    if (href && !external) {
        return (
            <Link href={href} className={`${baseClasses} ${className}`}>
                {children || title}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={`${baseClasses} ${className}`}>
            {children || title}
        </button>
    );
}