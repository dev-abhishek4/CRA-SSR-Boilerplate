import path from 'path';
import fs from 'fs';

// For React
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import createStore from '../src/store/store';
import App from '../src/App';

export default (req, res) => {

    const injectHTML = (data, { html, title, meta, body, state }) => {
        data = data.replace('<html>', `<html ${html}>`);
        data = data.replace(/<title>.*?<\/title>/g, title);
        data = data.replace('</head>', `${meta}</head>`);
        data = data.replace(
            '<div id="root"></div>',
            `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
        );
        return data;
    };

    // Load file from build
    fs.readFile(
        path.resolve(__dirname, '../build/index.html'),
        'utf8',
        (err, htmlData) => {
            if (err) {
                console.error('Read error', err);
                return res.status(404).end();
            }

            const { store } = createStore(req.originalUrl);

            // based on cookies or other data, we can dispatch specific actions like signIn to update the store

            const context = {};

            let routeMarkup = renderToString(
                <Provider store={store}>
                    <StaticRouter location={req.originalUrl} context={context}>
                        <App />
                    </StaticRouter>
                </Provider>
            )

            if (context.url) {
                // If context has a url property, then we need to handle a redirection in Redux Router
                res.writeHead(302, {
                    Location: context.url
                });
                res.end();
            } else {

                // call Helmet.renderStatic() after ReactDOMServer.renderToString or ReactDOMServer.renderToStaticMarkup to get the head data for use in your prerender
                const helmet = Helmet.renderStatic();

                const html = injectHTML(htmlData, {
                    html: helmet.htmlAttributes.toString(),
                    title: helmet.title.toString(),
                    meta: helmet.meta.toString(),
                    body: routeMarkup,
                    state: JSON.stringify(store.getState()).replace(/</g, '\\u003c')
                });

                res.send(html);
            }
        }
    );
};
