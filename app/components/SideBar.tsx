import Link from 'next/link';
import { VscFiles, VscBriefcase, VscCode, VscGithubAlt, VscMail, VscAccount, VscSettings } from 'react-icons/vsc';

export default function SideBar() {
    const ICON_SIZE = 24;
    const ICON_DEFAULT_COLORS = '#a7a7a7';
    const ICON_ACTIVE_COLORS = '#fff';

    return (
        <aside className="flex flex-col items-center justify-between h-[calc(100vh-30px-30px)] w-fit py-4 bg-gray-800">
            <div>
                <li className="border-l-2 border-transparent">
                    <Link href="/"
                        className="flex items-center px-3 py-4 cursor-pointer">
                        <VscFiles size={ICON_SIZE} color={ICON_DEFAULT_COLORS} />
                    </Link>
                </li>

                <li className="border-l-2 border-transparent">
                    <Link
                        href="./experience"
                        className="flex items-center px-3 py-4 cursor-pointer">
                        <VscBriefcase size={ICON_SIZE} color={ICON_DEFAULT_COLORS} />
                    </Link>
                </li>

                <li className="border-l-2 border-transparent">
                    <Link
                        href="./projects"
                        className="flex items-center px-3 py-4 cursor-pointer">
                        <VscCode size={ICON_SIZE} color={ICON_DEFAULT_COLORS} />
                    </Link>
                </li>

                <li className="border-l-2">
                    <Link
                        href="./github"
                        className="flex items-center px-3 py-4 cursor-pointer">
                        <VscGithubAlt size={ICON_SIZE} color={ICON_ACTIVE_COLORS} />
                    </Link>
                </li>

                <li className="border-l-2 border-transparent">
                    <Link
                        href="./contact"
                        className="flex items-center px-3 py-4 cursor-pointer">
                        <VscMail size={ICON_SIZE} color={ICON_DEFAULT_COLORS} />
                    </Link>
                </li>
            </div>

            <div>
                <li className="border-l-2 border-transparent">
                    <Link
                        href="./about"
                        className="flex items-center px-3 py-4 cursor-pointer">
                        <VscAccount size={ICON_SIZE} color={ICON_DEFAULT_COLORS} />
                    </Link>
                </li>

                <li className="border-l-2 border-transparent">
                    <Link
                        href="./settings"
                        className="flex items-center px-3 py-4 cursor-pointer">
                        <VscSettings size={ICON_SIZE} color={ICON_DEFAULT_COLORS} />
                    </Link>
                </li>
            </div>
        </aside>
    )
}