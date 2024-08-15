import { Speakers, SpeakersEmotion } from "@/constants/voicevox_speakers.emotion";
import { resolveSpeakerFromId } from "./resolveSpeaker";


export function resolveSpeakerName( speakerId : string ){
    const speakerName = resolveSpeakerFromId( speakerId );
    if( speakerId === "-1" ) return "サーバーの設定を参照する";
    if( speakerName === "Unknown" ) return "Unknown";
    const emotion = SpeakersEmotion[speakerName].find( emotion => emotion.id === speakerId );
    console.log(`[id:${speakerId}] ${speakerName} - ${emotion?.emotion ?? "Unknown"}`);
    return `${speakerName} - ${emotion?.emotion ?? "Unknown"}`;
}