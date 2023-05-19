'use client'
import { homePageQuery } from "@/api/queries/home"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

export default async function TestPage() {

 

    return(
        <div>
            <h1>Test page!!!!!a</h1>
        </div>
    )
}
