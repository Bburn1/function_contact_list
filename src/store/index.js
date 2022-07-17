import { createStore, applyMiddleware } from 'redux'
import toContactReucer from './reducers/Contactreducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'


const sagaMiddleware = createSagaMiddleware()
const middleWare = applyMiddleware(sagaMiddleware, logger)


export default createStore(toContactReucer, composeWithDevTools(middleWare))

sagaMiddleware.run(rootSaga)


