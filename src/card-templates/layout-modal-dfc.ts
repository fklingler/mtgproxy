import { ScryfallCard } from '../scryfall';
import { html } from 'lit-element';
import { inner } from './inner';

export function layoutModalDfc(card: ScryfallCard) {
    if (card.card_faces?.length != 2) { throw new Error('Card should have 2 faces in this layout.'); }

    return html`
        <div class="card_frame">
            <div class="card_inner">
                    ${inner(card.card_faces[0])}
            </div>
        </div>
        <div class="card_frame">
            <div class="card_inner">
                    ${inner(card.card_faces[1])}
            </div>
        </div>
    `;
}
