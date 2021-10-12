import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import CreateGroupReducer from './create-Group';
import SingleGroupReducer from './group-page';
import HomeReducer from './home';
import sessionReducer from './session';



const rootReducer = combineReducers({
    session: sessionReducer,
    Home: HomeReducer,
    CreateGroup: CreateGroupReducer,
    SingleGroup: SingleGroupReducer
  });

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

  export default configureStore;
