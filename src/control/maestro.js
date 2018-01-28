
import AppStateMachine from "control/appStateMachine.js"
import Bus from "control/bus.js"

import SourceArticleInputInterpreter from "control/interpreters/sourceArticleInputInterpreter.js"
import SourceArticleInputView from "interface/views/sourceArticleInputView.js"
import SourceArticle from "model/state/sourceArticle.js"



export default class Maestro {
    constructor(app, screen, bus) {
        this.app = app
        this.stage = app.stage
        this.screen = screen
        this.bus = bus

        this.appStateMachine = new AppStateMachine()
    }

    instantiateComponents() {
        this.components = {
            sourceArticleInputView: new SourceArticleInputView(),
            sourceArticleInputInterpreter: new SourceArticleInputInterpreter(),
            state: {
                sourceArticle: new SourceArticle(),
            },
        }
    }

    start() {
        this.bus.subscribe("app", this.appDebugListener)

        this.appStateMachine.bootstrap(this)
    }

    stop() {
        this.bus.unsubscribe("app", this.appDebugListener)
    }

    appDebugListener(signal) {
        console.log("[APP SIGNAL] " + signal)
    }
}
