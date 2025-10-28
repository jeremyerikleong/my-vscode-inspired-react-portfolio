
export interface FileStructureProps {
    name: string;
    type: 'file' | 'folder';
    children?: FileStructureProps[];
    content?: string;
    language?: string;
    isOpened?: boolean;
}

export const HomeFiles: FileStructureProps[] = [
    {
        name: "components",
        type: "folder",
        isOpened: true,
        children: [
            {
                name: "Hero.tsx",
                type: "file",
                language: "typescript"
            },
            {
                name: "Button.tsx",
                type: "file",
                language: "typescript"
            }
        ]
    }
]

export const WorkExperienceFiles: FileStructureProps[] = [
    {
        name: "components",
        type: "folder",
        isOpened: true,
        children: [
            {
                name: "SectionTitle.tsx",
                type: "file",
                language: "typescript"
            },
            {
                name: "WorkExperienceSection.tsx",
                type: "file",
                language: "typescript"
            },
            {
                name: "Button.tsx",
                type: "file",
                language: "typescript"
            }
        ]
    }
]

export const ProjectFiles: FileStructureProps[] = [
    {
        name: "projects",
        type: "folder",
        isOpened: true,
        children: [
            {
                name: "page.tsx",
                type: "file",
                language: "typescript"
            }
        ]
    }
]

export const GithubFiles: FileStructureProps[] = [
    {
        name: "components",
        type: "folder",
        isOpened: true,
        children: [
            {
                name: "SectionTitle.tsx",
                type: "file",
                language: "typescript"
            },
            {
                name: "GithubSection.tsx",
                type: "file",
                language: "typescript"
            },
        ]
    }
]

export const ContactFiles: FileStructureProps[] = [
    {
        name: "components",
        type: "folder",
        isOpened: true,
        children: [
            {
                name: "SectionTitle.tsx",
                type: "file",
                language: "typescript"
            }
        ]
    },
    {
        name: "contact",
        type: "folder",
        isOpened: true,
        children: [
            {
                name: "page.tsx",
                type: "file",
                language: "typescript"
            }
        ]
    },
]

export const AboutFiles: FileStructureProps[] = [
    {
        name: "components",
        type: "folder",
        isOpened: true,
        children: [
            {
                name: "SectionTitle.tsx",
                type: "file",
                language: "typescript"
            }
        ]
    },
    {
        name: "about",
        type: "folder",
        isOpened: true,
        children: [
            {
                name: "page.tsx",
                type: "file",
                language: "typescript"
            }
        ]
    },
]

export const SettingsFiles: FileStructureProps[] = [
    {
        name: "components",
        type: "folder",
        isOpened: true,
        children: [
            {
                name: "SectionTitle.tsx",
                type: "file",
                language: "typescript"
            },
            {
                name: "ThemeSettings.tsx",
                type: "file",
                language: "typescript"
            },
            {
                name: "Button.tsx",
                type: "file",
                language: "typescript"
            }
        ]
    },
]

export function getFileStructures(activeTab: string): FileStructureProps[] {
    switch (activeTab) {
        case "/about":
            return AboutFiles;
        case "/experience":
            return WorkExperienceFiles;
        case "/projects":
            return ProjectFiles;
        case "/github":
            return GithubFiles;
        case "/contact":
            return ContactFiles;
        case "settings":
            return SettingsFiles;
        default:
            return HomeFiles;
    }
}