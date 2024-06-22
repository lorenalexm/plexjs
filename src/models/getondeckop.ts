/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export type GetOnDeckErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetOnDeckLibraryResponseBodyData = {
    errors?: Array<GetOnDeckErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetOnDeckLibraryResponseBody extends Error {
    errors?: Array<GetOnDeckErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetOnDeckLibraryResponseBodyData;

    constructor(err: GetOnDeckLibraryResponseBodyData) {
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

        this.name = "GetOnDeckLibraryResponseBody";
    }
}

export type GetOnDeckStream = {
    id?: number | undefined;
    streamType?: number | undefined;
    default?: boolean | undefined;
    codec?: string | undefined;
    index?: number | undefined;
    bitrate?: number | undefined;
    language?: string | undefined;
    languageTag?: string | undefined;
    languageCode?: string | undefined;
    bitDepth?: number | undefined;
    chromaLocation?: string | undefined;
    chromaSubsampling?: string | undefined;
    codedHeight?: number | undefined;
    codedWidth?: number | undefined;
    colorRange?: string | undefined;
    frameRate?: number | undefined;
    height?: number | undefined;
    level?: number | undefined;
    profile?: string | undefined;
    refFrames?: number | undefined;
    width?: number | undefined;
    displayTitle?: string | undefined;
    extendedDisplayTitle?: string | undefined;
};

export type GetOnDeckPart = {
    id?: number | undefined;
    key?: string | undefined;
    duration?: number | undefined;
    file?: string | undefined;
    size?: number | undefined;
    audioProfile?: string | undefined;
    container?: string | undefined;
    videoProfile?: string | undefined;
    stream?: Array<GetOnDeckStream> | undefined;
};

export type GetOnDeckMedia = {
    id?: number | undefined;
    duration?: number | undefined;
    bitrate?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    aspectRatio?: number | undefined;
    audioChannels?: number | undefined;
    audioCodec?: string | undefined;
    videoCodec?: string | undefined;
    videoResolution?: string | undefined;
    container?: string | undefined;
    videoFrameRate?: string | undefined;
    audioProfile?: string | undefined;
    videoProfile?: string | undefined;
    part?: Array<GetOnDeckPart> | undefined;
};

export type GetOnDeckGuids = {
    id?: string | undefined;
};

export type GetOnDeckMetadata = {
    allowSync?: boolean | undefined;
    librarySectionID?: number | undefined;
    librarySectionTitle?: string | undefined;
    librarySectionUUID?: string | undefined;
    ratingKey?: number | undefined;
    key?: string | undefined;
    parentRatingKey?: number | undefined;
    grandparentRatingKey?: number | undefined;
    guid?: string | undefined;
    parentGuid?: string | undefined;
    grandparentGuid?: string | undefined;
    type?: string | undefined;
    title?: string | undefined;
    grandparentKey?: string | undefined;
    parentKey?: string | undefined;
    librarySectionKey?: string | undefined;
    grandparentTitle?: string | undefined;
    parentTitle?: string | undefined;
    contentRating?: string | undefined;
    summary?: string | undefined;
    index?: number | undefined;
    parentIndex?: number | undefined;
    lastViewedAt?: number | undefined;
    year?: number | undefined;
    thumb?: string | undefined;
    art?: string | undefined;
    parentThumb?: string | undefined;
    grandparentThumb?: string | undefined;
    grandparentArt?: string | undefined;
    grandparentTheme?: string | undefined;
    duration?: number | undefined;
    originallyAvailableAt?: Date | undefined;
    addedAt?: number | undefined;
    updatedAt?: number | undefined;
    media?: Array<GetOnDeckMedia> | undefined;
    guids?: Array<GetOnDeckGuids> | undefined;
};

export type GetOnDeckMediaContainer = {
    size?: number | undefined;
    allowSync?: boolean | undefined;
    identifier?: string | undefined;
    mediaTagPrefix?: string | undefined;
    mediaTagVersion?: number | undefined;
    mixedParents?: boolean | undefined;
    metadata?: Array<GetOnDeckMetadata> | undefined;
};

/**
 * The on Deck content
 */
export type GetOnDeckResponseBody = {
    mediaContainer?: GetOnDeckMediaContainer | undefined;
};

export type GetOnDeckResponse = {
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
    /**
     * The on Deck content
     */
    object?: GetOnDeckResponseBody | undefined;
};

/** @internal */
export namespace GetOnDeckErrors$ {
    export const inboundSchema: z.ZodType<GetOnDeckErrors, z.ZodTypeDef, unknown> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOnDeckErrors> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });
}

/** @internal */
export namespace GetOnDeckLibraryResponseBody$ {
    export const inboundSchema: z.ZodType<GetOnDeckLibraryResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            errors: z.array(z.lazy(() => GetOnDeckErrors$.inboundSchema)).optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            const remapped = remap$(v, {
                RawResponse: "rawResponse",
            });

            return new GetOnDeckLibraryResponseBody(remapped);
        });

    export type Outbound = {
        errors?: Array<GetOnDeckErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOnDeckLibraryResponseBody> = z
        .instanceof(GetOnDeckLibraryResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z.array(z.lazy(() => GetOnDeckErrors$.outboundSchema)).optional(),
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
export namespace GetOnDeckStream$ {
    export const inboundSchema: z.ZodType<GetOnDeckStream, z.ZodTypeDef, unknown> = z.object({
        id: z.number().optional(),
        streamType: z.number().optional(),
        default: z.boolean().optional(),
        codec: z.string().optional(),
        index: z.number().optional(),
        bitrate: z.number().optional(),
        language: z.string().optional(),
        languageTag: z.string().optional(),
        languageCode: z.string().optional(),
        bitDepth: z.number().optional(),
        chromaLocation: z.string().optional(),
        chromaSubsampling: z.string().optional(),
        codedHeight: z.number().optional(),
        codedWidth: z.number().optional(),
        colorRange: z.string().optional(),
        frameRate: z.number().optional(),
        height: z.number().optional(),
        level: z.number().optional(),
        profile: z.string().optional(),
        refFrames: z.number().optional(),
        width: z.number().optional(),
        displayTitle: z.string().optional(),
        extendedDisplayTitle: z.string().optional(),
    });

    export type Outbound = {
        id?: number | undefined;
        streamType?: number | undefined;
        default?: boolean | undefined;
        codec?: string | undefined;
        index?: number | undefined;
        bitrate?: number | undefined;
        language?: string | undefined;
        languageTag?: string | undefined;
        languageCode?: string | undefined;
        bitDepth?: number | undefined;
        chromaLocation?: string | undefined;
        chromaSubsampling?: string | undefined;
        codedHeight?: number | undefined;
        codedWidth?: number | undefined;
        colorRange?: string | undefined;
        frameRate?: number | undefined;
        height?: number | undefined;
        level?: number | undefined;
        profile?: string | undefined;
        refFrames?: number | undefined;
        width?: number | undefined;
        displayTitle?: string | undefined;
        extendedDisplayTitle?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOnDeckStream> = z.object({
        id: z.number().optional(),
        streamType: z.number().optional(),
        default: z.boolean().optional(),
        codec: z.string().optional(),
        index: z.number().optional(),
        bitrate: z.number().optional(),
        language: z.string().optional(),
        languageTag: z.string().optional(),
        languageCode: z.string().optional(),
        bitDepth: z.number().optional(),
        chromaLocation: z.string().optional(),
        chromaSubsampling: z.string().optional(),
        codedHeight: z.number().optional(),
        codedWidth: z.number().optional(),
        colorRange: z.string().optional(),
        frameRate: z.number().optional(),
        height: z.number().optional(),
        level: z.number().optional(),
        profile: z.string().optional(),
        refFrames: z.number().optional(),
        width: z.number().optional(),
        displayTitle: z.string().optional(),
        extendedDisplayTitle: z.string().optional(),
    });
}

/** @internal */
export namespace GetOnDeckPart$ {
    export const inboundSchema: z.ZodType<GetOnDeckPart, z.ZodTypeDef, unknown> = z
        .object({
            id: z.number().optional(),
            key: z.string().optional(),
            duration: z.number().optional(),
            file: z.string().optional(),
            size: z.number().optional(),
            audioProfile: z.string().optional(),
            container: z.string().optional(),
            videoProfile: z.string().optional(),
            Stream: z.array(z.lazy(() => GetOnDeckStream$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                Stream: "stream",
            });
        });

    export type Outbound = {
        id?: number | undefined;
        key?: string | undefined;
        duration?: number | undefined;
        file?: string | undefined;
        size?: number | undefined;
        audioProfile?: string | undefined;
        container?: string | undefined;
        videoProfile?: string | undefined;
        Stream?: Array<GetOnDeckStream$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOnDeckPart> = z
        .object({
            id: z.number().optional(),
            key: z.string().optional(),
            duration: z.number().optional(),
            file: z.string().optional(),
            size: z.number().optional(),
            audioProfile: z.string().optional(),
            container: z.string().optional(),
            videoProfile: z.string().optional(),
            stream: z.array(z.lazy(() => GetOnDeckStream$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                stream: "Stream",
            });
        });
}

/** @internal */
export namespace GetOnDeckMedia$ {
    export const inboundSchema: z.ZodType<GetOnDeckMedia, z.ZodTypeDef, unknown> = z
        .object({
            id: z.number().optional(),
            duration: z.number().optional(),
            bitrate: z.number().optional(),
            width: z.number().optional(),
            height: z.number().optional(),
            aspectRatio: z.number().optional(),
            audioChannels: z.number().optional(),
            audioCodec: z.string().optional(),
            videoCodec: z.string().optional(),
            videoResolution: z.string().optional(),
            container: z.string().optional(),
            videoFrameRate: z.string().optional(),
            audioProfile: z.string().optional(),
            videoProfile: z.string().optional(),
            Part: z.array(z.lazy(() => GetOnDeckPart$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                Part: "part",
            });
        });

    export type Outbound = {
        id?: number | undefined;
        duration?: number | undefined;
        bitrate?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        aspectRatio?: number | undefined;
        audioChannels?: number | undefined;
        audioCodec?: string | undefined;
        videoCodec?: string | undefined;
        videoResolution?: string | undefined;
        container?: string | undefined;
        videoFrameRate?: string | undefined;
        audioProfile?: string | undefined;
        videoProfile?: string | undefined;
        Part?: Array<GetOnDeckPart$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOnDeckMedia> = z
        .object({
            id: z.number().optional(),
            duration: z.number().optional(),
            bitrate: z.number().optional(),
            width: z.number().optional(),
            height: z.number().optional(),
            aspectRatio: z.number().optional(),
            audioChannels: z.number().optional(),
            audioCodec: z.string().optional(),
            videoCodec: z.string().optional(),
            videoResolution: z.string().optional(),
            container: z.string().optional(),
            videoFrameRate: z.string().optional(),
            audioProfile: z.string().optional(),
            videoProfile: z.string().optional(),
            part: z.array(z.lazy(() => GetOnDeckPart$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                part: "Part",
            });
        });
}

/** @internal */
export namespace GetOnDeckGuids$ {
    export const inboundSchema: z.ZodType<GetOnDeckGuids, z.ZodTypeDef, unknown> = z.object({
        id: z.string().optional(),
    });

    export type Outbound = {
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOnDeckGuids> = z.object({
        id: z.string().optional(),
    });
}

/** @internal */
export namespace GetOnDeckMetadata$ {
    export const inboundSchema: z.ZodType<GetOnDeckMetadata, z.ZodTypeDef, unknown> = z
        .object({
            allowSync: z.boolean().optional(),
            librarySectionID: z.number().optional(),
            librarySectionTitle: z.string().optional(),
            librarySectionUUID: z.string().optional(),
            ratingKey: z.number().optional(),
            key: z.string().optional(),
            parentRatingKey: z.number().optional(),
            grandparentRatingKey: z.number().optional(),
            guid: z.string().optional(),
            parentGuid: z.string().optional(),
            grandparentGuid: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            grandparentKey: z.string().optional(),
            parentKey: z.string().optional(),
            librarySectionKey: z.string().optional(),
            grandparentTitle: z.string().optional(),
            parentTitle: z.string().optional(),
            contentRating: z.string().optional(),
            summary: z.string().optional(),
            index: z.number().optional(),
            parentIndex: z.number().optional(),
            lastViewedAt: z.number().optional(),
            year: z.number().optional(),
            thumb: z.string().optional(),
            art: z.string().optional(),
            parentThumb: z.string().optional(),
            grandparentThumb: z.string().optional(),
            grandparentArt: z.string().optional(),
            grandparentTheme: z.string().optional(),
            duration: z.number().optional(),
            originallyAvailableAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            addedAt: z.number().optional(),
            updatedAt: z.number().optional(),
            Media: z.array(z.lazy(() => GetOnDeckMedia$.inboundSchema)).optional(),
            guids: z.array(z.lazy(() => GetOnDeckGuids$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                Media: "media",
            });
        });

    export type Outbound = {
        allowSync?: boolean | undefined;
        librarySectionID?: number | undefined;
        librarySectionTitle?: string | undefined;
        librarySectionUUID?: string | undefined;
        ratingKey?: number | undefined;
        key?: string | undefined;
        parentRatingKey?: number | undefined;
        grandparentRatingKey?: number | undefined;
        guid?: string | undefined;
        parentGuid?: string | undefined;
        grandparentGuid?: string | undefined;
        type?: string | undefined;
        title?: string | undefined;
        grandparentKey?: string | undefined;
        parentKey?: string | undefined;
        librarySectionKey?: string | undefined;
        grandparentTitle?: string | undefined;
        parentTitle?: string | undefined;
        contentRating?: string | undefined;
        summary?: string | undefined;
        index?: number | undefined;
        parentIndex?: number | undefined;
        lastViewedAt?: number | undefined;
        year?: number | undefined;
        thumb?: string | undefined;
        art?: string | undefined;
        parentThumb?: string | undefined;
        grandparentThumb?: string | undefined;
        grandparentArt?: string | undefined;
        grandparentTheme?: string | undefined;
        duration?: number | undefined;
        originallyAvailableAt?: string | undefined;
        addedAt?: number | undefined;
        updatedAt?: number | undefined;
        Media?: Array<GetOnDeckMedia$.Outbound> | undefined;
        guids?: Array<GetOnDeckGuids$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOnDeckMetadata> = z
        .object({
            allowSync: z.boolean().optional(),
            librarySectionID: z.number().optional(),
            librarySectionTitle: z.string().optional(),
            librarySectionUUID: z.string().optional(),
            ratingKey: z.number().optional(),
            key: z.string().optional(),
            parentRatingKey: z.number().optional(),
            grandparentRatingKey: z.number().optional(),
            guid: z.string().optional(),
            parentGuid: z.string().optional(),
            grandparentGuid: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            grandparentKey: z.string().optional(),
            parentKey: z.string().optional(),
            librarySectionKey: z.string().optional(),
            grandparentTitle: z.string().optional(),
            parentTitle: z.string().optional(),
            contentRating: z.string().optional(),
            summary: z.string().optional(),
            index: z.number().optional(),
            parentIndex: z.number().optional(),
            lastViewedAt: z.number().optional(),
            year: z.number().optional(),
            thumb: z.string().optional(),
            art: z.string().optional(),
            parentThumb: z.string().optional(),
            grandparentThumb: z.string().optional(),
            grandparentArt: z.string().optional(),
            grandparentTheme: z.string().optional(),
            duration: z.number().optional(),
            originallyAvailableAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            addedAt: z.number().optional(),
            updatedAt: z.number().optional(),
            media: z.array(z.lazy(() => GetOnDeckMedia$.outboundSchema)).optional(),
            guids: z.array(z.lazy(() => GetOnDeckGuids$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                media: "Media",
            });
        });
}

/** @internal */
export namespace GetOnDeckMediaContainer$ {
    export const inboundSchema: z.ZodType<GetOnDeckMediaContainer, z.ZodTypeDef, unknown> = z
        .object({
            size: z.number().optional(),
            allowSync: z.boolean().optional(),
            identifier: z.string().optional(),
            mediaTagPrefix: z.string().optional(),
            mediaTagVersion: z.number().optional(),
            mixedParents: z.boolean().optional(),
            Metadata: z.array(z.lazy(() => GetOnDeckMetadata$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                Metadata: "metadata",
            });
        });

    export type Outbound = {
        size?: number | undefined;
        allowSync?: boolean | undefined;
        identifier?: string | undefined;
        mediaTagPrefix?: string | undefined;
        mediaTagVersion?: number | undefined;
        mixedParents?: boolean | undefined;
        Metadata?: Array<GetOnDeckMetadata$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOnDeckMediaContainer> = z
        .object({
            size: z.number().optional(),
            allowSync: z.boolean().optional(),
            identifier: z.string().optional(),
            mediaTagPrefix: z.string().optional(),
            mediaTagVersion: z.number().optional(),
            mixedParents: z.boolean().optional(),
            metadata: z.array(z.lazy(() => GetOnDeckMetadata$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                metadata: "Metadata",
            });
        });
}

/** @internal */
export namespace GetOnDeckResponseBody$ {
    export const inboundSchema: z.ZodType<GetOnDeckResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            MediaContainer: z.lazy(() => GetOnDeckMediaContainer$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                MediaContainer: "mediaContainer",
            });
        });

    export type Outbound = {
        MediaContainer?: GetOnDeckMediaContainer$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOnDeckResponseBody> = z
        .object({
            mediaContainer: z.lazy(() => GetOnDeckMediaContainer$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                mediaContainer: "MediaContainer",
            });
        });
}

/** @internal */
export namespace GetOnDeckResponse$ {
    export const inboundSchema: z.ZodType<GetOnDeckResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetOnDeckResponseBody$.inboundSchema).optional(),
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
        object?: GetOnDeckResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOnDeckResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetOnDeckResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
