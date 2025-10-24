import { developerInfo, socialCardDetails } from '@/constants';

export async function generateMetadata() {
    return {
        title: `${developerInfo.name} | Contact`,
    };
}

export default function Contact() {
    return (
        <section className="py-10 px-6 max-w-[900px] mx-auto font-mono text-sm text-gray-200">
            <div className="text-center mb-10">
                <h1 className="text-3xl lg:text-4xl font-bold">Get In Touch</h1>
                <h2 className="font-medium mt-3">
                    Have an exciting project we could work on together?
                </h2>
                <h2 className="font-medium mt-2">
                    Feel free to reach out to me through any of the social platforms below. I’m always open to new opportunities and connections.
                </h2>
            </div>

            <div className="relative mt-10 rounded-md overflow-hidden border border-gray-700 shadow-lg">
                <div className="flex items-center gap-2 px-3 py-2 bg-[#1f2430] border-b border-gray-700">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400 "></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>

                <div className="flex bg-[#2e3440] max-h-[60vh] overflow-y-auto">
                    <div className="flex flex-col items-end px-3 py-4 bg-[#2a2f3a] text-gray-500 select-none">
                        <span>1</span>
                        {socialCardDetails.map((_, index) => (
                            <span key={index} className="mt-px">{index + 2}</span>
                        ))}
                        <span>{socialCardDetails.length + 2}</span>
                    </div>

                    <div className="px-4 py-4 overflow-y-auto">
                        <p>
                            <span className="text-purple-400">export const </span>
                            <span className="text-amber-300">socials</span>
                            <span className="text-blue-400"> = </span>
                            <span className="text-purple-400">{"{"}</span>
                        </p>

                        <ul className="mt-1">
                            {socialCardDetails.map((social) => (
                                <li key={social.id} className="ml-6 break-all">
                                    <span className="text-red-400">{social.platform}: </span>
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-500 hover:underline"
                                    >
                                        {'"'}{social.title}{'"'}
                                    </a>
                                    <span>,</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-purple-400">{"}"}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
