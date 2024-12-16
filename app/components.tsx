import Head from "next/head";
import { ReactNode } from "react";
import { formatTitle } from "./util";




export function ContentPage({ children, pageName }: { children: ReactNode, pageName: string }) {
    return (
        <>
            {/* <Head>
                <title>{formatTitle(pageName)}</title>
            </Head> */}
            {children}
        </>
    );
}