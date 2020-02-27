
export interface ScryfallListResponse<T> {
    /**
     * Object code - should equal list.
     */
    object: string;
    /**
     * True if there is a page beyond the current page. False if there are no more pages or there is only one page.
     */
    has_more: boolean;
    /**
     * If there is a page beyond this page of results, this field will contain the URI to that page. Can be null.
     */
    next_page: string;
    /**
     * If this is a list of Card objects, this field will contain the total number of cards found across all pages. Can be null.
     */
    total_cards: number;
    /**
     * An array of the requested objects, in a specific order.
     */
    data: T[];
}