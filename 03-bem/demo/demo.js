class ColorViewer extends HTMLElement {
    static get observedAttributes() {
        return ['color'];
    }

    constructor () {
        super();
    }

    connectedCallback() {
        this._colorInputElement = document.createElement('input');
        this._colorViewElement = document.createElement('div');
        this._pickColor();
        this.appendChild(this._colorInputElement);
        this.appendChild(this._colorViewElement);

        this._colorInputElement.addEventListener('keyup', this._onInputChange.bind(this));
    }

    _onInputChange () {
        this.setAttribute('color', this._colorInputElement.value);
    }

    _pickColor() {
        this._color = this.getAttribute('color') || '#000';

        this._colorInputElement.setAttribute('type', 'text');
        this._colorInputElement.setAttribute('value', this._color);

        this._colorViewElement.style.background = this._color;
    }

    attributeChangedCallback() {
        this._pickColor();
    }
};

customElements.define('color-viewer', ColorViewer);