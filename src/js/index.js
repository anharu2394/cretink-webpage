import { h, app } from "hyperapp"
import { Link, Route, Switch, Redirect, location } from "@hyperapp/router"
import { Header } from "./header"
import { Footer } from "./footer"
import { Content } from "./content"

import './../style/index.scss'
import './bulma_navbar.js'

const state = {
  location: location.state
}

const actions = {
  location: location.actions
}

const view = (state, actions) => (
  <div >
    <Header />
    <Content />
    <Footer />
  </div>
)

const main = app(state, actions, (state, actions) => <Route render={() => view} />, document.body)

const unsubscribe = location.subscribe(main.location)
