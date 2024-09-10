/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetPlaylistRequest = {
  /**
   * the ID of the playlist
   */
  playlistID: number;
};

export type GetPlaylistMetadata = {
  content?: string | undefined;
  ratingKey?: string | undefined;
  key?: string | undefined;
  guid?: string | undefined;
  type?: string | undefined;
  title?: string | undefined;
  summary?: string | undefined;
  smart?: boolean | undefined;
  playlistType?: string | undefined;
  composite?: string | undefined;
  icon?: string | undefined;
  duration?: number | undefined;
  leafCount?: number | undefined;
  addedAt?: number | undefined;
  updatedAt?: number | undefined;
};

export type GetPlaylistMediaContainer = {
  size?: number | undefined;
  metadata?: Array<GetPlaylistMetadata> | undefined;
};

/**
 * The playlist
 */
export type GetPlaylistResponseBody = {
  mediaContainer?: GetPlaylistMediaContainer | undefined;
};

export type GetPlaylistResponse = {
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
   * The playlist
   */
  object?: GetPlaylistResponseBody | undefined;
};

/** @internal */
export const GetPlaylistRequest$inboundSchema: z.ZodType<
  GetPlaylistRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  playlistID: z.number(),
});

/** @internal */
export type GetPlaylistRequest$Outbound = {
  playlistID: number;
};

/** @internal */
export const GetPlaylistRequest$outboundSchema: z.ZodType<
  GetPlaylistRequest$Outbound,
  z.ZodTypeDef,
  GetPlaylistRequest
> = z.object({
  playlistID: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPlaylistRequest$ {
  /** @deprecated use `GetPlaylistRequest$inboundSchema` instead. */
  export const inboundSchema = GetPlaylistRequest$inboundSchema;
  /** @deprecated use `GetPlaylistRequest$outboundSchema` instead. */
  export const outboundSchema = GetPlaylistRequest$outboundSchema;
  /** @deprecated use `GetPlaylistRequest$Outbound` instead. */
  export type Outbound = GetPlaylistRequest$Outbound;
}

/** @internal */
export const GetPlaylistMetadata$inboundSchema: z.ZodType<
  GetPlaylistMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  content: z.string().optional(),
  ratingKey: z.string().optional(),
  key: z.string().optional(),
  guid: z.string().optional(),
  type: z.string().optional(),
  title: z.string().optional(),
  summary: z.string().optional(),
  smart: z.boolean().optional(),
  playlistType: z.string().optional(),
  composite: z.string().optional(),
  icon: z.string().optional(),
  duration: z.number().int().optional(),
  leafCount: z.number().int().optional(),
  addedAt: z.number().int().optional(),
  updatedAt: z.number().int().optional(),
});

/** @internal */
export type GetPlaylistMetadata$Outbound = {
  content?: string | undefined;
  ratingKey?: string | undefined;
  key?: string | undefined;
  guid?: string | undefined;
  type?: string | undefined;
  title?: string | undefined;
  summary?: string | undefined;
  smart?: boolean | undefined;
  playlistType?: string | undefined;
  composite?: string | undefined;
  icon?: string | undefined;
  duration?: number | undefined;
  leafCount?: number | undefined;
  addedAt?: number | undefined;
  updatedAt?: number | undefined;
};

/** @internal */
export const GetPlaylistMetadata$outboundSchema: z.ZodType<
  GetPlaylistMetadata$Outbound,
  z.ZodTypeDef,
  GetPlaylistMetadata
> = z.object({
  content: z.string().optional(),
  ratingKey: z.string().optional(),
  key: z.string().optional(),
  guid: z.string().optional(),
  type: z.string().optional(),
  title: z.string().optional(),
  summary: z.string().optional(),
  smart: z.boolean().optional(),
  playlistType: z.string().optional(),
  composite: z.string().optional(),
  icon: z.string().optional(),
  duration: z.number().int().optional(),
  leafCount: z.number().int().optional(),
  addedAt: z.number().int().optional(),
  updatedAt: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPlaylistMetadata$ {
  /** @deprecated use `GetPlaylistMetadata$inboundSchema` instead. */
  export const inboundSchema = GetPlaylistMetadata$inboundSchema;
  /** @deprecated use `GetPlaylistMetadata$outboundSchema` instead. */
  export const outboundSchema = GetPlaylistMetadata$outboundSchema;
  /** @deprecated use `GetPlaylistMetadata$Outbound` instead. */
  export type Outbound = GetPlaylistMetadata$Outbound;
}

/** @internal */
export const GetPlaylistMediaContainer$inboundSchema: z.ZodType<
  GetPlaylistMediaContainer,
  z.ZodTypeDef,
  unknown
> = z.object({
  size: z.number().int().optional(),
  Metadata: z.array(z.lazy(() => GetPlaylistMetadata$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "Metadata": "metadata",
  });
});

/** @internal */
export type GetPlaylistMediaContainer$Outbound = {
  size?: number | undefined;
  Metadata?: Array<GetPlaylistMetadata$Outbound> | undefined;
};

/** @internal */
export const GetPlaylistMediaContainer$outboundSchema: z.ZodType<
  GetPlaylistMediaContainer$Outbound,
  z.ZodTypeDef,
  GetPlaylistMediaContainer
> = z.object({
  size: z.number().int().optional(),
  metadata: z.array(z.lazy(() => GetPlaylistMetadata$outboundSchema))
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
export namespace GetPlaylistMediaContainer$ {
  /** @deprecated use `GetPlaylistMediaContainer$inboundSchema` instead. */
  export const inboundSchema = GetPlaylistMediaContainer$inboundSchema;
  /** @deprecated use `GetPlaylistMediaContainer$outboundSchema` instead. */
  export const outboundSchema = GetPlaylistMediaContainer$outboundSchema;
  /** @deprecated use `GetPlaylistMediaContainer$Outbound` instead. */
  export type Outbound = GetPlaylistMediaContainer$Outbound;
}

/** @internal */
export const GetPlaylistResponseBody$inboundSchema: z.ZodType<
  GetPlaylistResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  MediaContainer: z.lazy(() => GetPlaylistMediaContainer$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "MediaContainer": "mediaContainer",
  });
});

/** @internal */
export type GetPlaylistResponseBody$Outbound = {
  MediaContainer?: GetPlaylistMediaContainer$Outbound | undefined;
};

/** @internal */
export const GetPlaylistResponseBody$outboundSchema: z.ZodType<
  GetPlaylistResponseBody$Outbound,
  z.ZodTypeDef,
  GetPlaylistResponseBody
> = z.object({
  mediaContainer: z.lazy(() => GetPlaylistMediaContainer$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    mediaContainer: "MediaContainer",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPlaylistResponseBody$ {
  /** @deprecated use `GetPlaylistResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetPlaylistResponseBody$inboundSchema;
  /** @deprecated use `GetPlaylistResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetPlaylistResponseBody$outboundSchema;
  /** @deprecated use `GetPlaylistResponseBody$Outbound` instead. */
  export type Outbound = GetPlaylistResponseBody$Outbound;
}

/** @internal */
export const GetPlaylistResponse$inboundSchema: z.ZodType<
  GetPlaylistResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetPlaylistResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetPlaylistResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetPlaylistResponseBody$Outbound | undefined;
};

/** @internal */
export const GetPlaylistResponse$outboundSchema: z.ZodType<
  GetPlaylistResponse$Outbound,
  z.ZodTypeDef,
  GetPlaylistResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetPlaylistResponseBody$outboundSchema).optional(),
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
export namespace GetPlaylistResponse$ {
  /** @deprecated use `GetPlaylistResponse$inboundSchema` instead. */
  export const inboundSchema = GetPlaylistResponse$inboundSchema;
  /** @deprecated use `GetPlaylistResponse$outboundSchema` instead. */
  export const outboundSchema = GetPlaylistResponse$outboundSchema;
  /** @deprecated use `GetPlaylistResponse$Outbound` instead. */
  export type Outbound = GetPlaylistResponse$Outbound;
}
