import { ScryfallCard } from '../scryfall';
import { html } from 'lit-element';
import { inner } from './inner';

export function layoutSplit(card: ScryfallCard) {
    if (card.card_faces?.length != 2) { throw new Error('Card should have 2 faces in this layout.'); }

    return html`
        <div class="card_frame">
            <div class="card_inner">
                <div class="card_inner split_left">
                    ${inner(card.card_faces[0])}
                </div>
                <hr class="flip_divider">
                <div class="card_inner split_right">
                    ${inner(card.card_faces[1])}
                </div>
            </div>
        </div>
    `;
}
