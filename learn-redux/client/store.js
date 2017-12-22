import { createStore, compose } from 'redux'
import { synchistoryWithStore } from 'react-router-redux'
import { BrowserHistory } from 'react-router'
import rootReducer from './reducers/index'
import comments from './data/comments'
import posts from './data/posts'

const defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState)

export const history = synchistoryWithStore(BrowserHistory, store)

export default store;
