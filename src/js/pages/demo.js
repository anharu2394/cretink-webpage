import {h} from "hyperapp"
import {state,actions} from "./../index"
import {ChoiceTag} from "./demos/choice"

const CretinkWebserviceDemo = () => (state,actions) => {
    if (state.step == 0){
        return (
            <ChoiceTag />
        )
    }
    else if (state.step == 1){
        return (
            <div>1</div>
        )
    }
    else {
        return (
            <div>non</div>
        )
    }
}
export const Demo = () => (state,actions) => (
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Demo
                    </h1>
                    <h2 class="subtitle">
                        Cretink of Webserviceの完成イメージ
                    </h2>
                </div>
            </div>
        </section>
        <CretinkWebserviceDemo/>
    </div>
)
