/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetMediaProvidersRequest = {
  /**
   * An authentication token, obtained from plex.tv
   */
  xPlexToken: string;
};

export type Pivot = {
  id?: string | undefined;
  key?: string | undefined;
  type?: string | undefined;
  title?: string | undefined;
  context?: string | undefined;
  symbol?: string | undefined;
};

export type GetMediaProvidersDirectory = {
  hubKey?: string | undefined;
  title?: string | undefined;
  agent?: string | undefined;
  language?: string | undefined;
  refreshing?: boolean | undefined;
  scanner?: string | undefined;
  uuid?: string | undefined;
  id?: string | undefined;
  key?: string | undefined;
  type?: string | undefined;
  subtype?: string | undefined;
  updatedAt?: number | undefined;
  scannedAt?: number | undefined;
  pivot?: Array<Pivot> | undefined;
};

export type Action = {
  id: string;
  key: string;
};

export type Feature = {
  key?: string | undefined;
  type: string;
  flavor?: string | undefined;
  scrobbleKey?: string | undefined;
  unscrobbleKey?: string | undefined;
  directory?: Array<GetMediaProvidersDirectory> | undefined;
  action?: Array<Action> | undefined;
};

export type MediaProvider = {
  identifier?: string | undefined;
  title?: string | undefined;
  types?: string | undefined;
  protocols?: string | undefined;
  feature?: Array<Feature> | undefined;
};

export type GetMediaProvidersMediaContainer = {
  size?: number | undefined;
  allowCameraUpload?: boolean | undefined;
  allowChannelAccess?: boolean | undefined;
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
  livetv?: number | undefined;
  machineIdentifier?: string | undefined;
  musicAnalysis?: number | undefined;
  myPlex?: boolean | undefined;
  myPlexMappingState?: string | undefined;
  myPlexSigninState?: string | undefined;
  myPlexSubscription?: boolean | undefined;
  myPlexUsername?: string | undefined;
  offlineTranscode?: number | undefined;
  ownerFeatures?: string | undefined;
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
  transcoderSubtitles?: boolean | undefined;
  transcoderVideo?: boolean | undefined;
  transcoderVideoBitrates?: string | undefined;
  transcoderVideoQualities?: string | undefined;
  transcoderVideoResolutions?: string | undefined;
  updatedAt?: number | undefined;
  updater?: boolean | undefined;
  version?: string | undefined;
  voiceSearch?: boolean | undefined;
  mediaProvider?: Array<MediaProvider> | undefined;
};

/**
 * Media providers and their features
 */
export type GetMediaProvidersResponseBody = {
  mediaContainer?: GetMediaProvidersMediaContainer | undefined;
};

export type GetMediaProvidersResponse = {
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
   * Media providers and their features
   */
  object?: GetMediaProvidersResponseBody | undefined;
};

/** @internal */
export const GetMediaProvidersRequest$inboundSchema: z.ZodType<
  GetMediaProvidersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Plex-Token": z.string(),
}).transform((v) => {
  return remap$(v, {
    "X-Plex-Token": "xPlexToken",
  });
});

/** @internal */
export type GetMediaProvidersRequest$Outbound = {
  "X-Plex-Token": string;
};

/** @internal */
export const GetMediaProvidersRequest$outboundSchema: z.ZodType<
  GetMediaProvidersRequest$Outbound,
  z.ZodTypeDef,
  GetMediaProvidersRequest
> = z.object({
  xPlexToken: z.string(),
}).transform((v) => {
  return remap$(v, {
    xPlexToken: "X-Plex-Token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMediaProvidersRequest$ {
  /** @deprecated use `GetMediaProvidersRequest$inboundSchema` instead. */
  export const inboundSchema = GetMediaProvidersRequest$inboundSchema;
  /** @deprecated use `GetMediaProvidersRequest$outboundSchema` instead. */
  export const outboundSchema = GetMediaProvidersRequest$outboundSchema;
  /** @deprecated use `GetMediaProvidersRequest$Outbound` instead. */
  export type Outbound = GetMediaProvidersRequest$Outbound;
}

export function getMediaProvidersRequestToJSON(
  getMediaProvidersRequest: GetMediaProvidersRequest,
): string {
  return JSON.stringify(
    GetMediaProvidersRequest$outboundSchema.parse(getMediaProvidersRequest),
  );
}

export function getMediaProvidersRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetMediaProvidersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMediaProvidersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMediaProvidersRequest' from JSON`,
  );
}

/** @internal */
export const Pivot$inboundSchema: z.ZodType<Pivot, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string().optional(),
    key: z.string().optional(),
    type: z.string().optional(),
    title: z.string().optional(),
    context: z.string().optional(),
    symbol: z.string().optional(),
  });

/** @internal */
export type Pivot$Outbound = {
  id?: string | undefined;
  key?: string | undefined;
  type?: string | undefined;
  title?: string | undefined;
  context?: string | undefined;
  symbol?: string | undefined;
};

/** @internal */
export const Pivot$outboundSchema: z.ZodType<
  Pivot$Outbound,
  z.ZodTypeDef,
  Pivot
> = z.object({
  id: z.string().optional(),
  key: z.string().optional(),
  type: z.string().optional(),
  title: z.string().optional(),
  context: z.string().optional(),
  symbol: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Pivot$ {
  /** @deprecated use `Pivot$inboundSchema` instead. */
  export const inboundSchema = Pivot$inboundSchema;
  /** @deprecated use `Pivot$outboundSchema` instead. */
  export const outboundSchema = Pivot$outboundSchema;
  /** @deprecated use `Pivot$Outbound` instead. */
  export type Outbound = Pivot$Outbound;
}

export function pivotToJSON(pivot: Pivot): string {
  return JSON.stringify(Pivot$outboundSchema.parse(pivot));
}

export function pivotFromJSON(
  jsonString: string,
): SafeParseResult<Pivot, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Pivot$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Pivot' from JSON`,
  );
}

/** @internal */
export const GetMediaProvidersDirectory$inboundSchema: z.ZodType<
  GetMediaProvidersDirectory,
  z.ZodTypeDef,
  unknown
> = z.object({
  hubKey: z.string().optional(),
  title: z.string().optional(),
  agent: z.string().optional(),
  language: z.string().optional(),
  refreshing: z.boolean().optional(),
  scanner: z.string().optional(),
  uuid: z.string().optional(),
  id: z.string().optional(),
  key: z.string().optional(),
  type: z.string().optional(),
  subtype: z.string().optional(),
  updatedAt: z.number().int().optional(),
  scannedAt: z.number().int().optional(),
  Pivot: z.array(z.lazy(() => Pivot$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "Pivot": "pivot",
  });
});

/** @internal */
export type GetMediaProvidersDirectory$Outbound = {
  hubKey?: string | undefined;
  title?: string | undefined;
  agent?: string | undefined;
  language?: string | undefined;
  refreshing?: boolean | undefined;
  scanner?: string | undefined;
  uuid?: string | undefined;
  id?: string | undefined;
  key?: string | undefined;
  type?: string | undefined;
  subtype?: string | undefined;
  updatedAt?: number | undefined;
  scannedAt?: number | undefined;
  Pivot?: Array<Pivot$Outbound> | undefined;
};

/** @internal */
export const GetMediaProvidersDirectory$outboundSchema: z.ZodType<
  GetMediaProvidersDirectory$Outbound,
  z.ZodTypeDef,
  GetMediaProvidersDirectory
> = z.object({
  hubKey: z.string().optional(),
  title: z.string().optional(),
  agent: z.string().optional(),
  language: z.string().optional(),
  refreshing: z.boolean().optional(),
  scanner: z.string().optional(),
  uuid: z.string().optional(),
  id: z.string().optional(),
  key: z.string().optional(),
  type: z.string().optional(),
  subtype: z.string().optional(),
  updatedAt: z.number().int().optional(),
  scannedAt: z.number().int().optional(),
  pivot: z.array(z.lazy(() => Pivot$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    pivot: "Pivot",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMediaProvidersDirectory$ {
  /** @deprecated use `GetMediaProvidersDirectory$inboundSchema` instead. */
  export const inboundSchema = GetMediaProvidersDirectory$inboundSchema;
  /** @deprecated use `GetMediaProvidersDirectory$outboundSchema` instead. */
  export const outboundSchema = GetMediaProvidersDirectory$outboundSchema;
  /** @deprecated use `GetMediaProvidersDirectory$Outbound` instead. */
  export type Outbound = GetMediaProvidersDirectory$Outbound;
}

export function getMediaProvidersDirectoryToJSON(
  getMediaProvidersDirectory: GetMediaProvidersDirectory,
): string {
  return JSON.stringify(
    GetMediaProvidersDirectory$outboundSchema.parse(getMediaProvidersDirectory),
  );
}

export function getMediaProvidersDirectoryFromJSON(
  jsonString: string,
): SafeParseResult<GetMediaProvidersDirectory, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMediaProvidersDirectory$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMediaProvidersDirectory' from JSON`,
  );
}

/** @internal */
export const Action$inboundSchema: z.ZodType<Action, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
    key: z.string(),
  });

/** @internal */
export type Action$Outbound = {
  id: string;
  key: string;
};

/** @internal */
export const Action$outboundSchema: z.ZodType<
  Action$Outbound,
  z.ZodTypeDef,
  Action
> = z.object({
  id: z.string(),
  key: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Action$ {
  /** @deprecated use `Action$inboundSchema` instead. */
  export const inboundSchema = Action$inboundSchema;
  /** @deprecated use `Action$outboundSchema` instead. */
  export const outboundSchema = Action$outboundSchema;
  /** @deprecated use `Action$Outbound` instead. */
  export type Outbound = Action$Outbound;
}

export function actionToJSON(action: Action): string {
  return JSON.stringify(Action$outboundSchema.parse(action));
}

export function actionFromJSON(
  jsonString: string,
): SafeParseResult<Action, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Action$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Action' from JSON`,
  );
}

/** @internal */
export const Feature$inboundSchema: z.ZodType<Feature, z.ZodTypeDef, unknown> =
  z.object({
    key: z.string().optional(),
    type: z.string(),
    flavor: z.string().optional(),
    scrobbleKey: z.string().optional(),
    unscrobbleKey: z.string().optional(),
    Directory: z.array(z.lazy(() => GetMediaProvidersDirectory$inboundSchema))
      .optional(),
    Action: z.array(z.lazy(() => Action$inboundSchema)).optional(),
  }).transform((v) => {
    return remap$(v, {
      "Directory": "directory",
      "Action": "action",
    });
  });

/** @internal */
export type Feature$Outbound = {
  key?: string | undefined;
  type: string;
  flavor?: string | undefined;
  scrobbleKey?: string | undefined;
  unscrobbleKey?: string | undefined;
  Directory?: Array<GetMediaProvidersDirectory$Outbound> | undefined;
  Action?: Array<Action$Outbound> | undefined;
};

/** @internal */
export const Feature$outboundSchema: z.ZodType<
  Feature$Outbound,
  z.ZodTypeDef,
  Feature
> = z.object({
  key: z.string().optional(),
  type: z.string(),
  flavor: z.string().optional(),
  scrobbleKey: z.string().optional(),
  unscrobbleKey: z.string().optional(),
  directory: z.array(z.lazy(() => GetMediaProvidersDirectory$outboundSchema))
    .optional(),
  action: z.array(z.lazy(() => Action$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    directory: "Directory",
    action: "Action",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Feature$ {
  /** @deprecated use `Feature$inboundSchema` instead. */
  export const inboundSchema = Feature$inboundSchema;
  /** @deprecated use `Feature$outboundSchema` instead. */
  export const outboundSchema = Feature$outboundSchema;
  /** @deprecated use `Feature$Outbound` instead. */
  export type Outbound = Feature$Outbound;
}

export function featureToJSON(feature: Feature): string {
  return JSON.stringify(Feature$outboundSchema.parse(feature));
}

export function featureFromJSON(
  jsonString: string,
): SafeParseResult<Feature, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Feature$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Feature' from JSON`,
  );
}

/** @internal */
export const MediaProvider$inboundSchema: z.ZodType<
  MediaProvider,
  z.ZodTypeDef,
  unknown
> = z.object({
  identifier: z.string().optional(),
  title: z.string().optional(),
  types: z.string().optional(),
  protocols: z.string().optional(),
  Feature: z.array(z.lazy(() => Feature$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "Feature": "feature",
  });
});

/** @internal */
export type MediaProvider$Outbound = {
  identifier?: string | undefined;
  title?: string | undefined;
  types?: string | undefined;
  protocols?: string | undefined;
  Feature?: Array<Feature$Outbound> | undefined;
};

/** @internal */
export const MediaProvider$outboundSchema: z.ZodType<
  MediaProvider$Outbound,
  z.ZodTypeDef,
  MediaProvider
> = z.object({
  identifier: z.string().optional(),
  title: z.string().optional(),
  types: z.string().optional(),
  protocols: z.string().optional(),
  feature: z.array(z.lazy(() => Feature$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    feature: "Feature",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaProvider$ {
  /** @deprecated use `MediaProvider$inboundSchema` instead. */
  export const inboundSchema = MediaProvider$inboundSchema;
  /** @deprecated use `MediaProvider$outboundSchema` instead. */
  export const outboundSchema = MediaProvider$outboundSchema;
  /** @deprecated use `MediaProvider$Outbound` instead. */
  export type Outbound = MediaProvider$Outbound;
}

export function mediaProviderToJSON(mediaProvider: MediaProvider): string {
  return JSON.stringify(MediaProvider$outboundSchema.parse(mediaProvider));
}

export function mediaProviderFromJSON(
  jsonString: string,
): SafeParseResult<MediaProvider, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaProvider$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaProvider' from JSON`,
  );
}

/** @internal */
export const GetMediaProvidersMediaContainer$inboundSchema: z.ZodType<
  GetMediaProvidersMediaContainer,
  z.ZodTypeDef,
  unknown
> = z.object({
  size: z.number().int().optional(),
  allowCameraUpload: z.boolean().optional(),
  allowChannelAccess: z.boolean().optional(),
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
  livetv: z.number().int().optional(),
  machineIdentifier: z.string().optional(),
  musicAnalysis: z.number().int().optional(),
  myPlex: z.boolean().optional(),
  myPlexMappingState: z.string().optional(),
  myPlexSigninState: z.string().optional(),
  myPlexSubscription: z.boolean().optional(),
  myPlexUsername: z.string().optional(),
  offlineTranscode: z.number().int().optional(),
  ownerFeatures: z.string().optional(),
  platform: z.string().optional(),
  platformVersion: z.string().optional(),
  pluginHost: z.boolean().optional(),
  pushNotifications: z.boolean().optional(),
  readOnlyLibraries: z.boolean().optional(),
  streamingBrainABRVersion: z.number().int().optional(),
  streamingBrainVersion: z.number().int().optional(),
  sync: z.boolean().optional(),
  transcoderActiveVideoSessions: z.number().int().optional(),
  transcoderAudio: z.boolean().optional(),
  transcoderLyrics: z.boolean().optional(),
  transcoderSubtitles: z.boolean().optional(),
  transcoderVideo: z.boolean().optional(),
  transcoderVideoBitrates: z.string().optional(),
  transcoderVideoQualities: z.string().optional(),
  transcoderVideoResolutions: z.string().optional(),
  updatedAt: z.number().int().optional(),
  updater: z.boolean().optional(),
  version: z.string().optional(),
  voiceSearch: z.boolean().optional(),
  MediaProvider: z.array(z.lazy(() => MediaProvider$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "MediaProvider": "mediaProvider",
  });
});

/** @internal */
export type GetMediaProvidersMediaContainer$Outbound = {
  size?: number | undefined;
  allowCameraUpload?: boolean | undefined;
  allowChannelAccess?: boolean | undefined;
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
  livetv?: number | undefined;
  machineIdentifier?: string | undefined;
  musicAnalysis?: number | undefined;
  myPlex?: boolean | undefined;
  myPlexMappingState?: string | undefined;
  myPlexSigninState?: string | undefined;
  myPlexSubscription?: boolean | undefined;
  myPlexUsername?: string | undefined;
  offlineTranscode?: number | undefined;
  ownerFeatures?: string | undefined;
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
  transcoderSubtitles?: boolean | undefined;
  transcoderVideo?: boolean | undefined;
  transcoderVideoBitrates?: string | undefined;
  transcoderVideoQualities?: string | undefined;
  transcoderVideoResolutions?: string | undefined;
  updatedAt?: number | undefined;
  updater?: boolean | undefined;
  version?: string | undefined;
  voiceSearch?: boolean | undefined;
  MediaProvider?: Array<MediaProvider$Outbound> | undefined;
};

/** @internal */
export const GetMediaProvidersMediaContainer$outboundSchema: z.ZodType<
  GetMediaProvidersMediaContainer$Outbound,
  z.ZodTypeDef,
  GetMediaProvidersMediaContainer
> = z.object({
  size: z.number().int().optional(),
  allowCameraUpload: z.boolean().optional(),
  allowChannelAccess: z.boolean().optional(),
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
  livetv: z.number().int().optional(),
  machineIdentifier: z.string().optional(),
  musicAnalysis: z.number().int().optional(),
  myPlex: z.boolean().optional(),
  myPlexMappingState: z.string().optional(),
  myPlexSigninState: z.string().optional(),
  myPlexSubscription: z.boolean().optional(),
  myPlexUsername: z.string().optional(),
  offlineTranscode: z.number().int().optional(),
  ownerFeatures: z.string().optional(),
  platform: z.string().optional(),
  platformVersion: z.string().optional(),
  pluginHost: z.boolean().optional(),
  pushNotifications: z.boolean().optional(),
  readOnlyLibraries: z.boolean().optional(),
  streamingBrainABRVersion: z.number().int().optional(),
  streamingBrainVersion: z.number().int().optional(),
  sync: z.boolean().optional(),
  transcoderActiveVideoSessions: z.number().int().optional(),
  transcoderAudio: z.boolean().optional(),
  transcoderLyrics: z.boolean().optional(),
  transcoderSubtitles: z.boolean().optional(),
  transcoderVideo: z.boolean().optional(),
  transcoderVideoBitrates: z.string().optional(),
  transcoderVideoQualities: z.string().optional(),
  transcoderVideoResolutions: z.string().optional(),
  updatedAt: z.number().int().optional(),
  updater: z.boolean().optional(),
  version: z.string().optional(),
  voiceSearch: z.boolean().optional(),
  mediaProvider: z.array(z.lazy(() => MediaProvider$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    mediaProvider: "MediaProvider",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMediaProvidersMediaContainer$ {
  /** @deprecated use `GetMediaProvidersMediaContainer$inboundSchema` instead. */
  export const inboundSchema = GetMediaProvidersMediaContainer$inboundSchema;
  /** @deprecated use `GetMediaProvidersMediaContainer$outboundSchema` instead. */
  export const outboundSchema = GetMediaProvidersMediaContainer$outboundSchema;
  /** @deprecated use `GetMediaProvidersMediaContainer$Outbound` instead. */
  export type Outbound = GetMediaProvidersMediaContainer$Outbound;
}

export function getMediaProvidersMediaContainerToJSON(
  getMediaProvidersMediaContainer: GetMediaProvidersMediaContainer,
): string {
  return JSON.stringify(
    GetMediaProvidersMediaContainer$outboundSchema.parse(
      getMediaProvidersMediaContainer,
    ),
  );
}

export function getMediaProvidersMediaContainerFromJSON(
  jsonString: string,
): SafeParseResult<GetMediaProvidersMediaContainer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMediaProvidersMediaContainer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMediaProvidersMediaContainer' from JSON`,
  );
}

/** @internal */
export const GetMediaProvidersResponseBody$inboundSchema: z.ZodType<
  GetMediaProvidersResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  MediaContainer: z.lazy(() => GetMediaProvidersMediaContainer$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "MediaContainer": "mediaContainer",
  });
});

/** @internal */
export type GetMediaProvidersResponseBody$Outbound = {
  MediaContainer?: GetMediaProvidersMediaContainer$Outbound | undefined;
};

/** @internal */
export const GetMediaProvidersResponseBody$outboundSchema: z.ZodType<
  GetMediaProvidersResponseBody$Outbound,
  z.ZodTypeDef,
  GetMediaProvidersResponseBody
> = z.object({
  mediaContainer: z.lazy(() => GetMediaProvidersMediaContainer$outboundSchema)
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
export namespace GetMediaProvidersResponseBody$ {
  /** @deprecated use `GetMediaProvidersResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetMediaProvidersResponseBody$inboundSchema;
  /** @deprecated use `GetMediaProvidersResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetMediaProvidersResponseBody$outboundSchema;
  /** @deprecated use `GetMediaProvidersResponseBody$Outbound` instead. */
  export type Outbound = GetMediaProvidersResponseBody$Outbound;
}

export function getMediaProvidersResponseBodyToJSON(
  getMediaProvidersResponseBody: GetMediaProvidersResponseBody,
): string {
  return JSON.stringify(
    GetMediaProvidersResponseBody$outboundSchema.parse(
      getMediaProvidersResponseBody,
    ),
  );
}

export function getMediaProvidersResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetMediaProvidersResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMediaProvidersResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMediaProvidersResponseBody' from JSON`,
  );
}

/** @internal */
export const GetMediaProvidersResponse$inboundSchema: z.ZodType<
  GetMediaProvidersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetMediaProvidersResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetMediaProvidersResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetMediaProvidersResponseBody$Outbound | undefined;
};

/** @internal */
export const GetMediaProvidersResponse$outboundSchema: z.ZodType<
  GetMediaProvidersResponse$Outbound,
  z.ZodTypeDef,
  GetMediaProvidersResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetMediaProvidersResponseBody$outboundSchema).optional(),
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
export namespace GetMediaProvidersResponse$ {
  /** @deprecated use `GetMediaProvidersResponse$inboundSchema` instead. */
  export const inboundSchema = GetMediaProvidersResponse$inboundSchema;
  /** @deprecated use `GetMediaProvidersResponse$outboundSchema` instead. */
  export const outboundSchema = GetMediaProvidersResponse$outboundSchema;
  /** @deprecated use `GetMediaProvidersResponse$Outbound` instead. */
  export type Outbound = GetMediaProvidersResponse$Outbound;
}

export function getMediaProvidersResponseToJSON(
  getMediaProvidersResponse: GetMediaProvidersResponse,
): string {
  return JSON.stringify(
    GetMediaProvidersResponse$outboundSchema.parse(getMediaProvidersResponse),
  );
}

export function getMediaProvidersResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetMediaProvidersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMediaProvidersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMediaProvidersResponse' from JSON`,
  );
}
