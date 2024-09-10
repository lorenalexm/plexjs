/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type Directory = {
  count?: number | undefined;
  key?: string | undefined;
  title?: string | undefined;
};

export type MediaContainer = {
  size?: number | undefined;
  allowCameraUpload?: boolean | undefined;
  allowChannelAccess?: boolean | undefined;
  allowMediaDeletion?: boolean | undefined;
  allowSharing?: boolean | undefined;
  allowSync?: boolean | undefined;
  allowTuners?: boolean | undefined;
  backgroundProcessing?: boolean | undefined;
  certificate?: boolean | undefined;
  companionProxy?: boolean | undefined;
  countryCode?: string | undefined;
  diagnostics?: string | undefined;
  eventStream?: boolean | undefined;
  friendlyName?: string | undefined;
  hubSearch?: boolean | undefined;
  itemClusters?: boolean | undefined;
  livetv?: number | undefined;
  machineIdentifier?: string | undefined;
  mediaProviders?: boolean | undefined;
  multiuser?: boolean | undefined;
  musicAnalysis?: number | undefined;
  myPlex?: boolean | undefined;
  myPlexMappingState?: string | undefined;
  myPlexSigninState?: string | undefined;
  myPlexSubscription?: boolean | undefined;
  myPlexUsername?: string | undefined;
  offlineTranscode?: number | undefined;
  ownerFeatures?: string | undefined;
  photoAutoTag?: boolean | undefined;
  platform?: string | undefined;
  platformVersion?: string | undefined;
  pluginHost?: boolean | undefined;
  pushNotifications?: boolean | undefined;
  readOnlyLibraries?: boolean | undefined;
  streamingBrainABRVersion?: number | undefined;
  streamingBrainVersion?: number | undefined;
  sync?: boolean | undefined;
  transcoderActiveVideoSessions?: number | undefined;
  transcoderAudio?: boolean | undefined;
  transcoderLyrics?: boolean | undefined;
  transcoderPhoto?: boolean | undefined;
  transcoderSubtitles?: boolean | undefined;
  transcoderVideo?: boolean | undefined;
  transcoderVideoBitrates?: string | undefined;
  transcoderVideoQualities?: string | undefined;
  transcoderVideoResolutions?: string | undefined;
  updatedAt?: number | undefined;
  updater?: boolean | undefined;
  version?: string | undefined;
  voiceSearch?: boolean | undefined;
  directory?: Array<Directory> | undefined;
};

/**
 * The Server Capabilities
 */
export type GetServerCapabilitiesResponseBody = {
  mediaContainer?: MediaContainer | undefined;
};

export type GetServerCapabilitiesResponse = {
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
   * The Server Capabilities
   */
  object?: GetServerCapabilitiesResponseBody | undefined;
};

/** @internal */
export const Directory$inboundSchema: z.ZodType<
  Directory,
  z.ZodTypeDef,
  unknown
> = z.object({
  count: z.number().optional(),
  key: z.string().optional(),
  title: z.string().optional(),
});

/** @internal */
export type Directory$Outbound = {
  count?: number | undefined;
  key?: string | undefined;
  title?: string | undefined;
};

/** @internal */
export const Directory$outboundSchema: z.ZodType<
  Directory$Outbound,
  z.ZodTypeDef,
  Directory
> = z.object({
  count: z.number().optional(),
  key: z.string().optional(),
  title: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Directory$ {
  /** @deprecated use `Directory$inboundSchema` instead. */
  export const inboundSchema = Directory$inboundSchema;
  /** @deprecated use `Directory$outboundSchema` instead. */
  export const outboundSchema = Directory$outboundSchema;
  /** @deprecated use `Directory$Outbound` instead. */
  export type Outbound = Directory$Outbound;
}

/** @internal */
export const MediaContainer$inboundSchema: z.ZodType<
  MediaContainer,
  z.ZodTypeDef,
  unknown
> = z.object({
  size: z.number().optional(),
  allowCameraUpload: z.boolean().optional(),
  allowChannelAccess: z.boolean().optional(),
  allowMediaDeletion: z.boolean().optional(),
  allowSharing: z.boolean().optional(),
  allowSync: z.boolean().optional(),
  allowTuners: z.boolean().optional(),
  backgroundProcessing: z.boolean().optional(),
  certificate: z.boolean().optional(),
  companionProxy: z.boolean().optional(),
  countryCode: z.string().optional(),
  diagnostics: z.string().optional(),
  eventStream: z.boolean().optional(),
  friendlyName: z.string().optional(),
  hubSearch: z.boolean().optional(),
  itemClusters: z.boolean().optional(),
  livetv: z.number().optional(),
  machineIdentifier: z.string().optional(),
  mediaProviders: z.boolean().optional(),
  multiuser: z.boolean().optional(),
  musicAnalysis: z.number().optional(),
  myPlex: z.boolean().optional(),
  myPlexMappingState: z.string().optional(),
  myPlexSigninState: z.string().optional(),
  myPlexSubscription: z.boolean().optional(),
  myPlexUsername: z.string().optional(),
  offlineTranscode: z.number().optional(),
  ownerFeatures: z.string().optional(),
  photoAutoTag: z.boolean().optional(),
  platform: z.string().optional(),
  platformVersion: z.string().optional(),
  pluginHost: z.boolean().optional(),
  pushNotifications: z.boolean().optional(),
  readOnlyLibraries: z.boolean().optional(),
  streamingBrainABRVersion: z.number().optional(),
  streamingBrainVersion: z.number().optional(),
  sync: z.boolean().optional(),
  transcoderActiveVideoSessions: z.number().optional(),
  transcoderAudio: z.boolean().optional(),
  transcoderLyrics: z.boolean().optional(),
  transcoderPhoto: z.boolean().optional(),
  transcoderSubtitles: z.boolean().optional(),
  transcoderVideo: z.boolean().optional(),
  transcoderVideoBitrates: z.string().optional(),
  transcoderVideoQualities: z.string().optional(),
  transcoderVideoResolutions: z.string().optional(),
  updatedAt: z.number().optional(),
  updater: z.boolean().optional(),
  version: z.string().optional(),
  voiceSearch: z.boolean().optional(),
  Directory: z.array(z.lazy(() => Directory$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "Directory": "directory",
  });
});

/** @internal */
export type MediaContainer$Outbound = {
  size?: number | undefined;
  allowCameraUpload?: boolean | undefined;
  allowChannelAccess?: boolean | undefined;
  allowMediaDeletion?: boolean | undefined;
  allowSharing?: boolean | undefined;
  allowSync?: boolean | undefined;
  allowTuners?: boolean | undefined;
  backgroundProcessing?: boolean | undefined;
  certificate?: boolean | undefined;
  companionProxy?: boolean | undefined;
  countryCode?: string | undefined;
  diagnostics?: string | undefined;
  eventStream?: boolean | undefined;
  friendlyName?: string | undefined;
  hubSearch?: boolean | undefined;
  itemClusters?: boolean | undefined;
  livetv?: number | undefined;
  machineIdentifier?: string | undefined;
  mediaProviders?: boolean | undefined;
  multiuser?: boolean | undefined;
  musicAnalysis?: number | undefined;
  myPlex?: boolean | undefined;
  myPlexMappingState?: string | undefined;
  myPlexSigninState?: string | undefined;
  myPlexSubscription?: boolean | undefined;
  myPlexUsername?: string | undefined;
  offlineTranscode?: number | undefined;
  ownerFeatures?: string | undefined;
  photoAutoTag?: boolean | undefined;
  platform?: string | undefined;
  platformVersion?: string | undefined;
  pluginHost?: boolean | undefined;
  pushNotifications?: boolean | undefined;
  readOnlyLibraries?: boolean | undefined;
  streamingBrainABRVersion?: number | undefined;
  streamingBrainVersion?: number | undefined;
  sync?: boolean | undefined;
  transcoderActiveVideoSessions?: number | undefined;
  transcoderAudio?: boolean | undefined;
  transcoderLyrics?: boolean | undefined;
  transcoderPhoto?: boolean | undefined;
  transcoderSubtitles?: boolean | undefined;
  transcoderVideo?: boolean | undefined;
  transcoderVideoBitrates?: string | undefined;
  transcoderVideoQualities?: string | undefined;
  transcoderVideoResolutions?: string | undefined;
  updatedAt?: number | undefined;
  updater?: boolean | undefined;
  version?: string | undefined;
  voiceSearch?: boolean | undefined;
  Directory?: Array<Directory$Outbound> | undefined;
};

/** @internal */
export const MediaContainer$outboundSchema: z.ZodType<
  MediaContainer$Outbound,
  z.ZodTypeDef,
  MediaContainer
> = z.object({
  size: z.number().optional(),
  allowCameraUpload: z.boolean().optional(),
  allowChannelAccess: z.boolean().optional(),
  allowMediaDeletion: z.boolean().optional(),
  allowSharing: z.boolean().optional(),
  allowSync: z.boolean().optional(),
  allowTuners: z.boolean().optional(),
  backgroundProcessing: z.boolean().optional(),
  certificate: z.boolean().optional(),
  companionProxy: z.boolean().optional(),
  countryCode: z.string().optional(),
  diagnostics: z.string().optional(),
  eventStream: z.boolean().optional(),
  friendlyName: z.string().optional(),
  hubSearch: z.boolean().optional(),
  itemClusters: z.boolean().optional(),
  livetv: z.number().optional(),
  machineIdentifier: z.string().optional(),
  mediaProviders: z.boolean().optional(),
  multiuser: z.boolean().optional(),
  musicAnalysis: z.number().optional(),
  myPlex: z.boolean().optional(),
  myPlexMappingState: z.string().optional(),
  myPlexSigninState: z.string().optional(),
  myPlexSubscription: z.boolean().optional(),
  myPlexUsername: z.string().optional(),
  offlineTranscode: z.number().optional(),
  ownerFeatures: z.string().optional(),
  photoAutoTag: z.boolean().optional(),
  platform: z.string().optional(),
  platformVersion: z.string().optional(),
  pluginHost: z.boolean().optional(),
  pushNotifications: z.boolean().optional(),
  readOnlyLibraries: z.boolean().optional(),
  streamingBrainABRVersion: z.number().optional(),
  streamingBrainVersion: z.number().optional(),
  sync: z.boolean().optional(),
  transcoderActiveVideoSessions: z.number().optional(),
  transcoderAudio: z.boolean().optional(),
  transcoderLyrics: z.boolean().optional(),
  transcoderPhoto: z.boolean().optional(),
  transcoderSubtitles: z.boolean().optional(),
  transcoderVideo: z.boolean().optional(),
  transcoderVideoBitrates: z.string().optional(),
  transcoderVideoQualities: z.string().optional(),
  transcoderVideoResolutions: z.string().optional(),
  updatedAt: z.number().optional(),
  updater: z.boolean().optional(),
  version: z.string().optional(),
  voiceSearch: z.boolean().optional(),
  directory: z.array(z.lazy(() => Directory$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    directory: "Directory",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaContainer$ {
  /** @deprecated use `MediaContainer$inboundSchema` instead. */
  export const inboundSchema = MediaContainer$inboundSchema;
  /** @deprecated use `MediaContainer$outboundSchema` instead. */
  export const outboundSchema = MediaContainer$outboundSchema;
  /** @deprecated use `MediaContainer$Outbound` instead. */
  export type Outbound = MediaContainer$Outbound;
}

/** @internal */
export const GetServerCapabilitiesResponseBody$inboundSchema: z.ZodType<
  GetServerCapabilitiesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  MediaContainer: z.lazy(() => MediaContainer$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "MediaContainer": "mediaContainer",
  });
});

/** @internal */
export type GetServerCapabilitiesResponseBody$Outbound = {
  MediaContainer?: MediaContainer$Outbound | undefined;
};

/** @internal */
export const GetServerCapabilitiesResponseBody$outboundSchema: z.ZodType<
  GetServerCapabilitiesResponseBody$Outbound,
  z.ZodTypeDef,
  GetServerCapabilitiesResponseBody
> = z.object({
  mediaContainer: z.lazy(() => MediaContainer$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    mediaContainer: "MediaContainer",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetServerCapabilitiesResponseBody$ {
  /** @deprecated use `GetServerCapabilitiesResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetServerCapabilitiesResponseBody$inboundSchema;
  /** @deprecated use `GetServerCapabilitiesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetServerCapabilitiesResponseBody$outboundSchema;
  /** @deprecated use `GetServerCapabilitiesResponseBody$Outbound` instead. */
  export type Outbound = GetServerCapabilitiesResponseBody$Outbound;
}

/** @internal */
export const GetServerCapabilitiesResponse$inboundSchema: z.ZodType<
  GetServerCapabilitiesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetServerCapabilitiesResponseBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetServerCapabilitiesResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetServerCapabilitiesResponseBody$Outbound | undefined;
};

/** @internal */
export const GetServerCapabilitiesResponse$outboundSchema: z.ZodType<
  GetServerCapabilitiesResponse$Outbound,
  z.ZodTypeDef,
  GetServerCapabilitiesResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetServerCapabilitiesResponseBody$outboundSchema)
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
export namespace GetServerCapabilitiesResponse$ {
  /** @deprecated use `GetServerCapabilitiesResponse$inboundSchema` instead. */
  export const inboundSchema = GetServerCapabilitiesResponse$inboundSchema;
  /** @deprecated use `GetServerCapabilitiesResponse$outboundSchema` instead. */
  export const outboundSchema = GetServerCapabilitiesResponse$outboundSchema;
  /** @deprecated use `GetServerCapabilitiesResponse$Outbound` instead. */
  export type Outbound = GetServerCapabilitiesResponse$Outbound;
}
