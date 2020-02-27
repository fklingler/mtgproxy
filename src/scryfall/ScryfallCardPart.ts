import { ScryfallUUID } from "./ScryfallUUID";
import { ScryfallURI } from "./ScryfallURI";

/**
 * Cards that are closely related to other cards (because they call them by name, or generate a token, or meld, etc) have a property that contains Related Card objects.
 */
export interface ScryfallCardPart {
    /**
     * Object name - should equal "related_card".
     */
    object: "related_card";
    /**
     * The unique ID for this card in Scryfall’s database.
     */
    id: ScryfallUUID;
    /**
     * The name of this card part.
     */
    name: string;
    /**
     * A URI where you can retrieve a full object describing this card on Scryfall’s API.
     */
    uri: ScryfallURI;
}