import { SnowFlake } from "@/types/resolva/snowflake";



export interface RESTGeneralSettingData {
    welcome_server  : SnowFlake
    speak_channel   : SnowFlake
    auto_connect    : SnowFlake
    speak_speed     : number
    length_limit    : number
    join_message    : string
    exit_message    : string
    connect_message : string
    vc_speaker      : number
}

export interface RESTGeneralUserSettingData {
    vc_speaker : number
    connect_msg : string
    disconnect_msg : string
    speak_speed : number
}

export interface RESTDictionaryData {
    word : string
    reading : string
    user : SnowFlake
}

