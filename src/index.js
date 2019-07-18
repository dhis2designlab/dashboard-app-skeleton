import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { App } from './components/App'

const developmentServer = 'https://play.dhis2.org/2.31.4'
const apiVersion = 31
const rootElement = document.getElementById('root')

const withBaseUrl = baseUrl => {
    ReactDOM.render(
        <App baseUrl={baseUrl} apiVersion={apiVersion} />,
        rootElement
    )
    serviceWorker.unregister()
}

if (process.env.NODE_ENV === 'production') {
    fetch('./manifest.webapp')
        .then(response => response.json())
        .then(manifest => {
            withBaseUrl(`${manifest.activities.dhis.href}`)
        })
        .catch(e => {
            console.error('Could not read manifest:', e)
            ReactDOM.render(<code>No manifest found</code>, rootElement)
        })
} else withBaseUrl(developmentServer)
