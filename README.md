## This project is created to provide SSR(Server Side Rendering) benefits to projects created with create-react-app.
## Configured to use redux-saga and scss
## Project Code seperation according to functionality.
## Used only popular node modules to be future-proof.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br>

### `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run serve`
### it is mandatory to run `npm run build` before this.
Runs the app from the node server.
Port can be configured from the .env file. Default port is 3000.
Open [http://localhost:3000] to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Window function like window.onscroll() may not work on SSR as window doesn't exist on server. One resolution could be to write script in index.html