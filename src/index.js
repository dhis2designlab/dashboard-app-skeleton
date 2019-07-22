import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { App } from './components/App'

/**
 * Passed to DataProvider to get various data for the header bar.
 * 
 * If there is another minor release to for example 2.32.2,
 * then this variable must be updated.
 * It's possible to ommit the minor version number,
 * i.e. http://play.dhis2.org/2.32,
 * though it might lead to CORS errors during development.
 */
const developmentServer = 'https://play.dhis2.org/2.32.1'

/**
 * Passed to DataProvider to get various data for the header bar.
 */
const apiVersion = 32

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
