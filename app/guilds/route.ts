import { APIGuild, RESTGetAPIGuildResult, RESTRateLimit } from 'discord-api-types/v10';
import { usePathname } from 'next/navigation';
import {
    NextRequest,
    NextResponse,
} from 'next/server';

export interface cacheObject {
    guilds : APIGuild[];
    getBy : Date
}


const cache = new Map<string, cacheObject>();

export async function GET( request : NextRequest ) {

    const token = request.headers.get('Authorization')?.split(' ')[1];

    if( token === null || typeof token === "undefined" ) return NextResponse.json({ guilds : [] });

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

    if( cache.has(token) ) {
        // クアッシュ
        const cached = cache.get(token) as cacheObject;
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
            console.log( guildList )
            if( guildList === null ) {
                NextResponse.json({ guilds : [] });
                cache.delete(token);
                return;
            }
            const guilds = guildList
            cache.set(token, {
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
        console.log( guildList )
        if( guildList === null ) return NextResponse.json({ guilds : [] });
        const guilds = guildList
        cache.set(token, {
            guilds,
            getBy : new Date()
        })
        return NextResponse.json({
            guilds
        })
    }
}