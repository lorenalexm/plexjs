/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export type GetRecentlyAddedErrors = {
    code?: number | undefined;
    message?: string | undefined;
    status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetRecentlyAddedLibraryResponseBodyData = {
    errors?: Array<GetRecentlyAddedErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetRecentlyAddedLibraryResponseBody extends Error {
    errors?: Array<GetRecentlyAddedErrors> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetRecentlyAddedLibraryResponseBodyData;

    constructor(err: GetRecentlyAddedLibraryResponseBodyData) {
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

        this.name = "GetRecentlyAddedLibraryResponseBody";
    }
}

export type Part = {
    id?: number | undefined;
    key?: string | undefined;
    duration?: number | undefined;
    file?: string | undefined;
    size?: number | undefined;
    container?: string | undefined;
    has64bitOffsets?: boolean | undefined;
    hasThumbnail?: number | undefined;
    optimizedForStreaming?: boolean | undefined;
    videoProfile?: string | undefined;
};

export type GetRecentlyAddedMedia = {
    id?: number | undefined;
    duration?: number | undefined;
    bitrate?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    aspectRatio?: number | undefined;
    audioChannels?: number | undefined;
    audioCodec?: string | undefined;
    videoCodec?: string | undefined;
    videoResolution?: number | undefined;
    container?: string | undefined;
    videoFrameRate?: string | undefined;
    optimizedForStreaming?: number | undefined;
    has64bitOffsets?: boolean | undefined;
    videoProfile?: string | undefined;
    part?: Array<Part> | undefined;
};

export type Genre = {
    tag?: string | undefined;
};

export type Director = {
    tag?: string | undefined;
};

export type Writer = {
    tag?: string | undefined;
};

export type Country = {
    tag?: string | undefined;
};

export type Role = {
    tag?: string | undefined;
};

export type GetRecentlyAddedMetadata = {
    allowSync?: boolean | undefined;
    librarySectionID?: number | undefined;
    librarySectionTitle?: string | undefined;
    librarySectionUUID?: string | undefined;
    ratingKey?: number | undefined;
    key?: string | undefined;
    guid?: string | undefined;
    studio?: string | undefined;
    type?: string | undefined;
    title?: string | undefined;
    contentRating?: string | undefined;
    summary?: string | undefined;
    rating?: number | undefined;
    audienceRating?: number | undefined;
    year?: number | undefined;
    tagline?: string | undefined;
    thumb?: string | undefined;
    art?: string | undefined;
    duration?: number | undefined;
    originallyAvailableAt?: Date | undefined;
    addedAt?: number | undefined;
    updatedAt?: number | undefined;
    audienceRatingImage?: string | undefined;
    chapterSource?: string | undefined;
    primaryExtraKey?: string | undefined;
    ratingImage?: string | undefined;
    media?: Array<GetRecentlyAddedMedia> | undefined;
    genre?: Array<Genre> | undefined;
    director?: Array<Director> | undefined;
    writer?: Array<Writer> | undefined;
    country?: Array<Country> | undefined;
    role?: Array<Role> | undefined;
};

export type GetRecentlyAddedMediaContainer = {
    size?: number | undefined;
    allowSync?: boolean | undefined;
    identifier?: string | undefined;
    mediaTagPrefix?: string | undefined;
    mediaTagVersion?: number | undefined;
    mixedParents?: boolean | undefined;
    metadata?: Array<GetRecentlyAddedMetadata> | undefined;
};

/**
 * The recently added content
 */
export type GetRecentlyAddedResponseBody = {
    mediaContainer?: GetRecentlyAddedMediaContainer | undefined;
};

export type GetRecentlyAddedResponse = {
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
     * The recently added content
     */
    object?: GetRecentlyAddedResponseBody | undefined;
};

/** @internal */
export namespace GetRecentlyAddedErrors$ {
    export const inboundSchema: z.ZodType<GetRecentlyAddedErrors, z.ZodTypeDef, unknown> = z.object(
        {
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        }
    );

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        status?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRecentlyAddedErrors> =
        z.object({
            code: z.number().optional(),
            message: z.string().optional(),
            status: z.number().optional(),
        });
}

/** @internal */
export namespace GetRecentlyAddedLibraryResponseBody$ {
    export const inboundSchema: z.ZodType<
        GetRecentlyAddedLibraryResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            errors: z.array(z.lazy(() => GetRecentlyAddedErrors$.inboundSchema)).optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            const remapped = remap$(v, {
                RawResponse: "rawResponse",
            });

            return new GetRecentlyAddedLibraryResponseBody(remapped);
        });

    export type Outbound = {
        errors?: Array<GetRecentlyAddedErrors$.Outbound> | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetRecentlyAddedLibraryResponseBody
    > = z
        .instanceof(GetRecentlyAddedLibraryResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z
                        .array(z.lazy(() => GetRecentlyAddedErrors$.outboundSchema))
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
export namespace Part$ {
    export const inboundSchema: z.ZodType<Part, z.ZodTypeDef, unknown> = z.object({
        id: z.number().optional(),
        key: z.string().optional(),
        duration: z.number().optional(),
        file: z.string().optional(),
        size: z.number().optional(),
        container: z.string().optional(),
        has64bitOffsets: z.boolean().optional(),
        hasThumbnail: z.number().optional(),
        optimizedForStreaming: z.boolean().optional(),
        videoProfile: z.string().optional(),
    });

    export type Outbound = {
        id?: number | undefined;
        key?: string | undefined;
        duration?: number | undefined;
        file?: string | undefined;
        size?: number | undefined;
        container?: string | undefined;
        has64bitOffsets?: boolean | undefined;
        hasThumbnail?: number | undefined;
        optimizedForStreaming?: boolean | undefined;
        videoProfile?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Part> = z.object({
        id: z.number().optional(),
        key: z.string().optional(),
        duration: z.number().optional(),
        file: z.string().optional(),
        size: z.number().optional(),
        container: z.string().optional(),
        has64bitOffsets: z.boolean().optional(),
        hasThumbnail: z.number().optional(),
        optimizedForStreaming: z.boolean().optional(),
        videoProfile: z.string().optional(),
    });
}

/** @internal */
export namespace GetRecentlyAddedMedia$ {
    export const inboundSchema: z.ZodType<GetRecentlyAddedMedia, z.ZodTypeDef, unknown> = z
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
            videoResolution: z.number().optional(),
            container: z.string().optional(),
            videoFrameRate: z.string().optional(),
            optimizedForStreaming: z.number().optional(),
            has64bitOffsets: z.boolean().optional(),
            videoProfile: z.string().optional(),
            Part: z.array(z.lazy(() => Part$.inboundSchema)).optional(),
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
        videoResolution?: number | undefined;
        container?: string | undefined;
        videoFrameRate?: string | undefined;
        optimizedForStreaming?: number | undefined;
        has64bitOffsets?: boolean | undefined;
        videoProfile?: string | undefined;
        Part?: Array<Part$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRecentlyAddedMedia> = z
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
            videoResolution: z.number().optional(),
            container: z.string().optional(),
            videoFrameRate: z.string().optional(),
            optimizedForStreaming: z.number().optional(),
            has64bitOffsets: z.boolean().optional(),
            videoProfile: z.string().optional(),
            part: z.array(z.lazy(() => Part$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                part: "Part",
            });
        });
}

/** @internal */
export namespace Genre$ {
    export const inboundSchema: z.ZodType<Genre, z.ZodTypeDef, unknown> = z.object({
        tag: z.string().optional(),
    });

    export type Outbound = {
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Genre> = z.object({
        tag: z.string().optional(),
    });
}

/** @internal */
export namespace Director$ {
    export const inboundSchema: z.ZodType<Director, z.ZodTypeDef, unknown> = z.object({
        tag: z.string().optional(),
    });

    export type Outbound = {
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Director> = z.object({
        tag: z.string().optional(),
    });
}

/** @internal */
export namespace Writer$ {
    export const inboundSchema: z.ZodType<Writer, z.ZodTypeDef, unknown> = z.object({
        tag: z.string().optional(),
    });

    export type Outbound = {
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Writer> = z.object({
        tag: z.string().optional(),
    });
}

/** @internal */
export namespace Country$ {
    export const inboundSchema: z.ZodType<Country, z.ZodTypeDef, unknown> = z.object({
        tag: z.string().optional(),
    });

    export type Outbound = {
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Country> = z.object({
        tag: z.string().optional(),
    });
}

/** @internal */
export namespace Role$ {
    export const inboundSchema: z.ZodType<Role, z.ZodTypeDef, unknown> = z.object({
        tag: z.string().optional(),
    });

    export type Outbound = {
        tag?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Role> = z.object({
        tag: z.string().optional(),
    });
}

/** @internal */
export namespace GetRecentlyAddedMetadata$ {
    export const inboundSchema: z.ZodType<GetRecentlyAddedMetadata, z.ZodTypeDef, unknown> = z
        .object({
            allowSync: z.boolean().optional(),
            librarySectionID: z.number().optional(),
            librarySectionTitle: z.string().optional(),
            librarySectionUUID: z.string().optional(),
            ratingKey: z.number().optional(),
            key: z.string().optional(),
            guid: z.string().optional(),
            studio: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            contentRating: z.string().optional(),
            summary: z.string().optional(),
            rating: z.number().optional(),
            audienceRating: z.number().optional(),
            year: z.number().optional(),
            tagline: z.string().optional(),
            thumb: z.string().optional(),
            art: z.string().optional(),
            duration: z.number().optional(),
            originallyAvailableAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            addedAt: z.number().optional(),
            updatedAt: z.number().optional(),
            audienceRatingImage: z.string().optional(),
            chapterSource: z.string().optional(),
            primaryExtraKey: z.string().optional(),
            ratingImage: z.string().optional(),
            Media: z.array(z.lazy(() => GetRecentlyAddedMedia$.inboundSchema)).optional(),
            Genre: z.array(z.lazy(() => Genre$.inboundSchema)).optional(),
            Director: z.array(z.lazy(() => Director$.inboundSchema)).optional(),
            Writer: z.array(z.lazy(() => Writer$.inboundSchema)).optional(),
            Country: z.array(z.lazy(() => Country$.inboundSchema)).optional(),
            Role: z.array(z.lazy(() => Role$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                Media: "media",
                Genre: "genre",
                Director: "director",
                Writer: "writer",
                Country: "country",
                Role: "role",
            });
        });

    export type Outbound = {
        allowSync?: boolean | undefined;
        librarySectionID?: number | undefined;
        librarySectionTitle?: string | undefined;
        librarySectionUUID?: string | undefined;
        ratingKey?: number | undefined;
        key?: string | undefined;
        guid?: string | undefined;
        studio?: string | undefined;
        type?: string | undefined;
        title?: string | undefined;
        contentRating?: string | undefined;
        summary?: string | undefined;
        rating?: number | undefined;
        audienceRating?: number | undefined;
        year?: number | undefined;
        tagline?: string | undefined;
        thumb?: string | undefined;
        art?: string | undefined;
        duration?: number | undefined;
        originallyAvailableAt?: string | undefined;
        addedAt?: number | undefined;
        updatedAt?: number | undefined;
        audienceRatingImage?: string | undefined;
        chapterSource?: string | undefined;
        primaryExtraKey?: string | undefined;
        ratingImage?: string | undefined;
        Media?: Array<GetRecentlyAddedMedia$.Outbound> | undefined;
        Genre?: Array<Genre$.Outbound> | undefined;
        Director?: Array<Director$.Outbound> | undefined;
        Writer?: Array<Writer$.Outbound> | undefined;
        Country?: Array<Country$.Outbound> | undefined;
        Role?: Array<Role$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRecentlyAddedMetadata> = z
        .object({
            allowSync: z.boolean().optional(),
            librarySectionID: z.number().optional(),
            librarySectionTitle: z.string().optional(),
            librarySectionUUID: z.string().optional(),
            ratingKey: z.number().optional(),
            key: z.string().optional(),
            guid: z.string().optional(),
            studio: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            contentRating: z.string().optional(),
            summary: z.string().optional(),
            rating: z.number().optional(),
            audienceRating: z.number().optional(),
            year: z.number().optional(),
            tagline: z.string().optional(),
            thumb: z.string().optional(),
            art: z.string().optional(),
            duration: z.number().optional(),
            originallyAvailableAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            addedAt: z.number().optional(),
            updatedAt: z.number().optional(),
            audienceRatingImage: z.string().optional(),
            chapterSource: z.string().optional(),
            primaryExtraKey: z.string().optional(),
            ratingImage: z.string().optional(),
            media: z.array(z.lazy(() => GetRecentlyAddedMedia$.outboundSchema)).optional(),
            genre: z.array(z.lazy(() => Genre$.outboundSchema)).optional(),
            director: z.array(z.lazy(() => Director$.outboundSchema)).optional(),
            writer: z.array(z.lazy(() => Writer$.outboundSchema)).optional(),
            country: z.array(z.lazy(() => Country$.outboundSchema)).optional(),
            role: z.array(z.lazy(() => Role$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                media: "Media",
                genre: "Genre",
                director: "Director",
                writer: "Writer",
                country: "Country",
                role: "Role",
            });
        });
}

/** @internal */
export namespace GetRecentlyAddedMediaContainer$ {
    export const inboundSchema: z.ZodType<GetRecentlyAddedMediaContainer, z.ZodTypeDef, unknown> = z
        .object({
            size: z.number().optional(),
            allowSync: z.boolean().optional(),
            identifier: z.string().optional(),
            mediaTagPrefix: z.string().optional(),
            mediaTagVersion: z.number().optional(),
            mixedParents: z.boolean().optional(),
            Metadata: z.array(z.lazy(() => GetRecentlyAddedMetadata$.inboundSchema)).optional(),
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
        Metadata?: Array<GetRecentlyAddedMetadata$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRecentlyAddedMediaContainer> =
        z
            .object({
                size: z.number().optional(),
                allowSync: z.boolean().optional(),
                identifier: z.string().optional(),
                mediaTagPrefix: z.string().optional(),
                mediaTagVersion: z.number().optional(),
                mixedParents: z.boolean().optional(),
                metadata: z
                    .array(z.lazy(() => GetRecentlyAddedMetadata$.outboundSchema))
                    .optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    metadata: "Metadata",
                });
            });
}

/** @internal */
export namespace GetRecentlyAddedResponseBody$ {
    export const inboundSchema: z.ZodType<GetRecentlyAddedResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            MediaContainer: z.lazy(() => GetRecentlyAddedMediaContainer$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                MediaContainer: "mediaContainer",
            });
        });

    export type Outbound = {
        MediaContainer?: GetRecentlyAddedMediaContainer$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRecentlyAddedResponseBody> = z
        .object({
            mediaContainer: z.lazy(() => GetRecentlyAddedMediaContainer$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                mediaContainer: "MediaContainer",
            });
        });
}

/** @internal */
export namespace GetRecentlyAddedResponse$ {
    export const inboundSchema: z.ZodType<GetRecentlyAddedResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetRecentlyAddedResponseBody$.inboundSchema).optional(),
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
        object?: GetRecentlyAddedResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRecentlyAddedResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetRecentlyAddedResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
