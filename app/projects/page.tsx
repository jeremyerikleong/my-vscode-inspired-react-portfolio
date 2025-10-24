import { developerInfo, myProjects } from '@/constants';
import Image from 'next/image';

export async function generateMetadata() {
    return {
        title: `${developerInfo.name} | Projects`
    }
}

export default function Projects() {
    return (
        <section className="py-10 px-6 max-w-[900px] font-mono mx-auto">
            <div className="text-center">
                <h1 className="text-3xl lg:text-4xl font-bold">My Projects</h1>
                <h2 className="font-medium my-3">Here&apos;s a selection of my creations for brushing up my skills. For more stuff, kindly check out my <a className="text-blue-400" href="https://github.com/jeremyerikleong" target="_blank">repositories.</a></h2>
            </div>

            <div className="mt-20">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myProjects && myProjects.map(project => (
                        <a key={project.id} href={project.url} target="_blank" className="h-full">
                            <div className="flex flex-col gap-4 w-full bg-[#2e3440] border border-gray-600 hover:bg-[#2b313e] hover:border-gray-400 transition duration-300 rounded-md p-6">
                                <div className="my-2 border border-gray-600 w-fit rounded-md p-2">
                                    <Image
                                        src={project.icon}
                                        width={32}
                                        height={32}
                                        alt="project icon"
                                    />
                                </div>
                                <h2 className="font-bold">
                                    {project.title}
                                </h2>
                                <p className="line-clamp-3 text-sm">
                                    {project.description}
                                </p>

                                <ul className="text-xs flex flex-wrap gap-3">
                                    {project.tech_stacks.map((tech_stack, index) => (
                                        <li key={`${project.title}${tech_stack}${index}`}
                                            className="bg-gray-600 px-2 py-1 rounded-sm">
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