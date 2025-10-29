'use client';
import { useState, useEffect, startTransition } from 'react';
import { getFileStructures, type FileStructureProps } from '@/constants/files';
import FileTreeStructure from './FileTreeStructure';

interface PrimarySideBarProps {
    activeTab: string;
}

export default function PrimarySideBar({ activeTab }: PrimarySideBarProps) {
    const [files, setFiles] = useState<FileStructureProps[]>(getFileStructures(activeTab));
    const [selectedFile, setSelectedFile] = useState<FileStructureProps | null>(null);

    useEffect(() => {
        startTransition(() => {
            setFiles(getFileStructures(activeTab));
            setSelectedFile(null);
        });
    }, [activeTab]);

    function handleFileSelect(file: FileStructureProps) {
        setSelectedFile(file);
    }

    function toggleFolder(selectedItem: FileStructureProps) {
        function updateFiles(items: FileStructureProps[]): FileStructureProps[] {
            return items.map(item => {
                if (item === selectedItem) {
                    return { ...item, isOpened: !item.isOpened }
                }

                if (item.children) {
                    return { ...item, children: updateFiles(item.children) }
                }
                return item;
            })
        }
        setFiles(updateFiles(files));
    }

    return (
        <div className="w-50 min-h-[calc(100vh-60px)] bg-gray-700 p-2 border-r border-gray-600">
            <h3 className="uppercase text-xs font-medium px-3 mb-3">
                Explorer
            </h3>
            <div>{files.map(file => (
                <FileTreeStructure
                    key={file.name}
                    item={file}
                    level={0}
                    onSelect={handleFileSelect}
                    onToggle={toggleFolder}
                    selectedFile={selectedFile} />
            ))}</div>
        </div>
    )
}