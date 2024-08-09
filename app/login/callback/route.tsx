import {
    NextResponse,
    NextRequest
} from "next/server";
import { URL } from "url";



export async function GET(
    req : NextRequest,
    res : NextResponse
) {
    const url = new URL(req.url).search.split('=')[1]

    const response = await fetch("https://discord.com/api/oauth2/token", {
        method : "POST",
        body : new URLSearchParams({
            client_id : process.env.clientId,
            client_secret : process.env.clientSecret,
            code : url,
            grant_type : "authorization_code",
            redirect_uri : process.env.redirectUri,
            scope : "identify"
        }).toString(),
        headers : {
            'Content-Type' : "application/x-www-form-urlencoded",
        },
    })

    const oauthData = ( await response.json() ) as OauthDataResponse
    if( 'error' in oauthData || 'message' in oauthData ){
        return NextResponse.json({"DISCORD_API_ERROR" : oauthData.message ?? oauthData.error })
    }

    console.log(oauthData)

    return NextResponse.redirect(`http://${new URL(req.url).host}/login/callback/set?t=${oauthData.access_token}`)
}

export type OauthDataResponse = AccessTokenResponse | ErrorAccessTokenResponse 

export interface AccessTokenResponse {
    access_token : string
    token_type : string
    expires_in : number
    refresh_token: string
    scope : string
}

export interface ErrorAccessTokenResponse {
    error ?: string
    message : string
}