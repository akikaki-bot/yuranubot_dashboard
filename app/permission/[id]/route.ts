import { RESTGetAPIGuildResult, RESTRateLimit } from 'discord-api-types/v10';
import { usePathname } from 'next/navigation';
import {
    NextRequest,
    NextResponse,
} from 'next/server';

export interface cacheObject {
    guilds : string[];
    getBy : Date
}


const cache = new Map<string, cacheObject>();

export async function GET( request : NextRequest ) {


    const id = request.url.split('/')[4] as string;
    const token = request.headers.get('Authorization');

    const fetchGuild = async () => {
        const res = await fetch(`https://discord.com/api/users/@me/guilds`, {
            headers : {
                Authorization : `Bearer ${token}`,
                "Content-Type" : "application/json",
            },
            cache : "force-cache",
            method : "GET"
        })
        const guildDatas = await res.json() as RESTGetAPIGuildResult[] | RESTRateLimit;

        if( !res.ok ) return { guildList : null };
        if( 'message' in guildDatas ) return { guildList : null };


        const adminUserGuilds = guildDatas.filter(
            ({ permissions }) => (parseInt(permissions as string) & 0x8) === 0x8
        )

        return {
            guildList : adminUserGuilds
        }
    };

    if( cache.has(id) ) {
        // クアッシュ
        const cached = cache.get(id) as cacheObject;
        // 1min
        if( ( cached.getBy.getTime() + 1000 * 60 * 1 ) > Date.now() || cached.guilds.length != 0) {
            return NextResponse.json({
                "__cache" : "true",
                guilds : cached.guilds
            })
        }
        else {
            // キャッシュを再取得
            const { guildList } = await fetchGuild();
            if( guildList === null ) {
                NextResponse.json({ guilds : [] });
                cache.delete(id);
                return;
            }
            const guilds = guildList.map(({ id }) => id);
            cache.set(id, {
                guilds,
                getBy : new Date()
            })
            return NextResponse.json({
                guilds
            })
        }
    }
    else {
        // 最初♡
        const { guildList } = await fetchGuild();
        if( guildList === null ) return NextResponse.json({ guilds : [] });
        const guilds = guildList.map(({ id }) => id);
        cache.set(id, {
            guilds,
            getBy : new Date()
        })
        return NextResponse.json({
            guilds
        })
    }
}