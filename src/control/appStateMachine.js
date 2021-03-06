
import "lodash"

import {BehavioralFsm} from "machina"



export default class AppStateMachine extends BehavioralFsm {
	constructor() {
        super({
            initialize: function( options ) {
                console.log("AppStateMachine initializing...")
            },

            initialState: "uninitialized",

            states: {
                uninitialized: {},
                sourceArticleInput: {
                    // _onEnter is a special handler that is invoked
                    // immediately as the FSM transitions into the new state
                    _onEnter: function(maestro) {
                        console.log("AppStateMachine entering sourceArticleInput state...")

                        maestro.components.sourceArticleInputInterpreter.start()
                        maestro.components.sourceArticleInputView.start()

                        maestro.bus.publish("app/appState/sourceArticleInput/entered")
                        console.log("AppStateMachine entered sourceArticleInput state.")
                    },
                    _onExit: function(maestro) {
                        console.log("AppStateMachine leaving sourceArticleInput state...")

                        maestro.components.sourceArticleInputView.stop()
                        maestro.components.sourceArticleInputInterpreter.stop()

                        maestro.bus.publish("app/appState/sourceArticleInput/exited")
                        console.log("AppStateMachine left sourceArticleInput state.")
                    },
                },
            },
        })
	}

    bootstrap(maestro) {
        this.initialState = "sourceArticleInput"
        this.transition(maestro, this.initialState)
    }
}
