import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { middleware as navigationMiddleware } from '../routes'

import rootSaga from './sagas'
import rootReducer from './ducks'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
    sagaMiddleware,
    navigationMiddleware,
  ]

const store = createStore( rootReducer, compose(applyMiddleware(...middlewares)) )

sagaMiddleware.run(rootSaga)

export default store