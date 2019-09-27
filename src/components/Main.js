import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import { ScreenCover, CircularLoader } from '@dhis2/ui-core'

const query = {
    me: {
        resource: 'me',
        params: {
            fields: 'displayName',
        },
    },
}

export const Main = () => {
    const { loading, error, data } = useDataQuery(query)

    if (loading)
        return (
            <ScreenCover>
                <CircularLoader />
            </ScreenCover>
        )

    if (error) return <span>{error.message}</span>

    return (
        <main>
            <h1>Hello {data.me.displayName}</h1>
        </main>
    )
}
