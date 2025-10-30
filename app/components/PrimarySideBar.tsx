'use client';
import { useState, useEffect, startTransition } from 'react';
import { getFileStructures, type FileStructureProps } from '@/constants/files';
import FileTreeStructure from './FileTreeStructure';

interface PrimarySideBarProps {
    activeTab: string;
}

export default function PrimarySideBar({ activeTab }: PrimarySideBarProps) {
    const [files, setFiles] = useState<FileStructureProps[]>([]);
    const [selectedFile, setSelectedFile] = useState<FileStructureProps | null>(null);
    const [width, setWidth] = useState(200);
    const [isResizing, setIsResizing] = useState(false);

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

    function startResize() {
        setIsResizing(true);
    }

    function stopResize() {
        setIsResizing(false);
    }

    function handleHoverDragToResize(clientX: number) {
        const newWidth = Math.min(Math.max(clientX, 160), 400);
        setWidth(newWidth);
    }

    function handleMouseToMove(evt: MouseEvent) {
        if (isResizing) {
            handleHoverDragToResize(evt.clientX);
        }
    }

    function handleTouchToMove(evt: TouchEvent) {
        if (isResizing && evt.touches[0]) {
            handleHoverDragToResize(evt.touches[0].clientX);
        }
    }

    useEffect(() => {
        if (isResizing) {
            document.addEventListener('mousemove', handleMouseToMove);
            document.addEventListener('mouseup', stopResize);

            document.addEventListener('touchmove', handleTouchToMove);
            document.addEventListener('touchend', stopResize);
        } else {
            document.removeEventListener('mousemove', handleMouseToMove);
            document.removeEventListener('mouseup', stopResize);

            document.addEventListener('touchmove', handleTouchToMove);
            document.addEventListener('touchend', stopResize);
        }
        return () => {
            document.removeEventListener('mousemove', handleMouseToMove);
            document.removeEventListener('mouseup', stopResize);

            document.addEventListener('touchmove', handleTouchToMove);
            document.addEventListener('touchend', stopResize);
        };
    }, [isResizing]);

    return (
        <div style={{ width }}
            className="relative flex flex-row border-r border-gray-600 bg-gray-700 select-none">

            <div className="p-2 overflow-auto w-full">
                <h3 className="uppercase text-xs font-medium px-3 mb-1">
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

            <div
                className={`absolute right-0 w-1 h-full cursor-col-resize hover:bg-gray-600 ${isResizing ? 'bg-gray-500' : ''}`}
                onMouseDown={startResize}
                onTouchStart={startResize}
            />
        </div>
    )
}