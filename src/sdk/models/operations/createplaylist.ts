/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * type of playlist to create
 */
export enum CreatePlaylistQueryParamType {
  Audio = "audio",
  Video = "video",
  Photo = "photo",
}

/**
 * whether the playlist is smart or not
 */
export enum Smart {
  Zero = 0,
  One = 1,
}

export type CreatePlaylistRequest = {
  /**
   * name of the playlist
   */
  title: string;
  /**
   * type of playlist to create
   */
  type: CreatePlaylistQueryParamType;
  /**
   * whether the playlist is smart or not
   */
  smart: Smart;
  /**
   * the content URI for the playlist
   */
  uri: string;
  /**
   * the play queue to copy to a playlist
   */
  playQueueID?: number | undefined;
};

export type CreatePlaylistMetadata = {
  ratingKey?: string | undefined;
  key?: string | undefined;
  guid?: string | undefined;
  type?: string | undefined;
  title?: string | undefined;
  summary?: string | undefined;
  smart?: boolean | undefined;
  playlistType?: string | undefined;
  icon?: string | undefined;
  viewCount?: number | undefined;
  lastViewedAt?: number | undefined;
  leafCount?: number | undefined;
  addedAt?: number | undefined;
  updatedAt?: number | undefined;
  composite?: string | undefined;
  duration?: number | undefined;
};

export type CreatePlaylistMediaContainer = {
  size?: number | undefined;
  metadata?: Array<CreatePlaylistMetadata> | undefined;
};

/**
 * returns all playlists
 */
export type CreatePlaylistResponseBody = {
  mediaContainer?: CreatePlaylistMediaContainer | undefined;
};

export type CreatePlaylistResponse = {
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
   * returns all playlists
   */
  object?: CreatePlaylistResponseBody | undefined;
};

/** @internal */
export const CreatePlaylistQueryParamType$inboundSchema: z.ZodNativeEnum<
  typeof CreatePlaylistQueryParamType
> = z.nativeEnum(CreatePlaylistQueryParamType);

/** @internal */
export const CreatePlaylistQueryParamType$outboundSchema: z.ZodNativeEnum<
  typeof CreatePlaylistQueryParamType
> = CreatePlaylistQueryParamType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePlaylistQueryParamType$ {
  /** @deprecated use `CreatePlaylistQueryParamType$inboundSchema` instead. */
  export const inboundSchema = CreatePlaylistQueryParamType$inboundSchema;
  /** @deprecated use `CreatePlaylistQueryParamType$outboundSchema` instead. */
  export const outboundSchema = CreatePlaylistQueryParamType$outboundSchema;
}

/** @internal */
export const Smart$inboundSchema: z.ZodNativeEnum<typeof Smart> = z.nativeEnum(
  Smart,
);

/** @internal */
export const Smart$outboundSchema: z.ZodNativeEnum<typeof Smart> =
  Smart$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Smart$ {
  /** @deprecated use `Smart$inboundSchema` instead. */
  export const inboundSchema = Smart$inboundSchema;
  /** @deprecated use `Smart$outboundSchema` instead. */
  export const outboundSchema = Smart$outboundSchema;
}

/** @internal */
export const CreatePlaylistRequest$inboundSchema: z.ZodType<
  CreatePlaylistRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  title: z.string(),
  type: CreatePlaylistQueryParamType$inboundSchema,
  smart: Smart$inboundSchema,
  uri: z.string(),
  playQueueID: z.number().optional(),
});

/** @internal */
export type CreatePlaylistRequest$Outbound = {
  title: string;
  type: string;
  smart: number;
  uri: string;
  playQueueID?: number | undefined;
};

/** @internal */
export const CreatePlaylistRequest$outboundSchema: z.ZodType<
  CreatePlaylistRequest$Outbound,
  z.ZodTypeDef,
  CreatePlaylistRequest
> = z.object({
  title: z.string(),
  type: CreatePlaylistQueryParamType$outboundSchema,
  smart: Smart$outboundSchema,
  uri: z.string(),
  playQueueID: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePlaylistRequest$ {
  /** @deprecated use `CreatePlaylistRequest$inboundSchema` instead. */
  export const inboundSchema = CreatePlaylistRequest$inboundSchema;
  /** @deprecated use `CreatePlaylistRequest$outboundSchema` instead. */
  export const outboundSchema = CreatePlaylistRequest$outboundSchema;
  /** @deprecated use `CreatePlaylistRequest$Outbound` instead. */
  export type Outbound = CreatePlaylistRequest$Outbound;
}

export function createPlaylistRequestToJSON(
  createPlaylistRequest: CreatePlaylistRequest,
): string {
  return JSON.stringify(
    CreatePlaylistRequest$outboundSchema.parse(createPlaylistRequest),
  );
}

export function createPlaylistRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreatePlaylistRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePlaylistRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePlaylistRequest' from JSON`,
  );
}

/** @internal */
export const CreatePlaylistMetadata$inboundSchema: z.ZodType<
  CreatePlaylistMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  ratingKey: z.string().optional(),
  key: z.string().optional(),
  guid: z.string().optional(),
  type: z.string().optional(),
  title: z.string().optional(),
  summary: z.string().optional(),
  smart: z.boolean().optional(),
  playlistType: z.string().optional(),
  icon: z.string().optional(),
  viewCount: z.number().int().optional(),
  lastViewedAt: z.number().int().optional(),
  leafCount: z.number().int().optional(),
  addedAt: z.number().int().optional(),
  updatedAt: z.number().int().optional(),
  composite: z.string().optional(),
  duration: z.number().int().optional(),
});

/** @internal */
export type CreatePlaylistMetadata$Outbound = {
  ratingKey?: string | undefined;
  key?: string | undefined;
  guid?: string | undefined;
  type?: string | undefined;
  title?: string | undefined;
  summary?: string | undefined;
  smart?: boolean | undefined;
  playlistType?: string | undefined;
  icon?: string | undefined;
  viewCount?: number | undefined;
  lastViewedAt?: number | undefined;
  leafCount?: number | undefined;
  addedAt?: number | undefined;
  updatedAt?: number | undefined;
  composite?: string | undefined;
  duration?: number | undefined;
};

/** @internal */
export const CreatePlaylistMetadata$outboundSchema: z.ZodType<
  CreatePlaylistMetadata$Outbound,
  z.ZodTypeDef,
  CreatePlaylistMetadata
> = z.object({
  ratingKey: z.string().optional(),
  key: z.string().optional(),
  guid: z.string().optional(),
  type: z.string().optional(),
  title: z.string().optional(),
  summary: z.string().optional(),
  smart: z.boolean().optional(),
  playlistType: z.string().optional(),
  icon: z.string().optional(),
  viewCount: z.number().int().optional(),
  lastViewedAt: z.number().int().optional(),
  leafCount: z.number().int().optional(),
  addedAt: z.number().int().optional(),
  updatedAt: z.number().int().optional(),
  composite: z.string().optional(),
  duration: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePlaylistMetadata$ {
  /** @deprecated use `CreatePlaylistMetadata$inboundSchema` instead. */
  export const inboundSchema = CreatePlaylistMetadata$inboundSchema;
  /** @deprecated use `CreatePlaylistMetadata$outboundSchema` instead. */
  export const outboundSchema = CreatePlaylistMetadata$outboundSchema;
  /** @deprecated use `CreatePlaylistMetadata$Outbound` instead. */
  export type Outbound = CreatePlaylistMetadata$Outbound;
}

export function createPlaylistMetadataToJSON(
  createPlaylistMetadata: CreatePlaylistMetadata,
): string {
  return JSON.stringify(
    CreatePlaylistMetadata$outboundSchema.parse(createPlaylistMetadata),
  );
}

export function createPlaylistMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CreatePlaylistMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePlaylistMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePlaylistMetadata' from JSON`,
  );
}

/** @internal */
export const CreatePlaylistMediaContainer$inboundSchema: z.ZodType<
  CreatePlaylistMediaContainer,
  z.ZodTypeDef,
  unknown
> = z.object({
  size: z.number().int().optional(),
  Metadata: z.array(z.lazy(() => CreatePlaylistMetadata$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "Metadata": "metadata",
  });
});

/** @internal */
export type CreatePlaylistMediaContainer$Outbound = {
  size?: number | undefined;
  Metadata?: Array<CreatePlaylistMetadata$Outbound> | undefined;
};

/** @internal */
export const CreatePlaylistMediaContainer$outboundSchema: z.ZodType<
  CreatePlaylistMediaContainer$Outbound,
  z.ZodTypeDef,
  CreatePlaylistMediaContainer
> = z.object({
  size: z.number().int().optional(),
  metadata: z.array(z.lazy(() => CreatePlaylistMetadata$outboundSchema))
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
export namespace CreatePlaylistMediaContainer$ {
  /** @deprecated use `CreatePlaylistMediaContainer$inboundSchema` instead. */
  export const inboundSchema = CreatePlaylistMediaContainer$inboundSchema;
  /** @deprecated use `CreatePlaylistMediaContainer$outboundSchema` instead. */
  export const outboundSchema = CreatePlaylistMediaContainer$outboundSchema;
  /** @deprecated use `CreatePlaylistMediaContainer$Outbound` instead. */
  export type Outbound = CreatePlaylistMediaContainer$Outbound;
}

export function createPlaylistMediaContainerToJSON(
  createPlaylistMediaContainer: CreatePlaylistMediaContainer,
): string {
  return JSON.stringify(
    CreatePlaylistMediaContainer$outboundSchema.parse(
      createPlaylistMediaContainer,
    ),
  );
}

export function createPlaylistMediaContainerFromJSON(
  jsonString: string,
): SafeParseResult<CreatePlaylistMediaContainer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePlaylistMediaContainer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePlaylistMediaContainer' from JSON`,
  );
}

/** @internal */
export const CreatePlaylistResponseBody$inboundSchema: z.ZodType<
  CreatePlaylistResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  MediaContainer: z.lazy(() => CreatePlaylistMediaContainer$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "MediaContainer": "mediaContainer",
  });
});

/** @internal */
export type CreatePlaylistResponseBody$Outbound = {
  MediaContainer?: CreatePlaylistMediaContainer$Outbound | undefined;
};

/** @internal */
export const CreatePlaylistResponseBody$outboundSchema: z.ZodType<
  CreatePlaylistResponseBody$Outbound,
  z.ZodTypeDef,
  CreatePlaylistResponseBody
> = z.object({
  mediaContainer: z.lazy(() => CreatePlaylistMediaContainer$outboundSchema)
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
export namespace CreatePlaylistResponseBody$ {
  /** @deprecated use `CreatePlaylistResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreatePlaylistResponseBody$inboundSchema;
  /** @deprecated use `CreatePlaylistResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreatePlaylistResponseBody$outboundSchema;
  /** @deprecated use `CreatePlaylistResponseBody$Outbound` instead. */
  export type Outbound = CreatePlaylistResponseBody$Outbound;
}

export function createPlaylistResponseBodyToJSON(
  createPlaylistResponseBody: CreatePlaylistResponseBody,
): string {
  return JSON.stringify(
    CreatePlaylistResponseBody$outboundSchema.parse(createPlaylistResponseBody),
  );
}

export function createPlaylistResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreatePlaylistResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePlaylistResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePlaylistResponseBody' from JSON`,
  );
}

/** @internal */
export const CreatePlaylistResponse$inboundSchema: z.ZodType<
  CreatePlaylistResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => CreatePlaylistResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type CreatePlaylistResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: CreatePlaylistResponseBody$Outbound | undefined;
};

/** @internal */
export const CreatePlaylistResponse$outboundSchema: z.ZodType<
  CreatePlaylistResponse$Outbound,
  z.ZodTypeDef,
  CreatePlaylistResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => CreatePlaylistResponseBody$outboundSchema).optional(),
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
export namespace CreatePlaylistResponse$ {
  /** @deprecated use `CreatePlaylistResponse$inboundSchema` instead. */
  export const inboundSchema = CreatePlaylistResponse$inboundSchema;
  /** @deprecated use `CreatePlaylistResponse$outboundSchema` instead. */
  export const outboundSchema = CreatePlaylistResponse$outboundSchema;
  /** @deprecated use `CreatePlaylistResponse$Outbound` instead. */
  export type Outbound = CreatePlaylistResponse$Outbound;
}

export function createPlaylistResponseToJSON(
  createPlaylistResponse: CreatePlaylistResponse,
): string {
  return JSON.stringify(
    CreatePlaylistResponse$outboundSchema.parse(createPlaylistResponse),
  );
}

export function createPlaylistResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreatePlaylistResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePlaylistResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePlaylistResponse' from JSON`,
  );
}
