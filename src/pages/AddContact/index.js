import React from "react"
import { Navbar, NavbarTitle, NavbarIconLink } from "styled/Navbar"
import { Body } from "styled/Body"
import { Form, Label } from "./styled"
import Button from "components/Button"
import Input from "components/Input"
class AddContact extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      phone: ""
    }
  }
  handleSubmit(e) {
    e.preventDefault()
  }
  render() {
    return (
      <>
        <Navbar>
          <NavbarIconLink to="/">❮</NavbarIconLink>
          <NavbarTitle>Add New Contact</NavbarTitle>
        </Navbar>
        <Body>
          <Form>
            <Label>Name</Label>
            <Input
              type="text "
              placeholder="First and Last Name"
              value={this.state.name}
              onChange={v => this.setState({ name: v })}
            />
            <Label>Phone </Label>
            <Input
              type="phone"
              placeholder="Phone Number"
              value={this.state.phone}
              onChange={v => this.setState({ phone: v })}
            />
            <Button text="Add" onClick={e => this.handleSubmit(e)} />
          </Form>
        </Body>
      </>
    )
  }
}

export default AddContact
