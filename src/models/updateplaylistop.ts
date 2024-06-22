/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export type UpdatePlaylistRequest = {
    /**
     * the ID of the playlist
     */
    playlistID: number;
    /**
     * name of the playlist
     */
    title?: string | undefined;
    /**
     * summary description of the playlist
     */
    summary?: string | undefined;
};

export type UpdatePlaylistErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type UpdatePlaylistResponseBodyData = {
    errors?: Array<UpdatePlaylistErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class UpdatePlaylistResponseBody extends Error {
    errors?: Array<UpdatePlaylistErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: UpdatePlaylistResponseBodyData;

    constructor(err: UpdatePlaylistResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.errors != null) {
            this.errors = err.errors;
        }
        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "UpdatePlaylistResponseBody";
    }
}

export type UpdatePlaylistResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace UpdatePlaylistRequest$ {
    export const inboundSchema: z.ZodType<UpdatePlaylistRequest, z.ZodTypeDef, unknown> = z.object({
        playlistID: z.number(),
        title: z.string().optional(),
        summary: z.string().optional(),
    });

    export type Outbound = {
        playlistID: number;
        title?: string | undefined;
        summary?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdatePlaylistRequest> =
        z.object({
            playlistID: z.number(),
            title: z.string().optional(),
            summary: z.string().optional(),
        });
}

/** @internal */
export namespace UpdatePlaylistErrors$ {
    export const inboundSchema: z.ZodType<UpdatePlaylistErrors, z.ZodTypeDef, unknown> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdatePlaylistErrors> = z.object(
        {
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        }
    );
}

/** @internal */
export namespace UpdatePlaylistResponseBody$ {
    export const inboundSchema: z.ZodType<UpdatePlaylistResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            errors: z.array(z.lazy(() => UpdatePlaylistErrors$.inboundSchema)).optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            const remapped = remap$(v, {
                RawResponse: "rawResponse",
            });

            return new UpdatePlaylistResponseBody(remapped);
        });

    export type Outbound = {
        errors?: Array<UpdatePlaylistErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdatePlaylistResponseBody> = z
        .instanceof(UpdatePlaylistResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z.array(z.lazy(() => UpdatePlaylistErrors$.outboundSchema)).optional(),
                    rawResponse: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                })
                .transform((v) => {
                    return remap$(v, {
                        rawResponse: "RawResponse",
                    });
                })
        );
}

/** @internal */
export namespace UpdatePlaylistResponse$ {
    export const inboundSchema: z.ZodType<UpdatePlaylistResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdatePlaylistResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
