import style from '../css/skeleton.css'
import style2 from '../css/normalize.css'
import * as PIXI from 'pixi.js';
import { createBunny }  from './bunny';

const app = new PIXI.Application({
    autoResize: true,
    resolution: devicePixelRatio,
    backgroundColor: 0xFFFFFF,
});

document
    .getElementById('pixi')
    .appendChild(app.view);

const bunnys = [ createBunny(), createBunny(), createBunny() ];
const center = () => { return { x: app.screen.width / 2, y: app.screen.height / 2} };
const resize = () => { 
    const parent = app.view.parentNode;   
    app.renderer.resize(parent.clientWidth, parent.clientWidth * 0.66);
    
    bunnys.map(b => b.updateCenter(center()));
};

bunnys[0].init(app, {x: 0, y: 0});
bunnys[1].init(app, {x: 50, y: 50});
bunnys[2].init(app, {x: -50, y: 50});

window.addEventListener('resize', resize);
resize();