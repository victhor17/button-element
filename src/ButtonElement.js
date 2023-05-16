import { html, LitElement } from 'lit';
import styles from './styles.js';

export class ButtonElement extends LitElement {
  static styles = styles;

  static properties = {
    counter: { type: Number },
    newString: {
      type: String,
      attribute: 'new-string',
    }, // create attribute 'new-prop'
    array: { type: Array },
    splitter: { type: String },
    joinner: { type: String },
    showBoolean: {
      type: Boolean,
    },
    extraString: {
      type: String,
      attribute: 'extra-string',
    },
    attrArray: {
      attribute: 'attr-array',
      type: Array,
    },
    attrObj: {
      type: Object,
      attribute: 'attr-obj',
    },
    pokeO: {
      type: Object
    }
  };

  constructor() {
    super();
    this.counter = 5;
    this.newString = '';
    this.splitter = ' ';
    this.joinner = ',';
    this.showBoolean = false;
    this.extraString = '';
    this.pokeO = {};
    this.attrObj = {};
    this.attrArray = {};
  }

  _Split() {
    this.newString = this.newString.concat(this.extraString);
    this.array = this.newString.split(this.splitter);
  }

  inputChange(event) {
    this.extraString = event.target.value;
  }

  _Join() {
    this.newString = this.array?.join(this.joinner);
  }

  toggleBoolean() {
    this.showBoolean = !this.showBoolean;
  }

  render() {
    return html`
      <div class="button-div">
        <button class="button" @click=${this._Split}>Split string</button>
        <button class="button" @click=${this._Join}>Join array</button>
        <input
          type="text"
          @input=${this.inputChange}
          .value=${this.extraString}
        />
        <button class="button" @click=${this.toggleBoolean}>
          Show other xd
        </button>
        ${this.showBoolean
          ? html`<div>mostrando xd</div>`
          : html`<div>no mostrando xd</div>`}
      </div>
      <div class="flex">
        <div>String: ${this.newString}</div>
        <br />
        <div>
          haciendo map del array
          ${this.array?.map(
            (item, index) => html` <div>${index}: ${item}</div> `
          )}
        </div>
      </div>
      <slot></slot>
    `;
  }
}
