/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * images are always scaled proportionally. A value of '1' in minSize will make the smaller native dimension the dimension resized against.
 */
export enum MinSize {
  Zero = 0,
  One = 1,
}

/**
 * allow images to be resized beyond native dimensions.
 */
export enum Upscale {
  Zero = 0,
  One = 1,
}

export type GetResizedPhotoRequest = {
  /**
   * The width for the resized photo
   */
  width: number;
  /**
   * The height for the resized photo
   */
  height: number;
  /**
   * The opacity for the resized photo
   */
  opacity?: number | undefined;
  /**
   * The width for the resized photo
   */
  blur: number;
  /**
   * images are always scaled proportionally. A value of '1' in minSize will make the smaller native dimension the dimension resized against.
   */
  minSize: MinSize;
  /**
   * allow images to be resized beyond native dimensions.
   */
  upscale: Upscale;
  /**
   * path to image within Plex
   */
  url: string;
};

export type GetResizedPhotoResponse = {
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
};

/** @internal */
export const MinSize$inboundSchema: z.ZodNativeEnum<typeof MinSize> = z
  .nativeEnum(MinSize);

/** @internal */
export const MinSize$outboundSchema: z.ZodNativeEnum<typeof MinSize> =
  MinSize$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MinSize$ {
  /** @deprecated use `MinSize$inboundSchema` instead. */
  export const inboundSchema = MinSize$inboundSchema;
  /** @deprecated use `MinSize$outboundSchema` instead. */
  export const outboundSchema = MinSize$outboundSchema;
}

/** @internal */
export const Upscale$inboundSchema: z.ZodNativeEnum<typeof Upscale> = z
  .nativeEnum(Upscale);

/** @internal */
export const Upscale$outboundSchema: z.ZodNativeEnum<typeof Upscale> =
  Upscale$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Upscale$ {
  /** @deprecated use `Upscale$inboundSchema` instead. */
  export const inboundSchema = Upscale$inboundSchema;
  /** @deprecated use `Upscale$outboundSchema` instead. */
  export const outboundSchema = Upscale$outboundSchema;
}

/** @internal */
export const GetResizedPhotoRequest$inboundSchema: z.ZodType<
  GetResizedPhotoRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  width: z.number(),
  height: z.number(),
  opacity: z.number().int().default(100),
  blur: z.number(),
  minSize: MinSize$inboundSchema,
  upscale: Upscale$inboundSchema,
  url: z.string(),
});

/** @internal */
export type GetResizedPhotoRequest$Outbound = {
  width: number;
  height: number;
  opacity: number;
  blur: number;
  minSize: number;
  upscale: number;
  url: string;
};

/** @internal */
export const GetResizedPhotoRequest$outboundSchema: z.ZodType<
  GetResizedPhotoRequest$Outbound,
  z.ZodTypeDef,
  GetResizedPhotoRequest
> = z.object({
  width: z.number(),
  height: z.number(),
  opacity: z.number().int().default(100),
  blur: z.number(),
  minSize: MinSize$outboundSchema,
  upscale: Upscale$outboundSchema,
  url: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetResizedPhotoRequest$ {
  /** @deprecated use `GetResizedPhotoRequest$inboundSchema` instead. */
  export const inboundSchema = GetResizedPhotoRequest$inboundSchema;
  /** @deprecated use `GetResizedPhotoRequest$outboundSchema` instead. */
  export const outboundSchema = GetResizedPhotoRequest$outboundSchema;
  /** @deprecated use `GetResizedPhotoRequest$Outbound` instead. */
  export type Outbound = GetResizedPhotoRequest$Outbound;
}

export function getResizedPhotoRequestToJSON(
  getResizedPhotoRequest: GetResizedPhotoRequest,
): string {
  return JSON.stringify(
    GetResizedPhotoRequest$outboundSchema.parse(getResizedPhotoRequest),
  );
}

export function getResizedPhotoRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetResizedPhotoRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetResizedPhotoRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetResizedPhotoRequest' from JSON`,
  );
}

/** @internal */
export const GetResizedPhotoResponse$inboundSchema: z.ZodType<
  GetResizedPhotoResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetResizedPhotoResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const GetResizedPhotoResponse$outboundSchema: z.ZodType<
  GetResizedPhotoResponse$Outbound,
  z.ZodTypeDef,
  GetResizedPhotoResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
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
export namespace GetResizedPhotoResponse$ {
  /** @deprecated use `GetResizedPhotoResponse$inboundSchema` instead. */
  export const inboundSchema = GetResizedPhotoResponse$inboundSchema;
  /** @deprecated use `GetResizedPhotoResponse$outboundSchema` instead. */
  export const outboundSchema = GetResizedPhotoResponse$outboundSchema;
  /** @deprecated use `GetResizedPhotoResponse$Outbound` instead. */
  export type Outbound = GetResizedPhotoResponse$Outbound;
}

export function getResizedPhotoResponseToJSON(
  getResizedPhotoResponse: GetResizedPhotoResponse,
): string {
  return JSON.stringify(
    GetResizedPhotoResponse$outboundSchema.parse(getResizedPhotoResponse),
  );
}

export function getResizedPhotoResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetResizedPhotoResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetResizedPhotoResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetResizedPhotoResponse' from JSON`,
  );
}
