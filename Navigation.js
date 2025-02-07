export default class Navigation {

    #settings;

    constructor(width, height, tileSize, genFn) {
        this.#settings = {width, height, tileSize};
        this.#createInputs(genFn);
    }

    get width() { return this.#settings.width }
    get height() { return this.#settings.height }
    get tileSize() { return this.#settings.tileSize }
    get all() { return Object.assign({}, this.#settings) }

    #input([name, val]) {
        let block = document.createElement('div');
        block.innerHTML = `
            <div>${name}</div>
            <input type="number" value="${val}"/>`;
        block.querySelector('input').addEventListener('input', ({target}) => {
            if (+ target.value < 1) return target.value = 1;
            this.#settings[name] = + target.value;
        })
        return block;
    }

    #createInputs(genFn) {
        let root = document.querySelector('.settings_body');
        for (let setting of Object.entries(this.#settings))
            root.append(this.#input(setting))
        let btn = document.createElement('button');
        btn.innerHTML = 'Generate';
        btn.onclick = genFn;
        root.append(btn);
        document.querySelector('.settings_close').onclick = () => {
            root.classList.toggle('closed');
        }
    }

}