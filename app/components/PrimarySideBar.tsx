'use client';
import { useState, useEffect, startTransition } from 'react';
import { getFileStructures, type FileStructureProps } from '@/constants/files';
import FileTreeStructure from './FileTreeStructure';

interface PrimarySideBarProps {
    activeTab: string;
}

export default function PrimarySideBar({ activeTab }: PrimarySideBarProps) {
    const [files, setFiles] = useState<FileStructureProps[]>(getFileStructures(activeTab));
    const [selectedFile, setSelectedFile] = useState<PrimarySideBarProps | null>(null);

    useEffect(() => {
        startTransition(() => {
            setFiles(getFileStructures(activeTab));
            setSelectedFile(null);
        });
    }, [activeTab]);

    function handleFileSelect(file: PrimarySideBarProps) {
        setSelectedFile(file);
    }

    return (
        <div className="w-50 min-h-[calc(100vh-60px)] bg-gray-700 p-2 border-r border-gray-600">
            <h3 className="uppercase text-xs font-medium">
                Explorer
            </h3>
            <div>{files.map(file => (
                <FileTreeStructure />
            ))}</div>
        </div>
    )
}