/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { RFCDate } from "../../types/rfcdate.js";

export const GetWatchListServerList = [
  /**
   * The plex metadata provider server
   */
  "https://metadata.provider.plex.tv",
] as const;

/**
 * Filter
 */
export enum Filter {
  All = "all",
  Available = "available",
  Released = "released",
}

/**
 * The type of library to filter. Can be "movie" or "show", or all if not present.
 *
 * @remarks
 */
export enum Libtype {
  Movie = "movie",
  Show = "show",
}

/**
 * include collections in the results
 *
 * @remarks
 */
export enum IncludeCollections {
  One = 1,
  Zero = 0,
}

/**
 * include external media in the results
 *
 * @remarks
 */
export enum IncludeExternalMedia {
  One = 1,
  Zero = 0,
}

export type GetWatchListRequest = {
  /**
   * Filter
   */
  filter: Filter;
  /**
   * In the format "field:dir". Available fields are "watchlistedAt" (Added At),
   *
   * @remarks
   * "titleSort" (Title), "originallyAvailableAt" (Release Date), or "rating" (Critic Rating).
   * "dir" can be "asc" or "desc"
   */
  sort?: string | undefined;
  /**
   * The type of library to filter. Can be "movie" or "show", or all if not present.
   *
   * @remarks
   */
  libtype?: Libtype | undefined;
  /**
   * The number of items to return. If not specified, all items will be returned.
   *
   * @remarks
   * If the number of items exceeds the limit, the response will be paginated.
   */
  maxresults?: number | undefined;
  /**
   * include collections in the results
   *
   * @remarks
   */
  includeCollections?: IncludeCollections | undefined;
  /**
   * include external media in the results
   *
   * @remarks
   */
  includeExternalMedia?: IncludeExternalMedia | undefined;
  /**
   * The index of the first item to return. If not specified, the first item will be returned.
   *
   * @remarks
   * If the number of items exceeds the limit, the response will be paginated.
   * By default this is 0
   */
  xPlexContainerStart?: number | undefined;
  /**
   * The number of items to return. If not specified, all items will be returned.
   *
   * @remarks
   * If the number of items exceeds the limit, the response will be paginated.
   * By default this is 50
   */
  xPlexContainerSize?: number | undefined;
  /**
   * Plex Authentication Token
   */
  xPlexToken: string;
};

export type Image = {
  alt?: string | undefined;
  type?: string | undefined;
  url?: string | undefined;
};

export type Metadata = {
  art?: string | undefined;
  guid?: string | undefined;
  key?: string | undefined;
  ratingKey?: string | undefined;
  studio?: string | undefined;
  tagline?: string | undefined;
  type?: string | undefined;
  thumb?: string | undefined;
  addedAt?: number | undefined;
  duration?: number | undefined;
  publicPagesURL?: string | undefined;
  slug?: string | undefined;
  userState?: boolean | undefined;
  title?: string | undefined;
  contentRating?: string | undefined;
  originallyAvailableAt?: RFCDate | undefined;
  year?: number | undefined;
  image?: Array<Image> | undefined;
  banner?: string | undefined;
  rating?: number | undefined;
  expiresAt?: number | undefined;
  originalTitle?: string | undefined;
  audienceRating?: number | undefined;
  audienceRatingImage?: string | undefined;
  ratingImage?: string | undefined;
  imdbRatingCount?: number | undefined;
  subtype?: string | undefined;
  theme?: string | undefined;
  leafCount?: number | undefined;
  childCount?: number | undefined;
  isContinuingSeries?: boolean | undefined;
  skipChildren?: boolean | undefined;
  availabilityId?: string | undefined;
  streamingMediaId?: string | undefined;
  playableKey?: string | undefined;
};

/**
 * Watchlist Data
 */
export type GetWatchListResponseBody = {
  librarySectionID?: string | undefined;
  librarySectionTitle?: string | undefined;
  offset?: number | undefined;
  totalSize?: number | undefined;
  identifier?: string | undefined;
  size?: number | undefined;
  metadata?: Array<Metadata> | undefined;
};

export type GetWatchListResponse = {
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
   * Watchlist Data
   */
  object?: GetWatchListResponseBody | undefined;
};

/** @internal */
export const Filter$inboundSchema: z.ZodNativeEnum<typeof Filter> = z
  .nativeEnum(Filter);

/** @internal */
export const Filter$outboundSchema: z.ZodNativeEnum<typeof Filter> =
  Filter$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Filter$ {
  /** @deprecated use `Filter$inboundSchema` instead. */
  export const inboundSchema = Filter$inboundSchema;
  /** @deprecated use `Filter$outboundSchema` instead. */
  export const outboundSchema = Filter$outboundSchema;
}

/** @internal */
export const Libtype$inboundSchema: z.ZodNativeEnum<typeof Libtype> = z
  .nativeEnum(Libtype);

/** @internal */
export const Libtype$outboundSchema: z.ZodNativeEnum<typeof Libtype> =
  Libtype$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Libtype$ {
  /** @deprecated use `Libtype$inboundSchema` instead. */
  export const inboundSchema = Libtype$inboundSchema;
  /** @deprecated use `Libtype$outboundSchema` instead. */
  export const outboundSchema = Libtype$outboundSchema;
}

/** @internal */
export const IncludeCollections$inboundSchema: z.ZodNativeEnum<
  typeof IncludeCollections
> = z.nativeEnum(IncludeCollections);

/** @internal */
export const IncludeCollections$outboundSchema: z.ZodNativeEnum<
  typeof IncludeCollections
> = IncludeCollections$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IncludeCollections$ {
  /** @deprecated use `IncludeCollections$inboundSchema` instead. */
  export const inboundSchema = IncludeCollections$inboundSchema;
  /** @deprecated use `IncludeCollections$outboundSchema` instead. */
  export const outboundSchema = IncludeCollections$outboundSchema;
}

/** @internal */
export const IncludeExternalMedia$inboundSchema: z.ZodNativeEnum<
  typeof IncludeExternalMedia
> = z.nativeEnum(IncludeExternalMedia);

/** @internal */
export const IncludeExternalMedia$outboundSchema: z.ZodNativeEnum<
  typeof IncludeExternalMedia
> = IncludeExternalMedia$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IncludeExternalMedia$ {
  /** @deprecated use `IncludeExternalMedia$inboundSchema` instead. */
  export const inboundSchema = IncludeExternalMedia$inboundSchema;
  /** @deprecated use `IncludeExternalMedia$outboundSchema` instead. */
  export const outboundSchema = IncludeExternalMedia$outboundSchema;
}

/** @internal */
export const GetWatchListRequest$inboundSchema: z.ZodType<
  GetWatchListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  filter: Filter$inboundSchema,
  sort: z.string().optional(),
  libtype: Libtype$inboundSchema.optional(),
  maxresults: z.number().int().optional(),
  includeCollections: IncludeCollections$inboundSchema.optional(),
  includeExternalMedia: IncludeExternalMedia$inboundSchema.optional(),
  "X-Plex-Container-Start": z.number().int().default(0),
  "X-Plex-Container-Size": z.number().int().default(50),
  "X-Plex-Token": z.string(),
}).transform((v) => {
  return remap$(v, {
    "X-Plex-Container-Start": "xPlexContainerStart",
    "X-Plex-Container-Size": "xPlexContainerSize",
    "X-Plex-Token": "xPlexToken",
  });
});

/** @internal */
export type GetWatchListRequest$Outbound = {
  filter: string;
  sort?: string | undefined;
  libtype?: string | undefined;
  maxresults?: number | undefined;
  includeCollections?: number | undefined;
  includeExternalMedia?: number | undefined;
  "X-Plex-Container-Start": number;
  "X-Plex-Container-Size": number;
  "X-Plex-Token": string;
};

/** @internal */
export const GetWatchListRequest$outboundSchema: z.ZodType<
  GetWatchListRequest$Outbound,
  z.ZodTypeDef,
  GetWatchListRequest
> = z.object({
  filter: Filter$outboundSchema,
  sort: z.string().optional(),
  libtype: Libtype$outboundSchema.optional(),
  maxresults: z.number().int().optional(),
  includeCollections: IncludeCollections$outboundSchema.optional(),
  includeExternalMedia: IncludeExternalMedia$outboundSchema.optional(),
  xPlexContainerStart: z.number().int().default(0),
  xPlexContainerSize: z.number().int().default(50),
  xPlexToken: z.string(),
}).transform((v) => {
  return remap$(v, {
    xPlexContainerStart: "X-Plex-Container-Start",
    xPlexContainerSize: "X-Plex-Container-Size",
    xPlexToken: "X-Plex-Token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWatchListRequest$ {
  /** @deprecated use `GetWatchListRequest$inboundSchema` instead. */
  export const inboundSchema = GetWatchListRequest$inboundSchema;
  /** @deprecated use `GetWatchListRequest$outboundSchema` instead. */
  export const outboundSchema = GetWatchListRequest$outboundSchema;
  /** @deprecated use `GetWatchListRequest$Outbound` instead. */
  export type Outbound = GetWatchListRequest$Outbound;
}

/** @internal */
export const Image$inboundSchema: z.ZodType<Image, z.ZodTypeDef, unknown> = z
  .object({
    alt: z.string().optional(),
    type: z.string().optional(),
    url: z.string().optional(),
  });

/** @internal */
export type Image$Outbound = {
  alt?: string | undefined;
  type?: string | undefined;
  url?: string | undefined;
};

/** @internal */
export const Image$outboundSchema: z.ZodType<
  Image$Outbound,
  z.ZodTypeDef,
  Image
> = z.object({
  alt: z.string().optional(),
  type: z.string().optional(),
  url: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Image$ {
  /** @deprecated use `Image$inboundSchema` instead. */
  export const inboundSchema = Image$inboundSchema;
  /** @deprecated use `Image$outboundSchema` instead. */
  export const outboundSchema = Image$outboundSchema;
  /** @deprecated use `Image$Outbound` instead. */
  export type Outbound = Image$Outbound;
}

/** @internal */
export const Metadata$inboundSchema: z.ZodType<
  Metadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  art: z.string().optional(),
  guid: z.string().optional(),
  key: z.string().optional(),
  ratingKey: z.string().optional(),
  studio: z.string().optional(),
  tagline: z.string().optional(),
  type: z.string().optional(),
  thumb: z.string().optional(),
  addedAt: z.number().int().optional(),
  duration: z.number().int().optional(),
  publicPagesURL: z.string().optional(),
  slug: z.string().optional(),
  userState: z.boolean().optional(),
  title: z.string().optional(),
  contentRating: z.string().optional(),
  originallyAvailableAt: z.string().transform(v => new RFCDate(v)).optional(),
  year: z.number().int().optional(),
  Image: z.array(z.lazy(() => Image$inboundSchema)).optional(),
  banner: z.string().optional(),
  rating: z.number().optional(),
  expiresAt: z.number().int().optional(),
  originalTitle: z.string().optional(),
  audienceRating: z.number().optional(),
  audienceRatingImage: z.string().optional(),
  ratingImage: z.string().optional(),
  imdbRatingCount: z.number().int().optional(),
  subtype: z.string().optional(),
  theme: z.string().optional(),
  leafCount: z.number().int().optional(),
  childCount: z.number().int().optional(),
  isContinuingSeries: z.boolean().optional(),
  skipChildren: z.boolean().optional(),
  availabilityId: z.string().optional(),
  streamingMediaId: z.string().optional(),
  playableKey: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "Image": "image",
  });
});

/** @internal */
export type Metadata$Outbound = {
  art?: string | undefined;
  guid?: string | undefined;
  key?: string | undefined;
  ratingKey?: string | undefined;
  studio?: string | undefined;
  tagline?: string | undefined;
  type?: string | undefined;
  thumb?: string | undefined;
  addedAt?: number | undefined;
  duration?: number | undefined;
  publicPagesURL?: string | undefined;
  slug?: string | undefined;
  userState?: boolean | undefined;
  title?: string | undefined;
  contentRating?: string | undefined;
  originallyAvailableAt?: string | undefined;
  year?: number | undefined;
  Image?: Array<Image$Outbound> | undefined;
  banner?: string | undefined;
  rating?: number | undefined;
  expiresAt?: number | undefined;
  originalTitle?: string | undefined;
  audienceRating?: number | undefined;
  audienceRatingImage?: string | undefined;
  ratingImage?: string | undefined;
  imdbRatingCount?: number | undefined;
  subtype?: string | undefined;
  theme?: string | undefined;
  leafCount?: number | undefined;
  childCount?: number | undefined;
  isContinuingSeries?: boolean | undefined;
  skipChildren?: boolean | undefined;
  availabilityId?: string | undefined;
  streamingMediaId?: string | undefined;
  playableKey?: string | undefined;
};

/** @internal */
export const Metadata$outboundSchema: z.ZodType<
  Metadata$Outbound,
  z.ZodTypeDef,
  Metadata
> = z.object({
  art: z.string().optional(),
  guid: z.string().optional(),
  key: z.string().optional(),
  ratingKey: z.string().optional(),
  studio: z.string().optional(),
  tagline: z.string().optional(),
  type: z.string().optional(),
  thumb: z.string().optional(),
  addedAt: z.number().int().optional(),
  duration: z.number().int().optional(),
  publicPagesURL: z.string().optional(),
  slug: z.string().optional(),
  userState: z.boolean().optional(),
  title: z.string().optional(),
  contentRating: z.string().optional(),
  originallyAvailableAt: z.instanceof(RFCDate).transform(v => v.toString())
    .optional(),
  year: z.number().int().optional(),
  image: z.array(z.lazy(() => Image$outboundSchema)).optional(),
  banner: z.string().optional(),
  rating: z.number().optional(),
  expiresAt: z.number().int().optional(),
  originalTitle: z.string().optional(),
  audienceRating: z.number().optional(),
  audienceRatingImage: z.string().optional(),
  ratingImage: z.string().optional(),
  imdbRatingCount: z.number().int().optional(),
  subtype: z.string().optional(),
  theme: z.string().optional(),
  leafCount: z.number().int().optional(),
  childCount: z.number().int().optional(),
  isContinuingSeries: z.boolean().optional(),
  skipChildren: z.boolean().optional(),
  availabilityId: z.string().optional(),
  streamingMediaId: z.string().optional(),
  playableKey: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    image: "Image",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Metadata$ {
  /** @deprecated use `Metadata$inboundSchema` instead. */
  export const inboundSchema = Metadata$inboundSchema;
  /** @deprecated use `Metadata$outboundSchema` instead. */
  export const outboundSchema = Metadata$outboundSchema;
  /** @deprecated use `Metadata$Outbound` instead. */
  export type Outbound = Metadata$Outbound;
}

/** @internal */
export const GetWatchListResponseBody$inboundSchema: z.ZodType<
  GetWatchListResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  librarySectionID: z.string().optional(),
  librarySectionTitle: z.string().optional(),
  offset: z.number().int().optional(),
  totalSize: z.number().int().optional(),
  identifier: z.string().optional(),
  size: z.number().int().optional(),
  Metadata: z.array(z.lazy(() => Metadata$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "Metadata": "metadata",
  });
});

/** @internal */
export type GetWatchListResponseBody$Outbound = {
  librarySectionID?: string | undefined;
  librarySectionTitle?: string | undefined;
  offset?: number | undefined;
  totalSize?: number | undefined;
  identifier?: string | undefined;
  size?: number | undefined;
  Metadata?: Array<Metadata$Outbound> | undefined;
};

/** @internal */
export const GetWatchListResponseBody$outboundSchema: z.ZodType<
  GetWatchListResponseBody$Outbound,
  z.ZodTypeDef,
  GetWatchListResponseBody
> = z.object({
  librarySectionID: z.string().optional(),
  librarySectionTitle: z.string().optional(),
  offset: z.number().int().optional(),
  totalSize: z.number().int().optional(),
  identifier: z.string().optional(),
  size: z.number().int().optional(),
  metadata: z.array(z.lazy(() => Metadata$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    metadata: "Metadata",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWatchListResponseBody$ {
  /** @deprecated use `GetWatchListResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetWatchListResponseBody$inboundSchema;
  /** @deprecated use `GetWatchListResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetWatchListResponseBody$outboundSchema;
  /** @deprecated use `GetWatchListResponseBody$Outbound` instead. */
  export type Outbound = GetWatchListResponseBody$Outbound;
}

/** @internal */
export const GetWatchListResponse$inboundSchema: z.ZodType<
  GetWatchListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetWatchListResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetWatchListResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetWatchListResponseBody$Outbound | undefined;
};

/** @internal */
export const GetWatchListResponse$outboundSchema: z.ZodType<
  GetWatchListResponse$Outbound,
  z.ZodTypeDef,
  GetWatchListResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetWatchListResponseBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWatchListResponse$ {
  /** @deprecated use `GetWatchListResponse$inboundSchema` instead. */
  export const inboundSchema = GetWatchListResponse$inboundSchema;
  /** @deprecated use `GetWatchListResponse$outboundSchema` instead. */
  export const outboundSchema = GetWatchListResponse$outboundSchema;
  /** @deprecated use `GetWatchListResponse$Outbound` instead. */
  export type Outbound = GetWatchListResponse$Outbound;
}
