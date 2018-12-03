import React from "react"
import { Navbar, NavbarTitle, NavbarIconLink } from "styled/Navbar"

import {
  OrderItem,
  Contact,
  OrdersBody,
  ContactSubtitle,
  ContactText
} from "./styled"

class Orders extends React.Component {
  constructor() {
    super()
    this.state = {
      order: ""
    }
  }
  render() {
    return (
      <>
        <Navbar>
          <NavbarIconLink to="/">❮</NavbarIconLink>
          <NavbarTitle>contact.name</NavbarTitle>
        </Navbar>
        <Contact>
          <ContactSubtitle>Phone</ContactSubtitle>
          <ContactText fs={20}>cisielko</ContactText>
        </Contact>
        <OrdersBody>
          <OrderItem>
            <h3>Item</h3>
            <h3>vol</h3>
          </OrderItem>
          <OrderItem>
            <h3>Item</h3>
            <h3>vol</h3>
          </OrderItem>
          <OrderItem>
            <h3>Item</h3>
            <h3>vol</h3>
          </OrderItem>
          <OrderItem>
            <h3>Item</h3>
            <h3>vol</h3>
          </OrderItem>
          <OrderItem>
            <h3>Item</h3>
            <h3>vol</h3>
          </OrderItem>
          <OrderItem>
            <h3>Item</h3>
            <h3>vol</h3>
          </OrderItem>
          <OrderItem>
            <h3>Item</h3>
            <h3>vol</h3>
          </OrderItem>
          <OrderItem>
            <h3>Item</h3>
            <h3>vol</h3>
          </OrderItem>
          <OrderItem>
            <h3>Item</h3>
            <h3>vol</h3>
          </OrderItem>
          <OrderItem>
            <h3>Item</h3>
            <h3>vol</h3>
          </OrderItem>
        </OrdersBody>
      </>
    )
  }
}

export default Orders
