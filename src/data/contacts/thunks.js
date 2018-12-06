import {
  fetchContacts,
  fetchContactsSuccess,
  fetchOrders,
  fetchOrdersSuccess
} from "./actions"
import { contactsRequest, ordersRequest } from "./api"

export const fetchContactsThunk = () => dispatch => {
  dispatch(fetchContacts())
  contactsRequest().then(result => {
    dispatch(fetchContactsSuccess(result.data.items))
  })
}

export const fetchOrdersThunk = id => dispatch => {
  dispatch(fetchOrders(id))
  ordersRequest(id).then(result => {
    dispatch(fetchOrdersSuccess(id, result.data.items))
  })
}
