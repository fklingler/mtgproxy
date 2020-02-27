import { ScryfallCard, ScryfallCardFace } from '../scryfall';
import { innerBase } from './inner-base';
import { html } from 'lit-element';

export function innerCreature(face: ScryfallCard | ScryfallCardFace) {
    return html`
        ${innerBase(face)}
        <p class="power_toughness">${face.power}/${face.toughness}</p>
    `;
}
