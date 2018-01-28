
import Bus from "engine/bus.js"


export default class Maestro {
    constructor(app, screen) {
        this.app = app
        this.view = app.view
        this.screen = screen

        // let textArea = document.createElement("textarea")
        // textArea.style.resize = "none"
        // textArea.style.position = "absolute"
        // textArea.style["z-index"] = 1
        // textArea.style.top = "100px"
        // textArea.style.left = "100px"
        // textArea.style.width = "300px"
        // textArea.style.height = "80px"
        // textArea.style.margin = "0px"
        // textArea.style.padding = "0px"
        // let textNode = document.createTextNode("Test.\ntest.")
        // textArea.appendChild(textNode)
        // screen.appendChild(textArea)

        this.bus = new Bus()
        this.bus.subscribe(this, {"myDude": this.myDude})
        this.bus.subscribe(this, {"myDude/myGal": this.myGal})
        this.bus.post("myDude", "something!?")
        this.bus.post("myDude/myGal", "something!!!")
        this.bus.unsubscribe(this, {"myDude": this.myDude})
        this.bus.post("myDude", "something...")
        this.bus.post("myDude/myGal", "something???")
    }

    myDude(signal, something) {
        console.log("myDude called. " + signal + " " + something)
    }

    myGal(signal, something) {
        console.log("myGal called. " + signal + " " + something)
    }
}
