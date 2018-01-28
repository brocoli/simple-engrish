
import {getMaestro} from "index.js"



export default class DOMTextBox {
    constructor(x, y, width, rows) {
        this.display = document.createElement("textarea")
        this.display.setAttribute("type", "text")
        this.display.readOnly = true

        let style = this.display.style
        style.resize = "none"
        style.position = "absolute"
        style["z-index"] = 1
        style.top = y + "px"
        style.left = (x - width/2) + "px"
        style.width = width + "px"
        style.margin = "0px"
        style.padding = "0px"

        this.display.rows = rows

        this.textNode = document.createTextNode("")
        this.display.appendChild(this.textNode)

        this.setText("")
    }

    setText(text) {
        this.display.value = text
    }
}
