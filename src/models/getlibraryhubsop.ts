/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import { RFCDate } from "../types/rfcdate.js";
import * as z from "zod";

/**
 * Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added).
 */
export enum QueryParamOnlyTransient {
    Zero = 0,
    One = 1,
}

export type GetLibraryHubsRequest = {
    /**
     * the Id of the library to query
     */
    sectionId: number;
    /**
     * The number of items to return with each hub.
     */
    count?: number | undefined;
    /**
     * Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added).
     */
    onlyTransient?: QueryParamOnlyTransient | undefined;
};

export type GetLibraryHubsErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetLibraryHubsHubsResponseBodyData = {
    errors?: Array<GetLibraryHubsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetLibraryHubsHubsResponseBody extends Error {
    errors?: Array<GetLibraryHubsErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetLibraryHubsHubsResponseBodyData;

    constructor(err: GetLibraryHubsHubsResponseBodyData) {
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

        this.name = "GetLibraryHubsHubsResponseBody";
    }
}

export type GetLibraryHubsPart = {
    id?: number | undefined;
    key?: string | undefined;
    duration?: number | undefined;
    file?: string | undefined;
    size?: number | undefined;
    audioProfile?: string | undefined;
    container?: string | undefined;
    has64bitOffsets?: boolean | undefined;
    optimizedForStreaming?: boolean | undefined;
    videoProfile?: string | undefined;
};

export type GetLibraryHubsMedia = {
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
    optimizedForStreaming?: number | undefined;
    audioProfile?: string | undefined;
    has64bitOffsets?: boolean | undefined;
    videoProfile?: string | undefined;
    part?: Array<GetLibraryHubsPart> | undefined;
};

export type GetLibraryHubsGenre = {
    tag?: string | undefined;
};

export type GetLibraryHubsCountry = {
    tag?: string | undefined;
};

export type GetLibraryHubsDirector = {
    tag?: string | undefined;
};

export type GetLibraryHubsRole = {
    tag?: string | undefined;
};

export type GetLibraryHubsWriter = {
    tag?: string | undefined;
};

export type GetLibraryHubsMetadata = {
    ratingKey?: string | undefined;
    key?: string | undefined;
    guid?: string | undefined;
    studio?: string | undefined;
    type?: string | undefined;
    title?: string | undefined;
    librarySectionTitle?: string | undefined;
    librarySectionID?: number | undefined;
    librarySectionKey?: string | undefined;
    contentRating?: string | undefined;
    summary?: string | undefined;
    rating?: number | undefined;
    audienceRating?: number | undefined;
    viewCount?: number | undefined;
    lastViewedAt?: number | undefined;
    year?: number | undefined;
    tagline?: string | undefined;
    thumb?: string | undefined;
    art?: string | undefined;
    duration?: number | undefined;
    originallyAvailableAt?: RFCDate | undefined;
    addedAt?: number | undefined;
    updatedAt?: number | undefined;
    audienceRatingImage?: string | undefined;
    primaryExtraKey?: string | undefined;
    ratingImage?: string | undefined;
    media?: Array<GetLibraryHubsMedia> | undefined;
    genre?: Array<GetLibraryHubsGenre> | undefined;
    country?: Array<GetLibraryHubsCountry> | undefined;
    director?: Array<GetLibraryHubsDirector> | undefined;
    role?: Array<GetLibraryHubsRole> | undefined;
    writer?: Array<GetLibraryHubsWriter> | undefined;
    skipCount?: number | undefined;
    chapterSource?: string | undefined;
};

export type GetLibraryHubsHub = {
    key?: string | undefined;
    title?: string | undefined;
    type?: string | undefined;
    hubIdentifier?: string | undefined;
    context?: string | undefined;
    size?: number | undefined;
    more?: boolean | undefined;
    style?: string | undefined;
    hubKey?: string | undefined;
    metadata?: Array<GetLibraryHubsMetadata> | undefined;
    promoted?: boolean | undefined;
    random?: boolean | undefined;
};

export type GetLibraryHubsMediaContainer = {
    size?: number | undefined;
    allowSync?: boolean | undefined;
    identifier?: string | undefined;
    librarySectionID?: number | undefined;
    librarySectionTitle?: string | undefined;
    librarySectionUUID?: string | undefined;
    hub?: Array<GetLibraryHubsHub> | undefined;
};

/**
 * The hubs specific to the library
 */
export type GetLibraryHubsResponseBody = {
    mediaContainer?: GetLibraryHubsMediaContainer | undefined;
};

export type GetLibraryHubsResponse = {
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
     * The hubs specific to the library
     */
    object?: GetLibraryHubsResponseBody | undefined;
};

/** @internal */
export namespace QueryParamOnlyTransient$ {
    export const inboundSchema: z.ZodNativeEnum<typeof QueryParamOnlyTransient> =
        z.nativeEnum(QueryParamOnlyTransient);
    export const outboundSchema: z.ZodNativeEnum<typeof QueryParamOnlyTransient> = inboundSchema;
}

/** @internal */
export namespace GetLibraryHubsRequest$ {
    export const inboundSchema: z.ZodType<GetLibraryHubsRequest, z.ZodTypeDef, unknown> = z.object({
        sectionId: z.number(),
        count: z.number().optional(),
        onlyTransient: QueryParamOnlyTransient$.inboundSchema.optional(),
    });

    export type Outbound = {
        sectionId: number;
        count?: number | undefined;
        onlyTransient?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryHubsRequest> =
        z.object({
            sectionId: z.number(),
            count: z.number().optional(),
            onlyTransient: QueryParamOnlyTransient$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace GetLibraryHubsErrors$ {
    export const inboundSchema: z.ZodType<GetLibraryHubsErrors, z.ZodTypeDef, unknown> = z.object({
        code: z.number().optional(),
        message: z.string().optional(),
        status: z.number().optional(),
    });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryHubsErrors> = z.object(
        {
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        }
    );
}

/** @internal */
export namespace GetLibraryHubsHubsResponseBody$ {
    export const inboundSchema: z.ZodType<GetLibraryHubsHubsResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            errors: z.array(z.lazy(() => GetLibraryHubsErrors$.inboundSchema)).optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            const remapped = remap$(v, {
                RawResponse: "rawResponse",
            });

            return new GetLibraryHubsHubsResponseBody(remapped);
        });

    export type Outbound = {
        errors?: Array<GetLibraryHubsErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryHubsHubsResponseBody> =
        z
            .instanceof(GetLibraryHubsHubsResponseBody)
            .transform((v) => v.data$)
            .pipe(
                z
                    .object({
                        errors: z
                            .array(z.lazy(() => GetLibraryHubsErrors$.outboundSchema))
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
export namespace GetLibraryHubsPart$ {
    export const inboundSchema: z.ZodType<GetLibraryHubsPart, z.ZodTypeDef, unknown> = z.object({
        id: z.number().int().optional(),
        key: z.string().optional(),
        duration: z.number().int().optional(),
        file: z.string().optional(),
        size: z.number().int().optional(),
        audioProfile: z.string().optional(),
        container: z.string().optional(),
        has64bitOffsets: z.boolean().optional(),
        optimizedForStreaming: z.boolean().optional(),
        videoProfile: z.string().optional(),
    });

    export type Outbound = {
        id?: number | undefined;
        key?: string | undefined;
        duration?: number | undefined;
        file?: string | undefined;
        size?: number | undefined;
        audioProfile?: string | undefined;
        container?: string | undefined;
        has64bitOffsets?: boolean | undefined;
        optimizedForStreaming?: boolean | undefined;
        videoProfile?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryHubsPart> = z.object({
        id: z.number().int().optional(),
        key: z.string().optional(),
        duration: z.number().int().optional(),
        file: z.string().optional(),
        size: z.number().int().optional(),
        audioProfile: z.string().optional(),
        container: z.string().optional(),
        has64bitOffsets: z.boolean().optional(),
        optimizedForStreaming: z.boolean().optional(),
        videoProfile: z.string().optional(),
    });
}

/** @internal */
export namespace GetLibraryHubsMedia$ {
    export const inboundSchema: z.ZodType<GetLibraryHubsMedia, z.ZodTypeDef, unknown> = z
        .object({
            id: z.number().int().optional(),
            duration: z.number().int().optional(),
            bitrate: z.number().int().optional(),
            width: z.number().int().optional(),
            height: z.number().int().optional(),
            aspectRatio: z.number().optional(),
            audioChannels: z.number().int().optional(),
            audioCodec: z.string().optional(),
            videoCodec: z.string().optional(),
            videoResolution: z.string().optional(),
            container: z.string().optional(),
            videoFrameRate: z.string().optional(),
            optimizedForStreaming: z.number().int().optional(),
            audioProfile: z.string().optional(),
            has64bitOffsets: z.boolean().optional(),
            videoProfile: z.string().optional(),
            Part: z.array(z.lazy(() => GetLibraryHubsPart$.inboundSchema)).optional(),
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
        optimizedForStreaming?: number | undefined;
        audioProfile?: string | undefined;
        has64bitOffsets?: boolean | undefined;
        videoProfile?: string | undefined;
        Part?: Array<GetLibraryHubsPart$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryHubsMedia> = z
        .object({
            id: z.number().int().optional(),
            duration: z.number().int().optional(),
            bitrate: z.number().int().optional(),
            width: z.number().int().optional(),
            height: z.number().int().optional(),
            aspectRatio: z.number().optional(),
            audioChannels: z.number().int().optional(),
            audioCodec: z.string().optional(),
            videoCodec: z.string().optional(),
            videoResolution: z.string().optional(),
            container: z.string().optional(),
            videoFrameRate: z.string().optional(),
            optimizedForStreaming: z.number().int().optional(),
            audioProfile: z.string().optional(),
            has64bitOffsets: z.boolean().optional(),
            videoProfile: z.string().optional(),
            part: z.array(z.lazy(() => GetLibraryHubsPart$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                part: "Part",
            });
        });
}

/** @internal */
export namespace GetLibraryHubsGenre$ {
    export const inboundSchema: z.ZodType<GetLibraryHubsGenre, z.ZodTypeDef, unknown> = z.object({
        tag: z.string().optional(),
    });

    export type Outbound = {
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryHubsGenre> = z.object({
        tag: z.string().optional(),
    });
}

/** @internal */
export namespace GetLibraryHubsCountry$ {
    export const inboundSchema: z.ZodType<GetLibraryHubsCountry, z.ZodTypeDef, unknown> = z.object({
        tag: z.string().optional(),
    });

    export type Outbound = {
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryHubsCountry> =
        z.object({
            tag: z.string().optional(),
        });
}

/** @internal */
export namespace GetLibraryHubsDirector$ {
    export const inboundSchema: z.ZodType<GetLibraryHubsDirector, z.ZodTypeDef, unknown> = z.object(
        {
            tag: z.string().optional(),
        }
    );

    export type Outbound = {
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryHubsDirector> =
        z.object({
            tag: z.string().optional(),
        });
}

/** @internal */
export namespace GetLibraryHubsRole$ {
    export const inboundSchema: z.ZodType<GetLibraryHubsRole, z.ZodTypeDef, unknown> = z.object({
        tag: z.string().optional(),
    });

    export type Outbound = {
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryHubsRole> = z.object({
        tag: z.string().optional(),
    });
}

/** @internal */
export namespace GetLibraryHubsWriter$ {
    export const inboundSchema: z.ZodType<GetLibraryHubsWriter, z.ZodTypeDef, unknown> = z.object({
        tag: z.string().optional(),
    });

    export type Outbound = {
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryHubsWriter> = z.object(
        {
            tag: z.string().optional(),
        }
    );
}

/** @internal */
export namespace GetLibraryHubsMetadata$ {
    export const inboundSchema: z.ZodType<GetLibraryHubsMetadata, z.ZodTypeDef, unknown> = z
        .object({
            ratingKey: z.string().optional(),
            key: z.string().optional(),
            guid: z.string().optional(),
            studio: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            librarySectionTitle: z.string().optional(),
            librarySectionID: z.number().int().optional(),
            librarySectionKey: z.string().optional(),
            contentRating: z.string().optional(),
            summary: z.string().optional(),
            rating: z.number().optional(),
            audienceRating: z.number().optional(),
            viewCount: z.number().int().optional(),
            lastViewedAt: z.number().int().optional(),
            year: z.number().int().optional(),
            tagline: z.string().optional(),
            thumb: z.string().optional(),
            art: z.string().optional(),
            duration: z.number().int().optional(),
            originallyAvailableAt: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            addedAt: z.number().int().optional(),
            updatedAt: z.number().int().optional(),
            audienceRatingImage: z.string().optional(),
            primaryExtraKey: z.string().optional(),
            ratingImage: z.string().optional(),
            Media: z.array(z.lazy(() => GetLibraryHubsMedia$.inboundSchema)).optional(),
            Genre: z.array(z.lazy(() => GetLibraryHubsGenre$.inboundSchema)).optional(),
            Country: z.array(z.lazy(() => GetLibraryHubsCountry$.inboundSchema)).optional(),
            Director: z.array(z.lazy(() => GetLibraryHubsDirector$.inboundSchema)).optional(),
            Role: z.array(z.lazy(() => GetLibraryHubsRole$.inboundSchema)).optional(),
            Writer: z.array(z.lazy(() => GetLibraryHubsWriter$.inboundSchema)).optional(),
            skipCount: z.number().int().optional(),
            chapterSource: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                Media: "media",
                Genre: "genre",
                Country: "country",
                Director: "director",
                Role: "role",
                Writer: "writer",
            });
        });

    export type Outbound = {
        ratingKey?: string | undefined;
        key?: string | undefined;
        guid?: string | undefined;
        studio?: string | undefined;
        type?: string | undefined;
        title?: string | undefined;
        librarySectionTitle?: string | undefined;
        librarySectionID?: number | undefined;
        librarySectionKey?: string | undefined;
        contentRating?: string | undefined;
        summary?: string | undefined;
        rating?: number | undefined;
        audienceRating?: number | undefined;
        viewCount?: number | undefined;
        lastViewedAt?: number | undefined;
        year?: number | undefined;
        tagline?: string | undefined;
        thumb?: string | undefined;
        art?: string | undefined;
        duration?: number | undefined;
        originallyAvailableAt?: string | undefined;
        addedAt?: number | undefined;
        updatedAt?: number | undefined;
        audienceRatingImage?: string | undefined;
        primaryExtraKey?: string | undefined;
        ratingImage?: string | undefined;
        Media?: Array<GetLibraryHubsMedia$.Outbound> | undefined;
        Genre?: Array<GetLibraryHubsGenre$.Outbound> | undefined;
        Country?: Array<GetLibraryHubsCountry$.Outbound> | undefined;
        Director?: Array<GetLibraryHubsDirector$.Outbound> | undefined;
        Role?: Array<GetLibraryHubsRole$.Outbound> | undefined;
        Writer?: Array<GetLibraryHubsWriter$.Outbound> | undefined;
        skipCount?: number | undefined;
        chapterSource?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryHubsMetadata> = z
        .object({
            ratingKey: z.string().optional(),
            key: z.string().optional(),
            guid: z.string().optional(),
            studio: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            librarySectionTitle: z.string().optional(),
            librarySectionID: z.number().int().optional(),
            librarySectionKey: z.string().optional(),
            contentRating: z.string().optional(),
            summary: z.string().optional(),
            rating: z.number().optional(),
            audienceRating: z.number().optional(),
            viewCount: z.number().int().optional(),
            lastViewedAt: z.number().int().optional(),
            year: z.number().int().optional(),
            tagline: z.string().optional(),
            thumb: z.string().optional(),
            art: z.string().optional(),
            duration: z.number().int().optional(),
            originallyAvailableAt: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            addedAt: z.number().int().optional(),
            updatedAt: z.number().int().optional(),
            audienceRatingImage: z.string().optional(),
            primaryExtraKey: z.string().optional(),
            ratingImage: z.string().optional(),
            media: z.array(z.lazy(() => GetLibraryHubsMedia$.outboundSchema)).optional(),
            genre: z.array(z.lazy(() => GetLibraryHubsGenre$.outboundSchema)).optional(),
            country: z.array(z.lazy(() => GetLibraryHubsCountry$.outboundSchema)).optional(),
            director: z.array(z.lazy(() => GetLibraryHubsDirector$.outboundSchema)).optional(),
            role: z.array(z.lazy(() => GetLibraryHubsRole$.outboundSchema)).optional(),
            writer: z.array(z.lazy(() => GetLibraryHubsWriter$.outboundSchema)).optional(),
            skipCount: z.number().int().optional(),
            chapterSource: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                media: "Media",
                genre: "Genre",
                country: "Country",
                director: "Director",
                role: "Role",
                writer: "Writer",
            });
        });
}

/** @internal */
export namespace GetLibraryHubsHub$ {
    export const inboundSchema: z.ZodType<GetLibraryHubsHub, z.ZodTypeDef, unknown> = z
        .object({
            key: z.string().optional(),
            title: z.string().optional(),
            type: z.string().optional(),
            hubIdentifier: z.string().optional(),
            context: z.string().optional(),
            size: z.number().int().optional(),
            more: z.boolean().optional(),
            style: z.string().optional(),
            hubKey: z.string().optional(),
            Metadata: z.array(z.lazy(() => GetLibraryHubsMetadata$.inboundSchema)).optional(),
            promoted: z.boolean().optional(),
            random: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                Metadata: "metadata",
            });
        });

    export type Outbound = {
        key?: string | undefined;
        title?: string | undefined;
        type?: string | undefined;
        hubIdentifier?: string | undefined;
        context?: string | undefined;
        size?: number | undefined;
        more?: boolean | undefined;
        style?: string | undefined;
        hubKey?: string | undefined;
        Metadata?: Array<GetLibraryHubsMetadata$.Outbound> | undefined;
        promoted?: boolean | undefined;
        random?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryHubsHub> = z
        .object({
            key: z.string().optional(),
            title: z.string().optional(),
            type: z.string().optional(),
            hubIdentifier: z.string().optional(),
            context: z.string().optional(),
            size: z.number().int().optional(),
            more: z.boolean().optional(),
            style: z.string().optional(),
            hubKey: z.string().optional(),
            metadata: z.array(z.lazy(() => GetLibraryHubsMetadata$.outboundSchema)).optional(),
            promoted: z.boolean().optional(),
            random: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                metadata: "Metadata",
            });
        });
}

/** @internal */
export namespace GetLibraryHubsMediaContainer$ {
    export const inboundSchema: z.ZodType<GetLibraryHubsMediaContainer, z.ZodTypeDef, unknown> = z
        .object({
            size: z.number().int().optional(),
            allowSync: z.boolean().optional(),
            identifier: z.string().optional(),
            librarySectionID: z.number().int().optional(),
            librarySectionTitle: z.string().optional(),
            librarySectionUUID: z.string().optional(),
            Hub: z.array(z.lazy(() => GetLibraryHubsHub$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                Hub: "hub",
            });
        });

    export type Outbound = {
        size?: number | undefined;
        allowSync?: boolean | undefined;
        identifier?: string | undefined;
        librarySectionID?: number | undefined;
        librarySectionTitle?: string | undefined;
        librarySectionUUID?: string | undefined;
        Hub?: Array<GetLibraryHubsHub$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryHubsMediaContainer> = z
        .object({
            size: z.number().int().optional(),
            allowSync: z.boolean().optional(),
            identifier: z.string().optional(),
            librarySectionID: z.number().int().optional(),
            librarySectionTitle: z.string().optional(),
            librarySectionUUID: z.string().optional(),
            hub: z.array(z.lazy(() => GetLibraryHubsHub$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                hub: "Hub",
            });
        });
}

/** @internal */
export namespace GetLibraryHubsResponseBody$ {
    export const inboundSchema: z.ZodType<GetLibraryHubsResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            MediaContainer: z.lazy(() => GetLibraryHubsMediaContainer$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                MediaContainer: "mediaContainer",
            });
        });

    export type Outbound = {
        MediaContainer?: GetLibraryHubsMediaContainer$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryHubsResponseBody> = z
        .object({
            mediaContainer: z.lazy(() => GetLibraryHubsMediaContainer$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                mediaContainer: "MediaContainer",
            });
        });
}

/** @internal */
export namespace GetLibraryHubsResponse$ {
    export const inboundSchema: z.ZodType<GetLibraryHubsResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetLibraryHubsResponseBody$.inboundSchema).optional(),
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
        object?: GetLibraryHubsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLibraryHubsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetLibraryHubsResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
