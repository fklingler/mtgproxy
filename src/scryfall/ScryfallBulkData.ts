import { ScryfallUUID } from "./ScryfallUUID";
import { ScryfallURI } from "./ScryfallURI";

/**
 * Represents a bulk data export from the Scryfall database - one is made for each type, each day.
 */
export interface ScryfallBulkData {
    /**
     * Object name - should equal "bulk_data".
     */
    object: "bulk_data";
    /**
     * The unique ID for this object in Scryfall’s database.
     */
    id: ScryfallUUID;
    /**
     * The type of data this export contains.
     */
    type: "default_cards" | "oracle_cards" | "all_cards"
    /**
     * The date at which this export was performed.
     */
    updated_at: Date;
    /**
     * The name of this export.
     */
    name: string;
    /**
     * A description of this export.
     */
    description: string;
    /**
     * The size of this export in bytes after compression has been applied.
     */
    compressed_size: number;
    /**
     * A URI where you can retrieve the export as a single file.
     */
    permalink_uri: ScryfallURI;
    /**
     * The mime type of the data contained in this export.
     */
    content_type: string;
    /**
     * The encoding used to compress this export.
     */
    content_encoding: string;
}