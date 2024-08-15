"use client";
import { SidebarComopnent } from "@/components/sidebar.dashboard";
import { useAPI } from "@/hook/useServerSettings";
import { RESTDictionaryData } from "@/types";
import { useEffect, useState } from "react";


export default function Library({ params: { id } }: { params: { id: string } }) {

    const [ dictonaryData, setDictionaryData ] = useState<RESTDictionaryData[] | null>(null)
    const [ baseNotSavedDictonaryData, setNotSavedDictionaryData ] = useState<RESTDictionaryData[] | null>(null)
    const [ error, setError ] = useState<string | null>(null)

    const { getDictionary, postDictionary } = useAPI()

    useEffect(() => {
        init()
    }, [])
    
    async function init() {
        const dictionaryData = await getDictionary(`/guild/${id}/dictionary`, "100" )
        if( !("data" in dictionaryData) ){
            setError(dictionaryData.message)
            return;
        }
        setDictionaryData(dictionaryData.data)
    }

    return (
        <SidebarComopnent guildId={id}>
            <h1 className="text-4xl font-semibold"> Library List & Settings </h1>
            <p className="">辞書に関する設定</p>
            <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold">辞書一覧</h1>
                    <p>追加した単語の一覧です。</p>
                    {
                        dictonaryData === null ? <>辞書データがないか、ロード中。</> :
                        (
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>単語</th>
                                        <th>読み方</th>
                                        <th>追加者</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dictonaryData.map((data, index) => (
                                            <tr key={index}>
                                                <td>{data.word}</td>
                                                <td>{data.reading}</td>
                                                <td>{data.user.toString()}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        )
                    }
                </div>
            </div>
        </SidebarComopnent>
    )
}