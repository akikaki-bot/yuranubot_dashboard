import { SpeakerAndId, Speakers, VoiceVoxSpeakers } from "@/constants/voicevox_speakers.emotion";



export function resolveSpeakerFromId( id : string ) : Speakers | "Unknown" {
    for (const speaker of SpeakerAndId) {
        if (speaker.emotions.includes(id)) {
            return speaker.speakerName;
        }
    }
    return "Unknown";
}
type uuid = keyof typeof VoiceVoxSpeakers
export function getSpeakerUUIDFromName( name : Speakers ) : uuid {
    if( name === "サーバーの設定を参照する" ){
        return "-1"
    }
    
    (Object.keys( VoiceVoxSpeakers ) as unknown as uuid[] ).forEach( 
    ( key ) => {
        const result = VoiceVoxSpeakers[key] as Speakers
        if( result === name ) return key
    })
    return "-1"
}