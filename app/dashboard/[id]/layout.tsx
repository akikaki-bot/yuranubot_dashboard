"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Layout({
    children,
    params: { id: guildId }
}: {
    children: React.ReactNode,
    params: { id: string }
}) {

    return (
        <div className="flex flex-col w-full min-h-screen h-svh justify-center items-center">
            <h1 className="text-4xl font-semibold"> こっちは作成中です... </h1>
            <p>ゆるしてね、Userの方は使えるよ</p>
        </div>
    )

    const router = useRouter()

    useEffect(() => {
        getPermission(),
            () => {
                console.log(`unmounted layout.tsx from ${guildId} `)
            }
    }, [])

    async function getPermission() {
        console.log(` layout.tsx from ${guildId} `)
        const response = await fetch(`/permission/${guildId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${localStorage.getItem('accessToken')}`
            }
        })
        const data = await response.json() as { guilds: string[] };
        if (!response.ok) return;
        if( data.guilds.includes( guildId )) return;
        router.push('/dashboard')
    }

    return (
        <>
            {children}
        </>
    )
}