"use client";
import { SidebarComopnent } from "@/components/sidebar.dashboard";
import { useAPI } from "@/hook/useServerSettings";
import { useEffect, useState } from "react";


export default function GeneralSettings( { params : { id } } : { params : { id : string }}) {

    

    return (
        <SidebarComopnent guildId={ id }>
            <h1 className="text-4xl font-semibold"> General Settings </h1>
            <p className="">基本的な読み上げ設定。</p>
        </SidebarComopnent>
    )
}