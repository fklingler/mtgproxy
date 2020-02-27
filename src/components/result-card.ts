import { LitElement, html, customElement, property } from 'lit-element';
import { ScryfallCard } from '../scryfall/ScryfallCard';

@customElement('mtgp-result-card')
class ResultCardElement extends LitElement {
    @property({ type: String })
    name: string;

    @property({ type: Number })
    count: number;

    @property({ type: Boolean })
    loading = true;

    @property({ type: Object })
    card: ScryfallCard;

    render() {
        const items: unknown[] = [];
        for (let i = 0; i < this.count; i++) {
            if (this.loading) {
                items.push(html`<p>Loading...</p>`);
            } else {
                items.push(html`<p>${this.card.name} — ${this.card.mana_cost}<br>${this.card.type_line}</p>`);
            }
        }

        return html`${items}`;
    }

    updated(changedProperties: Map<PropertyKey, unknown>): void {
        super.updated(changedProperties);

        if (changedProperties.has('name')) {
            this.fetchCard();
        }
    }

    async fetchCard() {
        this.loading = true;

        const response = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(this.name)}`);
        this.card = await response.json();

        this.loading = false;
    }
}
