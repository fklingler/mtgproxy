import { ScryfallImages } from "./ScryfallImages";
import { ScryfallColor } from "./ScryfallColor";
import { ScryfallUUID } from "./ScryfallUUID";

/**
 * The faces of this card, if more than one face is present. Also contains seperate card parts for cards that have several parts (e.g. Flip cards, Aftermath cards).
 */
export interface ScryfallCardFace {
    /**
     * Object name - should equal "card_face".
     */
    object: "card_face";
    /**
     * The name of this card face.
     */
    name: string;
    /**
     * The type line of this card face.
     */
    type_line: string;
    /**
     * The language-specific type line for this card face.
     */
    printed_type_line: string;
    /**
     * The Oracle text for this card face, if any.
     */
    oracle_text?: string;
    /**
     * The language-specific text for this card face.
     */
    printed_text?: string;
    /**
     * The mana cost for this card face. This value will be any empty string "" if the cost is absent or not on this face (per the game rules, a missing mana cost and a mana cost of 0 are different values).
     */
    mana_cost: string;
    /**
     * This colors of this card face.
     */
    colors: ScryfallColor[];
    /**
     * The colors in this card face’s color indicator, if any.
     */
    color_indicator?: ScryfallColor[];
    /**
     * This card face’s power, if any. Note that some cards have powers that are not numeric, such as *.
     */
    power?: string;
    /**
     * This card face’s toughness, if any. Note that some cards have toughnesses that are not numeric, such as *.
     */
    toughness?: string;
    /**
     * This loyalty of this card face, if any. Note that some cards have loyalties that are not numeric, such as X.
     */
    loyalty?: string;
    /**
     * The flavor text printed on this card face, if any.
     */
    flavor_text?: string;
    /**
     * A unique identifier for the card face artwork that remains consistent across reprints. Newly spoiled cards may not have this field yet.
     */
    illustration_id?: ScryfallUUID;
    /**
     * An object providing URIs to imagery for this face, if this is a double-sided card.
     * If this card is not double-sided, then the image_uris property will be part of the parent object instead.
     */
    image_uris?: ScryfallImages;
}