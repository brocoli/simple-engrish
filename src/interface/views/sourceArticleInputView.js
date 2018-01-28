
import {getMaestro} from "index.js"

import DOMTextBox from "interface/input/domTextBox.js"
import SubmitButton from "interface/input/submitButton.js"



export default class SourceArticleInputView {
    constructor() {}

    start() {
        let maestro = getMaestro()

        this.domTextBox = new DOMTextBox(400, 200, 150, 1, "Please insert the article's name.")
        maestro.screen.appendChild(this.domTextBox.display)

        this.submitButton = new SubmitButton(400, 300, 100, 40)
        maestro.stage.addChild(this.submitButton)

        maestro.bus.post("app/interface/views/sourceArticleInputView/started")
    }

    stop() {
        this.domTextBox.display.remove()
        delete this.domTextBox


        delete this.submitButton

        maestro.bus.post("app/interface/views/sourceArticleInputView/stopped")
    }
}
