import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

// REDUX
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./app/rootReducer";

import Main from "./components/Main";
import View from "./components/View";

import "whatwg-fetch";

// Create the store with middleware for thunks and react dev tools
// See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers
/*
const composedEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/

const composedEnhancer = compose(applyMiddleware(thunk));

const store = createStore(rootReducer, undefined, composedEnhancer);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/view/:workSlug/:recipeSlug" component={View} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
