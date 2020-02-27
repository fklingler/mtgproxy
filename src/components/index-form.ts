import { css, customElement, html, LitElement } from 'lit-element';

@customElement('mtgp-index-form')
class IndexFormElement extends LitElement {
    static get styles() {
        return css`
        * {
            font-family: 'Open Sans', sans-serif;
            margin: 0 0 1em;
            padding: 0;
            border: 0;
        }
        
        textarea {
            font-family: monospace;
            text-align: left;
            border: 1px solid black;
            display: block;
            font-size: 1em;
        }
        
        .cards {
            width: 100%;
            height: 20em;
        }
        
        button[type="submit"] {
            padding: 0.5em;
            font-size: 2em;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        `;
    }

    render() {
        return html`
        <form action="results.html" method="get">
            <textarea name="cards" class="cards"></textarea>
            <button type="submit">Get the proxies!</button>
        </form>
        `;
    }
}
