import { ScryfallCard, ScryfallCardFace } from '../scryfall';
import { innerBase } from './inner-base';

export function innerNonCreature(face: ScryfallCard | ScryfallCardFace) {
    return innerBase(face);
}
