import { developerInfo } from '@/constants';
import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: `${developerInfo.name} | Home`
  }
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col min-h-screen w-full">
        <div className="">
          <h1>{developerInfo.name}</h1>
          <h2>{developerInfo.title}</h2>
          <p>{developerInfo.bio}</p>
        </div>

        <div className="w-[120px] bg-blue-500 p-2 rounded-md">
          <Link href="./projects">
            View Projects
          </Link>
        </div>
      </main>
    </div>
  );
}
