import { RESTGetAPIUserResult } from "discord-api-types/v10";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



export function useUser(){

    const [ user , setUser ] = useState<null | RESTGetAPIUserResult>(null)

    const router = useRouter()
    
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken === null) return router.push('/login');
        getUserMe();
    }, [])

    async function getUserMe() {
        const response = await fetch('https://discord.com/api/users/@me', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            method: 'GET'
        })
        if( response.status === 401 ) return router.push('/login');

        const user = await response.json();
        setUser(user);
    }

    return {
        user : user,
        refresh : getUserMe
    }
}