
import {Application, utils} from 'pixi.js';  // also brings PIXI into the global scope

let type = "WebGL"
if(!utils.isWebGLSupported()){
  type = "canvas"
}

export let screen = document.createElement("div");
screen.style.position = "relative";  // Allows for absolute positioning of textarea DOM
document.body.appendChild(screen);   // elements on top of the PixiJS canvas.


export let app = new Application({width: 800, height: 600});
app.view.style["z-index"] = 0;
app.view.style.position = "absolute";
screen.appendChild(app.view);



// let textArea = document.createElement("textarea");
// textArea.style.resize = "none";
// textArea.style.position = "absolute";
// textArea.style["z-index"] = 1;
// textArea.style.top = "100px";
// textArea.style.left = "100px";
// textArea.style.width = "300px";
// textArea.style.height = "80px";
// textArea.style.margin = "0px";
// textArea.style.padding = "0px";
// let textNode = document.createTextNode("Test.\ntest.");
// textArea.appendChild(textNode);
// screen.appendChild(textArea);
