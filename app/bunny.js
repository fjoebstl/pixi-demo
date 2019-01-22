import * as PIXI from 'pixi.js';
import bunnyPng from '../images/bunny.png'

export const createBunny = () => { return {
    bunny : PIXI.Sprite.fromImage(bunnyPng),
    rotationModifier : 1,
    x : 0,
    y : 0,

    init(app, {x = 0, y = 0} = {}) {         
        this.x = x;
        this.y = y;
        this.bunny.tint = 0x555555 + Math.random() * 0xAAAAAA;
        this.bunny.anchor.set(0.5);
        this.bunny.interactive = true;
        this.bunny.buttonMode = true;
        this.bunny.on('pointerdown', () => { this.rotationModifier*=-1 });
        
        app.stage.addChild(this.bunny);          
        app.ticker.add((delta) => this.update(delta));
    },
    
    updateCenter({x, y}) {
        this.bunny.position.set(x + this.x, y + this.y);
    },

    update(delta) {
        this.bunny.rotation += 0.05 * delta * this.rotationModifier;
    }
}};