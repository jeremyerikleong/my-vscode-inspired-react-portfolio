'use client';

import { useEffect, useState } from 'react';
import { VscStarEmpty, VscRepoForked } from 'react-icons/vsc';
import SectionTitle from './SectionTitle';
interface Repository {
    id: string;
    name: string;
    description: string | null;
    url: string;
    stargazerCount: number;
    forkCount: number;
    primaryLanguage?: {
        name: string;
        color: string;
    };
}

interface RepositoryEdge {
    node: Repository;
}

interface ContributionDay {
    color: string;
    contributionCount: number;
    date: string;
}

interface ContributionWeek {
    contributionDays: ContributionDay[];
}

interface ContributionCalendar {
    weeks: ContributionWeek[];
    totalContributions: number;
}

export default function GithubSection() {
    const [isLoadingPinnedRepos, setIsLoadingPinnedRepos] = useState(false);
    const [isLoadingContributions, setIsLoadingContributions] = useState(false);
    const [pinnedRepos, setPinnedRepos] = useState<Repository[]>([]);
    const [calendar, setCalendar] = useState<ContributionWeek[]>([]);
    const [totalContributions, setTotalContributions] = useState<number | null>(null);

    useEffect(() => {
        async function getPinnedRepos() {
            try {
                setIsLoadingPinnedRepos(true);
                const res = await fetch("/api/github/pinned");
                const json = await res.json();
                const repos = (json.data.user.pinnedItems.edges as RepositoryEdge[]).map(edge => edge.node) || [];
                setPinnedRepos(repos);
            } catch (err) {
                console.error('fetching pinned repos:', err);
            } finally {
                setIsLoadingPinnedRepos(false);
            }
        }
        getPinnedRepos();
    }, []);

    useEffect(() => {
        async function getContributions() {
            try {
                setIsLoadingContributions(true);
                const res = await fetch("/api/github/contributions");
                const json = await res.json();
                const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks as ContributionWeek[];
                const contributions = json.data.user.contributionsCollection.contributionCalendar.totalContributions as number;
                setCalendar(weeks);
                setTotalContributions(contributions);
            } catch (err) {
                console.error('fetching contributions:', err);
            } finally {
                setIsLoadingContributions(false);
            }
        }
        getContributions();
    }, []);

    return (
        <section className="max-w-[900px] mx-auto px-6 py-10 text-gray-200 font-mono">
            <SectionTitle
                title="Github"
                description1="Feel free to browse through my GitHub repositories to see what I’ve been working on. Here are some of my public projects that showcase my skills and interests."
            />

            <div className="my-10">
                <h2 className="font-bold text-lg">Pinned</h2>

                {isLoadingPinnedRepos ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-2">
                        {isLoadingPinnedRepos && [...Array(6)].map((_, index) => (
                            <div key={index} className="w-full h-50 skeleton bg-[#2e3440] border border-gray-600 rounded-md animate-pulse"></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-2">
                        {pinnedRepos.map((repo) => (
                            <a
                                key={repo.id}
                                href={repo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#2e3440] border border-gray-600 hover:border-gray-400 rounded-md p-5 transition duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <h2 className="text-lg font-semibold mb-2 text-white">{repo.name}</h2>
                                    <p className="text-sm text-gray-400 line-clamp-3">
                                        {repo.description || "No description"}
                                    </p>
                                </div>

                                <div className="text-xs text-gray-400 mt-4 flex items-center gap-3">
                                    {repo.primaryLanguage && (
                                        <span className="flex items-center gap-1">
                                            <span
                                                className="w-2 h-2 rounded-full"
                                                style={{ backgroundColor: repo.primaryLanguage.color }}
                                            ></span>
                                            {repo.primaryLanguage.name}
                                        </span>
                                    )}
                                    <div className="flex items-center">
                                        <VscStarEmpty />
                                        <span className="ml-1">
                                            {repo.stargazerCount}
                                        </span>
                                    </div>

                                    <div className="flex items-center">
                                        <VscRepoForked />
                                        <span className="ml-1">
                                            {repo.forkCount}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <>
                <h2 className="font-bold text-lg">Contribution Activity</h2>
                {isLoadingContributions ? (
                    <>
                        <div className="w-full h-26 my-2 animate-pulse bg-[#2e3440]"></div>
                        <div className="w-full lg:w-60 h-4 animate-pulse bg-[#2e3440]"></div>
                    </>
                ) : (
                    <>
                        <div className="overflow-x-auto">
                            <div className="flex gap-1 my-2">
                                {calendar.map((week, i) => (
                                    <div key={i} className="flex flex-col gap-1">
                                        {week.contributionDays.map((day, j) => (
                                            <div
                                                key={j}
                                                className="w-3 h-3 rounded-xs"
                                                title={`${day.date}: ${day.contributionCount} contributions`}
                                                style={{
                                                    backgroundColor: day.color,
                                                    filter: "brightness(0.7) contrast(1.2)",
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-xs">{totalContributions} contributions in the last year</p>
                    </>
                )}
            </>
        </section>
    );
}
