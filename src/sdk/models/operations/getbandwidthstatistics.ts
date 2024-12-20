/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetBandwidthStatisticsRequest = {
  /**
   * The timespan to retrieve statistics for
   *
   * @remarks
   * the exact meaning of this parameter is not known
   */
  timespan?: number | undefined;
};

export type GetBandwidthStatisticsDevice = {
  id?: number | undefined;
  name?: string | undefined;
  platform?: string | undefined;
  clientIdentifier?: string | undefined;
  createdAt?: number | undefined;
};

export type GetBandwidthStatisticsAccount = {
  id?: number | undefined;
  key?: string | undefined;
  name?: string | undefined;
  defaultAudioLanguage?: string | undefined;
  autoSelectAudio?: boolean | undefined;
  defaultSubtitleLanguage?: string | undefined;
  subtitleMode?: number | undefined;
  thumb?: string | undefined;
};

export type StatisticsBandwidth = {
  accountID?: number | undefined;
  deviceID?: number | undefined;
  timespan?: number | undefined;
  at?: number | undefined;
  lan?: boolean | undefined;
  bytes?: number | undefined;
};

export type GetBandwidthStatisticsMediaContainer = {
  size?: number | undefined;
  device?: Array<GetBandwidthStatisticsDevice> | undefined;
  account?: Array<GetBandwidthStatisticsAccount> | undefined;
  statisticsBandwidth?: Array<StatisticsBandwidth> | undefined;
};

/**
 * Bandwidth Statistics
 */
export type GetBandwidthStatisticsResponseBody = {
  mediaContainer?: GetBandwidthStatisticsMediaContainer | undefined;
};

export type GetBandwidthStatisticsResponse = {
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
   * Bandwidth Statistics
   */
  object?: GetBandwidthStatisticsResponseBody | undefined;
};

/** @internal */
export const GetBandwidthStatisticsRequest$inboundSchema: z.ZodType<
  GetBandwidthStatisticsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  timespan: z.number().int().optional(),
});

/** @internal */
export type GetBandwidthStatisticsRequest$Outbound = {
  timespan?: number | undefined;
};

/** @internal */
export const GetBandwidthStatisticsRequest$outboundSchema: z.ZodType<
  GetBandwidthStatisticsRequest$Outbound,
  z.ZodTypeDef,
  GetBandwidthStatisticsRequest
> = z.object({
  timespan: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBandwidthStatisticsRequest$ {
  /** @deprecated use `GetBandwidthStatisticsRequest$inboundSchema` instead. */
  export const inboundSchema = GetBandwidthStatisticsRequest$inboundSchema;
  /** @deprecated use `GetBandwidthStatisticsRequest$outboundSchema` instead. */
  export const outboundSchema = GetBandwidthStatisticsRequest$outboundSchema;
  /** @deprecated use `GetBandwidthStatisticsRequest$Outbound` instead. */
  export type Outbound = GetBandwidthStatisticsRequest$Outbound;
}

export function getBandwidthStatisticsRequestToJSON(
  getBandwidthStatisticsRequest: GetBandwidthStatisticsRequest,
): string {
  return JSON.stringify(
    GetBandwidthStatisticsRequest$outboundSchema.parse(
      getBandwidthStatisticsRequest,
    ),
  );
}

export function getBandwidthStatisticsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetBandwidthStatisticsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBandwidthStatisticsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBandwidthStatisticsRequest' from JSON`,
  );
}

/** @internal */
export const GetBandwidthStatisticsDevice$inboundSchema: z.ZodType<
  GetBandwidthStatisticsDevice,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  platform: z.string().optional(),
  clientIdentifier: z.string().optional(),
  createdAt: z.number().int().optional(),
});

/** @internal */
export type GetBandwidthStatisticsDevice$Outbound = {
  id?: number | undefined;
  name?: string | undefined;
  platform?: string | undefined;
  clientIdentifier?: string | undefined;
  createdAt?: number | undefined;
};

/** @internal */
export const GetBandwidthStatisticsDevice$outboundSchema: z.ZodType<
  GetBandwidthStatisticsDevice$Outbound,
  z.ZodTypeDef,
  GetBandwidthStatisticsDevice
> = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  platform: z.string().optional(),
  clientIdentifier: z.string().optional(),
  createdAt: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBandwidthStatisticsDevice$ {
  /** @deprecated use `GetBandwidthStatisticsDevice$inboundSchema` instead. */
  export const inboundSchema = GetBandwidthStatisticsDevice$inboundSchema;
  /** @deprecated use `GetBandwidthStatisticsDevice$outboundSchema` instead. */
  export const outboundSchema = GetBandwidthStatisticsDevice$outboundSchema;
  /** @deprecated use `GetBandwidthStatisticsDevice$Outbound` instead. */
  export type Outbound = GetBandwidthStatisticsDevice$Outbound;
}

export function getBandwidthStatisticsDeviceToJSON(
  getBandwidthStatisticsDevice: GetBandwidthStatisticsDevice,
): string {
  return JSON.stringify(
    GetBandwidthStatisticsDevice$outboundSchema.parse(
      getBandwidthStatisticsDevice,
    ),
  );
}

export function getBandwidthStatisticsDeviceFromJSON(
  jsonString: string,
): SafeParseResult<GetBandwidthStatisticsDevice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBandwidthStatisticsDevice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBandwidthStatisticsDevice' from JSON`,
  );
}

/** @internal */
export const GetBandwidthStatisticsAccount$inboundSchema: z.ZodType<
  GetBandwidthStatisticsAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int().optional(),
  key: z.string().optional(),
  name: z.string().optional(),
  defaultAudioLanguage: z.string().optional(),
  autoSelectAudio: z.boolean().optional(),
  defaultSubtitleLanguage: z.string().optional(),
  subtitleMode: z.number().int().optional(),
  thumb: z.string().optional(),
});

/** @internal */
export type GetBandwidthStatisticsAccount$Outbound = {
  id?: number | undefined;
  key?: string | undefined;
  name?: string | undefined;
  defaultAudioLanguage?: string | undefined;
  autoSelectAudio?: boolean | undefined;
  defaultSubtitleLanguage?: string | undefined;
  subtitleMode?: number | undefined;
  thumb?: string | undefined;
};

/** @internal */
export const GetBandwidthStatisticsAccount$outboundSchema: z.ZodType<
  GetBandwidthStatisticsAccount$Outbound,
  z.ZodTypeDef,
  GetBandwidthStatisticsAccount
> = z.object({
  id: z.number().int().optional(),
  key: z.string().optional(),
  name: z.string().optional(),
  defaultAudioLanguage: z.string().optional(),
  autoSelectAudio: z.boolean().optional(),
  defaultSubtitleLanguage: z.string().optional(),
  subtitleMode: z.number().int().optional(),
  thumb: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBandwidthStatisticsAccount$ {
  /** @deprecated use `GetBandwidthStatisticsAccount$inboundSchema` instead. */
  export const inboundSchema = GetBandwidthStatisticsAccount$inboundSchema;
  /** @deprecated use `GetBandwidthStatisticsAccount$outboundSchema` instead. */
  export const outboundSchema = GetBandwidthStatisticsAccount$outboundSchema;
  /** @deprecated use `GetBandwidthStatisticsAccount$Outbound` instead. */
  export type Outbound = GetBandwidthStatisticsAccount$Outbound;
}

export function getBandwidthStatisticsAccountToJSON(
  getBandwidthStatisticsAccount: GetBandwidthStatisticsAccount,
): string {
  return JSON.stringify(
    GetBandwidthStatisticsAccount$outboundSchema.parse(
      getBandwidthStatisticsAccount,
    ),
  );
}

export function getBandwidthStatisticsAccountFromJSON(
  jsonString: string,
): SafeParseResult<GetBandwidthStatisticsAccount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBandwidthStatisticsAccount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBandwidthStatisticsAccount' from JSON`,
  );
}

/** @internal */
export const StatisticsBandwidth$inboundSchema: z.ZodType<
  StatisticsBandwidth,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountID: z.number().int().optional(),
  deviceID: z.number().int().optional(),
  timespan: z.number().int().optional(),
  at: z.number().int().optional(),
  lan: z.boolean().optional(),
  bytes: z.number().int().optional(),
});

/** @internal */
export type StatisticsBandwidth$Outbound = {
  accountID?: number | undefined;
  deviceID?: number | undefined;
  timespan?: number | undefined;
  at?: number | undefined;
  lan?: boolean | undefined;
  bytes?: number | undefined;
};

/** @internal */
export const StatisticsBandwidth$outboundSchema: z.ZodType<
  StatisticsBandwidth$Outbound,
  z.ZodTypeDef,
  StatisticsBandwidth
> = z.object({
  accountID: z.number().int().optional(),
  deviceID: z.number().int().optional(),
  timespan: z.number().int().optional(),
  at: z.number().int().optional(),
  lan: z.boolean().optional(),
  bytes: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StatisticsBandwidth$ {
  /** @deprecated use `StatisticsBandwidth$inboundSchema` instead. */
  export const inboundSchema = StatisticsBandwidth$inboundSchema;
  /** @deprecated use `StatisticsBandwidth$outboundSchema` instead. */
  export const outboundSchema = StatisticsBandwidth$outboundSchema;
  /** @deprecated use `StatisticsBandwidth$Outbound` instead. */
  export type Outbound = StatisticsBandwidth$Outbound;
}

export function statisticsBandwidthToJSON(
  statisticsBandwidth: StatisticsBandwidth,
): string {
  return JSON.stringify(
    StatisticsBandwidth$outboundSchema.parse(statisticsBandwidth),
  );
}

export function statisticsBandwidthFromJSON(
  jsonString: string,
): SafeParseResult<StatisticsBandwidth, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StatisticsBandwidth$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StatisticsBandwidth' from JSON`,
  );
}

/** @internal */
export const GetBandwidthStatisticsMediaContainer$inboundSchema: z.ZodType<
  GetBandwidthStatisticsMediaContainer,
  z.ZodTypeDef,
  unknown
> = z.object({
  size: z.number().int().optional(),
  Device: z.array(z.lazy(() => GetBandwidthStatisticsDevice$inboundSchema))
    .optional(),
  Account: z.array(z.lazy(() => GetBandwidthStatisticsAccount$inboundSchema))
    .optional(),
  StatisticsBandwidth: z.array(z.lazy(() => StatisticsBandwidth$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "Device": "device",
    "Account": "account",
    "StatisticsBandwidth": "statisticsBandwidth",
  });
});

/** @internal */
export type GetBandwidthStatisticsMediaContainer$Outbound = {
  size?: number | undefined;
  Device?: Array<GetBandwidthStatisticsDevice$Outbound> | undefined;
  Account?: Array<GetBandwidthStatisticsAccount$Outbound> | undefined;
  StatisticsBandwidth?: Array<StatisticsBandwidth$Outbound> | undefined;
};

/** @internal */
export const GetBandwidthStatisticsMediaContainer$outboundSchema: z.ZodType<
  GetBandwidthStatisticsMediaContainer$Outbound,
  z.ZodTypeDef,
  GetBandwidthStatisticsMediaContainer
> = z.object({
  size: z.number().int().optional(),
  device: z.array(z.lazy(() => GetBandwidthStatisticsDevice$outboundSchema))
    .optional(),
  account: z.array(z.lazy(() => GetBandwidthStatisticsAccount$outboundSchema))
    .optional(),
  statisticsBandwidth: z.array(z.lazy(() => StatisticsBandwidth$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    device: "Device",
    account: "Account",
    statisticsBandwidth: "StatisticsBandwidth",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBandwidthStatisticsMediaContainer$ {
  /** @deprecated use `GetBandwidthStatisticsMediaContainer$inboundSchema` instead. */
  export const inboundSchema =
    GetBandwidthStatisticsMediaContainer$inboundSchema;
  /** @deprecated use `GetBandwidthStatisticsMediaContainer$outboundSchema` instead. */
  export const outboundSchema =
    GetBandwidthStatisticsMediaContainer$outboundSchema;
  /** @deprecated use `GetBandwidthStatisticsMediaContainer$Outbound` instead. */
  export type Outbound = GetBandwidthStatisticsMediaContainer$Outbound;
}

export function getBandwidthStatisticsMediaContainerToJSON(
  getBandwidthStatisticsMediaContainer: GetBandwidthStatisticsMediaContainer,
): string {
  return JSON.stringify(
    GetBandwidthStatisticsMediaContainer$outboundSchema.parse(
      getBandwidthStatisticsMediaContainer,
    ),
  );
}

export function getBandwidthStatisticsMediaContainerFromJSON(
  jsonString: string,
): SafeParseResult<GetBandwidthStatisticsMediaContainer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetBandwidthStatisticsMediaContainer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBandwidthStatisticsMediaContainer' from JSON`,
  );
}

/** @internal */
export const GetBandwidthStatisticsResponseBody$inboundSchema: z.ZodType<
  GetBandwidthStatisticsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  MediaContainer: z.lazy(() =>
    GetBandwidthStatisticsMediaContainer$inboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "MediaContainer": "mediaContainer",
  });
});

/** @internal */
export type GetBandwidthStatisticsResponseBody$Outbound = {
  MediaContainer?: GetBandwidthStatisticsMediaContainer$Outbound | undefined;
};

/** @internal */
export const GetBandwidthStatisticsResponseBody$outboundSchema: z.ZodType<
  GetBandwidthStatisticsResponseBody$Outbound,
  z.ZodTypeDef,
  GetBandwidthStatisticsResponseBody
> = z.object({
  mediaContainer: z.lazy(() =>
    GetBandwidthStatisticsMediaContainer$outboundSchema
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
export namespace GetBandwidthStatisticsResponseBody$ {
  /** @deprecated use `GetBandwidthStatisticsResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetBandwidthStatisticsResponseBody$inboundSchema;
  /** @deprecated use `GetBandwidthStatisticsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetBandwidthStatisticsResponseBody$outboundSchema;
  /** @deprecated use `GetBandwidthStatisticsResponseBody$Outbound` instead. */
  export type Outbound = GetBandwidthStatisticsResponseBody$Outbound;
}

export function getBandwidthStatisticsResponseBodyToJSON(
  getBandwidthStatisticsResponseBody: GetBandwidthStatisticsResponseBody,
): string {
  return JSON.stringify(
    GetBandwidthStatisticsResponseBody$outboundSchema.parse(
      getBandwidthStatisticsResponseBody,
    ),
  );
}

export function getBandwidthStatisticsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetBandwidthStatisticsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetBandwidthStatisticsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBandwidthStatisticsResponseBody' from JSON`,
  );
}

/** @internal */
export const GetBandwidthStatisticsResponse$inboundSchema: z.ZodType<
  GetBandwidthStatisticsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetBandwidthStatisticsResponseBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetBandwidthStatisticsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetBandwidthStatisticsResponseBody$Outbound | undefined;
};

/** @internal */
export const GetBandwidthStatisticsResponse$outboundSchema: z.ZodType<
  GetBandwidthStatisticsResponse$Outbound,
  z.ZodTypeDef,
  GetBandwidthStatisticsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetBandwidthStatisticsResponseBody$outboundSchema)
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
export namespace GetBandwidthStatisticsResponse$ {
  /** @deprecated use `GetBandwidthStatisticsResponse$inboundSchema` instead. */
  export const inboundSchema = GetBandwidthStatisticsResponse$inboundSchema;
  /** @deprecated use `GetBandwidthStatisticsResponse$outboundSchema` instead. */
  export const outboundSchema = GetBandwidthStatisticsResponse$outboundSchema;
  /** @deprecated use `GetBandwidthStatisticsResponse$Outbound` instead. */
  export type Outbound = GetBandwidthStatisticsResponse$Outbound;
}

export function getBandwidthStatisticsResponseToJSON(
  getBandwidthStatisticsResponse: GetBandwidthStatisticsResponse,
): string {
  return JSON.stringify(
    GetBandwidthStatisticsResponse$outboundSchema.parse(
      getBandwidthStatisticsResponse,
    ),
  );
}

export function getBandwidthStatisticsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetBandwidthStatisticsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBandwidthStatisticsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBandwidthStatisticsResponse' from JSON`,
  );
}
