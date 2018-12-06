import axios from "axios"

export const contactsRequest = () =>
  axios.get("https://private-36f1e-contactstest.apiary-mock.com/contacts")

export const ordersRequest = id =>
  axios.get(
    `https://private-36f1e-contactstest.apiary-mock.com/contacts/${id}/order`
  )
