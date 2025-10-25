import { developerInfo } from '@/constants';
import GithubSection from '../components/GithubSection';

export async function generateMetadata() {
    return {
        title: `${developerInfo.name} | Github`
    }
}

export default function Github() {
    return <GithubSection />
}
