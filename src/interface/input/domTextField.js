
import {getMaestro} from "index.js"



export default class DOMTextField {
    constructor(x, y, width, placeholder, editSignal, submitSignal) {
        this.editSignal = editSignal
        this.submitSignal = submitSignal

        this.display = document.createElement("input")
        this.display.setAttribute("type", "text")
        this.display.placeholder = placeholder

        let style = this.display.style
        style.resize = "none"
        style.position = "absolute"
        style["z-index"] = 1
        style.top = y + "px"
        style.left = (x - width/2) + "px"
        style.width = width + "px"
        style.margin = "0px"
        style.padding = "0px"

        this.setText("")

        this.display.addEventListener("keydown", (function(event) {
            if (event.key === "Enter") {
                let maestro = getMaestro()

                event.preventDefault()
                maestro.bus.publish(this.submitSignal)
            }
        }).bind(this))

        this.display.addEventListener("input", (function(event) {
            let maestro = getMaestro()

            event.preventDefault()
            maestro.bus.publish(this.editSignal, this.display.value)
        }).bind(this))
    }

    setText(text) {
        this.display.value = text
    }
}
