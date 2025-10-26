
import { developerInfo } from '@/constants';
import Link from 'next/link';

export async function generateMetadata() {
    return {
        title: `${developerInfo.name} | Home`
    }
}

export default function Hero() {
    return (
        <section className="flex flex-col py-10 px-6 max-w-[900px] mx-auto font-mono">
            <div>
                <h3 className="text-gray-400">Hi there! My name is</h3>
                <h1 className="text-4xl lg:text-5xl font-bold my-4">{developerInfo.name}</h1>
                <h2 className="my-2 font-bold">{developerInfo.title}</h2>
                <p className="text-gray-400">{developerInfo.bio}</p>
            </div>


            <Link href="./projects" className="cursor-pointer">
                <div className="size-fit bg-blue-500 px-2 p-4 rounded-md my-6 text-sm">
                    View Projects
                </div>
            </Link>
        </section>
    )
}