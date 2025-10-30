import { developerInfo, socialCardDetails } from '@/constants';
import SectionTitle from '../components/SectionTitle';

export async function generateMetadata() {
    return {
        title: `${developerInfo.name} | Contact`,
    };
}

export default function Contact() {
    return (
        <section className="layout-container">
            <SectionTitle
                title="Get In Touch"
                description1="Have an exciting project we could work on together?"
                description2="Feel free to reach out to me through any of the social platforms below. I’m always open to new opportunities and connections." />

            <div className="vsc-editor-container">
                <div className="vsc-editor-topbar">
                    <span className="vsc-editor-topbar-btn bg-red-400"></span>
                    <span className="vsc-editor-topbar-btn bg-yellow-400 "></span>
                    <span className="vsc-editor-topbar-btn bg-green-500"></span>
                </div>

                <div className="vsc-editor-content-wrapper">
                    <div className="vsc-editor-num-list">
                        <span>1</span>
                        {socialCardDetails.map((_, index) => (
                            <span key={index} className="mt-px">{index + 2}</span>
                        ))}
                        <span>{socialCardDetails.length + 2}</span>
                    </div>

                    <div className="px-4 py-4 overflow-y-auto">
                        <p>
                            <span className="vsc-editor-export">export const </span>
                            <span className="vsc-editor-variable">socials</span>
                            <span className="vsc-editor-symbol"> = </span>
                            <span className="vsc-editor-curly-braces">{"{"}</span>
                        </p>

                        <ul className="mt-1">
                            {socialCardDetails.map((social) => (
                                <li key={social.id} className="ml-6 break-all">
                                    <span className="vsc-editor-object-key">{social.platform}: </span>
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="vsc-editor-value-link"
                                    >
                                        {'"'}{social.title}{'"'}
                                    </a>
                                    <span>,</span>
                                </li>
                            ))}
                        </ul>

                        <p className="vsc-editor-curly-braces">{"}"}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
