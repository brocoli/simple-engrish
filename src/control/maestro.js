
import AppStateMachine from "control/appStateMachine.js"
import Bus from "control/bus.js"

import SourceArticleInputView from "interface/views/sourceArticleInputView.js"



export default class Maestro {
    constructor(app, screen, bus) {
        this.app = app
        this.stage = app.stage
        this.screen = screen
        this.bus = bus

        this.appStateMachine = new AppStateMachine()

        this.components = {
            sourceArticleInputView: new SourceArticleInputView(),
        }
    }

    start() {
        this.components.sourceArticleInputView.start()

        // effectively start the application
        this.appStateMachine.start(this)
    }
}
