import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = {
    ...createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))),
  };

  return store;
}
