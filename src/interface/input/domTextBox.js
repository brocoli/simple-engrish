
export default class DOMTextBox {
    constructor(x, y, width, rows, text) {
        this.display = document.createElement("textarea")

        let style = this.display.style
        style.resize = "none"
        style.position = "absolute"
        style["z-index"] = 1
        style.top = y + "px"
        style.left = (x - width/2) + "px"
        style.width = width + "px"
        style.rows = rows
        style.margin = "0px"
        style.padding = "0px"

        this.textNode = document.createTextNode(text)
        this.display.appendChild(this.textNode)
    }

    setText(text) {
        this.textNode.text = text
    }
}
