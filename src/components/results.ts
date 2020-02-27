import { customElement, html, LitElement, property } from 'lit-element';
import './results-card';

type Cards = Array<{ name: string, count: number }>;

@customElement('mtgp-results')
class ResultsElement extends LitElement {
    @property({ type: Array })
    cards: Cards = [];

    render() {
        return html`${this.cards.map(card =>
            html`<mtgp-results-card name="${card.name}" count="${card.count}"></mtgp-results-card>`
        )}`;
    }

    constructor() {
        super();
        const queryParams = new URLSearchParams(window.location.search);
        const cardsInput = queryParams.get('cards');

        this.cards = this.splitCardsInput(cardsInput);
    }

    splitCardsInput(input: string): Cards {
        return input.match(/[^\r\n]+/g).map(line => {
            const regex = /^((?<count>[\d]+)x?\s)?(?<name>.+)/gi;
            const match = regex.exec(line.trim());

            if (!match?.groups) { return void 0; }

            return {
                count: parseInt(match.groups.count ?? '1', 10),
                name: match.groups.name
            };
        }).filter(match => !!match);
    }
}
