import { developerInfo } from '@/constants';

export async function generateMetadata() {
    return {
        title: `${developerInfo.name} | About`
    }
}

export default function About() {
    return (
        <section className="p-10 max-w-[900px] mx-auto">
            <div className="text-center">
                <h1 className="text-3xl lg:text-4xl font-bold">{developerInfo.name}</h1>
                <h2 className="font-medium my-3">{developerInfo.title}</h2>
            </div>

            <div className="text-justify mt-20">
                <p className="my-4">
                    Hey! My name is Jeremy. I&apos;m a front-end developer based in Malaysia.
                </p>

                <p className="my-4">
                    Over the past two years, I have gained experience in various areas of digital design, including illustration, UI/UX, front-end development, and responsive web design. I am proud in having embraced a wide range of roles.
                </p>

                <p className="my-4">
                    These days, I focus on learning new frameworks and technologies to further enhance my skills. My current focus is on front-end development with React, but you&apos;ll also find me working with Node.js, Express, and PostgreSQL while building the back end for my personal projects.
                </p>

                <p className="my-4">
                    When I am away from my computer, I usually enjoy spending quality time with my cats, reading, cooking, or listening to music.
                </p>
            </div>
        </section>
    )
}