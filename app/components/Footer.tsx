import { VscSourceControl, VscLiveShare, VscCheck, VscBell } from "react-icons/vsc";

export default function Footer() {
    const ICON_SIZES = 14;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex justify-between items-center bg-gray-700 w-full h-[25px] p-2">
            <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center">
                    <VscSourceControl size={ICON_SIZES} />

                    <h6 className="ml-2">
                        main
                    </h6>
                </div>

                <div className="flex items-center">
                    <VscLiveShare size={ICON_SIZES} />

                    <h6 className="ml-2">
                        Live Share
                    </h6>
                </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
                <div>
                    <p className="hidden sm:block">
                        {`©${currentYear}  Jeremy Erik Leong`}
                    </p>
                </div>
                <div className="flex items-center">
                    <VscCheck size={ICON_SIZES} />

                    <span className="ml-2">
                        Prettier
                    </span>
                </div>

                <VscBell size={ICON_SIZES} />
            </div>
        </footer>
    )
}