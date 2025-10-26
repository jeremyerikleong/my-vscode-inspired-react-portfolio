import { developerInfo } from '@/constants';
import WorkExperienceSection from '../components/WorkExperienceSection';

export async function generateMetadata() {
    return {
        title: `${developerInfo.name} | Experience`
    }
}

export default function Experience() {
    return <WorkExperienceSection />
}