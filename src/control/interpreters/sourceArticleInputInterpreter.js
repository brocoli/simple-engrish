
import {getMaestro} from "index.js"

import WikipediaExcerptAPI from "control/interpreters/wikipediaExcerptAPI"



export default class SourceArticleInputInterpreter {
    constructor() {}

    start() {
        let maestro = getMaestro()

        maestro.bus.subscribe(this, {
            "app/interface/views/sourceArticleTitleIsEdited": this.inputSourceArticle,
            "app/interface/views/sourceArticleTitleIsSubmit": this.requestArticleExcerpt,
        })
    }

    stop() {
        let maestro = getMaestro()

        maestro.bus.unsubscribe(this, {
            "app/interface/views/sourceArticleTitleIsEdited": this.inputSourceArticle,
            "app/interface/views/sourceArticleTitleIsSubmit": this.requestArticleExcerpt,
        })
    }

    inputSourceArticle(signal, value) {
        let maestro = getMaestro()
        maestro.components.state.sourceArticle.setTitle(value)
    }

    requestArticleExcerpt(signal) {
        let maestro = getMaestro()
        let sourceArticle = maestro.components.state.sourceArticle

        let promise = WikipediaExcerptAPI.requestExcerpt(sourceArticle.title)
        promise.then(
            excerpt => sourceArticle.setExcerpt(excerpt),
            error => console.log(error)
        )
    }
}