import React from "react"
import { Navbar, NavbarTitle, NavbarIconLink } from "styled/Navbar"
import { Body } from "styled/Body"
import { Text, Subtitle } from "styled/Typography"
import { ContactPanel, ContactDetails, Img } from "./styled"
import axios from "axios"
import { connect } from "react-redux"
import { fetchContacts, fetchContactsSuccess } from "data/contacts/actions"

class Contacts extends React.Component {
  componentDidMount() {
    this.props.fetchContacts()
    axios
      .get("https://private-36f1e-contactstest.apiary-mock.com/contacts")
      .then(result => {
        this.props.fetchContactsSuccess(result.data.items)
      })
  }
  render() {
    return (
      <div>
        <Navbar>
          <NavbarTitle>Contacts</NavbarTitle>
          <NavbarIconLink to="/addcontact">+</NavbarIconLink>
        </Navbar>
        <Body>
          {this.props.loading ? (
            "loading"
          ) : (
            <>
              {this.props.contacts.map((x, i) => (
                <ContactPanel key={x.id} to={`/orders/${x.id}`}>
                  <Img src={x.pictureUrl || "https://via.placeholder.com/50"} />
                  <ContactDetails>
                    <Subtitle>{x.name}</Subtitle>
                    <Text>{x.phone}</Text>
                  </ContactDetails>
                </ContactPanel>
              ))}
            </>
          )}
        </Body>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.contacts.contactsLoading,
  contacts: state.contacts.contacts
})
const mapDispatchToProps = {
  fetchContacts,
  fetchContactsSuccess
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts)
