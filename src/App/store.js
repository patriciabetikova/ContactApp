import { createStore, applyMiddleware, combineReducers } from "redux"
import { contactsReducer } from "data/contacts/reducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

export const store = createStore(
  combineReducers({
    contacts: contactsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
