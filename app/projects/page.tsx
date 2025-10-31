import { developerInfo, myProjects } from '@/constants';
import Image from 'next/image';

export async function generateMetadata() {
    return {
        title: `${developerInfo.name} | Projects`
    }
}

export default function Projects() {
    return (
        <section className="layout-container">
            <div className="text-center">
                <h1 className="section-title-h1">My Projects</h1>
                <h3 className="section-title-h3">Here&apos;s a selection of my creations for brushing up my skills. For more stuff, kindly check out my <a className="text-[var(--accent)]" href="https://github.com/jeremyerikleong" target="_blank">repositories</a>.</h3>
            </div>

            <div className="content-wrapper">
                <div className="card-grid">
                    {myProjects && myProjects.map(project => (
                        <a key={project.id} href={project.url} target="_blank">
                            <div className="project-card">
                                <div className="project-card-image-container">
                                    <Image
                                        src={project.icon}
                                        width={32}
                                        height={32}
                                        alt="project icon"
                                    />
                                </div>
                                <h2 className="project-card-title">
                                    {project.title}
                                </h2>
                                <p className="project-card-description">
                                    {project.description}
                                </p>

                                <ul className="card-tech-stack-list-container">
                                    {project.tech_stacks.map((tech_stack, index) => (
                                        <li key={`${project.title}${tech_stack}${index}`}
                                            className="card-tech-stack-list">
                                            {tech_stack}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}