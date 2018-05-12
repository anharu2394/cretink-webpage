import { h } from "hyperapp"
import { Link, Route, Switch, Redirect, location } from "@hyperapp/router"
import {Demo} from "./pages/demo"

export const Home = () => (
    <div>
        <section class="hero is-large is-primary is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
            <h1 class="title">
    Cretink of WebServiceはWebサービスのアイデアを提案してくれるAIです。
            </h1>
        </div>
        </div>
        </section>
        <section class="hero is-medium is-info is-bold">
        <div class="hero-body">
            <div class="container">
            <h2 class="title has-text-centered">
                Cretink of WebServiceの完成イメージを作成しました。
            </h2>
            <div class="buttons has-addons is-centered">
                <Link class="button is-info is-large is-rounded is-inverted" to="/demo">完成イメージへ！</Link>
            </div>
        </div>
        </div>
        </section>
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
