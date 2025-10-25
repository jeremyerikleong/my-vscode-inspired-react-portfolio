import { NextResponse } from 'next/server';

export async function GET() {
    const username = process.env.GH_USER;
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
        headers: {
            Authorization: `token ${process.env.GH_API_AUTH}`,
            "Content-Type": "application/json",
        },
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        return NextResponse.json({ error: "Failed to fetch repos" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
}
