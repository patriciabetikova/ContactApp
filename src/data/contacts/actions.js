export const fetchContacts = () => ({
  type: "FETCH_CONTACTS"
})

export const fetchContactsSuccess = x => ({
  type: "FETCH_CONTACTS_SUCCESS",
  payload: x
})

export const fetchOrders = () => ({
  type: "FETCH_ORDERS"
})

export const fetchOrdersSuccess = x => ({
  type: "FETCH_ORDERS_SUCCESS",
  payload: x
})
