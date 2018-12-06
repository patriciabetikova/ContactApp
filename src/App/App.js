import React, { Component } from "react"
import GlobalStyle from "./GlobalStyle"
import { Normalize } from "styled-normalize"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Orders from "pages/Orders"
import Contacts from "pages/Contacts"
import AddContact from "pages/AddContact"
import { Provider } from "react-redux"
import { store } from "./store"

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Normalize />
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route path="/orders/:id" component={Orders} />
              <Route path="/addcontact" component={AddContact} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App
