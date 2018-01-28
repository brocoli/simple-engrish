
import {Container, Sprite, Texture} from "pixi.js"

import {getMaestro} from "index.js"



export default class SubmitButton extends Container {
    constructor(x, y, width, height) {
        super()

        this.x = x
        this.y = y

        this.bg = Sprite.from(Texture.WHITE.clone())
        this.bg.anchor.set(0.5)
        this.bg.width = width
        this.bg.height = height
        this.bg.tint = 0xFFFFFF

        this.interactive = true
        this.buttonMode = true

        this.on('pointerdown', this.onButtonDown)
            .on('pointerup', this.onButtonUp)
            .on('pointerupoutside', this.onButtonUp)
            .on('pointerover', this.onButtonOver)
            .on('pointerout', this.onButtonOut)

        console.log(this)
        this.addChild(this.bg)
    }

    onButtonDown() {
        if (this.isOver) {
            this.bg.tint = 0xFF0000
            this.isDown = true
            this.shouldDownOnOver = true
        }
    }

    onButtonUp() {
        if (this.isDown) {
            this.bg.tint = 0xFFCCCC

            let maestro = getMaestro()
            maestro.bus.post("app/interface/input/sourceArticleInputView/stopped")

            this.isDown = false
        }
        this.shouldDownOnOver = false
    }

    onButtonOver() {
        if (this.shouldDownOnOver) {
            this.bg.tint = 0xFF0000
            this.isDown = true
        } else {
            this.bg.tint = 0xFFCCCC
        }
        this.isOver = true
    }

    onButtonOut() {
        this.bg.tint = 0xFFFFFF
        this.isDown = false
        this.isOver = false
    }
}