import { FileStructureProps } from '@/constants/files';
import { VscFile, VscFolder, VscFolderOpened, VscChevronDown, VscChevronRight } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";

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
                style={{ paddingLeft: `${level * 3}em` }}
                className={`flex items-center gap-2 py-1 px-2 cursor-pointer rounded-sm ${isSelected ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-600'
                    }`}
            >
                {item.type === "folder" && (
                    <span className="ml-3">
                        {item.isOpened ? <VscChevronDown /> : <VscChevronRight />}
                    </span>
                )}

                {item.type === "folder" ? (
                    item.isOpened ? <VscFolderOpened color="yellow" /> : <VscFolder color="yellow" />
                ) : (
                    item.language === "typescript" ? <FaReact color="lightblue" /> : <VscFile />
                )}
                <span>{item.name}</span>
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