import { ScryfallCard, ScryfallLayout } from '../scryfall';
import { layoutFlip } from './layout-flip';
import { layoutNormal } from './layout-normal';
import { layoutSplit } from './layout-split';
import { layoutTransform } from './layout-transform';

const splitLayouts: ScryfallLayout[] = [ScryfallLayout.split, ScryfallLayout.adventure];
const brokenLayouts: ScryfallLayout[] = [
    ScryfallLayout.token,
    ScryfallLayout.double_faced_token,
    ScryfallLayout.vanguard,
    ScryfallLayout.emblem,
    ScryfallLayout.planar
];

export function cardTemplate(card: ScryfallCard) {
    if (splitLayouts.includes(card.layout)) {
        return layoutSplit(card);
    }
    if (card.layout == 'flip') {
        return layoutFlip(card);
    }
    if (card.layout == 'transform') {
        return layoutTransform(card);
    }
    if (brokenLayouts.includes(card.layout)) {
        throw new Error('Layout not supported');
    }
    return layoutNormal(card);
}
