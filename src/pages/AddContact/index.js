import React from "react"
import { Navbar, NavbarTitle, NavbarIconLink } from "styled/Navbar"
import { Body } from "styled/Body"
import { Form, Label, Error } from "./styled"
import Button from "components/Button"
import Input from "components/Input"
import axios from "axios"
import { withState, withHandlers, withProps, compose } from "recompose"

const AddContact = props => (
  <>
    <Navbar>
      <NavbarIconLink to="/">❮</NavbarIconLink>
      <NavbarTitle>Add New Contact</NavbarTitle>
    </Navbar>
    <Body>
      <Form onSubmit={props.handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text "
          placeholder="First and Last Name"
          value={props.val.name}
          onChange={v =>
            props.setVal({ ...props.val, name: v, nameError: null })
          }
        />
        {!props.nameValid && <Error>{props.val.nameError}</Error>}
        <Label>Phone </Label>
        <Input
          type="tel"
          placeholder="Phone Number"
          value={props.val.phone}
          onChange={v =>
            props.setVal({ ...props.val, phone: v, phoneError: null })
          }
        />
        {!props.phoneValid && <Error>{props.val.phoneError}</Error>}
        <Button text="Add" type="submit" disabled={!props.allValid} />
      </Form>
    </Body>
  </>
)

// export default compose(
//   withState(,,),
//   withHandlers(),
// )(AddContact)

export default compose(
  withState("val", "setVal", {
    name: "",
    phone: "",
    nameError: null,
    phoneError: null,
    formError: null
  }),
  withProps(p => {
    const nameValid = p.val.name.length > 4
    const phoneValid = p.val.phone.length > 4

    return {
      nameValid,
      phoneValid,
      allValid: nameValid && phoneValid
    }
  }),
  withHandlers({
    handleSubmit: p => e => {
      e.preventDefault()
      if (!p.nameValid) {
        p.setVal({ ...p.val, nameError: "Must be at least 5 characters" })
      }
      if (!p.phoneValid) {
        p.setVal({ ...p.val, phoneError: "Must be at least 5 characters" })
      }

      if (p.allValid) {
        axios
          .post(
            "https://private-36f1e-contactstest.apiary-mock.com/contacts",
            console.log(p)
          )
          .then(response => {
            p.history.push("/")
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  })
)(AddContact)
