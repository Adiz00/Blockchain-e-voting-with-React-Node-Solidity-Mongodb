import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './reducers';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from "redux-logger"
import { persistStore, persistReducer } from 'redux-persist';
import { Sagas } from "./sagas"
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['yourReducer'], // specify which reducers to persist
};
  
const persistedReducer = persistReducer(persistConfig, RootReducer);

const sagaMiddleware = createSagaMiddleware()       

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
    persistedReducer,
    // RootReducer,
    {},
    applyMiddleware(
        // createLogger(),  // redux-logger to console the actions and states of the store
        sagaMiddleware
    )
    // composeEnhancers(
    //     // createLogger(),
    //     applyMiddleware(sagaMiddleware)
    // )
);

const persistor = persistStore(Store);

sagaMiddleware.run(Sagas)

export { Store, persistor };