import { LitElement, html, css } from 'lit-element';

export class MyNote extends LitElement {
    
    static get properties() {
        return {
			text: { type: String }
			
		};

    }
    
    static get styles() {
		return css`
      :host {
        background: khaki;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        margin: 10px;
        width: 250px;
        height: 250px;
      }

      :host(:hover) {
        box-shadow: 2px 2px 5px #A9A9A9;
      }

      button {
        width: 25px;
        height: 25px;
        position: relative;
        left: 225px;
        background: khaki;
      }      
    `;
  }
  
  onClickFind() {
    this.parentNode.removeChild(this);
    return false;
	}

	render() {
    return html`
      <button @click=${this.onClickFind}>
        &cross;
      </button>
        <div>${this.text}</div>
       
    `
	}
}

window.customElements.define('my-note', MyNote);