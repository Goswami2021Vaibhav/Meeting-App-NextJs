import StreamVideoProvider from '@/providers/StreamClientProvider'
import React, { ReactNode } from 'react'
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Meeting App",
    description: "Meeting app created by Vaibhav Goswami",
    icons: {
        icon: '/icons/logo.svg'
    }
};
const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    )
}

export default RootLayout