/**
 * The arrangement of card parts, faces, and other bounded regions on cards.
 */
export enum ScryfallLayout {
    /**
     * A standard Magic card with one face.
     */
    normal = "normal",
    /**
     * A split-faced card.
     */
    split = "split",
    /**
     * Cards that invert vertically with the flip keyword.
     */
    flip = "flip",
    /**
     * Double-sided cards that transform.
     */
    transform = "transform",
    /**
     * Cards with meld parts printed on the back.
     */
    meld = "meld",
    /**
     * Cards with Level Up.
     */
    leveler = "leveler",
    /**
     * Saga-type cards.
     */
    saga = "saga",
    /**
     * Plane and Phenomenon-type cards.
     */
    planar = "planar",
    /**
     * Scheme-type cards.
     */
    scheme = "scheme",
    /**
     * Vanguard-type cards.
     */
    vanguard = "vanguard",
    /**
     * Token cards.
     */
    token = "token",
    /**
     * Tokens with another token printed on the back.
     */
    double_faced_token = "double_faced_token",
    /**
     * Emblem cards.
     */
    emblem = "emblem",
    /**
     * Cards with Augment.
     */
    augment = "augment",
    /**
     * Host-type cards.
     */
    host = "host"
}