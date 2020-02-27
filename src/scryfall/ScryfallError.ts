/**
 * An error, and information about it.
 */
export interface ScryfallError {
    /**
     * Object code - should equal error.
     */
    object: "error";
    /**
     * An integer HTTP status code for this error.
     */
    status: number;
    /**
     * A computer-friendly string representing the appropriate HTTP status code.
     */
    code: string;
    /**
     * A human-readable string explaining the error.
     */
    details: string;
    /**
     * Additional context optionally provided for why an error has occurred.
     */
    type?: string;
    /**
     * Any non-failure warnings gernerated, if any.
     */
    warnings?: string[];
}