import React, { Component } from "react"
import GlobalStyle from "./GlobalStyle"
import { Normalize } from "styled-normalize"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Orders from "pages/Orders"
import Contacts from "pages/Contacts"
import AddContact from "pages/AddContact"

class App extends Component {
  render() {
    return (
      <div>
        <Normalize />
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route path="/orders" component={Orders} />
            <Route path="/addcontact" component={AddContact} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
