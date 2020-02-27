import { ScryfallCard, ScryfallCardFace } from '../scryfall';
import { innerCreature } from './inner-creature';
import { innerNonCreature } from './inner-noncreature';
import { innerPlaneswalker } from './inner-planeswalker';

export function inner(face: ScryfallCard | ScryfallCardFace) {
    const type = face.type_line;

    if (type.includes('Creature') || type.includes('Vehicle')) {
        return innerCreature(face);
    }
    if (type.includes('Planeswalker')) {
        return innerPlaneswalker(face);
    }
    return innerNonCreature(face);
}
