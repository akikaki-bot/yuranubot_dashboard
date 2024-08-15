

export const VoiceVoxSpeakers = {
    "7ffcb7ce-00ec-4bdc-82cd-45a8889e43ff": "四国めたん",
    "388f246b-8c41-4ac1-8e2d-5d79f3ff56d9": "ずんだもん",
    "35b2c544-660e-401e-b503-0e14c635303a": "春日部つむぎ",
    "3474ee95-c274-47f9-aa1a-8322163d96f1": "雨晴はう",
    "b1a81618-b27b-40d2-b0ea-27a9ad408c4b": "波音リツ",
    "c30dc15a-0992-4f8d-8bb8-ad3b314e6a6f": "玄野武宏",
    "e5020595-5c5d-4e87-b849-270a518d0dcf": "白上虎太郎",
    "4f51116a-d9ee-4516-925d-21f183e2afad": "青山龍星",
    "8eaad775-3119-417e-8cf4-2a10bfd592c8": "冥鳴ひまり",
    "481fb609-6446-4870-9f46-90c4dd623403": "九州そら",
    "9f3ee141-26ad-437e-97bd-d22298d02ad2": "もち子さん",
    "1a17ca16-7ee5-4ea5-b191-2f02ace24d21": "剣崎雌雄",
    "67d5d8da-acd7-4207-bb10-b5542d3a663b": "WhiteCUL",
    "0f56c2f2-644c-49c9-8989-94e11f7129d0": "後鬼",
    "044830d2-f23b-44d6-ac0d-b5d733caa900": "No.7",
    "468b8e94-9da4-4f7a-8715-a22a48844f9e": "ちび式じい",
    "0693554c-338e-4790-8982-b9c6d476dc69": "櫻歌ミコ",
    "a8cc6d22-aad0-4ab8-bf1e-2f843924164a": "小夜/SAYO",
    "882a636f-3bac-431a-966d-c5e6bba9f949": "ナースロボ＿タイプＴ",
    "471e39d2-fb11-4c8c-8d89-4b322d2498e0": "†聖騎士 紅桜†",
    "0acebdee-a4a5-4e12-a695-e19609728e30": "雀松朱司",
    "7d1e7ba7-f957-40e5-a3fc-da49f769ab65": "麒ヶ島宗麟",
    "ba5d2428-f7e0-4c20-ac41-9dd56e9178b4": "春歌ナナ",
    "00a5c10c-d3bd-459f-83fd-43180b521a44": "猫使アル",
    "c20a2254-0349-4470-9fc8-e5c0f8cf3404": "猫使ビィ",
    "1f18ffc3-47ea-4ce0-9829-0576d03a7ec8": "中国うさぎ",
    "04dbd989-32d0-40b4-9e71-17c920f2a8a9": "栗田まろん",
    "dda44ade-5f9c-4a3a-9d2c-2a976c7476d9": "あいえるたん",
    "287aa49f-e56b-4530-a469-855776c84a8d": "満別花丸",
    "97a4af4b-086e-4efd-b125-7ae2da85e697": "琴詠ニア",
    "-1" : "サーバーの設定を参照する"
} as const;

export type Speakers = typeof VoiceVoxSpeakers[ keyof typeof VoiceVoxSpeakers ];

export const SpeakersEmotion: Record< Speakers , { "emotion" : string, "id" : string }[] > = {
    "四国めたん": [{ "emotion": "ノーマル", "id": "2" }, { "emotion": "あまあま", "id": "0" }, { "emotion": "ツンツン", "id": "6" }, { "emotion": "セクシー", "id": "4" }, { "emotion": "ささやき", "id": "36" }, { "emotion": "ヒソヒソ", "id": "37" }],
    "ずんだもん": [{ "emotion": "ノーマル", "id": "3" }, { "emotion": "あまあま", "id": "1" }, { "emotion": "ツンツン", "id": "7" }, { "emotion": "セクシー", "id": "5" }, { "emotion": "ささやき", "id": "22" }, { "emotion": "ヒソヒソ", "id": "38" }, { "emotion": "ヘロヘロ", "id": "75" }, { "emotion": "なみだめ", "id": "76" }],
    "春日部つむぎ": [{ "emotion": "ノーマル", "id": "8" }],
    "雨晴はう": [{ "emotion": "ノーマル", "id": "10" }],
    "波音リツ": [{ "emotion": "ノーマル", "id": "9" }, { "emotion": "クイーン", "id": "65" }],
    "玄野武宏": [{ "emotion": "ノーマル", "id": "11" }, { "emotion": "喜び", "id": "39" }, { "emotion": "ツンギレ", "id": "40" }, { "emotion": "悲しみ", "id": "41" }],
    "白上虎太郎": [{ "emotion": "ふつう", "id": "12" }, { "emotion": "わーい", "id": "32" }, { "emotion": "びくびく", "id": "33" }, { "emotion": "おこ", "id": "34" }, { "emotion": "びえーん", "id": "35" }],
    "青山龍星": [{ "emotion": "ノーマル", "id": "13" }, { "emotion": "熱血", "id": "81" }, { "emotion": "不機嫌", "id": "82" }, { "emotion": "喜び", "id": "83" }, { "emotion": "しっとり", "id": "84" }, { "emotion": "かなしみ", "id": "85" }, { "emotion": "囁き", "id": "86" }],
    "冥鳴ひまり": [{ "emotion": "ノーマル", "id": "14" }],
    "九州そら": [{ "emotion": "ノーマル", "id": "16" }, { "emotion": "あまあま", "id": "15" }, { "emotion": "ツンツン", "id": "18" }, { "emotion": "セクシー", "id": "17" }, { "emotion": "ささやき", "id": "19" }],
    "もち子さん": [{ "emotion": "ノーマル", "id": "20" }, { "emotion": "セクシー／あん子", "id": "66" }, { "emotion": "泣き", "id": "77" }, { "emotion": "怒り", "id": "78" }, { "emotion": "喜び", "id": "79" }, { "emotion": "のんびり", "id": "80" }],
    "剣崎雌雄": [{ "emotion": "ノーマル", "id": "21" }],
    "WhiteCUL": [{ "emotion": "ノーマル", "id": "23" }, { "emotion": "たのしい", "id": "24" }, { "emotion": "かなしい", "id": "25" }, { "emotion": "びえーん", "id": "26" }],
    "後鬼": [{ "emotion": "人間ver.", "id": "27" }, { "emotion": "ぬいぐるみver.", "id": "28" }],
    "No.7": [{ "emotion": "ノーマル", "id": "29" }, { "emotion": "アナウンス", "id": "30" }, { "emotion": "読み聞かせ", "id": "31" }],
    "ちび式じい": [{ "emotion": "ノーマル", "id": "42" }],
    "櫻歌ミコ": [{ "emotion": "ノーマル", "id": "43" }, { "emotion": "第二形態", "id": "44" }, { "emotion": "ロリ", "id": "45" }],
    "小夜/SAYO": [{ "emotion": "ノーマル", "id": "46" }],
    "ナースロボ＿タイプＴ": [{ "emotion": "ノーマル", "id": "47" }, { "emotion": "楽々", "id": "48" }, { "emotion": "恐怖", "id": "49" }, { "emotion": "内緒話", "id": "50" }],
    "†聖騎士 紅桜†": [{ "emotion": "ノーマル", "id": "51" }],
    "雀松朱司": [{ "emotion": "ノーマル", "id": "52" }],
    "麒ヶ島宗麟": [{ "emotion": "ノーマル", "id": "53" }],
    "春歌ナナ": [{ "emotion": "ノーマル", "id": "54" }],
    "猫使アル": [{ "emotion": "ノーマル", "id": "55" }, { "emotion": "おちつき", "id": "56" }, { "emotion": "うきうき", "id": "57" }],
    "猫使ビィ": [{ "emotion": "ノーマル", "id": "58" }, { "emotion": "おちつき", "id": "59" }, { "emotion": "人見知り", "id": "60" }],
    "中国うさぎ": [{ "emotion": "ノーマル", "id": "61" }, { "emotion": "おどろき", "id": "62" }, { "emotion": "こわがり", "id": "63" }, { "emotion": "へろへろ", "id": "64" }],
    "栗田まろん": [{ "emotion": "ノーマル", "id": "67" }],
    "あいえるたん": [{ "emotion": "ノーマル", "id": "68" }],
    "満別花丸": [{ "emotion": "ノーマル", "id": "69" }, { "emotion": "元気", "id": "70" }, { "emotion": "ささやき", "id": "71" }, { "emotion": "ぶりっ子", "id": "72" }, { "emotion": "ボーイ", "id": "73" }],
    "琴詠ニア": [{ "emotion": "ノーマル", "id": "74" }],
    "サーバーの設定を参照する" : [{ emotion : "ノーマル", id : "-1" }]
}

export const SpeakerAndId : { speakerName : Speakers, emotions : string[] }[]= [
    {
        speakerName: "四国めたん",
        emotions: ["2","0","6","4","36","37"]
    },
    {
        speakerName: "ずんだもん",
        emotions: ["3","1","7","5","22","38","75","76"]
    },
    {
        speakerName: "春日部つむぎ",
        emotions: ["8"]
    },
    {
        speakerName: "雨晴はう",
        emotions: ["10"]
    },
    {
        speakerName: "波音リツ",
        emotions: ["9","65"]
    },
    {
        speakerName: "玄野武宏",
        emotions: ["11","39","40","41"]
    },
    {
        speakerName: "白上虎太郎",
        emotions: ["12","32","33","34","35"]
    },
    {
        speakerName: "青山龍星",
        emotions: ["13","81","82","83","84","85","86"]
    },
    {
        speakerName: "冥鳴ひまり",
        emotions: ["14"]
    },
    {
        speakerName: "九州そら",
        emotions: ["16","15","18","17","19"]
    },
    {
        speakerName: "もち子さん",
        emotions: ["20","66","77","78","79","80"]
    },
    {
        speakerName: "剣崎雌雄",
        emotions: ["21"]
    },
    {
        speakerName: "WhiteCUL",
        emotions: ["23","24","25","26"]
    },
    {
        speakerName: "後鬼",
        emotions: ["27","28"]
    },
    {
        speakerName: "No.7",
        emotions: ["29","30","31"]
    },
    {
        speakerName: "ちび式じい",
        emotions: ["42"]
    },
    {
        speakerName: "櫻歌ミコ",
        emotions: ["43","44","45"]
    },
    {
        speakerName: "小夜/SAYO",
        emotions: ["46"]
    },
    {
        speakerName: "ナースロボ＿タイプＴ",
        emotions: ["47","48","49","50"]
    },
    {
        speakerName: "†聖騎士 紅桜†",
        emotions: ["51"]
    },
    {
        speakerName: "雀松朱司",
        emotions: ["52"]
    },
    {
        speakerName: "麒ヶ島宗麟",
        emotions: ["53"]
    },
    {
        speakerName: "春歌ナナ",
        emotions: ["54"]
    },
    {
        speakerName: "猫使アル",
        emotions: ["55","56","57"]
    },
    {
        speakerName: "猫使ビィ",
        emotions: ["58","59","60"]
    },
    {
        speakerName: "中国うさぎ",
        emotions: ["61","62","63","64"]
    },
    {
        speakerName: "栗田まろん",
        emotions: ["67"]
    },
    {
        speakerName: "あいえるたん",
        emotions: ["68"]
    },
    {
        speakerName: "満別花丸",
        emotions: ["69","70","71","72","73"]
    },
    {
        speakerName: "琴詠ニア",
        emotions: ["74"]
    }
]