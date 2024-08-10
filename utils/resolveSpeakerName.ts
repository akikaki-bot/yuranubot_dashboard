import { voiceVoxSpeakers } from "@/constants/voicevox_speakers";


export function resolveSpeakerName( speakerId : string ){
    return voiceVoxSpeakers[speakerId] ?? "Unknown Speaker"
}