import { ScryfallCard } from '../scryfall';
import { html } from 'lit-element';
import { inner } from './inner';

export function layoutNormal(card: ScryfallCard) {
    return html`
        <div class="card_frame">
            <div class="card_inner">
                    ${inner(card)}
            </div>
        </div>
    `;
}
