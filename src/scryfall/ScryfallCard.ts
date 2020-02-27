import { ScryfallCardFace } from "./ScryfallCardFace";
import { ScryfallLayout } from "./ScryfallLayout";
import { ScryfallImages } from "./ScryfallImages";
import { ScryfallColor } from "./ScryfallColor";
import { ScryfallUUID } from "./ScryfallUUID";
import { ScryfallURI } from "./ScryfallURI";


/**
 * Card objects represent individual Magic cards that players can obtain and add to their collection (with a few minor exceptions).
 */
export interface ScryfallCard {

    // Core Fields

    /**
     * Object field - should equal "card".
     */
    object: "card";
    /**
     * A unique ID for this card in Scryfall’s database.
     */
    id: ScryfallUUID;
    /**
     * A unique ID for this card’s oracle identity. This value is consistent across reprinted card editions, and unique among different cards with the same name (e.g. tokens, Unstable variants).
     */
    oracle_id: ScryfallUUID;
    /**
     * This card’s multiverse IDs on Gatherer, if any, as an array of integers. Note that Scryfall includes many promo cards, tokens, and other esoteric objects that do not have these identifiers.
     */
    multiverse_id?: number[];
    /**
     * This card’s Magic Online ID (also known as the Catalog ID), if any. A large percentage of cards are not available on Magic Online and do not have this ID.
     */
    mtgo_id?: number;
    /**
     * This card’s foil Magic Online ID (also known as the Catalog ID), if any. A large percentage of cards are not available on Magic Online and do not have this ID.
     */
    mtgo_foil_id?: number;
    /**
     * This card’s Arena ID, if any. A large percentage of cards are not available on Arena and do not have this ID.
     */
    arena_id?: number;
    /**
     * A link to this card object on Scryfall’s API.
     */
    uri: ScryfallURI;
    /**
     * 	A link to this card’s permapage on Scryfall’s website.
     */
    scryfall_uri: ScryfallURI;
    /**
     * A link to where you can begin paginating all (re)prints for this card on Scryfall’s API.
     */
    prints_search_uri: ScryfallURI;
    /**
     * 	A link to this card’s rulings on Scryfall’s API.
     */
    rulings_uri: ScryfallURI;

    // Gameplay Fields

    /**
     * The name of this card. If this card has multiple faces, this field will contain both names separated by " // ".
     */
    name: string;
    /**
     * The name of this card, written in the card's language. If this card has multiple faces, this field will contain both names separated by " // ".
     */
    printed_name?: string;
    /**
     * The language this card was written in. Fields prefixed with "printed_" will contain text specific to this language.
     */
    lang?: string;
    /**
     * A computer-readable designation for this card’s layout. The layout can be used to programmatically determine which other properties on a card you can expect.
     */
    layout: ScryfallLayout;
    /**
     * The card’s converted mana cost. Note that some funny cards have fractional mana costs.
     */
    cmc: number;
    /**
     * The type line of this card.
     */
    type_line: string;
    /**
     * The type line for this card, written in the card's language.
     */
    printed_type_line?: string;
    /**
     * The text on this card, written in the card's language.
     */
    printed_text?: string;
    /**
     * The Oracle text for this card, if any.
     */
    oracle_text?: string;
    /**
     * The mana cost for this card. This value will be any empty string "" if the cost is absent (per the game rules, a missing mana cost and a mana cost of 0 are different values).
     */
    mana_cost: string;
    /**
     * This card’s power, if any. Note that some cards have powers that are not numeric, such as *.
     */
    power?: string;
    /**
     * This card’s toughness, if any. Note that some cards have toughnesses that are not numeric, such as *.
     */
    toughness?: string;
    /**
     * This loyalty if any. Note that some cards have loyalties that are not numeric, such as X.
     */
    loyalty?: string;
    /**
     * This card’s life modifier, if it is Vanguard card. This value will contain a delta, such as +2.
     */
    life_modifier?: string;
    /**
     * This card’s hand modifier, if it is Vanguard card. This value will contain a delta, such as -1.
     */
    hand_modifier?: string;
    /**
     * This card’s colors. Colorless cards will yield an empty array.
     */
    colors: ScryfallColor[];
    /**
     * The colors in this card’s color indicator, if any. A null value for this field indicates the card does not have one.
     */
    color_indicator?: ScryfallColor[];
    /**
     * This card’s color identity. Colorless cards will yield an empty array.
     */
    color_identity: ScryfallColor[];
    /**
     * An array of cards related to this card, if any.
     */
    all_parts?: ScryfallCardFace[];
    /**
     * An array of Card Face objects, if this card is multifaced.
     */
    card_faces?: ScryfallCardFace[];
    /**
     * An object describing the legality of this card in various formats.
     */
    legalities: {
        standard: Legality,
        future: Legality,
        frontier: Legality,
        modern: Legality,
        legacy: Legality,
        pauper: Legality,
        vintage: Legality,
        penny: Legality,
        commander: Legality,
        "1v1": Legality,
        duel: Legality,
        brawl: Legality
    };
    /**
     * Whether or not this card is on the Reserved List.
     */
    reserved: boolean;
    /**
     * Whether or not this printing exists in a foil version.
     */
    foil: boolean;
    /**
     * Whether or not this printing exists in a non-foil version.
     */
    nonfoil: boolean;
    /**
     * Whether or not this card is oversized.
     */
    oversized: boolean;
    /**
     * This card’s overall rank/popularity on EDHREC. Not all cards are ranked.
     */
    edhrec_rank?: number;

    // Print Fields

    /**
     * This card’s set code.
     */
    set: string;
    /**
     * This card’s full set name.
     */
    set_name: string;
    /**
     * This card’s collector number. Note that collector numbers can contain non-numeric characters, such as letters or ★.
     */
    collector_number: string;

    /**
     * A link to where you can begin paginating this card’s set on the Scryfall API.
     */
    set_search_uri: ScryfallURI;
    /**
     * An object listing available imagery for this card, if any.
     */
    image_uris?: ScryfallImages;
    /**
     * Whether or not this card’s imagery is high resolution.
     */
    highres_image: boolean;
    /**
     * Whether or not this card is a reprint.
     */
    reprint: boolean;
    /**
     * Whether or not this is a digital card on Magic Online.
     */
    digital: boolean;
    /**
     * This card’s rarity. One of common, uncommon, rare, or mythic.
     */
    rarity: "common", "uncommon", "rare", "mythic";
    /**
     * The flavor text of this card, if any.
     */
    flavor_text?: string;
    /**
     * The illustrator name(s) of this card. Newly spoiled cards may not have this field yet.
     */
    artist?: string;
    /**
     * A unique identifier for the card artwork that remains consistent across reprints. Newly spoiled cards may not have this field yet.
     */
    illustration_id?: ScryfallUUID;
    /**
     * This card’s frame layout.
     */
    frame: "1993" | "1997" | "2003" | "2015" | "future"
    /**
     * True if this card’s artwork is larger than normal.
     */
    full_art: boolean;
    /**
     * This card’s watermark, if any.
     */
    watermark?: string;
    /**
     * This card’s border color.
     */
    border_color: "black" | "borderless" | "gold" | "silver" | "white";
    /**
     * This card’s story spotlight number, if any.
     */
    story_spotlight_number?: number;
    /**
     * A URL to this cards’s story article, if any.
     */
    story_spotlight_uri?: ScryfallURI;
    /**
     * Whether or not this card is timeshifted.
     */
    timeshifted: boolean;
    /**
     * Whether or not this card is colorshifted.
     */
    colorshifted: boolean;
    /**
     * Whether or not this card is from the future (i.e. a future-bordered card from Time Spiral block).
     */
    futureshifted: boolean;

    // Undocumented?

    /**
     * A URI for the set that contains this card.
     */
    set_uri: ScryfallURI;
    /**
     * A link to this card’s set's permapage on Scryfall’s website.
     */
    scryfall_set_uri: ScryfallURI;
    /**
     * The current price of this card in USD, if any. Does not exist for digital-only cards.
     */
    usd?: string;
    /**
     * The current price of this card in EUR, if any. Does not exist for digital-only cards.
     */
    eur?: string;
    /**
     * The current price of this card in Magic Online Tickets, if any. Does not exist for print-only cards.
     */
    tix?: string;
    /**
     * Links to external resources for this card.
     */
    related_uris: {
        /**
         * The Gatherer link for this card.
         */
        gatherer: ScryfallURI,
        /**
         * A link to deck on TCGPlayer containing this card.
         */
        tcgplayer_decks: ScryfallURI,
        /**
         * The Edhrec link for this card.
         */
        edhrec: ScryfallURI,
        /**
         * The Mtgtop8 link for this card.
         */
        mtgtop8: ScryfallURI
    },
    /**
     * Links to external sites where this card can be purchased.
     */
    purchase_uris: {
        /**
         * A link to this card on Amazon.
         */
        amazon: ScryfallURI,
        /**
         * A link to this card on Ebay.
         */
        ebay: ScryfallURI,
        /**
         * A link to this card on TCGPlayer.
         */
        tcgplayer: ScryfallURI,
        /**
         * A link to this card on MagicCardMarket.
         */
        magiccardmarket: ScryfallURI,
        /**
         * A link to this card on Cardhoarder.
         */
        cardhoarder: ScryfallURI,
        /**
         * A link to this card on Card Kingdom.
         */
        card_kingdom: ScryfallURI,
        /**
         * A link to this card on MTGO Traders.
         */
        mtgo_traders: ScryfallURI,
        /**
         * A link to this card on CoolStuffInc.
         */
        coolstuffinc: ScryfallURI
    }

}

export type Legality = "legal" | "not_legal" | "banned" | "restricted";