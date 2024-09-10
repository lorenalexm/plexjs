/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type TranscodeSession = {
  key?: string | undefined;
  throttled?: boolean | undefined;
  complete?: boolean | undefined;
  progress?: number | undefined;
  size?: number | undefined;
  speed?: number | undefined;
  error?: boolean | undefined;
  duration?: number | undefined;
  remaining?: number | undefined;
  context?: string | undefined;
  sourceVideoCodec?: string | undefined;
  sourceAudioCodec?: string | undefined;
  videoDecision?: string | undefined;
  audioDecision?: string | undefined;
  subtitleDecision?: string | undefined;
  protocol?: string | undefined;
  container?: string | undefined;
  videoCodec?: string | undefined;
  audioCodec?: string | undefined;
  audioChannels?: number | undefined;
  transcodeHwRequested?: boolean | undefined;
  timeStamp?: number | undefined;
  maxOffsetAvailable?: number | undefined;
  minOffsetAvailable?: number | undefined;
};

export type GetTranscodeSessionsMediaContainer = {
  size?: number | undefined;
  transcodeSession?: Array<TranscodeSession> | undefined;
};

/**
 * The Transcode Sessions
 */
export type GetTranscodeSessionsResponseBody = {
  mediaContainer?: GetTranscodeSessionsMediaContainer | undefined;
};

export type GetTranscodeSessionsResponse = {
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
   * The Transcode Sessions
   */
  object?: GetTranscodeSessionsResponseBody | undefined;
};

/** @internal */
export const TranscodeSession$inboundSchema: z.ZodType<
  TranscodeSession,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string().optional(),
  throttled: z.boolean().optional(),
  complete: z.boolean().optional(),
  progress: z.number().optional(),
  size: z.number().int().optional(),
  speed: z.number().optional(),
  error: z.boolean().optional(),
  duration: z.number().int().optional(),
  remaining: z.number().int().optional(),
  context: z.string().optional(),
  sourceVideoCodec: z.string().optional(),
  sourceAudioCodec: z.string().optional(),
  videoDecision: z.string().optional(),
  audioDecision: z.string().optional(),
  subtitleDecision: z.string().optional(),
  protocol: z.string().optional(),
  container: z.string().optional(),
  videoCodec: z.string().optional(),
  audioCodec: z.string().optional(),
  audioChannels: z.number().int().optional(),
  transcodeHwRequested: z.boolean().optional(),
  timeStamp: z.number().optional(),
  maxOffsetAvailable: z.number().optional(),
  minOffsetAvailable: z.number().optional(),
});

/** @internal */
export type TranscodeSession$Outbound = {
  key?: string | undefined;
  throttled?: boolean | undefined;
  complete?: boolean | undefined;
  progress?: number | undefined;
  size?: number | undefined;
  speed?: number | undefined;
  error?: boolean | undefined;
  duration?: number | undefined;
  remaining?: number | undefined;
  context?: string | undefined;
  sourceVideoCodec?: string | undefined;
  sourceAudioCodec?: string | undefined;
  videoDecision?: string | undefined;
  audioDecision?: string | undefined;
  subtitleDecision?: string | undefined;
  protocol?: string | undefined;
  container?: string | undefined;
  videoCodec?: string | undefined;
  audioCodec?: string | undefined;
  audioChannels?: number | undefined;
  transcodeHwRequested?: boolean | undefined;
  timeStamp?: number | undefined;
  maxOffsetAvailable?: number | undefined;
  minOffsetAvailable?: number | undefined;
};

/** @internal */
export const TranscodeSession$outboundSchema: z.ZodType<
  TranscodeSession$Outbound,
  z.ZodTypeDef,
  TranscodeSession
> = z.object({
  key: z.string().optional(),
  throttled: z.boolean().optional(),
  complete: z.boolean().optional(),
  progress: z.number().optional(),
  size: z.number().int().optional(),
  speed: z.number().optional(),
  error: z.boolean().optional(),
  duration: z.number().int().optional(),
  remaining: z.number().int().optional(),
  context: z.string().optional(),
  sourceVideoCodec: z.string().optional(),
  sourceAudioCodec: z.string().optional(),
  videoDecision: z.string().optional(),
  audioDecision: z.string().optional(),
  subtitleDecision: z.string().optional(),
  protocol: z.string().optional(),
  container: z.string().optional(),
  videoCodec: z.string().optional(),
  audioCodec: z.string().optional(),
  audioChannels: z.number().int().optional(),
  transcodeHwRequested: z.boolean().optional(),
  timeStamp: z.number().optional(),
  maxOffsetAvailable: z.number().optional(),
  minOffsetAvailable: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TranscodeSession$ {
  /** @deprecated use `TranscodeSession$inboundSchema` instead. */
  export const inboundSchema = TranscodeSession$inboundSchema;
  /** @deprecated use `TranscodeSession$outboundSchema` instead. */
  export const outboundSchema = TranscodeSession$outboundSchema;
  /** @deprecated use `TranscodeSession$Outbound` instead. */
  export type Outbound = TranscodeSession$Outbound;
}

/** @internal */
export const GetTranscodeSessionsMediaContainer$inboundSchema: z.ZodType<
  GetTranscodeSessionsMediaContainer,
  z.ZodTypeDef,
  unknown
> = z.object({
  size: z.number().int().optional(),
  TranscodeSession: z.array(z.lazy(() => TranscodeSession$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "TranscodeSession": "transcodeSession",
  });
});

/** @internal */
export type GetTranscodeSessionsMediaContainer$Outbound = {
  size?: number | undefined;
  TranscodeSession?: Array<TranscodeSession$Outbound> | undefined;
};

/** @internal */
export const GetTranscodeSessionsMediaContainer$outboundSchema: z.ZodType<
  GetTranscodeSessionsMediaContainer$Outbound,
  z.ZodTypeDef,
  GetTranscodeSessionsMediaContainer
> = z.object({
  size: z.number().int().optional(),
  transcodeSession: z.array(z.lazy(() => TranscodeSession$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    transcodeSession: "TranscodeSession",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTranscodeSessionsMediaContainer$ {
  /** @deprecated use `GetTranscodeSessionsMediaContainer$inboundSchema` instead. */
  export const inboundSchema = GetTranscodeSessionsMediaContainer$inboundSchema;
  /** @deprecated use `GetTranscodeSessionsMediaContainer$outboundSchema` instead. */
  export const outboundSchema =
    GetTranscodeSessionsMediaContainer$outboundSchema;
  /** @deprecated use `GetTranscodeSessionsMediaContainer$Outbound` instead. */
  export type Outbound = GetTranscodeSessionsMediaContainer$Outbound;
}

/** @internal */
export const GetTranscodeSessionsResponseBody$inboundSchema: z.ZodType<
  GetTranscodeSessionsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  MediaContainer: z.lazy(() => GetTranscodeSessionsMediaContainer$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "MediaContainer": "mediaContainer",
  });
});

/** @internal */
export type GetTranscodeSessionsResponseBody$Outbound = {
  MediaContainer?: GetTranscodeSessionsMediaContainer$Outbound | undefined;
};

/** @internal */
export const GetTranscodeSessionsResponseBody$outboundSchema: z.ZodType<
  GetTranscodeSessionsResponseBody$Outbound,
  z.ZodTypeDef,
  GetTranscodeSessionsResponseBody
> = z.object({
  mediaContainer: z.lazy(() =>
    GetTranscodeSessionsMediaContainer$outboundSchema
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
export namespace GetTranscodeSessionsResponseBody$ {
  /** @deprecated use `GetTranscodeSessionsResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetTranscodeSessionsResponseBody$inboundSchema;
  /** @deprecated use `GetTranscodeSessionsResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetTranscodeSessionsResponseBody$outboundSchema;
  /** @deprecated use `GetTranscodeSessionsResponseBody$Outbound` instead. */
  export type Outbound = GetTranscodeSessionsResponseBody$Outbound;
}

/** @internal */
export const GetTranscodeSessionsResponse$inboundSchema: z.ZodType<
  GetTranscodeSessionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetTranscodeSessionsResponseBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetTranscodeSessionsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetTranscodeSessionsResponseBody$Outbound | undefined;
};

/** @internal */
export const GetTranscodeSessionsResponse$outboundSchema: z.ZodType<
  GetTranscodeSessionsResponse$Outbound,
  z.ZodTypeDef,
  GetTranscodeSessionsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetTranscodeSessionsResponseBody$outboundSchema)
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
export namespace GetTranscodeSessionsResponse$ {
  /** @deprecated use `GetTranscodeSessionsResponse$inboundSchema` instead. */
  export const inboundSchema = GetTranscodeSessionsResponse$inboundSchema;
  /** @deprecated use `GetTranscodeSessionsResponse$outboundSchema` instead. */
  export const outboundSchema = GetTranscodeSessionsResponse$outboundSchema;
  /** @deprecated use `GetTranscodeSessionsResponse$Outbound` instead. */
  export type Outbound = GetTranscodeSessionsResponse$Outbound;
}
