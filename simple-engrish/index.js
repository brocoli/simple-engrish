
let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

let mainContainer = document.createElement("div");
mainContainer.style.position = "relative";  // Allows for absolute positioning of textarea DOM
document.body.appendChild(mainContainer);   // elements on top of the PixiJS canvas.


let app = new PIXI.Application({width: 800, height: 600});
app.view.style["z-index"] = 0;
app.view.style.position = "absolute";
mainContainer.appendChild(app.view);





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
// mainContainer.appendChild(textArea);