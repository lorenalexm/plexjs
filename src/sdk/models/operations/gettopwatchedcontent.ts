/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { RFCDate } from "../../types/rfcdate.js";

/**
 * The type of media to retrieve.
 *
 * @remarks
 * 1 = movie
 * 2 = show
 * 3 = season
 * 4 = episode
 * E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries
 */
export enum GetTopWatchedContentQueryParamType {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
}

export type GetTopWatchedContentRequest = {
  /**
   * The type of media to retrieve.
   *
   * @remarks
   * 1 = movie
   * 2 = show
   * 3 = season
   * 4 = episode
   * E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries
   */
  type: GetTopWatchedContentQueryParamType;
  /**
   * Adds the Guids object to the response
   *
   * @remarks
   */
  includeGuids?: number | undefined;
};

export type GetTopWatchedContentGenre = {
  id?: number | undefined;
  filter?: string | undefined;
  tag?: string | undefined;
};

export type GetTopWatchedContentCountry = {
  id?: number | undefined;
  filter?: string | undefined;
  tag?: string | undefined;
};

export type GetTopWatchedContentGuids = {
  id?: string | undefined;
};

export type GetTopWatchedContentRole = {
  id?: number | undefined;
  filter?: string | undefined;
  tag?: string | undefined;
  tagKey?: string | undefined;
  role?: string | undefined;
  thumb?: string | undefined;
};

export type User = {
  id?: number | undefined;
};

export type GetTopWatchedContentMetadata = {
  ratingKey?: string | undefined;
  key?: string | undefined;
  guid?: string | undefined;
  slug?: string | undefined;
  studio?: string | undefined;
  type?: string | undefined;
  title?: string | undefined;
  librarySectionTitle?: string | undefined;
  librarySectionID?: number | undefined;
  librarySectionKey?: string | undefined;
  contentRating?: string | undefined;
  summary?: string | undefined;
  index?: number | undefined;
  audienceRating?: number | undefined;
  year?: number | undefined;
  tagline?: string | undefined;
  thumb?: string | undefined;
  art?: string | undefined;
  duration?: number | undefined;
  originallyAvailableAt?: RFCDate | undefined;
  leafCount?: number | undefined;
  viewedLeafCount?: number | undefined;
  childCount?: number | undefined;
  addedAt?: number | undefined;
  updatedAt?: number | undefined;
  globalViewCount?: number | undefined;
  audienceRatingImage?: string | undefined;
  genre?: Array<GetTopWatchedContentGenre> | undefined;
  country?: Array<GetTopWatchedContentCountry> | undefined;
  guids?: Array<GetTopWatchedContentGuids> | undefined;
  role?: Array<GetTopWatchedContentRole> | undefined;
  user?: Array<User> | undefined;
};

export type GetTopWatchedContentMediaContainer = {
  size?: number | undefined;
  allowSync?: boolean | undefined;
  identifier?: string | undefined;
  mediaTagPrefix?: string | undefined;
  mediaTagVersion?: number | undefined;
  metadata?: Array<GetTopWatchedContentMetadata> | undefined;
};

/**
 * The metadata of the library item.
 */
export type GetTopWatchedContentResponseBody = {
  mediaContainer?: GetTopWatchedContentMediaContainer | undefined;
};

export type GetTopWatchedContentResponse = {
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
   * The metadata of the library item.
   */
  object?: GetTopWatchedContentResponseBody | undefined;
};

/** @internal */
export const GetTopWatchedContentQueryParamType$inboundSchema: z.ZodNativeEnum<
  typeof GetTopWatchedContentQueryParamType
> = z.nativeEnum(GetTopWatchedContentQueryParamType);

/** @internal */
export const GetTopWatchedContentQueryParamType$outboundSchema: z.ZodNativeEnum<
  typeof GetTopWatchedContentQueryParamType
> = GetTopWatchedContentQueryParamType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTopWatchedContentQueryParamType$ {
  /** @deprecated use `GetTopWatchedContentQueryParamType$inboundSchema` instead. */
  export const inboundSchema = GetTopWatchedContentQueryParamType$inboundSchema;
  /** @deprecated use `GetTopWatchedContentQueryParamType$outboundSchema` instead. */
  export const outboundSchema =
    GetTopWatchedContentQueryParamType$outboundSchema;
}

/** @internal */
export const GetTopWatchedContentRequest$inboundSchema: z.ZodType<
  GetTopWatchedContentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: GetTopWatchedContentQueryParamType$inboundSchema,
  includeGuids: z.number().int().optional(),
});

/** @internal */
export type GetTopWatchedContentRequest$Outbound = {
  type: number;
  includeGuids?: number | undefined;
};

/** @internal */
export const GetTopWatchedContentRequest$outboundSchema: z.ZodType<
  GetTopWatchedContentRequest$Outbound,
  z.ZodTypeDef,
  GetTopWatchedContentRequest
> = z.object({
  type: GetTopWatchedContentQueryParamType$outboundSchema,
  includeGuids: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTopWatchedContentRequest$ {
  /** @deprecated use `GetTopWatchedContentRequest$inboundSchema` instead. */
  export const inboundSchema = GetTopWatchedContentRequest$inboundSchema;
  /** @deprecated use `GetTopWatchedContentRequest$outboundSchema` instead. */
  export const outboundSchema = GetTopWatchedContentRequest$outboundSchema;
  /** @deprecated use `GetTopWatchedContentRequest$Outbound` instead. */
  export type Outbound = GetTopWatchedContentRequest$Outbound;
}

/** @internal */
export const GetTopWatchedContentGenre$inboundSchema: z.ZodType<
  GetTopWatchedContentGenre,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int().optional(),
  filter: z.string().optional(),
  tag: z.string().optional(),
});

/** @internal */
export type GetTopWatchedContentGenre$Outbound = {
  id?: number | undefined;
  filter?: string | undefined;
  tag?: string | undefined;
};

/** @internal */
export const GetTopWatchedContentGenre$outboundSchema: z.ZodType<
  GetTopWatchedContentGenre$Outbound,
  z.ZodTypeDef,
  GetTopWatchedContentGenre
> = z.object({
  id: z.number().int().optional(),
  filter: z.string().optional(),
  tag: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTopWatchedContentGenre$ {
  /** @deprecated use `GetTopWatchedContentGenre$inboundSchema` instead. */
  export const inboundSchema = GetTopWatchedContentGenre$inboundSchema;
  /** @deprecated use `GetTopWatchedContentGenre$outboundSchema` instead. */
  export const outboundSchema = GetTopWatchedContentGenre$outboundSchema;
  /** @deprecated use `GetTopWatchedContentGenre$Outbound` instead. */
  export type Outbound = GetTopWatchedContentGenre$Outbound;
}

/** @internal */
export const GetTopWatchedContentCountry$inboundSchema: z.ZodType<
  GetTopWatchedContentCountry,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int().optional(),
  filter: z.string().optional(),
  tag: z.string().optional(),
});

/** @internal */
export type GetTopWatchedContentCountry$Outbound = {
  id?: number | undefined;
  filter?: string | undefined;
  tag?: string | undefined;
};

/** @internal */
export const GetTopWatchedContentCountry$outboundSchema: z.ZodType<
  GetTopWatchedContentCountry$Outbound,
  z.ZodTypeDef,
  GetTopWatchedContentCountry
> = z.object({
  id: z.number().int().optional(),
  filter: z.string().optional(),
  tag: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTopWatchedContentCountry$ {
  /** @deprecated use `GetTopWatchedContentCountry$inboundSchema` instead. */
  export const inboundSchema = GetTopWatchedContentCountry$inboundSchema;
  /** @deprecated use `GetTopWatchedContentCountry$outboundSchema` instead. */
  export const outboundSchema = GetTopWatchedContentCountry$outboundSchema;
  /** @deprecated use `GetTopWatchedContentCountry$Outbound` instead. */
  export type Outbound = GetTopWatchedContentCountry$Outbound;
}

/** @internal */
export const GetTopWatchedContentGuids$inboundSchema: z.ZodType<
  GetTopWatchedContentGuids,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
});

/** @internal */
export type GetTopWatchedContentGuids$Outbound = {
  id?: string | undefined;
};

/** @internal */
export const GetTopWatchedContentGuids$outboundSchema: z.ZodType<
  GetTopWatchedContentGuids$Outbound,
  z.ZodTypeDef,
  GetTopWatchedContentGuids
> = z.object({
  id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTopWatchedContentGuids$ {
  /** @deprecated use `GetTopWatchedContentGuids$inboundSchema` instead. */
  export const inboundSchema = GetTopWatchedContentGuids$inboundSchema;
  /** @deprecated use `GetTopWatchedContentGuids$outboundSchema` instead. */
  export const outboundSchema = GetTopWatchedContentGuids$outboundSchema;
  /** @deprecated use `GetTopWatchedContentGuids$Outbound` instead. */
  export type Outbound = GetTopWatchedContentGuids$Outbound;
}

/** @internal */
export const GetTopWatchedContentRole$inboundSchema: z.ZodType<
  GetTopWatchedContentRole,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int().optional(),
  filter: z.string().optional(),
  tag: z.string().optional(),
  tagKey: z.string().optional(),
  role: z.string().optional(),
  thumb: z.string().optional(),
});

/** @internal */
export type GetTopWatchedContentRole$Outbound = {
  id?: number | undefined;
  filter?: string | undefined;
  tag?: string | undefined;
  tagKey?: string | undefined;
  role?: string | undefined;
  thumb?: string | undefined;
};

/** @internal */
export const GetTopWatchedContentRole$outboundSchema: z.ZodType<
  GetTopWatchedContentRole$Outbound,
  z.ZodTypeDef,
  GetTopWatchedContentRole
> = z.object({
  id: z.number().int().optional(),
  filter: z.string().optional(),
  tag: z.string().optional(),
  tagKey: z.string().optional(),
  role: z.string().optional(),
  thumb: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTopWatchedContentRole$ {
  /** @deprecated use `GetTopWatchedContentRole$inboundSchema` instead. */
  export const inboundSchema = GetTopWatchedContentRole$inboundSchema;
  /** @deprecated use `GetTopWatchedContentRole$outboundSchema` instead. */
  export const outboundSchema = GetTopWatchedContentRole$outboundSchema;
  /** @deprecated use `GetTopWatchedContentRole$Outbound` instead. */
  export type Outbound = GetTopWatchedContentRole$Outbound;
}

/** @internal */
export const User$inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown> = z
  .object({
    id: z.number().int().optional(),
  });

/** @internal */
export type User$Outbound = {
  id?: number | undefined;
};

/** @internal */
export const User$outboundSchema: z.ZodType<User$Outbound, z.ZodTypeDef, User> =
  z.object({
    id: z.number().int().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace User$ {
  /** @deprecated use `User$inboundSchema` instead. */
  export const inboundSchema = User$inboundSchema;
  /** @deprecated use `User$outboundSchema` instead. */
  export const outboundSchema = User$outboundSchema;
  /** @deprecated use `User$Outbound` instead. */
  export type Outbound = User$Outbound;
}

/** @internal */
export const GetTopWatchedContentMetadata$inboundSchema: z.ZodType<
  GetTopWatchedContentMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  ratingKey: z.string().optional(),
  key: z.string().optional(),
  guid: z.string().optional(),
  slug: z.string().optional(),
  studio: z.string().optional(),
  type: z.string().optional(),
  title: z.string().optional(),
  librarySectionTitle: z.string().optional(),
  librarySectionID: z.number().int().optional(),
  librarySectionKey: z.string().optional(),
  contentRating: z.string().optional(),
  summary: z.string().optional(),
  index: z.number().int().optional(),
  audienceRating: z.number().optional(),
  year: z.number().int().optional(),
  tagline: z.string().optional(),
  thumb: z.string().optional(),
  art: z.string().optional(),
  duration: z.number().int().optional(),
  originallyAvailableAt: z.string().transform(v => new RFCDate(v)).optional(),
  leafCount: z.number().int().optional(),
  viewedLeafCount: z.number().int().optional(),
  childCount: z.number().int().optional(),
  addedAt: z.number().int().optional(),
  updatedAt: z.number().int().optional(),
  globalViewCount: z.number().int().optional(),
  audienceRatingImage: z.string().optional(),
  Genre: z.array(z.lazy(() => GetTopWatchedContentGenre$inboundSchema))
    .optional(),
  Country: z.array(z.lazy(() => GetTopWatchedContentCountry$inboundSchema))
    .optional(),
  Guid: z.array(z.lazy(() => GetTopWatchedContentGuids$inboundSchema))
    .optional(),
  Role: z.array(z.lazy(() => GetTopWatchedContentRole$inboundSchema))
    .optional(),
  User: z.array(z.lazy(() => User$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "Genre": "genre",
    "Country": "country",
    "Guid": "guids",
    "Role": "role",
    "User": "user",
  });
});

/** @internal */
export type GetTopWatchedContentMetadata$Outbound = {
  ratingKey?: string | undefined;
  key?: string | undefined;
  guid?: string | undefined;
  slug?: string | undefined;
  studio?: string | undefined;
  type?: string | undefined;
  title?: string | undefined;
  librarySectionTitle?: string | undefined;
  librarySectionID?: number | undefined;
  librarySectionKey?: string | undefined;
  contentRating?: string | undefined;
  summary?: string | undefined;
  index?: number | undefined;
  audienceRating?: number | undefined;
  year?: number | undefined;
  tagline?: string | undefined;
  thumb?: string | undefined;
  art?: string | undefined;
  duration?: number | undefined;
  originallyAvailableAt?: string | undefined;
  leafCount?: number | undefined;
  viewedLeafCount?: number | undefined;
  childCount?: number | undefined;
  addedAt?: number | undefined;
  updatedAt?: number | undefined;
  globalViewCount?: number | undefined;
  audienceRatingImage?: string | undefined;
  Genre?: Array<GetTopWatchedContentGenre$Outbound> | undefined;
  Country?: Array<GetTopWatchedContentCountry$Outbound> | undefined;
  Guid?: Array<GetTopWatchedContentGuids$Outbound> | undefined;
  Role?: Array<GetTopWatchedContentRole$Outbound> | undefined;
  User?: Array<User$Outbound> | undefined;
};

/** @internal */
export const GetTopWatchedContentMetadata$outboundSchema: z.ZodType<
  GetTopWatchedContentMetadata$Outbound,
  z.ZodTypeDef,
  GetTopWatchedContentMetadata
> = z.object({
  ratingKey: z.string().optional(),
  key: z.string().optional(),
  guid: z.string().optional(),
  slug: z.string().optional(),
  studio: z.string().optional(),
  type: z.string().optional(),
  title: z.string().optional(),
  librarySectionTitle: z.string().optional(),
  librarySectionID: z.number().int().optional(),
  librarySectionKey: z.string().optional(),
  contentRating: z.string().optional(),
  summary: z.string().optional(),
  index: z.number().int().optional(),
  audienceRating: z.number().optional(),
  year: z.number().int().optional(),
  tagline: z.string().optional(),
  thumb: z.string().optional(),
  art: z.string().optional(),
  duration: z.number().int().optional(),
  originallyAvailableAt: z.instanceof(RFCDate).transform(v => v.toString())
    .optional(),
  leafCount: z.number().int().optional(),
  viewedLeafCount: z.number().int().optional(),
  childCount: z.number().int().optional(),
  addedAt: z.number().int().optional(),
  updatedAt: z.number().int().optional(),
  globalViewCount: z.number().int().optional(),
  audienceRatingImage: z.string().optional(),
  genre: z.array(z.lazy(() => GetTopWatchedContentGenre$outboundSchema))
    .optional(),
  country: z.array(z.lazy(() => GetTopWatchedContentCountry$outboundSchema))
    .optional(),
  guids: z.array(z.lazy(() => GetTopWatchedContentGuids$outboundSchema))
    .optional(),
  role: z.array(z.lazy(() => GetTopWatchedContentRole$outboundSchema))
    .optional(),
  user: z.array(z.lazy(() => User$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    genre: "Genre",
    country: "Country",
    guids: "Guid",
    role: "Role",
    user: "User",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTopWatchedContentMetadata$ {
  /** @deprecated use `GetTopWatchedContentMetadata$inboundSchema` instead. */
  export const inboundSchema = GetTopWatchedContentMetadata$inboundSchema;
  /** @deprecated use `GetTopWatchedContentMetadata$outboundSchema` instead. */
  export const outboundSchema = GetTopWatchedContentMetadata$outboundSchema;
  /** @deprecated use `GetTopWatchedContentMetadata$Outbound` instead. */
  export type Outbound = GetTopWatchedContentMetadata$Outbound;
}

/** @internal */
export const GetTopWatchedContentMediaContainer$inboundSchema: z.ZodType<
  GetTopWatchedContentMediaContainer,
  z.ZodTypeDef,
  unknown
> = z.object({
  size: z.number().int().optional(),
  allowSync: z.boolean().optional(),
  identifier: z.string().optional(),
  mediaTagPrefix: z.string().optional(),
  mediaTagVersion: z.number().int().optional(),
  Metadata: z.array(z.lazy(() => GetTopWatchedContentMetadata$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "Metadata": "metadata",
  });
});

/** @internal */
export type GetTopWatchedContentMediaContainer$Outbound = {
  size?: number | undefined;
  allowSync?: boolean | undefined;
  identifier?: string | undefined;
  mediaTagPrefix?: string | undefined;
  mediaTagVersion?: number | undefined;
  Metadata?: Array<GetTopWatchedContentMetadata$Outbound> | undefined;
};

/** @internal */
export const GetTopWatchedContentMediaContainer$outboundSchema: z.ZodType<
  GetTopWatchedContentMediaContainer$Outbound,
  z.ZodTypeDef,
  GetTopWatchedContentMediaContainer
> = z.object({
  size: z.number().int().optional(),
  allowSync: z.boolean().optional(),
  identifier: z.string().optional(),
  mediaTagPrefix: z.string().optional(),
  mediaTagVersion: z.number().int().optional(),
  metadata: z.array(z.lazy(() => GetTopWatchedContentMetadata$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    metadata: "Metadata",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTopWatchedContentMediaContainer$ {
  /** @deprecated use `GetTopWatchedContentMediaContainer$inboundSchema` instead. */
  export const inboundSchema = GetTopWatchedContentMediaContainer$inboundSchema;
  /** @deprecated use `GetTopWatchedContentMediaContainer$outboundSchema` instead. */
  export const outboundSchema =
    GetTopWatchedContentMediaContainer$outboundSchema;
  /** @deprecated use `GetTopWatchedContentMediaContainer$Outbound` instead. */
  export type Outbound = GetTopWatchedContentMediaContainer$Outbound;
}

/** @internal */
export const GetTopWatchedContentResponseBody$inboundSchema: z.ZodType<
  GetTopWatchedContentResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  MediaContainer: z.lazy(() => GetTopWatchedContentMediaContainer$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "MediaContainer": "mediaContainer",
  });
});

/** @internal */
export type GetTopWatchedContentResponseBody$Outbound = {
  MediaContainer?: GetTopWatchedContentMediaContainer$Outbound | undefined;
};

/** @internal */
export const GetTopWatchedContentResponseBody$outboundSchema: z.ZodType<
  GetTopWatchedContentResponseBody$Outbound,
  z.ZodTypeDef,
  GetTopWatchedContentResponseBody
> = z.object({
  mediaContainer: z.lazy(() =>
    GetTopWatchedContentMediaContainer$outboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    mediaContainer: "MediaContainer",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTopWatchedContentResponseBody$ {
  /** @deprecated use `GetTopWatchedContentResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetTopWatchedContentResponseBody$inboundSchema;
  /** @deprecated use `GetTopWatchedContentResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetTopWatchedContentResponseBody$outboundSchema;
  /** @deprecated use `GetTopWatchedContentResponseBody$Outbound` instead. */
  export type Outbound = GetTopWatchedContentResponseBody$Outbound;
}

/** @internal */
export const GetTopWatchedContentResponse$inboundSchema: z.ZodType<
  GetTopWatchedContentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetTopWatchedContentResponseBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetTopWatchedContentResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetTopWatchedContentResponseBody$Outbound | undefined;
};

/** @internal */
export const GetTopWatchedContentResponse$outboundSchema: z.ZodType<
  GetTopWatchedContentResponse$Outbound,
  z.ZodTypeDef,
  GetTopWatchedContentResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetTopWatchedContentResponseBody$outboundSchema)
    .optional(),
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
export namespace GetTopWatchedContentResponse$ {
  /** @deprecated use `GetTopWatchedContentResponse$inboundSchema` instead. */
  export const inboundSchema = GetTopWatchedContentResponse$inboundSchema;
  /** @deprecated use `GetTopWatchedContentResponse$outboundSchema` instead. */
  export const outboundSchema = GetTopWatchedContentResponse$outboundSchema;
  /** @deprecated use `GetTopWatchedContentResponse$Outbound` instead. */
  export type Outbound = GetTopWatchedContentResponse$Outbound;
}
