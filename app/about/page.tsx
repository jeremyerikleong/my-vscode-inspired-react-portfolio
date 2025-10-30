import { developerInfo } from '@/constants';
import SectionTitle from '../components/SectionTitle';

export async function generateMetadata() {
    return {
        title: `${developerInfo.name} | About`
    }
}

export default function About() {
    return (
        <section className="layout-container">
            <SectionTitle
                title={developerInfo.name}
                description1={developerInfo.title} />

            <div className="about-paragraph-container">
                <p className="about-paragraph">
                    Hey! My name is Jeremy. I&apos;m a front-end developer based in Malaysia.
                </p>

                <p className="about-paragraph">
                    Over the past two years, I have gained experience in various areas of digital design, including illustration, UI/UX, front-end development, and responsive web design. I am proud in having embraced a wide range of roles.
                </p>

                <p className="about-paragraph">
                    These days, I focus on learning new frameworks and technologies to further enhance my skills. My current focus is on front-end development with React and Tailwind CSS, but you&apos;ll also find me working with Node.js, Express, and PostgreSQL while building the back-end for my personal projects.
                </p>

                <p className="about-paragraph">
                    When I am away from my computer, I usually enjoy spending quality time with my cats, reading, cooking, or listening to music.
                </p>
            </div>
        </section>
    )
}