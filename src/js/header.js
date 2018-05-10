import { h } from "hyperapp"
import { Link, Route, Switch, Redirect, location } from "@hyperapp/router"

export const Header = () => (
    <header>
        <nav class="navbar is-transparent is-light">
        <div class="container">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
        <h1 class="title">Cretink</h1>
    </a>
    <div class="navbar-burger burger" data-target="navMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div  id="navMenu"  class="navbar-menu">
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