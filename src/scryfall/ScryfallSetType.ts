/**
 * An exhaustive list of set types; Scryfall provides an overall categorization for each Set in the set_type property.
 */
export enum ScryfallSetType {
    /**
     * A yearly Magic core set (e.g. Tenth Edition).
     */
    core = "core",
    /**
     * A rotational expansion set in a block (e.g. Zendikar).
     */
    expansion = "expansion",
    /**
     * A reprint set that contains no new cards (e.g. Modern Masters).
     */
    masters = "masters",
    /**
     * Masterpiece Series premium foil cards.
     */
    masterpiece = "masterpiece",
    /**
     * From the Vault gift sets.
     */
    from_the_vault = "from_the_vault",
    /**
     * Signature Spellbook series gift sets.
     */
    spellbook = "spellbook",
    /**
     * Premium Deck Series decks.
     */
    premium_deck = "premium_deck",
    /**
     * Duel Decks.
     */
    duel_deck = "duel_deck",
    /**
     * Commander preconstructed decks.
     */
    commander = "commander",
    /**
     * Planechase sets.
     */
    planechase = "planechase",
    /**
     * Conspiracy sets.
     */
    conspiracy = "conspiracy",
    /**
     * Archenemy sets.
     */
    archenemy = "archenemy",
    /**
     * Vanguard card sets.
     */
    vanguard = "vanguard",
    /**
     * A funny un-set or set with funny promos (e.g. Unglued, Happy Holidays).
     */
    funny = "funny",
    /**
     * A starter/introductory set (e.g. Portal).
     */
    starter = "starter",
    /**
     * A gift box set.
     */
    box = "box",
    /**
     * A set that contains purely promotional cards.
     */
    promo = "promo",
    /**
     * A set made up of tokens and emblems.
     */
    token = "token",
    /**
     * A set made up of gold-bordered, oversize, or trophy cards that are not legal.
     */
    memorabilia = "memorabilia",
    /**
     * A set that expands upon typical rules for draft, like Conspiracy and Battlebond.
     */
    draft_innovation = "draft_innovation"
}