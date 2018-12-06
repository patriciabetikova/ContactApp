import React from "react"
import { Navbar, NavbarTitle, NavbarIconLink } from "styled/Navbar"
import { Body } from "styled/Body"
import { Form, Label, Error } from "./styled"
import Button from "components/Button"
import Input from "components/Input"
import axios from "axios"

class AddContact extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      phone: "",
      nameError: null,
      phoneError: null,
      formError: null
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    const nameValid = this.state.name.length > 4
    const phoneValid = this.state.phone.length > 4
    if (!nameValid) {
      this.setState({ nameError: "Must be at least 5 characters" })
    }
    if (!phoneValid) {
      this.setState({ phoneError: "Must be at least 5 characters" })
    }

    if (nameValid && phoneValid) {
      axios
        .post(
          "https://private-36f1e-contactstest.apiary-mock.com/contacts",
          console.log(this.props)
        )
        .then(response => {
          this.props.history.push("/")
        })
        .catch(error => {
          console.log(error)
        })
    }
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
              onChange={v => this.setState({ name: v, nameError: null })}
            />
            {this.state.nameError && <Error>{this.state.nameError}</Error>}
            <Label>Phone </Label>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={this.state.phone}
              onChange={v => this.setState({ phone: v, phoneError: null })}
            />
            {this.state.phoneError && <Error>{this.state.phoneError}</Error>}
            <Button text="Add" onClick={e => this.handleSubmit(e)} />
          </Form>
        </Body>
      </>
    )
  }
}

export default AddContact
