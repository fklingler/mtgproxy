import { ScryfallURI } from "./ScryfallURI";

/**
 * A Catalog object contains an array of Magic datapoints (words, card values, etc). 
 * Catalog objects are provided by the API as aids for building other Magic software and understanding possible values for a field on Card objects.
 */
export interface ScryfallCatalog {
    /**
     * A link to the current catalog on Scryfall’s API.
     */
    uri: ScryfallURI
    /**
     * The number of items in the data array.
     */
    total_values: number;
    /**
     * An array of datapoints, as strings.
     */
    data: string[];
}