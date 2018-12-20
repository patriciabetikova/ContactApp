import React from "react"
import { Navbar, NavbarTitle, NavbarIconLink } from "styled/Navbar"
import { Body } from "styled/Body"
import { Text, Subtitle } from "styled/Typography"
import { ContactPanel, ContactDetails, Img } from "./styled"
import { connect } from "react-redux"
import { fetchContactsThunk } from "data/contacts/thunks"
import { compose } from "recompose"
import withOnMount from "hocs/withOnMount"

const Contacts = props => (
  <div>
    <Navbar>
      <NavbarTitle>Contacts</NavbarTitle>
      <NavbarIconLink to="/addcontact">+</NavbarIconLink>
    </Navbar>
    <Body>
      {props.loading ? (
        "loading"
      ) : (
        <>
          {props.contacts.map((x, i) => (
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

const mapStateToProps = state => ({
  loading: state.contacts.contactsLoading,
  contacts: state.contacts.contacts
})
const mapDispatchToProps = {
  fetchContactsThunk
}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withOnMount(props => {
    if (props.contacts.length > 0) return
    props.fetchContactsThunk()
  })
)(Contacts)
