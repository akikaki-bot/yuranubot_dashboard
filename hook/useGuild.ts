import { RESTGetAPIGuildResult, RESTRateLimit } from "discord-api-types/v10";
import { useEffect, useState } from "react";



export function useGuild( guildId : string | null = null ) {

    const [ guild, setGuild ] = useState<RESTGetAPIGuildResult[] | null>(null)

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken === null) return;
        if( guildId === null && guild === null) getGuilds();
    }, [])

    async function getGuilds() {
        if( guild !== null ) return;
        const response = await fetch('/guilds', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            method: 'GET',
        })
        const guildDatas = await response.json() as { guilds: RESTGetAPIGuildResult[] }; 
        if( !response.ok ) return;
        if( 'message' in guildDatas ) return;

        const adminUserGuilds = guildDatas.guilds.filter(
            ({ permissions }) => (parseInt(permissions as string) & 0x8) === 0x8
        )

        console.log(`adminUserGuilds`, adminUserGuilds)

        setGuild(adminUserGuilds);
    }

    async function getGuild( guildId : string ) {
        const response = await fetch(`/guilds`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            method: 'GET',
        })
        const guild = await response.json() as { guilds: RESTGetAPIGuildResult[] };
        if( 'message' in guild ) return;
        
        const result = guild.guilds.find( ({ id }) => id === guildId )
        return result
    }

    return {
        guildList : guild,
        refresh : getGuilds,
        getGuild : getGuild
    }
}