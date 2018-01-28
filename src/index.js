
import {Application, utils} from "pixi.js"  // also brings PIXI into the global scope
import Maestro from "./control/maestro.js"

let type = "WebGL"
if(!utils.isWebGLSupported()) {
  	type = "canvas"
}

let screen = document.createElement("div")
screen.style.position = "relative"  // Allows for absolute positioning of textarea DOM
document.body.appendChild(screen)   // elements on top of the PixiJS canvas.


let app = new Application({width: 800, height: 600})
app.view.style["z-index"] = 0
app.view.style.position = "absolute"
screen.appendChild(app.view)


export let maestro = new Maestro(app, screen)
