import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { VscFiles, VscBriefcase, VscCode, VscGithubAlt, VscMail, VscAccount, VscSettings } from 'react-icons/vsc';
import type { IconType } from 'react-icons';

export default function SideBar() {
    const ICON_SIZE = 24;
    const ICON_DEFAULT_COLORS = '#a7a7a7';
    const ICON_ACTIVE_COLORS = '#fff';
    const pathname = usePathname();

    const topLinks = [
        { id: '1', href: '/', icon: VscFiles },
        { id: '2', href: '/experience', icon: VscBriefcase },
        { id: '3', href: '/projects', icon: VscCode },
        { id: '4', href: '/github', icon: VscGithubAlt },
        { id: '5', href: '/contact', icon: VscMail },
    ];

    const bottomLinks = [
        { id: '6', href: '/about', icon: VscAccount },
        { id: '7', href: '/settings', icon: VscSettings },
    ];

    function renderButton(id: string, href: string, Icon: IconType) {
        const isActive = pathname === href;

        return (
            <li
                key={`buttonLink${id}`}
                className={`border-l-2 ${isActive ? 'border-white' : 'border-transparent'}`}>
                <Link href={href}
                    className="flex items-center px-3 py-4 cursor-pointer">
                    <Icon size={ICON_SIZE} color={isActive ? ICON_ACTIVE_COLORS : ICON_DEFAULT_COLORS} />
                </Link>
            </li>
        )
    }

    return (
        <aside className="flex flex-col items-center justify-between min-h-[calc(100vh-60px)] w-fit py-4 bg-gray-800">
            <ul>
                {topLinks.map((link) => renderButton(link.id, link.href, link.icon))}
            </ul>

            <ul>
                {bottomLinks.map((link) => renderButton(link.id, link.href, link.icon))}
            </ul>
        </aside>
    )
}