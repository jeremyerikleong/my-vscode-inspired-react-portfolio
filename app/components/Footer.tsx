import { VscSourceControl, VscLiveShare, VscCheck, VscBell } from "react-icons/vsc";

export default function Footer() {
    const ICON_SIZES = 14;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="flex-center gap-4 text-xs">
                <div className="flex-center">
                    <VscSourceControl size={ICON_SIZES} />

                    <h6 className="github-repos-icon">
                        main
                    </h6>
                </div>

                <div className="flex-center">
                    <VscLiveShare size={ICON_SIZES} />

                    <h6 className="github-repos-icon">
                        Live Share
                    </h6>
                </div>
            </div>

            <div className="flex-center gap-4 text-xs">
                <div>
                    <p className="hidden sm:block">
                        {`©${currentYear}  Jeremy Erik Leong`}
                    </p>
                </div>
                <div className="flex-center">
                    <VscCheck size={ICON_SIZES} />

                    <span className="github-repos-icon">
                        Prettier
                    </span>
                </div>

                <VscBell size={ICON_SIZES} />
            </div>
        </footer>
    )
}