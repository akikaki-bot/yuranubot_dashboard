"use client";
import { ReactNode } from 'react'
import NextTopLoader from "nextjs-progressbar"
import { AppProgressBar } from 'next-nprogress-bar';

export const NprogressProvider = ({ children }: { children: ReactNode }) => {
    return( 
        <>
            {children} 
            <AppProgressBar
                height="4px"
                color="#8FB896"
                options={{ showSpinner: false }}
                shallowRouting={true}
            />
        </>
    )
}