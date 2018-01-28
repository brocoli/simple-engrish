
export default class DOMTextField {
    constructor(x, y, width, text) {
        this.display = document.createElement("input")
        this.display.setAttribute("type", "text")
        this.display.setAttribute("value", text)

        let style = this.display.style
        style.resize = "none"
        style.position = "absolute"
        style["z-index"] = 1
        style.top = y + "px"
        style.left = (x - width/2) + "px"
        style.width = width + "px"
        style.margin = "0px"
        style.padding = "0px"
    }

    setText(text) {
        this.display.setAttribute("value", text)
    }
}
