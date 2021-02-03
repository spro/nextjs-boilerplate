import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createWrapper} from 'next-redux-wrapper'

import rootReducer from './reducer'
import initialState from './state'
import rootSaga from './saga'

declare module 'redux' {
    export interface Store {
        sagaTask: any
    }
}

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, initialState, bindMiddleware([sagaMiddleware]))

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const reduxWrapper = createWrapper(makeStore)
