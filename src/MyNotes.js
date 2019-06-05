import { LitElement, html, css } from 'lit-element';

export class MyNotes extends LitElement {
	static get styles() {
		return css`
      :host {
        background: lightblue;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;

      }

    `;
	}

	render() {
        return html`
        <slot></slot>
      
    `;
	}
}
