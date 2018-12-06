import { createStore, applyMiddleware, combineReducers } from "redux"
import { contactsReducer } from "data/contacts/reducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"

export const store = createStore(
  combineReducers({
    contacts: persistReducer({ key: "contacts", storage }, contactsReducer)
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
