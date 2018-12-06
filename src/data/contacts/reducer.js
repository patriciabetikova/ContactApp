const initialState = {
  contacts: [],
  contactsLoading: false,
  orders: [],
  ordersLoading: false
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
        ordersLoading: true
      }
    case "FETCH_ORDERS_SUCCESS":
      return {
        ...state,
        orders: action.payload,
        ordersLoading: false
      }
    default:
      return state
  }
}
