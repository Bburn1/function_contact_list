import { createStore, applyMiddleware } from 'redux'
import toContactReucer from './reducers/Contactreducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

 const middleWare = applyMiddleware(logger)

export default createStore(toContactReucer, composeWithDevTools(middleWare))