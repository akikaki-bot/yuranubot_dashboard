"use client";
import { SidebarComopnent } from "@/components/sidebar.dashboard";
import { useAPI } from "@/hook/useServerSettings";
import { useUser } from "@/hook/useUser";
import { RESTGeneralUserSettingData } from "@/types";
import { useEffect, useState } from "react";


export default function Library() {
    const { user, refresh }= useUser()
    const { getUserSetting, postUserSetting } = useAPI()

    const [ userSetting, setUserSetting ] = useState<RESTGeneralUserSettingData | null>(null)
    const [ error, setError ] = useState<string | null>(null)

    useEffect(() => {
        if( user === null ) return;
        init()
    }, [ user ])

    async function init() {
        const userSetting = await getUserSetting(`/user/${user?.id}/settings`)

        if( "message" in userSetting ){
            setError(userSetting.message)
            return;
        }

        setUserSetting(userSetting)
    }

    return (
        <SidebarComopnent user={ user ?? undefined }>
            <h1 className="text-4xl font-semibold"> User Settings </h1>
            <p className="">ユーザー読み上げ設定</p>
            
        </SidebarComopnent>
    )
}