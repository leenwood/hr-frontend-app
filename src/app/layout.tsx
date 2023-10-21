import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import './output.css';
import Providers from "@/app/providers";
import React from "react";
import CustomHeader from "@/components/CustomHeader/CustomHeader";


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
        <html lang="en" className='light'>
            <body className={inter.className}>
                <Providers>
                    <CustomHeader />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
