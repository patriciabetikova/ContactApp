import React from "react"
import { Navbar, NavbarTitle, NavbarIconLink } from "styled/Navbar"
import { Body } from "styled/Body"
import { Text, Subtitle } from "styled/Typography"
import { ContactPanel, ContactDetails, Img } from "./styled"
import { connect } from "react-redux"
import { fetchContactsThunk } from "data/contacts/thunks"

class Contacts extends React.Component {
  componentDidMount() {
    if (this.props.contacts.length > 0) return
    this.props.fetchContactsThunk()
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
  fetchContactsThunk
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts)
