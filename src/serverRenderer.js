import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import App from './App';
import configureStore from './modules/configureStore';
import routes from './routes';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link href="css/main.css" rel="stylesheet" type="text/css">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" 
      rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" 
      crossorigin="anonymous">
        </head>
        <body style="margin: 0; padding: 0">
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    const promises = routes.reduce((acc, route) => {
      if (matchPath(req.url, route) && route.component && route.component.initialAction) {
        acc.push(Promise.resolve(store.dispatch(route.component.initialAction())));
      }
      return acc;
    }, []);
    Promise.all(promises).then(() => {
      // This context object contains the results of the render
      const context = {};

      const renderRoot = () => (
        <App
          store={store}
          context={context}
          location={req.url}
          Router={StaticRouter}
        />
      );

      renderToString(renderRoot());

      // context.url will contain the URL to redirect to if a <Redirect> was used
      if (context.url) {
        res.writeHead(302, {
          Location: context.url,
        });
        res.end();
        return;
      }

      const htmlString = renderToString(renderRoot());
      const preloadedState = store.getState();

      res.send(renderHTML(htmlString, preloadedState));
    }).catch(e => console.error(e));
  };
}
