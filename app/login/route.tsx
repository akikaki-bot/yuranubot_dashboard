import {
    NextResponse,
    NextRequest
} from "next/server";



export async function GET(
    req : NextRequest,
    res : NextResponse
) {
    if( process.env.NODE_ENV === "production") return NextResponse.redirect('https://discord.com/oauth2/authorize?client_id=1222919095486251029&response_type=code&redirect_uri=http%3A%2F%2Fbot.yuranu.net%2Flogin%2Fcallback&scope=identify+guilds')
    return NextResponse.redirect('https://discord.com/oauth2/authorize?client_id=1222919095486251029&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin%2Fcallback&scope=guilds+identify')
}