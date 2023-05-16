import React from 'react'
import Document, {Html,Head,Main,NextScript} from "next/document";

export default class CustomDocument extends Document{
    render(){

        return (
            <Html lang="es-MX">
                <Head/>
                <body>
                    <Main/>
                </body>
                <NextScript/>
            </Html>
        )
    }
}

