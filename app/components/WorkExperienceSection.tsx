import { workExperiences } from '@/constants';
import SectionTitle from './SectionTitle';
import Button from './Button';

export default function WorkExperienceSection() {
    return (
        <section className="layout-container">
            <SectionTitle
                title="Work Experience" />

            {workExperiences && workExperiences.map(workExperience => (
                <div key={workExperience.id} className="card-container">
                    <h2 className="card-title">
                        {workExperience.position_title}
                    </h2>
                    <a href={`${workExperience.company_website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-company-name">
                        {workExperience.company_name}
                    </a>
                    <p className="card-duration">
                        {workExperience.position_duration}
                    </p>
                    <p className="card-content">
                        {workExperience.experience_content}
                    </p>
                    <ul className="card-tech-stack-list-container">
                        {workExperience.experience_tech_stacks.map((tech_stack, index) => (
                            <li key={`${workExperience.id}TechStack${index}`}
                                className="card-tech-stack-list">
                                {tech_stack}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="flex-center">
                <Button
                    title="View Full Resume"
                    href="https://cv.jeremyerikleong.com/"
                    external
                />
            </div>
        </section>
    )
}