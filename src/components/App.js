import React from 'react'
import { CssReset } from '@dhis2/ui-core'
import { Main } from './Main'
import 'typeface-roboto'

// The two props can be removed if they are not needed.
export const App = ({ baseUrl, apiVersion }) => (
    <>
        <CssReset />
        <Main />
    </>
)
