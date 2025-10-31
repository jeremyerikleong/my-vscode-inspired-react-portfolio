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

    useLayoutEffect(() => {
        const storedWidth = localStorage.getItem('primarySideBar');

        if (storedWidth) {
            const parseStoredWidth = parseInt(storedWidth, 10);
            if (!isNaN(parseStoredWidth)) {
                setWidth(parseStoredWidth);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('primarySideBar', width.toString());
    }, [width]);

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
            className="primary-sidebar-container">

            <div className="file-structure-column">
                <h3 className="primary-sidebar-title">
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
                className={`primary-sidebar-draggable-border ${isResizing ? 'bg-gray-500' : ''}`}
                onMouseDown={startResize}
                onTouchStart={startResize}
            />
        </div>
    )
}