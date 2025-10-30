import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const tabs = [
    { id: '1', title: 'home', path: '/', extension: 'tsx', icon: '/react.png' },
    { id: '2', title: 'about', path: '/about', extension: 'tsx', icon: '/react.png' },
    { id: '3', title: 'experience', path: '/experience', extension: 'tsx', icon: '/react.png' },
    { id: '4', title: 'projects', path: '/projects', extension: 'tsx', icon: '/react.png' },
    { id: '5', title: 'github', path: '/github', extension: 'tsx', icon: '/react.png' },
    { id: '6', title: 'contact', path: '/contact', extension: 'tsx', icon: '/react.png' },
    { id: '7', title: 'settings', path: '/settings', extension: '', icon: '/gear2.png' },
]

export default function TabsBar() {
    const pathname = usePathname();

    return (
        <ul
            className="flex overflow-auto">
            {tabs.map((tab) => (
                <Link key={tab.id} href={tab.path}>
                    <li
                        className={`flex justify-center items-center gap-2 h-10 px-4 py-2 cursor-pointer transition text-sm ${pathname === tab.path ? 'bg-[#3b4252] border-t border-t-amber-300' : 'bg-transparent border-t border-t-transparent'}`}
                    >
                        <Image src={tab.icon}
                            width={16}
                            height={16}
                            alt="icon"
                        />
                        {tab.title}{tab.extension !== "" ? '.' : ''}{tab.extension}
                    </li>
                </Link>
            ))
            }
        </ul >
    )
}