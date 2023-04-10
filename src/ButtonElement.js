import { html, css, LitElement } from 'lit';
import styles from './styles';

export class ButtonElement extends LitElement {
  static styles = styles;

  static properties = {
    counter: { type: Number },
    newString: { type: String, attribute: 'new-string' },// create attribute 'new-prop'
    array: { type: Array, },
    splitter: { type: String, value: ' ' },
    joinner: {type: String}
  };


  constructor() {
    super();
    this.counter = 5;
    this.newString = '';
    this.splitter = ' ';
    this.joinner=','
  }

  _Split() {
    console.log(this.splitter, this.newString);
    this.array = this.newString.split(this.splitter);
    console.log(this.array)
  }

  inputChange(event) {
    console.log(event.target.value);
  }

  _Join() {
    this.newString = this.array?.join(',');
  }

  render() {
    return html`
    <div class='button-div'>
      <button class='button' @click=${this._Split}>Split string </button>
     
      <button class='button' @click=${this._Join}>Join array </button>
      <input type='text' @input=${this.inputChange}/>
    </div>
    <div class='flex'>
    <div>String: ${this.newString}</div>
    <div>Array result: ${this.array?.map((item, index) => (
      html`
      <div>${index}: ${item}</div>
    `
    ))}</div>
  </div>

  <slot></slot>
    `;
  }
}
