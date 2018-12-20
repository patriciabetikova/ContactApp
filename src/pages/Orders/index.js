import React from "react"
import { Navbar, NavbarTitle, NavbarIconLink } from "styled/Navbar"
import {
  OrderItem,
  Contact,
  OrdersBody,
  ContactSubtitle,
  ContactText
} from "./styled"
import { connect } from "react-redux"
import { fetchOrdersThunk } from "data/contacts/thunks"

class Orders extends React.Component {
  componentDidMount() {
    this.props.fetchOrdersThunk(this.props.match.params.id)
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
              {this.props.orders.map((x, i) => (
                <OrderItem key={i}>
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
  return {
    orders: state.contacts.orders[props.match.params.id].items,
    loading: state.contacts.orders[props.match.params.id].loading,
    contact: state.contacts.contacts.find(x => x.id === props.match.params.id)
  }
}

const mapDispatchToProps = {
  fetchOrdersThunk
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders)
