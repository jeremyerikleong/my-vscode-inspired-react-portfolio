import { workExperiences } from '@/constants';
import SectionTitle from './SectionTitle';

export default function WorkExperienceSection() {
    return (
        <section className="py-10 px-6 max-w-[900px] mx-auto font-mono text-gray-200">
            <SectionTitle
                title="Work Experience" />

            {workExperiences && workExperiences.map(workExperience => (
                <div key={workExperience.id} className="bg-[#2e3440] p-4 rounded-md my-4">
                    <h2 className="font-bold text-lg">
                        {workExperience.position_title}
                    </h2>
                    <a href={`${workExperience.company_website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400">
                        {workExperience.company_name}
                    </a>
                    <p className="text-xs my-1">
                        {workExperience.position_duration}
                    </p>
                    <p className="text-sm my-4">
                        {workExperience.experience_content}
                    </p>
                    <ul className="text-xs flex flex-wrap gap-3">
                        {workExperience.experience_tech_stacks.map(tech_stack => (
                            <li key={`${workExperience.id}TechStack`}
                                className="bg-gray-600 px-2 py-1 rounded-sm">
                                {tech_stack}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="flex justify-center my-6">
                <a href="https://cv.jeremyerikleong.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-fit bg-blue-500 px-2 p-4 rounded-md text-sm">
                    View Full Resume
                </a>
            </div>
        </section>
    )
}