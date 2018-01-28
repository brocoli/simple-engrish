
import {getMaestro} from "index.js"



export default class SourceArticleToSubmit {
    constructor() {
        this.setTitle("")
        this.setExcerpt("")
    }

    setTitle(title) {
        let maestro = getMaestro()

        this.title = title
        maestro.bus.publish("app/model/state/sourceArticle", this)
    }

    setExcerpt(excerpt) {
        let maestro = getMaestro()

        this.excerpt = excerpt
        maestro.bus.publish("app/model/state/sourceArticle", this)
    }
}