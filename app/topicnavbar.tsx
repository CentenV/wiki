"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getWikiMap } from "./util";

export default function TopicNavigationBar() {
    const [topics, updateTopics] = useState<string[]>([]);

    useEffect(() => {
        async function main() {
            const wikiMap = await getWikiMap();
            const fetchedTopics: string[] = [];
            Object.keys(wikiMap).map((entry) => { fetchedTopics.push(entry); });
            updateTopics(fetchedTopics);
        }
        main();
    }, []);

    return (
        <>
            <nav className='flex flex-col overflow-hidden w-wiki-sidebar-full gap-3'>
                <Link href={"/"} className='rounded-wiki border-wiki px-4 py-3' draggable={false}><Image width={100} height={100} src='/wikilogo.svg' className='w-full h-full pointer-events-none' draggable={false} alt="Wiki Logo" /></Link>
                <div className='flex flex-col gap-3 p-4 border rounded-wiki border-wiki border-wiki-hud-elements-color'>
                    {topics.map((topic: string) => <Link href={`/${topic}`} key={topic}>{topic[0].toUpperCase() + topic.substring(1, topic.length)}</Link>)}
                </div>
            </nav>
        </>
    );
}