
import {getMaestro} from "index.js"

import DOMTextField from "interface/input/domTextField.js"
import DOMTextBox from "interface/graphics/domTextBox.js"
import SubmitButton from "interface/input/submitButton.js"



export default class SourceArticleInputView {
    constructor() {}

    start() {
        let maestro = getMaestro()


        this.titleTextField = new DOMTextField(
            140, 100, 250,
            "Input article title here...",
            "app/interface/views/sourceArticleTitleIsEdited",
            "app/interface/views/sourceArticleTitleIsSubmit"
        )
        maestro.screen.appendChild(this.titleTextField.display)

        this.submitButton = new SubmitButton(
            300, 108, 50, 17,
            "app/interface/views/sourceArticleTitleIsSubmit"
        )
        maestro.stage.addChild(this.submitButton)

        this.excerptTextBox = new DOMTextBox(265, 120, 500, 10)
        maestro.screen.appendChild(this.excerptTextBox.display)


        maestro.bus.subscribe(this, {
            "app/model/state/sourceArticle": this.updateSourceArticleDisplay,
        })


        maestro.bus.publish("app/interface/views/sourceArticleInputView/started")
    }

    stop() {
        this.titleTextField.display.remove()
        delete this.titleTextField

        this.submitButton.parent.removeChild(this.submitButton)
        delete this.submitButton

        maestro.bus.publish("app/interface/views/sourceArticleInputView/stopped")
    }

    updateSourceArticleDisplay(signal, sourceArticle) {
        this.titleTextField.setText(sourceArticle.title)
        this.excerptTextBox.setText(sourceArticle.excerpt)
    }
}
