import React from "react"
import { Navbar, NavbarTitle, NavbarIconLink } from "styled/Navbar"

import {
  OrderItem,
  Contact,
  OrdersBody,
  ContactSubtitle,
  ContactText
} from "./styled"
import axios from "axios"
import { fetchOrders, fetchOrdersSuccess } from "data/contacts/actions"
import { connect } from "react-redux"

class Orders extends React.Component {
  componentDidMount() {
    this.props.fetchOrders()
    axios
      .get(
        `https://private-36f1e-contactstest.apiary-mock.com/contacts/${
          this.props.match.params.id
        }/order`
      )
      .then(result => {
        console.log(result)
        this.props.fetchOrdersSuccess(result.data.items)
      })
  }

  render() {
    return (
      <>
        <Navbar>
          <NavbarIconLink to="/">❮</NavbarIconLink>
          <NavbarTitle>{this.props.contact.name}</NavbarTitle>
        </Navbar>

        {this.props.loading ? (
          "loading"
        ) : (
          <>
            <Contact>
              <ContactSubtitle>Phone</ContactSubtitle>
              <ContactText fs={20}>{this.props.contact.phone}</ContactText>
            </Contact>
            <OrdersBody>
              {this.props.orders.map(x => (
                <OrderItem>
                  <h3>{x.name}</h3>
                  <h3>{x.count}</h3>
                </OrderItem>
              ))}
            </OrdersBody>
            )}
          </>
        )}
      </>
    )
  }
}

const mapStateToProps = (state, props) => {
  const contactFromStore = state.contacts.contacts.find(
    x => x.id === props.match.params.id
  )
  return {
    orders: state.contacts.orders,
    loading: state.contacts.ordersLoading,
    contact: contactFromStore || state.contacts.contacts
  }
}

const mapDispatchToProps = {
  fetchOrders,
  fetchOrdersSuccess
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders)
