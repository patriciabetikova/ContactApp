import React from "react"
import { Navbar, NavbarTitle, NavbarIconLink } from "styled/Navbar"
import { Body } from "styled/Body"
import { Text, Subtitle } from "styled/Typography"
import { ContactPanel, ContactDetails, Img } from "./styled"
import Button from "components/Button"

class Contacts extends React.Component {
  constructor() {
    super()
    this.state = {
      order: ""
    }
  }
  render() {
    return (
      <div>
        <Navbar>
          <NavbarTitle>Contacts</NavbarTitle>
          <NavbarIconLink to="/addcontact">+</NavbarIconLink>
        </Navbar>
        <Body>
          <ContactPanel to="/orders">
            <Img src="https://via.placeholder.com/50" />
            <ContactDetails>
              <Subtitle>meno</Subtitle>
              <Text>cisielko</Text>
            </ContactDetails>
          </ContactPanel>
          <ContactPanel to="/orders">
            <Img src="https://via.placeholder.com/50" />
            <ContactDetails>
              <Subtitle>meno</Subtitle>
              <Text>cisielko</Text>
            </ContactDetails>
          </ContactPanel>
          <ContactPanel to="/orders">
            <Img src="https://via.placeholder.com/50" />
            <ContactDetails>
              <Subtitle>meno</Subtitle>
              <Text>cisielko</Text>
            </ContactDetails>
          </ContactPanel>
          <ContactPanel to="/orders">
            <Img src="https://via.placeholder.com/50" />
            <ContactDetails>
              <Subtitle>meno</Subtitle>
              <Text>cisielko</Text>
            </ContactDetails>
          </ContactPanel>
          <ContactPanel to="/orders">
            <Img src="https://via.placeholder.com/50" />
            <ContactDetails>
              <Subtitle>meno</Subtitle>
              <Text>cisielko</Text>
            </ContactDetails>
          </ContactPanel>
          <ContactPanel to="/orders">
            <Img src="https://via.placeholder.com/50" />
            <ContactDetails>
              <Subtitle>meno</Subtitle>
              <Text>cisielko</Text>
            </ContactDetails>
          </ContactPanel>
          <ContactPanel to="/orders">
            <Img src="https://via.placeholder.com/50" />
            <ContactDetails>
              <Subtitle>meno</Subtitle>
              <Text>cisielko</Text>
            </ContactDetails>
          </ContactPanel>
          <ContactPanel to="/orders">
            <Img src="https://via.placeholder.com/50" />
            <ContactDetails>
              <Subtitle>meno</Subtitle>
              <Text>cisielko</Text>
            </ContactDetails>
          </ContactPanel>
          <ContactPanel to="/orders">
            <Img src="https://via.placeholder.com/50" />
            <ContactDetails>
              <Subtitle>meno</Subtitle>
              <Text>cisielko</Text>
            </ContactDetails>
          </ContactPanel>
          <ContactPanel to="/orders">
            <Img src="https://via.placeholder.com/50" />
            <ContactDetails>
              <Subtitle>meno</Subtitle>
              <Text>cisielko</Text>
            </ContactDetails>
          </ContactPanel>
        </Body>
      </div>
    )
  }
}

export default Contacts
