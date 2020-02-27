
import { ScryfallURI } from "./ScryfallURI";

/**
 * Various images available for a card. Scryfall produces multiple sizes of images and image crops for each card.
 */
export interface ScryfallImages {
    /**
     * A small full card image. Designed for use as thumbnail or list icon. 
     * Size: 146 x 204 
     * Format: jpg
     */
    small: ScryfallURI;
    /**
     * A medium-sized full card image.
     * Size: 488 × 680
     * Format: jpg
     */
    normal: ScryfallURI;
    /**
     * A large full card image.
     * Size: 672 × 936
     * Format: jpg
     */
    large: ScryfallURI,
    /**
     * A transparent, rounded full card PNG. This is the best image to use for videos or other high-quality content.
     * Size: 745 × 1040
     * Format: png
     */
    png: ScryfallURI;
    /**
     * A rectangular crop of the card’s art only. 
     * Not guaranteed to be perfect for cards with outlier designs or strange frame arrangements. 
     * Size: Varies 
     * Format: jpg
     */
    art_crop: ScryfallURI;
    /**
     * A full card image with the rounded corners and the majority of the border cropped off. 
     * Designed for dated contexts where rounded images can’t be used. 
     * Size: 480 × 680 
     * Format: jpg
     */
    border_crop: ScryfallURI;
}