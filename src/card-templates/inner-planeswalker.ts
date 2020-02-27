import { ScryfallCard, ScryfallCardFace } from '../scryfall';
import { innerBase } from './inner-base';
import { html } from 'lit-element';

export function innerPlaneswalker(face: ScryfallCard | ScryfallCardFace) {
    return html`
        ${innerBase(face)}
        <p class="loyalty">${face.loyalty}</p>
    `;
}
