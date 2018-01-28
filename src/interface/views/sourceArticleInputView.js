
import {getMaestro} from "index.js"

import DOMTextField from "interface/input/domTextField.js"
import SubmitButton from "interface/input/submitButton.js"



export default class SourceArticleInputView {
    constructor() {}

    start() {
        let maestro = getMaestro()

        this.domTextField = new DOMTextField(200, 100, 250, "Please insert the article's name.")
        maestro.screen.appendChild(this.domTextField.display)

        this.submitButton = new SubmitButton(200, 140, 100, 40)
        maestro.stage.addChild(this.submitButton)

        maestro.bus.post("app/interface/views/sourceArticleInputView/started")
    }

    stop() {
        this.domTextField.display.remove()
        delete this.domTextField

        this.submitButton.parent.removeChild(this.submitButton)
        delete this.submitButton

        maestro.bus.post("app/interface/views/sourceArticleInputView/stopped")
    }
}
