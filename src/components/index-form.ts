import { LitElement, html, customElement } from 'lit-element';

@customElement('mtgp-index-form')
class IndexFormElement extends LitElement {
    render() {
        return html`
            <form action="/results.html" method="get">
            <textarea name="cards"></textarea>
            <input type="submit" value="Get the proxies!">
            </form>
        `;
    }
}
