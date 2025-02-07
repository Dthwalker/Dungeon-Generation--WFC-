export default class Navigation {

    #settings;

    constructor(width, height, tileSize) {
        this.#settings = {width, height, tileSize};
        this.#createInputs();
    }

    get width() { return this.#settings.width }
    get height() { return this.#settings.height }
    get tileSize() { return this.#settings.tileSize }

    #input([name, val]) {
        console.log(name, val)
        let block = document.createElement('div');
        block.innerHTML = `
            <div>${name}</div>
            <input type="number" value="${val}"/>`
        return block;
    }

    #createInputs() {
        let root = document.querySelector('.settings');
        for (let setting of Object.entries(this.#settings))
            root.append(this.#input(setting))
        let btn = document.createElement('button');
        btn.innerHTML = 'Generate';
        root.append(btn);
    }

}