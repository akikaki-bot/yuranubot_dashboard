"use client";
import { SidebarComopnent } from "@/components/sidebar.dashboard";


export default function Logs({ params: { id } }: { params: { id: string } }) {
    return (
        <SidebarComopnent guildId={id}>
            <h1 className="text-4xl font-semibold"> Log Infomations </h1>
            <p className="">読み上げのログ</p>
        </SidebarComopnent>
    )
}