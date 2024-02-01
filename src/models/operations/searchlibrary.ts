/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Plex content type to search for
 */
export enum Type {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
}

export type SearchLibraryRequest = {
    /**
     * the Id of the library to query
     */
    sectionId: number;
    /**
     * Plex content type to search for
     */
    type: Type;
};

export type SearchLibraryMetadata = {
    ratingKey?: string | undefined;
    key?: string | undefined;
    parentRatingKey?: string | undefined;
    guid?: string | undefined;
    parentGuid?: string | undefined;
    parentStudio?: string | undefined;
    type?: string | undefined;
    title?: string | undefined;
    parentKey?: string | undefined;
    parentTitle?: string | undefined;
    summary?: string | undefined;
    index?: number | undefined;
    parentIndex?: number | undefined;
    parentYear?: number | undefined;
    thumb?: string | undefined;
    art?: string | undefined;
    parentThumb?: string | undefined;
    parentTheme?: string | undefined;
    addedAt?: number | undefined;
    updatedAt?: number | undefined;
};

export type SearchLibraryMediaContainer = {
    size?: number | undefined;
    allowSync?: boolean | undefined;
    art?: string | undefined;
    identifier?: string | undefined;
    mediaTagPrefix?: string | undefined;
    mediaTagVersion?: number | undefined;
    nocache?: boolean | undefined;
    thumb?: string | undefined;
    title1?: string | undefined;
    title2?: string | undefined;
    viewGroup?: string | undefined;
    viewMode?: number | undefined;
    metadata?: Array<SearchLibraryMetadata> | undefined;
};

/**
 * The contents of the library by section and type
 */
export type SearchLibraryResponseBody = {
    mediaContainer?: SearchLibraryMediaContainer | undefined;
};

export type SearchLibraryResponse = {
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
     * The contents of the library by section and type
     */
    object?: SearchLibraryResponseBody | undefined;
};

/** @internal */
export const Type$ = z.nativeEnum(Type);

/** @internal */
export namespace SearchLibraryRequest$ {
    export type Inbound = {
        sectionId: number;
        type: Type;
    };

    export const inboundSchema: z.ZodType<SearchLibraryRequest, z.ZodTypeDef, Inbound> = z
        .object({
            sectionId: z.number().int(),
            type: Type$,
        })
        .transform((v) => {
            return {
                sectionId: v.sectionId,
                type: v.type,
            };
        });

    export type Outbound = {
        sectionId: number;
        type: Type;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SearchLibraryRequest> = z
        .object({
            sectionId: z.number().int(),
            type: Type$,
        })
        .transform((v) => {
            return {
                sectionId: v.sectionId,
                type: v.type,
            };
        });
}

/** @internal */
export namespace SearchLibraryMetadata$ {
    export type Inbound = {
        ratingKey?: string | undefined;
        key?: string | undefined;
        parentRatingKey?: string | undefined;
        guid?: string | undefined;
        parentGuid?: string | undefined;
        parentStudio?: string | undefined;
        type?: string | undefined;
        title?: string | undefined;
        parentKey?: string | undefined;
        parentTitle?: string | undefined;
        summary?: string | undefined;
        index?: number | undefined;
        parentIndex?: number | undefined;
        parentYear?: number | undefined;
        thumb?: string | undefined;
        art?: string | undefined;
        parentThumb?: string | undefined;
        parentTheme?: string | undefined;
        addedAt?: number | undefined;
        updatedAt?: number | undefined;
    };

    export const inboundSchema: z.ZodType<SearchLibraryMetadata, z.ZodTypeDef, Inbound> = z
        .object({
            ratingKey: z.string().optional(),
            key: z.string().optional(),
            parentRatingKey: z.string().optional(),
            guid: z.string().optional(),
            parentGuid: z.string().optional(),
            parentStudio: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            parentKey: z.string().optional(),
            parentTitle: z.string().optional(),
            summary: z.string().optional(),
            index: z.number().int().optional(),
            parentIndex: z.number().int().optional(),
            parentYear: z.number().int().optional(),
            thumb: z.string().optional(),
            art: z.string().optional(),
            parentThumb: z.string().optional(),
            parentTheme: z.string().optional(),
            addedAt: z.number().int().optional(),
            updatedAt: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.ratingKey === undefined ? null : { ratingKey: v.ratingKey }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.parentRatingKey === undefined
                    ? null
                    : { parentRatingKey: v.parentRatingKey }),
                ...(v.guid === undefined ? null : { guid: v.guid }),
                ...(v.parentGuid === undefined ? null : { parentGuid: v.parentGuid }),
                ...(v.parentStudio === undefined ? null : { parentStudio: v.parentStudio }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.parentKey === undefined ? null : { parentKey: v.parentKey }),
                ...(v.parentTitle === undefined ? null : { parentTitle: v.parentTitle }),
                ...(v.summary === undefined ? null : { summary: v.summary }),
                ...(v.index === undefined ? null : { index: v.index }),
                ...(v.parentIndex === undefined ? null : { parentIndex: v.parentIndex }),
                ...(v.parentYear === undefined ? null : { parentYear: v.parentYear }),
                ...(v.thumb === undefined ? null : { thumb: v.thumb }),
                ...(v.art === undefined ? null : { art: v.art }),
                ...(v.parentThumb === undefined ? null : { parentThumb: v.parentThumb }),
                ...(v.parentTheme === undefined ? null : { parentTheme: v.parentTheme }),
                ...(v.addedAt === undefined ? null : { addedAt: v.addedAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });

    export type Outbound = {
        ratingKey?: string | undefined;
        key?: string | undefined;
        parentRatingKey?: string | undefined;
        guid?: string | undefined;
        parentGuid?: string | undefined;
        parentStudio?: string | undefined;
        type?: string | undefined;
        title?: string | undefined;
        parentKey?: string | undefined;
        parentTitle?: string | undefined;
        summary?: string | undefined;
        index?: number | undefined;
        parentIndex?: number | undefined;
        parentYear?: number | undefined;
        thumb?: string | undefined;
        art?: string | undefined;
        parentThumb?: string | undefined;
        parentTheme?: string | undefined;
        addedAt?: number | undefined;
        updatedAt?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SearchLibraryMetadata> = z
        .object({
            ratingKey: z.string().optional(),
            key: z.string().optional(),
            parentRatingKey: z.string().optional(),
            guid: z.string().optional(),
            parentGuid: z.string().optional(),
            parentStudio: z.string().optional(),
            type: z.string().optional(),
            title: z.string().optional(),
            parentKey: z.string().optional(),
            parentTitle: z.string().optional(),
            summary: z.string().optional(),
            index: z.number().int().optional(),
            parentIndex: z.number().int().optional(),
            parentYear: z.number().int().optional(),
            thumb: z.string().optional(),
            art: z.string().optional(),
            parentThumb: z.string().optional(),
            parentTheme: z.string().optional(),
            addedAt: z.number().int().optional(),
            updatedAt: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.ratingKey === undefined ? null : { ratingKey: v.ratingKey }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.parentRatingKey === undefined
                    ? null
                    : { parentRatingKey: v.parentRatingKey }),
                ...(v.guid === undefined ? null : { guid: v.guid }),
                ...(v.parentGuid === undefined ? null : { parentGuid: v.parentGuid }),
                ...(v.parentStudio === undefined ? null : { parentStudio: v.parentStudio }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.parentKey === undefined ? null : { parentKey: v.parentKey }),
                ...(v.parentTitle === undefined ? null : { parentTitle: v.parentTitle }),
                ...(v.summary === undefined ? null : { summary: v.summary }),
                ...(v.index === undefined ? null : { index: v.index }),
                ...(v.parentIndex === undefined ? null : { parentIndex: v.parentIndex }),
                ...(v.parentYear === undefined ? null : { parentYear: v.parentYear }),
                ...(v.thumb === undefined ? null : { thumb: v.thumb }),
                ...(v.art === undefined ? null : { art: v.art }),
                ...(v.parentThumb === undefined ? null : { parentThumb: v.parentThumb }),
                ...(v.parentTheme === undefined ? null : { parentTheme: v.parentTheme }),
                ...(v.addedAt === undefined ? null : { addedAt: v.addedAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });
}

/** @internal */
export namespace SearchLibraryMediaContainer$ {
    export type Inbound = {
        size?: number | undefined;
        allowSync?: boolean | undefined;
        art?: string | undefined;
        identifier?: string | undefined;
        mediaTagPrefix?: string | undefined;
        mediaTagVersion?: number | undefined;
        nocache?: boolean | undefined;
        thumb?: string | undefined;
        title1?: string | undefined;
        title2?: string | undefined;
        viewGroup?: string | undefined;
        viewMode?: number | undefined;
        Metadata?: Array<SearchLibraryMetadata$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<SearchLibraryMediaContainer, z.ZodTypeDef, Inbound> = z
        .object({
            size: z.number().int().optional(),
            allowSync: z.boolean().optional(),
            art: z.string().optional(),
            identifier: z.string().optional(),
            mediaTagPrefix: z.string().optional(),
            mediaTagVersion: z.number().int().optional(),
            nocache: z.boolean().optional(),
            thumb: z.string().optional(),
            title1: z.string().optional(),
            title2: z.string().optional(),
            viewGroup: z.string().optional(),
            viewMode: z.number().int().optional(),
            Metadata: z.array(z.lazy(() => SearchLibraryMetadata$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.allowSync === undefined ? null : { allowSync: v.allowSync }),
                ...(v.art === undefined ? null : { art: v.art }),
                ...(v.identifier === undefined ? null : { identifier: v.identifier }),
                ...(v.mediaTagPrefix === undefined ? null : { mediaTagPrefix: v.mediaTagPrefix }),
                ...(v.mediaTagVersion === undefined
                    ? null
                    : { mediaTagVersion: v.mediaTagVersion }),
                ...(v.nocache === undefined ? null : { nocache: v.nocache }),
                ...(v.thumb === undefined ? null : { thumb: v.thumb }),
                ...(v.title1 === undefined ? null : { title1: v.title1 }),
                ...(v.title2 === undefined ? null : { title2: v.title2 }),
                ...(v.viewGroup === undefined ? null : { viewGroup: v.viewGroup }),
                ...(v.viewMode === undefined ? null : { viewMode: v.viewMode }),
                ...(v.Metadata === undefined ? null : { metadata: v.Metadata }),
            };
        });

    export type Outbound = {
        size?: number | undefined;
        allowSync?: boolean | undefined;
        art?: string | undefined;
        identifier?: string | undefined;
        mediaTagPrefix?: string | undefined;
        mediaTagVersion?: number | undefined;
        nocache?: boolean | undefined;
        thumb?: string | undefined;
        title1?: string | undefined;
        title2?: string | undefined;
        viewGroup?: string | undefined;
        viewMode?: number | undefined;
        Metadata?: Array<SearchLibraryMetadata$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SearchLibraryMediaContainer> = z
        .object({
            size: z.number().int().optional(),
            allowSync: z.boolean().optional(),
            art: z.string().optional(),
            identifier: z.string().optional(),
            mediaTagPrefix: z.string().optional(),
            mediaTagVersion: z.number().int().optional(),
            nocache: z.boolean().optional(),
            thumb: z.string().optional(),
            title1: z.string().optional(),
            title2: z.string().optional(),
            viewGroup: z.string().optional(),
            viewMode: z.number().int().optional(),
            metadata: z.array(z.lazy(() => SearchLibraryMetadata$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.allowSync === undefined ? null : { allowSync: v.allowSync }),
                ...(v.art === undefined ? null : { art: v.art }),
                ...(v.identifier === undefined ? null : { identifier: v.identifier }),
                ...(v.mediaTagPrefix === undefined ? null : { mediaTagPrefix: v.mediaTagPrefix }),
                ...(v.mediaTagVersion === undefined
                    ? null
                    : { mediaTagVersion: v.mediaTagVersion }),
                ...(v.nocache === undefined ? null : { nocache: v.nocache }),
                ...(v.thumb === undefined ? null : { thumb: v.thumb }),
                ...(v.title1 === undefined ? null : { title1: v.title1 }),
                ...(v.title2 === undefined ? null : { title2: v.title2 }),
                ...(v.viewGroup === undefined ? null : { viewGroup: v.viewGroup }),
                ...(v.viewMode === undefined ? null : { viewMode: v.viewMode }),
                ...(v.metadata === undefined ? null : { Metadata: v.metadata }),
            };
        });
}

/** @internal */
export namespace SearchLibraryResponseBody$ {
    export type Inbound = {
        MediaContainer?: SearchLibraryMediaContainer$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<SearchLibraryResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            MediaContainer: z.lazy(() => SearchLibraryMediaContainer$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.MediaContainer === undefined ? null : { mediaContainer: v.MediaContainer }),
            };
        });

    export type Outbound = {
        MediaContainer?: SearchLibraryMediaContainer$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SearchLibraryResponseBody> = z
        .object({
            mediaContainer: z.lazy(() => SearchLibraryMediaContainer$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.mediaContainer === undefined ? null : { MediaContainer: v.mediaContainer }),
            };
        });
}

/** @internal */
export namespace SearchLibraryResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: SearchLibraryResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<SearchLibraryResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => SearchLibraryResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: SearchLibraryResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SearchLibraryResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => SearchLibraryResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
