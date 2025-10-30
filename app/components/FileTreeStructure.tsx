import { FileStructureProps } from '@/constants/files';
import { VscFile, VscChevronDown, VscChevronRight } from "react-icons/vsc";
import { FaFolder, FaFolderOpen, FaReact } from 'react-icons/fa';
import Image from 'next/image';

interface FileTreeProps {
    item: FileStructureProps;
    level: number;
    onSelect: (item: FileStructureProps) => void;
    onToggle: (item: FileStructureProps) => void;
    selectedFile: FileStructureProps | null;
}

export default function FileTreeStructure({ item, level, onSelect, onToggle, selectedFile }: FileTreeProps) {
    const isSelected = selectedFile?.name === item.name;

    return (
        <div className="flex flex-col">
            <div
                onClick={() => item.type === "folder" ? onToggle(item) : onSelect(item)}
                style={{ paddingLeft: `${level * 1.5}em` }}
                className={`flex items-center py-1 px-2 cursor-pointer rounded-sm ${isSelected ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-600'
                    }`}
            >
                {item.type === "folder" && (
                    <span className="ml-3">
                        {item.isOpened ? <VscChevronDown /> : <VscChevronRight />}
                    </span>
                )}

                {item.type === "folder" ? (
                    item.isOpened ? <span className="mx-2"><FaFolderOpen color={item.color} /></span> : <span className="mx-2"><FaFolder color={item.color} /></span>
                ) : (
                    item.language === "typescript" ?
                        (item.name === "route.ts" ? <span className="file-tree-structure-icon-container"><Image src="/routes.png" width={18} height={18} alt="icon" className="file-tree-structure-icon" /></span>
                            : <span className="file-tree-structure-icon-container"><FaReact color="lightblue" /></span>)
                        : <span className="file-tree-structure-icon-container"><VscFile /></span>
                )}
                <h3 className="truncate">{item.name}</h3>
            </div>

            {item.type === "folder" && item.isOpened && item.children && (
                <div>
                    {item.children.map(child => (
                        <FileTreeStructure
                            key={child.name}
                            item={child}
                            level={level + 1}
                            onSelect={onSelect}
                            onToggle={onToggle}
                            selectedFile={selectedFile}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}