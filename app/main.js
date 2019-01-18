import * as PIXI from 'pixi.js';
import style from '../css/skeleton.css'
import style2 from '../css/normalize.css'
import bunnyPng from '../images/bunny.png'

let demo = {
    start : function(viewTarget)
    {
        var app = new PIXI.Application({
            autoResize: true,
            resolution: devicePixelRatio,
            backgroundColor: 0xFFFFFF,
        });

        viewTarget.appendChild(app.view);

        // create a new Sprite from an image path
        var bunny = PIXI.Sprite.fromImage(bunnyPng)

        let resize = () => {
            // Get the p
	        const parent = app.view.parentNode;
   
	        // Resize the renderer
            app.renderer.resize(parent.clientWidth, parent.clientWidth * 0.66);
            
            // You can use the 'screen' property as the renderer visible
            // area, this is more useful than view.width/height because
            // it handles resolution
            bunny.position.set(app.screen.width / 2, app.screen.height / 2);
        }

        window.addEventListener('resize', resize);

        resize();
            
        // center the sprite's anchor point
        bunny.anchor.set(0.5);

        // move the sprite to the center of the screen
        bunny.x = app.screen.width / 2;
        bunny.y = app.screen.height / 2;

        app.stage.addChild(bunny);

        // Listen for animate update
        app.ticker.add(function(delta) {
        // just for fun, let's rotate mr rabbit a little
        // delta is 1 if running at 100% performance
        // creates frame-independent transformation
        bunny.rotation += 0.1 * delta;
        });
    }
}

demo.start(document.getElementById('pixi'));
