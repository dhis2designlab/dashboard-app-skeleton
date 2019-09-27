import React from 'react'
import { Provider } from '@dhis2/app-runtime'
import { CssReset } from '@dhis2/ui-core'
import { Main } from './Main'
import 'typeface-roboto'

const config = {
    baseUrl: process.env.REACT_APP_DHIS2_BASE_URL,
    apiVersion: process.env.REACT_APP_DHIS2_API_VERSION,
}

export const App = () => (
    <Provider config={config}>
        <CssReset />
        <Main />
    </Provider>
)
