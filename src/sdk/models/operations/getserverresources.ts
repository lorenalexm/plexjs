/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export const GetServerResourcesServerList = [
  "https://plex.tv/api/v2",
] as const;

export type GetServerResourcesGlobals = {
  /**
   * The unique identifier for the client application. This is used to track the client application and its usage. (UUID, serial number, or other number unique per device)
   */
  clientID?: string | undefined;
};

/**
 * Include Https entries in the results
 */
export enum IncludeHttps {
  Disable = 0,
  Enable = 1,
}

/**
 * Include Relay addresses in the results
 *
 * @remarks
 * E.g: https://10-0-0-25.bbf8e10c7fa20447cacee74cd9914cde.plex.direct:32400
 */
export enum IncludeRelay {
  Disable = 0,
  Enable = 1,
}

/**
 * Include IPv6 entries in the results
 */
export enum IncludeIPv6 {
  Disable = 0,
  Enable = 1,
}

export type GetServerResourcesRequest = {
  /**
   * Include Https entries in the results
   */
  includeHttps?: IncludeHttps | undefined;
  /**
   * Include Relay addresses in the results
   *
   * @remarks
   * E.g: https://10-0-0-25.bbf8e10c7fa20447cacee74cd9914cde.plex.direct:32400
   */
  includeRelay?: IncludeRelay | undefined;
  /**
   * Include IPv6 entries in the results
   */
  includeIPv6?: IncludeIPv6 | undefined;
  /**
   * The unique identifier for the client application. This is used to track the client application and its usage. (UUID, serial number, or other number unique per device)
   */
  clientID?: string | undefined;
};

/**
 * The protocol used for the connection (http, https, etc)
 */
export enum Protocol {
  Http = "http",
  Https = "https",
}

export type Connections = {
  /**
   * The protocol used for the connection (http, https, etc)
   */
  protocol: Protocol;
  /**
   * The (ip) address or domain name used for the connection
   */
  address: string;
  /**
   * The port used for the connection
   */
  port: number;
  /**
   * The full URI of the connection
   */
  uri: string;
  /**
   * If the connection is local address
   */
  local: boolean;
  /**
   * If the connection is relayed through plex.direct
   */
  relay: boolean;
  /**
   * If the connection is using IPv6
   */
  iPv6: boolean;
};

export type PlexDevice = {
  name: string;
  product: string;
  productVersion: string;
  platform: string | null;
  platformVersion: string | null;
  device: string | null;
  clientIdentifier: string;
  createdAt: Date;
  lastSeenAt: Date;
  provides: string;
  /**
   * ownerId is null when the device is owned by the token used to send the request
   */
  ownerId: number | null;
  sourceTitle: string | null;
  publicAddress: string;
  accessToken: string;
  owned: boolean;
  home: boolean;
  synced: boolean;
  relay: boolean;
  presence: boolean;
  httpsRequired: boolean;
  publicAddressMatches: boolean;
  dnsRebindingProtection: boolean;
  natLoopbackSupported: boolean;
  connections: Array<Connections>;
};

export type GetServerResourcesResponse = {
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
   * List of Plex Devices. This includes Plex hosted servers and clients
   */
  plexDevices?: Array<PlexDevice> | undefined;
};

/** @internal */
export const GetServerResourcesGlobals$inboundSchema: z.ZodType<
  GetServerResourcesGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  ClientID: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "ClientID": "clientID",
  });
});

/** @internal */
export type GetServerResourcesGlobals$Outbound = {
  ClientID?: string | undefined;
};

/** @internal */
export const GetServerResourcesGlobals$outboundSchema: z.ZodType<
  GetServerResourcesGlobals$Outbound,
  z.ZodTypeDef,
  GetServerResourcesGlobals
> = z.object({
  clientID: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    clientID: "ClientID",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetServerResourcesGlobals$ {
  /** @deprecated use `GetServerResourcesGlobals$inboundSchema` instead. */
  export const inboundSchema = GetServerResourcesGlobals$inboundSchema;
  /** @deprecated use `GetServerResourcesGlobals$outboundSchema` instead. */
  export const outboundSchema = GetServerResourcesGlobals$outboundSchema;
  /** @deprecated use `GetServerResourcesGlobals$Outbound` instead. */
  export type Outbound = GetServerResourcesGlobals$Outbound;
}

/** @internal */
export const IncludeHttps$inboundSchema: z.ZodNativeEnum<typeof IncludeHttps> =
  z.nativeEnum(IncludeHttps);

/** @internal */
export const IncludeHttps$outboundSchema: z.ZodNativeEnum<typeof IncludeHttps> =
  IncludeHttps$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IncludeHttps$ {
  /** @deprecated use `IncludeHttps$inboundSchema` instead. */
  export const inboundSchema = IncludeHttps$inboundSchema;
  /** @deprecated use `IncludeHttps$outboundSchema` instead. */
  export const outboundSchema = IncludeHttps$outboundSchema;
}

/** @internal */
export const IncludeRelay$inboundSchema: z.ZodNativeEnum<typeof IncludeRelay> =
  z.nativeEnum(IncludeRelay);

/** @internal */
export const IncludeRelay$outboundSchema: z.ZodNativeEnum<typeof IncludeRelay> =
  IncludeRelay$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IncludeRelay$ {
  /** @deprecated use `IncludeRelay$inboundSchema` instead. */
  export const inboundSchema = IncludeRelay$inboundSchema;
  /** @deprecated use `IncludeRelay$outboundSchema` instead. */
  export const outboundSchema = IncludeRelay$outboundSchema;
}

/** @internal */
export const IncludeIPv6$inboundSchema: z.ZodNativeEnum<typeof IncludeIPv6> = z
  .nativeEnum(IncludeIPv6);

/** @internal */
export const IncludeIPv6$outboundSchema: z.ZodNativeEnum<typeof IncludeIPv6> =
  IncludeIPv6$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IncludeIPv6$ {
  /** @deprecated use `IncludeIPv6$inboundSchema` instead. */
  export const inboundSchema = IncludeIPv6$inboundSchema;
  /** @deprecated use `IncludeIPv6$outboundSchema` instead. */
  export const outboundSchema = IncludeIPv6$outboundSchema;
}

/** @internal */
export const GetServerResourcesRequest$inboundSchema: z.ZodType<
  GetServerResourcesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  includeHttps: IncludeHttps$inboundSchema,
  includeRelay: IncludeRelay$inboundSchema,
  includeIPv6: IncludeIPv6$inboundSchema,
  ClientID: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "ClientID": "clientID",
  });
});

/** @internal */
export type GetServerResourcesRequest$Outbound = {
  includeHttps: number;
  includeRelay: number;
  includeIPv6: number;
  ClientID?: string | undefined;
};

/** @internal */
export const GetServerResourcesRequest$outboundSchema: z.ZodType<
  GetServerResourcesRequest$Outbound,
  z.ZodTypeDef,
  GetServerResourcesRequest
> = z.object({
  includeHttps: IncludeHttps$outboundSchema.default(IncludeHttps.Disable),
  includeRelay: IncludeRelay$outboundSchema.default(IncludeRelay.Disable),
  includeIPv6: IncludeIPv6$outboundSchema.default(IncludeIPv6.Disable),
  clientID: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    clientID: "ClientID",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetServerResourcesRequest$ {
  /** @deprecated use `GetServerResourcesRequest$inboundSchema` instead. */
  export const inboundSchema = GetServerResourcesRequest$inboundSchema;
  /** @deprecated use `GetServerResourcesRequest$outboundSchema` instead. */
  export const outboundSchema = GetServerResourcesRequest$outboundSchema;
  /** @deprecated use `GetServerResourcesRequest$Outbound` instead. */
  export type Outbound = GetServerResourcesRequest$Outbound;
}

/** @internal */
export const Protocol$inboundSchema: z.ZodNativeEnum<typeof Protocol> = z
  .nativeEnum(Protocol);

/** @internal */
export const Protocol$outboundSchema: z.ZodNativeEnum<typeof Protocol> =
  Protocol$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Protocol$ {
  /** @deprecated use `Protocol$inboundSchema` instead. */
  export const inboundSchema = Protocol$inboundSchema;
  /** @deprecated use `Protocol$outboundSchema` instead. */
  export const outboundSchema = Protocol$outboundSchema;
}

/** @internal */
export const Connections$inboundSchema: z.ZodType<
  Connections,
  z.ZodTypeDef,
  unknown
> = z.object({
  protocol: Protocol$inboundSchema,
  address: z.string(),
  port: z.number().int(),
  uri: z.string(),
  local: z.boolean(),
  relay: z.boolean(),
  IPv6: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "IPv6": "iPv6",
  });
});

/** @internal */
export type Connections$Outbound = {
  protocol: string;
  address: string;
  port: number;
  uri: string;
  local: boolean;
  relay: boolean;
  IPv6: boolean;
};

/** @internal */
export const Connections$outboundSchema: z.ZodType<
  Connections$Outbound,
  z.ZodTypeDef,
  Connections
> = z.object({
  protocol: Protocol$outboundSchema,
  address: z.string(),
  port: z.number().int(),
  uri: z.string(),
  local: z.boolean(),
  relay: z.boolean(),
  iPv6: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    iPv6: "IPv6",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Connections$ {
  /** @deprecated use `Connections$inboundSchema` instead. */
  export const inboundSchema = Connections$inboundSchema;
  /** @deprecated use `Connections$outboundSchema` instead. */
  export const outboundSchema = Connections$outboundSchema;
  /** @deprecated use `Connections$Outbound` instead. */
  export type Outbound = Connections$Outbound;
}

/** @internal */
export const PlexDevice$inboundSchema: z.ZodType<
  PlexDevice,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  product: z.string(),
  productVersion: z.string(),
  platform: z.nullable(z.string()),
  platformVersion: z.nullable(z.string()),
  device: z.nullable(z.string()),
  clientIdentifier: z.string(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  lastSeenAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  provides: z.string(),
  ownerId: z.nullable(z.number().int()),
  sourceTitle: z.nullable(z.string()),
  publicAddress: z.string(),
  accessToken: z.string(),
  owned: z.boolean(),
  home: z.boolean(),
  synced: z.boolean(),
  relay: z.boolean(),
  presence: z.boolean(),
  httpsRequired: z.boolean(),
  publicAddressMatches: z.boolean(),
  dnsRebindingProtection: z.boolean(),
  natLoopbackSupported: z.boolean(),
  connections: z.array(z.lazy(() => Connections$inboundSchema)),
});

/** @internal */
export type PlexDevice$Outbound = {
  name: string;
  product: string;
  productVersion: string;
  platform: string | null;
  platformVersion: string | null;
  device: string | null;
  clientIdentifier: string;
  createdAt: string;
  lastSeenAt: string;
  provides: string;
  ownerId: number | null;
  sourceTitle: string | null;
  publicAddress: string;
  accessToken: string;
  owned: boolean;
  home: boolean;
  synced: boolean;
  relay: boolean;
  presence: boolean;
  httpsRequired: boolean;
  publicAddressMatches: boolean;
  dnsRebindingProtection: boolean;
  natLoopbackSupported: boolean;
  connections: Array<Connections$Outbound>;
};

/** @internal */
export const PlexDevice$outboundSchema: z.ZodType<
  PlexDevice$Outbound,
  z.ZodTypeDef,
  PlexDevice
> = z.object({
  name: z.string(),
  product: z.string(),
  productVersion: z.string(),
  platform: z.nullable(z.string()),
  platformVersion: z.nullable(z.string()),
  device: z.nullable(z.string()),
  clientIdentifier: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  lastSeenAt: z.date().transform(v => v.toISOString()),
  provides: z.string(),
  ownerId: z.nullable(z.number().int()),
  sourceTitle: z.nullable(z.string()),
  publicAddress: z.string(),
  accessToken: z.string(),
  owned: z.boolean(),
  home: z.boolean(),
  synced: z.boolean(),
  relay: z.boolean(),
  presence: z.boolean(),
  httpsRequired: z.boolean(),
  publicAddressMatches: z.boolean(),
  dnsRebindingProtection: z.boolean(),
  natLoopbackSupported: z.boolean(),
  connections: z.array(z.lazy(() => Connections$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PlexDevice$ {
  /** @deprecated use `PlexDevice$inboundSchema` instead. */
  export const inboundSchema = PlexDevice$inboundSchema;
  /** @deprecated use `PlexDevice$outboundSchema` instead. */
  export const outboundSchema = PlexDevice$outboundSchema;
  /** @deprecated use `PlexDevice$Outbound` instead. */
  export type Outbound = PlexDevice$Outbound;
}

/** @internal */
export const GetServerResourcesResponse$inboundSchema: z.ZodType<
  GetServerResourcesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  PlexDevices: z.array(z.lazy(() => PlexDevice$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "PlexDevices": "plexDevices",
  });
});

/** @internal */
export type GetServerResourcesResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  PlexDevices?: Array<PlexDevice$Outbound> | undefined;
};

/** @internal */
export const GetServerResourcesResponse$outboundSchema: z.ZodType<
  GetServerResourcesResponse$Outbound,
  z.ZodTypeDef,
  GetServerResourcesResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  plexDevices: z.array(z.lazy(() => PlexDevice$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    plexDevices: "PlexDevices",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetServerResourcesResponse$ {
  /** @deprecated use `GetServerResourcesResponse$inboundSchema` instead. */
  export const inboundSchema = GetServerResourcesResponse$inboundSchema;
  /** @deprecated use `GetServerResourcesResponse$outboundSchema` instead. */
  export const outboundSchema = GetServerResourcesResponse$outboundSchema;
  /** @deprecated use `GetServerResourcesResponse$Outbound` instead. */
  export type Outbound = GetServerResourcesResponse$Outbound;
}
