import { h, app } from "hyperapp"
import { Link, Route, Switch, Redirect, location } from "@hyperapp/router"
import { Header } from "./header"
import { Footer } from "./footer"
import { Content } from "./content"

import './../style/index.scss'
import './../style/loading.css'
import './bulma_navbar.js'


export const state = {
    step:0,
    selectedTag:"",
    is_loaded:false,
    location: location.state
}

export const actions = {
    step: value => (state) => ({step:value}),
    setTag: e => (state) => ({selectedTag:e.target.innerText,selected:true}),
    loading:  () => async (state,actions) => {
        await new Promise(done => setTimeout(done, 1000))
        actions.loaded()
    },
    loaded:() => (state) => ({is_loaded:true}),
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