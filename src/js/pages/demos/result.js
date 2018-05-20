import {h} from "hyperapp"
import {tags} from "./choice"

const ShowIdea = () => (state,actions) => {
    if (state.is_loaded == false){
        actions.loading()
        return (
            <div class="sk-fading-circle">
                <div class="sk-circle1 sk-circle"></div>
                <div class="sk-circle2 sk-circle"></div>
                <div class="sk-circle3 sk-circle"></div>
                <div class="sk-circle4 sk-circle"></div>
                <div class="sk-circle5 sk-circle"></div>
                 <div class="sk-circle6 sk-circle"></div>
                <div class="sk-circle7 sk-circle"></div>
                     <div class="sk-circle8 sk-circle"></div>
                 <div class="sk-circle9 sk-circle"></div>
                 <div class="sk-circle10 sk-circle"></div>
                <div class="sk-circle11 sk-circle"></div>
                <div class="sk-circle12 sk-circle"></div>
            </div>
        )
    }
    else{
        let choice_tags = tags
        let index = choice_tags.indexOf(state.selectedTag)
        choice_tags.splice(index,index)
        let first_idea = [Math.floor(Math.random() * choice_tags.length),Math.floor(Math.random() * choice_tags.length)]
        let second_idea = [Math.floor(Math.random() * choice_tags.length),Math.floor(Math.random() * choice_tags.length)]
        let third_idea = [Math.floor(Math.random() * choice_tags.length),Math.floor(Math.random() * choice_tags.length)]
        return (
            <div>
            <h5>※これはまだ、完成イメージなので、ランダムにタグを表示しています。</h5>
                <div class="card">
                    <header class="card-header">
                    <p class="card-header-title">
                    一番人気になりそうなアイデア
                    </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <div class="columns">
                                <div class="column"><span class="tag is-large">{state.selectedTag}</span></div> 
                                {
                                    first_idea.map(i => (
                                        <div class="column"><span class="tag is-large is-success">{choice_tags[i]}</span></div> 
                                    ))
                                }
                            </div>
                            <p class="is-size-4">を組み合わせたWebサービス</p>
                        </div>
                    </div>
                </div>
                <div class="card">                 
                    <header class="card-header">
                    <p class="card-header-title">
                        二番目に人気になりそうなアイデア
                    </p>    
                    </header>
                    <div class="card-content">
                        <div class="content"> 
                            <div class="columns">
                                <div class="column"><span class="tag is-large">{state.selectedTag}</span></div> 
                                {
                                    second_idea.map(i => (
                                        <div class="column"><span class="tag is-large is-success">{choice_tags[i]}</span></div> 
                                    ))
                                }
                            </div>
                            <p class="is-size-4">を組み合わせたWebサービス</p>
                        </div>
                    </div>
                </div>
                <div class="card">  
                    <header class="card-header">
                    <p class="card-header-title">
                        三番目に人気になりそうなアイデア
                    </p>    
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <div class="columns">
                                <div class="column"><span class="tag is-large">{state.selectedTag}</span></div> 
                                {
                                    third_idea.map(i => (
                                        <div class="column"><span class="tag is-large is-success">{choice_tags[i]}</span></div> 
                                    ))
                                }
                            </div>
                            <p class="is-size-4">を組み合わせたWebサービス</p>
                        </div>
                    </div>
                </div>
                <h2>結果をツイート</h2>
            <a href="https://twitter.com/share" class="twitter-share-button" data-show-count="false"  data-text={"【DEMO】Cretink of WebServiceを使って 「" + state.selectedTag + "」カテゴリのWebサービスのアイデアを提案してもらったよ #CretinkofWebService"}  data-lang="ja" data-url="http://cretink.tk" data-size="large">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
        )
    }
}
export const ResultIdea = () => (state,actions) => (
    <div>
    <p><span class="tag is-info is-large">{state.selectedTag}</span>の人気になるWebサービスのアイデアは.....</p>
    <ShowIdea />    
    </div>
)
