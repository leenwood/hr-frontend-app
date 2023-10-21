import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {NextUIProvider} from "@nextui-org/react";


const inter = Inter({subsets: ['latin']})


export const metadata: Metadata = {
    title: 'hr portal',
    description: 'Портал для пользователей HR',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <NextUIProvider>
            <body className={inter.className}>{children}</body>
        </NextUIProvider>
        </html>
    )
}
