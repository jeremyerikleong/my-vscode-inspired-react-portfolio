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
    const baseClasses =
        'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition duration-200 bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm';

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