"use client";
import { SidebarComopnent } from "@/components/sidebar.dashboard"




export default function Layout({
    children
}: {
    children : React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}