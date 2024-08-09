"use client"
import Link from "next/link"
import { ReactNode, useEffect, useState } from "react"
import { Navbar } from "./navbar"
import { useGuild } from "@/hook/useGuild"
import { APIUser, RESTGetAPIGuildResult } from "discord-api-types/v10"

type Sidebar = {
    label: string,
    href: string,
    iconSVG?: ReactNode
    tag: string,
    isBotMenu?: boolean
}


const SidebarMenus: Sidebar[] = [
    {
        label: "設定",
        href: "settings",
        tag: "settings",
        iconSVG: (
            <>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13v-2a1 1 0 0 0-1-1h-.8l-.7-1.7.6-.5a1 1 0 0 0 0-1.5L17.7 5a1 1 0 0 0-1.5 0l-.5.6-1.7-.7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.8l-1.7.7-.5-.6a1 1 0 0 0-1.5 0L5 6.3a1 1 0 0 0 0 1.5l.6.5-.7 1.7H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.8l.7 1.7-.6.5a1 1 0 0 0 0 1.5L6.3 19a1 1 0 0 0 1.5 0l.5-.6 1.7.7v.8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.8l1.7-.7.5.6a1 1 0 0 0 1.5 0l1.4-1.4a1 1 0 0 0 0-1.5l-.6-.5.7-1.7h.8a1 1 0 0 0 1-1Z" />
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </>
        ),
        isBotMenu: true
    },
    {
        label: "辞書",
        href: "library",
        tag: "timeline",
        iconSVG: (
            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
        ),
        isBotMenu: true
    },
    {
        label: "ログ",
        href: "logs",
        tag: "logs",
        iconSVG: (
            <>
                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
            </>
        ),
        isBotMenu: true
    }
]


export function SidebarComopnent({ children, guildId, user }: { children: ReactNode, guildId?: string, user ?: APIUser }) {

    const [isOpen, setOpen] = useState(false)
    const [currentMenu, setCurrentMenu] = useState<string | null>(null)
    const [ currentGuild, setCurrentGuild ] = useState<RESTGetAPIGuildResult | null>(null)
    const { getGuild } = useGuild();


    useEffect(() => {
        const location = window.location.pathname.split("/").pop();
        setCurrentMenu((location === "" || typeof location === "undefined") ? "main" : location)
        if (guildId === null) setCurrentMenu("main");

        if( guildId !== null && typeof guildId !== "undefined" ) {
            getGuildInfo()
        }
    }, [])

    async function getGuildInfo(){
        console.log( guildId )
        if( guildId === null || typeof guildId === "undefined" ) return;
        const guild = await getGuild( guildId )
        if( typeof guild !== "object" ) return;
        console.log( guild )
        setCurrentGuild(guild)
    }

    return (
        <main>
            <button onClick={() => setOpen(isOpen ? false : true)} aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <aside id="default-sidebar" className={`fixed top-[64px] left-0 z-40 w-64 h-screen transition-transform ${isOpen ? "-translate-x-0" : "-translate-x-full"} sm:translate-x-0`} aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li key={99921} className="ms-2">
                            {
                                typeof currentGuild === "object" && currentGuild !== null ? (
                                    <div className="flex items-center gap-2 mt-2">
                                        <img src={`https://cdn.discordapp.com/icons/${currentGuild.id}/${currentGuild.icon}.png`} className="w-8 h-8 rounded-full" />
                                        <div>
                                            <h1 className="text-lg"> {currentGuild.name} </h1>
                                            <p className="text-sm text-gray-600"> {currentGuild.id} </p>
                                        </div>
                                    </div>
                                ) : typeof guildId !== "undefined" ? (
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse" />
                                        <div className="flex flex-col gap-4">
                                            <div className="w-20 h-4 bg-gray-300 dark:bg-gray-700 rounded-sm animate-pulse" />
                                            <div className="w-10 h-4 bg-gray-300 dark:bg-gray-700 rounded-sm animate-pulse" />
                                        </div>
                                    </div>
                                ) : typeof user === "object" && user !== null ? (
                                    <div className="flex items-center gap-2 mt-2">
                                        <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar?.slice(0, 2).includes('a_') ? "gif" : "png"}`} className="w-8 h-8 rounded-full" />
                                        <div>
                                            <h1 className="text-lg"> {user.username} </h1>
                                            <p className="text-sm text-gray-600"> {user.id} </p>
                                        </div>
                                    </div>
                                ) :  (
                                    <Link href={`/dashboard/user`} className="flex items-center gap-2 mt-2 hover:bg-gray-100">
                                        <div className="w-8 h-8 bg-gray-300 rounded-full " />
                                        <div>
                                            <h1 className="text-lg"> ユーザー設定へ飛ぶ </h1>
                                            <p className="text-sm text-gray-600"> ここをタップ / クリック </p>
                                        </div>
                                    </Link>
                                )
                            }
                        </li>
                        {
                            isOpen && (
                                <li key={9992}>
                                    <a onClick={() => setOpen(isOpen ? false : true)} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                            <path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z' />
                                        </svg>
                                        <span className="ms-3 font-bold"> サイドバーを閉じる </span>
                                    </a>
                                </li>
                            )
                        }
                        <li key={9993}>
                            <Link onClick={() => setOpen(false)} href={`/dashboard`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <div className="w-5 h-5">
                                    ＜
                                </div>
                                <span className="ms-3"> サーバー選択に戻る </span>
                            </Link>
                        </li>
                        {
                            SidebarMenus.map((menu, index) => {
                                let absolutePath = "dashboard/"
                                if (typeof guildId === "undefined" && menu.isBotMenu) return (<></>);
                                if (typeof guildId !== "undefined") absolutePath = "/dashboard/" + guildId

                                return (
                                    <li key={index}>
                                        <Link onClick={() => { setOpen(false); }} href={`${absolutePath}/${menu.href}`} className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ${currentMenu === menu.tag ? "dark:bg-gray-700 bg-gray-100" : " "} dark:hover:bg-gray-700  group `}>
                                            {
                                                typeof menu.iconSVG !== "undefined" && (
                                                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                                        {menu.iconSVG}
                                                    </svg>
                                                )
                                            }
                                            <span className="ms-3">{menu.label}</span>
                                        </Link>
                                    </li>
                                )
                            }
                            )
                        }
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64 h-screen">
                {children}
            </div>
        </main>
    )
}