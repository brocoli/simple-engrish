
import lodash from "lodash"


export default class Bus {
    constructor() {
        this.listeners = {}
    }

    subscribe(object, listenerDefinition) {
        for (let [signal, listener] of Object.entries(listenerDefinition)) {
            if (!(signal in this.listeners)) {
                this.listeners[signal] = new Map()
            }
            if (!(this.listeners[signal].has(object))) {
                this.listeners[signal].set(object, new Set())
            }

            this.listeners[signal].get(object).add(listener)
        }
    }

    unsubscribe(object, listenerDefinition) {
        for (let [signal, listener] of Object.entries(listenerDefinition)) {
            if (!(signal in this.listeners)) {
                continue
            }
            if (!(this.listeners[signal].has(object))) {
                continue
            }

            this.listeners[signal].get(object).delete(listener)

            if (lodash.isEmpty(this.listeners[signal].get(object))) {
                this.listeners[signal].delete(object)
                if (lodash.isEmpty(this.listeners[signal])) {
                    delete this.listeners[signal]
                }
            }
        }
    }

    post(tieredSignal) {
        let signalBits = tieredSignal.split("/")

        let signal = null
        let triggeredPacks = []

        for (let signalBit of signalBits) {
            if (signal == null) {
                signal = signalBit
            } else {
                signal = signal + "/" + signalBit
            }

            if (!(signal in this.listeners)) {
                continue
            }

            for (let [object, listenersSet] of this.listeners[signal]) {
                for (let listener of listenersSet) {
                    triggeredPacks.push([object, listener])
                }
            }
        }

        for (let pack of triggeredPacks) {
            pack[1].apply(pack[0], arguments)
        }
    }
}