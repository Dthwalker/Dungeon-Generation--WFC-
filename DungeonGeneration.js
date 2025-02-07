import Navigation from "./Navigation.js";

class DungeonGeneration {

    constructor() {
        this.settings = new Navigation(10, 10, 10, this.generate.bind(this));
        this.data = this.createData();
        this.tilemap = new Image();
        new Promise(res => {
            this.tilemap.onload = () => res('good');
            this.tilemap.src = './tilemap.png';
        }).then(this.init.bind(this), console.log);
    }

    init() {
        console.log(this);
    }

    createData() {
        let {width, height, tileSize} = this.settings.all;
        
    }

    generate() {
        console.log(this);
    }

}

new DungeonGeneration();