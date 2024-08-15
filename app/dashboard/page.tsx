"use client";
import { SidebarComopnent } from "@/components/sidebar.dashboard";
import { useGuild } from "@/hook/useGuild";
import { useUser } from "@/hook/useUser";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
    const { user , refresh } = useUser();
    const { guildList } = useGuild();
    return (
        <SidebarComopnent>
            <h1 className="text-4xl font-semibold"> {"←"} ユーザー設定はこっち </h1>
            {
                /*
            <h1 className="text-4xl font-semibold"> Dashboard </h1>
            <p className="">サーバーの選択</p>
            <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 ">
                    {
                        guildList === null ? [...Array(3)].map( (v,i) => i).map( v => (
                            <div key={v} className="w-[15rem] sm:w-[13rem] items-center h-[350px] shadow-lg flex flex-col justify-center p-3 hover:shadow-2xl hover:scale-110 transition-all transform-gpu ">
                                <div className="animate-pulse bg-gray-300 dark:bg-gray-700 rounded-xl shadow-lg w-32 h-32"></div>
                                <div className="animate-pulse bg-gray-300 dark:bg-gray-700 rounded-xl shadow-lg w-32 h-5 mt-2"></div>
                            </div>
                        )) : Array.isArray( guildList ) &&
                        guildList.map((guild) => {
                            return (
                                <Link href={`/dashboard/${guild.id}/settings`} key={guild.id} className="w-[15rem] sm:w-[13rem] items-center h-[350px] shadow-lg flex flex-col justify-center p-3 hover:shadow-2xl hover:scale-105 transition-all transform-gpu ">
                                    <Image 
                                        alt={`${guild.name}のアイコン`} 
                                        className="rounded-xl shadow-lg" 
                                        src={ guild.icon ? guild.icon.slice(0, 2).includes("a_") ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.gif` : `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png` : "https://cdn.discordapp.com/embed/avatars/0.png"} 
                                        width={100} 
                                        height={100}            
                                    />
                                    <h1 className="text-xl pt-2"> {guild.name} </h1>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            */
        }
        </SidebarComopnent>
    )
}