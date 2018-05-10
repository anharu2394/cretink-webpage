import { h } from "hyperapp"
import { Link, Route, Switch, Redirect, location } from "@hyperapp/router"
import {Demo} from "./pages/demo"

export const Home = () => (
    <div>
        <h1>Home</h1>
        <p>準備中</p>
        <Link class="button is-info is-large is-rounded" to="/demo">DEMOページへ！</Link>
    </div>
)

export const About = () => (
    <div>
        <h1>About</h1>
        <p>準備中</p>
        <Link class="button is-info is-large is-rounded" to="/demo">DEMOページへ！</Link>
    </div>
)
export const Content = () => (
    <main class="content container">
        <Route path="/" render={Home} />
        <Route path="/about" render={About} />
        <Route path="/demo" render={Demo} />
    </main>
)
