import { h } from "hyperapp"
import { Link, Route, Switch, Redirect, location } from "@hyperapp/router"


 const listener = () => {
     const element = document.querySelector('#navbar-toggle')
     element.addEventListener('click', (e) => {
       e.target.classList.toggle('is-active')
       document.querySelector('#navbar-menu').classList.toggle('is-active')
     })
 }
export const Header = () => (actions,state) =>  (
    <header oncreate={listener}>
        <nav class="navbar is-transparent is-light" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <Link class="navbar-item" to="/">
                <h1 class="title">Cretink</h1>
            </Link>
            <div class="navbar-toggle navbar-burger" id="navbar-toggle">    
                <span></span>
                <span></span>
                <span></span>
              </div>
          </div>
    <div id="navMenubd-example" class="navbar-menu" id="navbar-menu">
            <div class="navbar-start">
                <Link class="navbar-item"to="/">Home</Link>
                <Link class="navbar-item" to="/about">About</Link>
                <Link class="navbar-item" to="/demo">Demo</Link>
            </div>
          </div>
            </div>
        </nav>
    </header>
)
