import { developerInfo } from '@/constants';
import ThemeSettings from '../components/ThemeSettings';

export async function generateMetadata() {
    return {
        title: `${developerInfo.name} | Settings`
    }
}

export default function Settings() {
    return <ThemeSettings />
}