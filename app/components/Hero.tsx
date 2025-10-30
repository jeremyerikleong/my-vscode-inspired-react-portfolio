
import { developerInfo } from '@/constants';
import Button from './Button';

export async function generateMetadata() {
    return {
        title: `${developerInfo.name} | Home`
    }
}

export default function Hero() {
    return (
        <section className="flex flex-col layout-container">
            <div>
                <h3 className="subtitle-text">Hi there! My name is</h3>
                <h1 className="hero-title">{developerInfo.name}</h1>
                <h2 className="hero-subtitle-text">{developerInfo.title}</h2>
                <p className="subtitle-text">{developerInfo.bio}</p>
            </div>

            <Button title="View Projects" href="./projects" />
        </section>
    )
}