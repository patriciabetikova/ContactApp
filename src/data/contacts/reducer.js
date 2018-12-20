const initialState = {
  contacts: [],
  contactsLoading: false,
  orders: {}
}

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS":
      return {
        ...state,
        contactsLoading: true
      }
    case "FETCH_CONTACTS_SUCCESS":
      return {
        ...state,
        contactsLoading: false,
        contacts: action.payload
      }
    case "FETCH_ORDERS":
      return {
        ...state,
        orders: {
          ...state.orders,
          [action.payload]: {
            loading: true
          }
        }
      }
    case "FETCH_ORDERS_SUCCESS":
      return {
        ...state,
        orders: {
          ...state.orders,
          [action.payload.id]: {
            loading: false,
            items: action.payload.items
          }
        }
      }
    default:
      return state
  }
}
