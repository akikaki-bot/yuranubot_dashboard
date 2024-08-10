"use client";
import { SidebarComopnent } from "@/components/sidebar.dashboard";
import { useAPI } from "@/hook/useServerSettings";
import { useUser } from "@/hook/useUser";
import { RESTGeneralUserSettingData } from "@/types";
import { resolveSpeakerName } from "@/utils/resolveSpeakerName";
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
            { userSetting === null ? 
                (
                    <></>
                ) : 
                (
                    <div className="flex flex-col gap-4">
                        <p className="text-xl p-2">一部設定はサーバー側で設定されており、ユーザー側で特段設定する必要のないものがあります。</p>
                        <h1 className="text-2xl font-semibold"> 読み上げスピード </h1>
                        <div className="flex flex-row gap-4 items-center">
                            <p className="text-xl"> { userSetting.speak_speed < 1 ? "サーバーの設定" : userSetting.speak_speed }</p>
                            <div className="relative w-full">
                                <input 
                                    type="range" 
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" 
                                    min="0" 
                                    max="1"
                                    step="0.1" 
                                    defaultValue={ userSetting.speak_speed ?? 0 } 
                                    onChange={() => {}}
                                />
                                <p className=" absolute start-0 text-gray-300 -bottom-6">サーバーの設定</p>
                                <p className=" absolute end-0 text-gray-300 -bottom-6">くそ早い</p>
                            </div>
                        </div>
                        <h1 className="text-2xl font-semibold"> 話者 </h1>
                        <div className="flex flex-row gap-4">
                            <p className="text-xl"> { resolveSpeakerName(userSetting.vc_speaker) }</p>
                        </div>
                        <h1 className="text-2xl font-semibold"> ボイスチャンネル入室メッセージ </h1>
                        <div className="flex flex-row gap-4">
                            <input 
                                placeholder="ここに何も入力しないと、入室メッセージはサーバー側で設定されたものになるのだ"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                                type="text" 
                                defaultValue={ userSetting.connect_msg === "nan" ? "設定なし" : userSetting.connect_msg } 
                            />
                        </div>
                        <h1 className="text-2xl font-semibold"> ボイスチャンネル退出メッセージ </h1>
                        <div className="flex flex-row gap-4">
                            <input 
                                placeholder="ここに何も入力しないと、入室メッセージはサーバー側で設定されたものになるのだ"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                                type="text" 
                                defaultValue={ userSetting.connect_msg === "nan" ? "設定なし" : userSetting.connect_msg } 
                            />                        </div>
                    </div>
                )
            }
        </SidebarComopnent>
    )
}