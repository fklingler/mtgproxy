import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { ScryfallCard, ScryfallCardFace } from '../scryfall';

export function innerBase(face: ScryfallCard | ScryfallCardFace) {
    return html`
        <div class="name_mana_line">
            <p class="name">${face.name}</p>
            <p class="manacost">${unsafeHTML(face.mana_cost.replace('}{', '}<wbr>{'))}</p>
        </div>
        <p class="typeline">${face.type_line}</p>
        <div class="oracle_div">${oracleText(face.oracle_text)}</div>`;
}

function oracleText(oracleText: string) {
    return oracleText.split('\n').map(line => html`
        <p class="oracle_p">
            ${unsafeHTML(line.replace('(', '<i>(').replace(')', ')<i>'))}
        </p>
    `);
}
