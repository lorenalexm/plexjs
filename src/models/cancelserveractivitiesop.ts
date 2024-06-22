/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export type CancelServerActivitiesRequest = {
    /**
     * The UUID of the activity to cancel.
     */
    activityUUID: string;
};

export type CancelServerActivitiesErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type CancelServerActivitiesResponseBodyData = {
    errors?: Array<CancelServerActivitiesErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class CancelServerActivitiesResponseBody extends Error {
    errors?: Array<CancelServerActivitiesErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: CancelServerActivitiesResponseBodyData;

    constructor(err: CancelServerActivitiesResponseBodyData) {
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

        this.name = "CancelServerActivitiesResponseBody";
    }
}

export type CancelServerActivitiesResponse = {
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
export namespace CancelServerActivitiesRequest$ {
    export const inboundSchema: z.ZodType<CancelServerActivitiesRequest, z.ZodTypeDef, unknown> =
        z.object({
            activityUUID: z.string(),
        });

    export type Outbound = {
        activityUUID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CancelServerActivitiesRequest> =
        z.object({
            activityUUID: z.string(),
        });
}

/** @internal */
export namespace CancelServerActivitiesErrors$ {
    export const inboundSchema: z.ZodType<CancelServerActivitiesErrors, z.ZodTypeDef, unknown> =
        z.object({
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CancelServerActivitiesErrors> =
        z.object({
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        });
}

/** @internal */
export namespace CancelServerActivitiesResponseBody$ {
    export const inboundSchema: z.ZodType<
        CancelServerActivitiesResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            errors: z.array(z.lazy(() => CancelServerActivitiesErrors$.inboundSchema)).optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            const remapped = remap$(v, {
                RawResponse: "rawResponse",
            });

            return new CancelServerActivitiesResponseBody(remapped);
        });

    export type Outbound = {
        errors?: Array<CancelServerActivitiesErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CancelServerActivitiesResponseBody
    > = z
        .instanceof(CancelServerActivitiesResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z
                        .array(z.lazy(() => CancelServerActivitiesErrors$.outboundSchema))
                        .optional(),
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
export namespace CancelServerActivitiesResponse$ {
    export const inboundSchema: z.ZodType<CancelServerActivitiesResponse, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CancelServerActivitiesResponse> =
        z
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
