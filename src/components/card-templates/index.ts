import { ScryfallCard, ScryfallCardFace, ScryfallLayout } from '../../scryfall'
import CardError from './CardError.vue'
import InnerCreature from './InnerCreature.vue'
import InnerNonCreature from './InnerNonCreature.vue'
import InnerPlaneswalker from './InnerPlaneswalker.vue'
import LayoutFlip from './LayoutFlip.vue'
import LayoutDoubleFaced from './LayoutDoubleFaced.vue'
import LayoutNormal from './LayoutNormal.vue'
import LayoutSplit from './LayoutSplit.vue'

const brokenLayouts: ScryfallLayout[] = [
    ScryfallLayout.vanguard
];

export function cardTemplate(card: ScryfallCard) {
    if (brokenLayouts.includes(card.layout)) {
        return CardError
    }
    
    switch (card.layout) {
        case ScryfallLayout.split:
        case ScryfallLayout.adventure:
            return LayoutSplit
        case ScryfallLayout.flip:
            return LayoutFlip
        case ScryfallLayout.transform:
        case ScryfallLayout.modal_dfc:
        case ScryfallLayout.double_faced_token:
            return LayoutDoubleFaced
        default:
            return LayoutNormal
    }
}

export function cardInnerTemplate(face: ScryfallCard | ScryfallCardFace) {
    const type = face.type_line

    if (type.includes('Creature') || type.includes('Vehicle')) {
        return InnerCreature
    }
    if (type.includes('Planeswalker')) {
        return InnerPlaneswalker
    }
    
    return InnerNonCreature
}
