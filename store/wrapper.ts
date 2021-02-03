import {configureStore} from '@reduxjs/toolkit'
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

const USE_DEV_TOOLS = process.env.NODE_ENV !== 'production'

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
      middleware: [sagaMiddleware],
      devTools: USE_DEV_TOOLS
  })

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const reduxWrapper = createWrapper(makeStore)
