export const fetchContacts = () => ({
  type: "FETCH_CONTACTS"
})

export const fetchContactsSuccess = x => ({
  type: "FETCH_CONTACTS_SUCCESS",
  payload: x
})

export const fetchOrders = id => ({
  type: "FETCH_ORDERS",
  payload: id
})

export const fetchOrdersSuccess = (id, items) => ({
  type: "FETCH_ORDERS_SUCCESS",
  payload: {
    id,
    items
  }
})
