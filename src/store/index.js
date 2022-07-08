import { createStore, applyMiddleware } from 'redux'
import toContactReucer from './reducers/Contactreducer'
import logger from 'redux-logger'
 const middleWare = applyMiddleware(logger)

export default createStore(toContactReucer, middleWare)