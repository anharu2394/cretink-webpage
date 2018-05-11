import {h} from "hyperapp"
import {state,actions} from "./../index"
import {ChoiceTag} from "./demos/choice"
import {ResultIdea} from "./demos/result"

const CretinkWebserviceDemo = () => (state,actions) => {
    if (state.step == 0){
        return (
            <ChoiceTag />
        )
    }
    else if (state.step == 1){
        return (
            <ResultIdea />
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
                        Cretink of WebServiceの完成イメージ
                    </h1>
                    <h2 class="subtitle">
                        人気になるWebサービスのアイデアを提案してくれます。
                    </h2>
                </div>
            </div>
        </section>
        <div class="container">
            <CretinkWebserviceDemo/>
        </div>
    </div>
)
