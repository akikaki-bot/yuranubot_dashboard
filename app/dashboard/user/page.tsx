"use client";
import { SidebarComopnent } from "@/components/sidebar.dashboard";
import { Toast } from "@/components/toast";
import { voiceVoxSpeakers } from "@/constants/voicevox_speakers";
import { useAPI } from "@/hook/useServerSettings";
import { useUser } from "@/hook/useUser";
import { RESTGeneralUserSettingData } from "@/types";
import { resolveSpeakerName } from "@/utils/resolveSpeakerName";
import { Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";


export default function Library() {
    const { user, refresh }= useUser()
    const { getUserSetting, postUserSetting } = useAPI()

    const [ userSetting, setUserSetting ] = useState<RESTGeneralUserSettingData | null>(null)
    const [ error, setError ] = useState<string | null>(null)
    const [ baseUserChangedSetting, setBaseUserChangedSetting ] = useState<RESTGeneralUserSettingData | null>(null)
    const [ diffApplied, setDiffApplied ] = useState<boolean>(false)
    const [ loaded , setLoaded ] = useState<boolean>(false)

    useEffect(() => {
        if( user === null ) return;
        init()
    }, [ user ])

    useEffect(() => {
        if( userSetting !== null || baseUserChangedSetting !== null || loaded !== false ){
            const diff = checkDiff()
            setDiffApplied( diff )
        }
    }, [userSetting])

    async function init() {
        const userSetting = await getUserSetting(`/user/${user?.id}/settings`)

        if( "message" in userSetting ){
            setError(userSetting.message)
            return;
        }

        setBaseUserChangedSetting(userSetting)
        setUserSetting(userSetting)
        setLoaded(true)
        setDiffApplied(false)
    }

    function checkDiff() {
        if( loaded === false ) return false;
        if( userSetting === null || baseUserChangedSetting === null ) return false;
        if( 
            userSetting.speak_speed === baseUserChangedSetting.speak_speed &&
            userSetting.vc_speaker === baseUserChangedSetting.vc_speaker &&
            userSetting.conn_msg === baseUserChangedSetting.conn_msg &&
            userSetting.disconn_msg === baseUserChangedSetting.disconn_msg
        ) return false;
        return true
    }

    async function saveSetting() {
        if( userSetting === null || baseUserChangedSetting === null ) return;
        if( user === null ) return;

        if(
            userSetting.speak_speed === baseUserChangedSetting.speak_speed &&
            userSetting.vc_speaker === baseUserChangedSetting.vc_speaker &&
            userSetting.conn_msg === baseUserChangedSetting.conn_msg &&
            userSetting.disconn_msg === baseUserChangedSetting.disconn_msg
        ) return;

        if( userSetting.conn_msg && userSetting.conn_msg.length === 0 ) userSetting.conn_msg = "nan"
        if( userSetting.disconn_msg && userSetting.disconn_msg.length === 0 ) userSetting.disconn_msg = "nan"

        //@ts-ignore
        delete userSetting.connect_msg
        //@ts-ignore
        delete userSetting.user_id

        const res = await postUserSetting(`/user/${user.id}/settings`, userSetting)
        if( res.message !== "OK" ){
            console.log(`Error occured.`)
            console.log( res )
        }

        setBaseUserChangedSetting(userSetting)
        setDiffApplied(false)
        console.log(`Setting saved.`)
    }

    return (
        <SidebarComopnent user={ user ?? undefined }>
            <h1 className="text-4xl font-semibold"> User Settings </h1>
            <p className="">ユーザー読み上げ設定</p>
            <Toast show={ diffApplied && loaded && userSetting !== null && baseUserChangedSetting !== null } save={ saveSetting } unSave={() => { setUserSetting(baseUserChangedSetting) }} />
            {
                error !== null ? <p className="text-red-500"> ユーザー設定の取得に失敗しました。<br /> サーバーが落ちているか、単純に情報の取得に失敗したかのどちらかの原因です。<br /> エラーコード： {error} <br /> を開発者に伝えていただけるようお願いいたします。</p> :
                null
            }
            { userSetting === null ? 
                (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-4 items-center shadow-lg p-4 rounded-lg">
                            <div className="w-12 h-12 animate-spin rounded-full border-t-2 border-b-2 border-green-900"></div>
                            <p>読み込み中...</p>
                        </div>
                    </div>
                ) : 
                (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4 my-2">
                            <p className="text-xl p-2 my-3 border-l-3  from-transparent bg-gradient-to-r to-yellow-100 max-w-4xl">一部設定はサーバー側で設定されており、ユーザー側で特段設定する必要のないものがあります。</p>
                            <h1 className="text-3xl font-semibold"> 読み上げスピード </h1>
                            <p className="text-xl p-2 my-3 border-l-3 ">読み上げスピードを設定します。ここの設定が0であるとサーバーの設定を参照し、最小値は0.5です。</p>
                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <div className="flex justify-center items-center w-[300px]">
                                    <p className="text-xl"> { userSetting.speak_speed == 0 ? "サーバーの設定" : userSetting.speak_speed }</p>
                                </div>
                                <div className="relative w-full">
                                    <input 
                                        type="range" 
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" 
                                        min="0" 
                                        max="2"
                                        step="0.1" 
                                        defaultValue={ userSetting.speak_speed ?? 0 } 
                                        onChange={(e) => {
                                            setUserSetting({ ...userSetting, speak_speed : parseFloat(e.target.value) })
                                        }}
                                    />
                                    <p className="absolute start-0 text-gray-300 -bottom-6">サーバーの設定</p>
                                    <p className="absolute end-0 text-gray-300 -bottom-6">くそ早い</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 my-2">
                            <h1 className="text-3xl font-semibold"> 話者 </h1>
                            <p className="text-xl p-2 my-3 border-l-3 ">話者を設定します。サーバーの設定を使用することもできます。</p>
                            <div className="flex flex-row gap-4 items-center">
                                <p className="text-xl max-w-lg"> 現在：{ resolveSpeakerName(userSetting.vc_speaker) }</p>
                                <Select
                                    className="max-w-xs"
                                    label = "話者を選択"
                                    //defaultSelectedKeys={ userSetting.vc_speaker ?? "-1" }
                                    onChange={(e) => {
                                        setUserSetting({ ...userSetting, vc_speaker : e.target.value })
                                    }}
                                >
                                    {Object.keys(voiceVoxSpeakers).map(( speakerId ) => {
                                        return (
                                            <SelectItem key={speakerId} value={speakerId}> {voiceVoxSpeakers[speakerId]} </SelectItem>
                                        )
                                    })}
                                </Select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 my-2">
                            <h1 className="text-3xl font-semibold"> ボイスチャンネル特殊メッセージ </h1>
                            <p className="text-xl p-2 my-3 border-l-3 "> ユーザー名は{"<user>"}として入力します。<br />例：{"<user>"}が入室しました。</p>
                            <h1 className="text-2xl font-semibold"> ボイスチャンネル入室メッセージ </h1>
                            <div className="flex flex-row gap-4">
                                <input 
                                    placeholder="ここに何も入力しないと、入室メッセージはサーバー側で設定されたものになるのだ"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                                    type="text" 
                                    defaultValue={ userSetting.conn_msg === "nan" ? "" : userSetting.conn_msg } 
                                    onChange={(e) => { setUserSetting({ ...userSetting, conn_msg : e.target.value }) }}
                                />
                            </div>
                            <h1 className="text-2xl font-semibold"> ボイスチャンネル退出メッセージ </h1>
                            <div className="flex flex-row gap-4">
                                <input 
                                    placeholder="ここに何も入力しないと、入室メッセージはサーバー側で設定されたものになるのだ"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                                    type="text" 
                                    defaultValue={ userSetting.disconn_msg === "nan" ? "" : userSetting.disconn_msg } 
                                    onChange={(e) => { setUserSetting({ ...userSetting, disconn_msg : e.target.value }) }}
                                />
                            </div>
                        </div>
                    </div>
                )
            }
        </SidebarComopnent>
    )
}