import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import { SideMenu, Navbar } from '../ui';

interface Props {
    title: string
}

export const MainLayout: FC<PropsWithChildren<Props>> = ({ children, title = 'Joni Fernández' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                {/* meta etiquetas */}

                {/* Links */}
                {/* 
                    //!Problemas de compatibilidad
                    <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                /> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
            </Head>

            <nav>
                {/* Navbar */}
                <Navbar />
            </nav>

            {/* SideMenu */}
            <SideMenu />
            <main>
                {children}
            </main>
            <footer>
                {/* custom footer */}
            </footer>
        </>
    )
}
