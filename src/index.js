import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { App } from './components/App'

/**
 * Passed to DataProvider to get various data for the header bar.
 * If there is another minor release to for example 2.31.6,
 * then this variable must be updated.
 */
const developmentServer = 'https://play.dhis2.org/2.31.5'

/**
 * Passed to DataProvider to get various data for the header bar.
 */
const apiVersion = 31

const rootElement = document.getElementById('root')

const productionRender = async () => {
    try {
        const manifest = await (await fetch('./manifest.webapp')).json()
        render(manifest.activities.dhis.href)
    } catch (error) {
        console.error('Could not read manifest:', error)
        ReactDOM.render(<code>No manifest found</code>, rootElement)
    }
}

const render = baseUrl => {
    ReactDOM.render(
        <App baseUrl={baseUrl} apiVersion={apiVersion} />,
        rootElement
    )
    serviceWorker.unregister()
}

if (process.env.NODE_ENV === 'production') productionRender()
else render(developmentServer)
