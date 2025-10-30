
export interface FileStructureProps {
    name: string;
    type: 'file' | 'folder';
    children?: FileStructureProps[];
    root?: boolean;
    color?: string;
    content?: string;
    language?: string;
    isOpened?: boolean;
}

const rootFolder = "#FF746C";
const componentFolder = "#FFBF00";

export const HomeFiles: FileStructureProps[] = [
    {
        name: "app",
        type: "folder",
        isOpened: true,
        root: true,
        color: rootFolder,
        children: [
            {
                name: "components",
                type: "folder",
                isOpened: true,
                color: componentFolder,
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
            },
            {
                name: "constants",
                type: "folder",
                isOpened: true,
                color: componentFolder,
                children: [
                    {
                        name: "index.tsx",
                        type: "file",
                        language: "typescript"
                    }
                ]
            },
            {
                name: "page.tsx",
                type: "file",
                language: "typescript"
            },
        ]
    }
]

export const WorkExperienceFiles: FileStructureProps[] = [
    {
        name: "app",
        type: "folder",
        isOpened: true,
        root: true,
        color: rootFolder,
        children: [
            {
                name: "components",
                type: "folder",
                isOpened: true,
                color: componentFolder,
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
            },
            {
                name: "experience",
                type: "folder",
                isOpened: true,
                color: componentFolder,
                children: [
                    {
                        name: "page.tsx",
                        type: "file",
                        language: "typescript"
                    },
                ]
            },
            {
                name: "constants",
                type: "folder",
                isOpened: true,
                color: componentFolder,
                children: [
                    {
                        name: "index.tsx",
                        type: "file",
                        language: "typescript"
                    },
                ]
            }
        ]
    }
]

export const ProjectFiles: FileStructureProps[] = [
    {
        name: "app",
        type: "folder",
        isOpened: true,
        root: true,
        color: rootFolder,
        children: [
            {
                name: "projects",
                type: "folder",
                isOpened: true,
                color: componentFolder,
                children: [
                    {
                        name: "page.tsx",
                        type: "file",
                        language: "typescript"
                    }
                ]
            },
            {
                name: "constants",
                type: "folder",
                isOpened: true,
                color: componentFolder,
                children: [
                    {
                        name: "index.tsx",
                        type: "file",
                        language: "typescript"
                    },
                ]
            }
        ]
    }
]

export const GithubFiles: FileStructureProps[] = [
    {
        name: "app",
        type: "folder",
        isOpened: true,
        root: true,
        color: rootFolder,
        children: [
            {
                name: "api",
                type: "folder",
                isOpened: true,
                color: componentFolder,
                children: [
                    {
                        name: "github",
                        type: "folder",
                        isOpened: true,
                        color: componentFolder,
                        children: [
                            {
                                name: "pinned",
                                type: "folder",
                                isOpened: true,
                                color: componentFolder,
                                children: [
                                    {
                                        name: "route.ts",
                                        type: "file",
                                        language: "typescript"
                                    }
                                ]
                            },
                            {
                                name: "contributions",
                                type: "folder",
                                isOpened: true,
                                color: componentFolder,
                                children: [
                                    {
                                        name: "route.ts",
                                        type: "file",
                                        language: "typescript"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "components",
                type: "folder",
                isOpened: true,
                color: componentFolder,
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
            },
            {
                name: "github",
                type: "folder",
                isOpened: true,
                color: componentFolder,
                children: [
                    {
                        name: "page.tsx",
                        type: "file",
                        language: "typescript"
                    },
                ]
            },
            {
                name: "constants",
                type: "folder",
                isOpened: true,
                color: componentFolder,
                children: [
                    {
                        name: "index.tsx",
                        type: "file",
                        language: "typescript"
                    },
                ]
            }
        ]
    }
]

export const ContactFiles: FileStructureProps[] = [
    {
        name: "app",
        type: "folder",
        isOpened: true,
        root: true,
        color: rootFolder,
        children: [
            {
                name: "components",
                type: "folder",
                isOpened: true,
                color: componentFolder,
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
                color: componentFolder,
                children: [
                    {
                        name: "page.tsx",
                        type: "file",
                        language: "typescript"
                    }
                ]
            },
            {
                name: "constants",
                type: "folder",
                isOpened: true,
                color: componentFolder,
                children: [
                    {
                        name: "index.tsx",
                        type: "file",
                        language: "typescript"
                    },
                ]
            }
        ]
    }
]

export const AboutFiles: FileStructureProps[] = [
    {
        name: "app",
        type: "folder",
        isOpened: true,
        root: true,
        color: rootFolder,
        children: [
            {
                name: "components",
                type: "folder",
                isOpened: true,
                color: componentFolder,
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
                color: componentFolder,
                children: [
                    {
                        name: "page.tsx",
                        type: "file",
                        language: "typescript"
                    }
                ]
            },
            {
                name: "constants",
                type: "folder",
                isOpened: true,
                color: componentFolder,
                children: [
                    {
                        name: "index.tsx",
                        type: "file",
                        language: "typescript"
                    },
                ]
            }
        ]
    }
]

export const SettingsFiles: FileStructureProps[] = [
    {
        name: "app",
        type: "folder",
        isOpened: true,
        root: true,
        color: rootFolder,
        children: [
            {
                name: "components",
                type: "folder",
                isOpened: true,
                color: componentFolder,
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
            {
                name: "constants",
                type: "folder",
                isOpened: true,
                color: componentFolder,
                children: [
                    {
                        name: "index.tsx",
                        type: "file",
                        language: "typescript"
                    },
                ]
            }
        ]
    }
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
        case "/settings":
            return SettingsFiles;
        default:
            return HomeFiles;
    }
}