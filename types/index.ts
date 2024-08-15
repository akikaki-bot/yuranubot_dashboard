import { SnowFlake } from "@/types/resolva/snowflake";



export interface RESTGeneralSettingData {
    welcome_server  : SnowFlake
    speak_channel   : SnowFlake
    auto_connect    : SnowFlake
    speak_speed     : number
    length_limit    : number
    vc_join_message    : string
    vc_exit_message    : string
    vc_speaker      : number
}

export interface RESTGeneralUserSettingData {
    vc_speaker : string
    conn_msg : string
    disconn_msg : string
    /** ※ float */
    speak_speed : number
}

export interface RESTGetGeneralUserSettingData {
    vc_speaker : string
    vc_join_message : string
    vc_exit_message : string
    speak_speed : number
}

export interface RESTDictionaryData {
    word : string
    reading : string
    user : SnowFlake
}

