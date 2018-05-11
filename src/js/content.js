import { h } from "hyperapp"
import { Link, Route, Switch, Redirect, location } from "@hyperapp/router"
import {Demo} from "./pages/demo"

export const Home = () => (
    <div>
        <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
            <div class="container">
            <h1 class="title">
                Cretink
            </h1>
            <h2 class="subtitle">
                Home
            </h2>
        </div>
        </div>
        </section>
        <div class="container">
        <p>準備中</p>
        <Link class="button is-info is-large is-rounded" to="/demo">DEMOページへ！</Link>
        </div>
    </div>
)

export const About = () => (
    <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Cretink
          </h1>
          <h2 class="subtitle">
            About
          </h2>
        </div>
      </div>
    </section>
    <div class="container">
        <p>準備中</p>
        <Link class="button is-info is-large is-rounded" to="/demo">DEMOページへ！</Link>
    </div>
    </div>
)
export const Content = () => (state,actions) => (
    <main class="content">
        <Route path="/" render={Home} />
        <Route path="/about" render={About} />
        <Route path="/demo" render={() => <Demo />} />
    </main>
)
