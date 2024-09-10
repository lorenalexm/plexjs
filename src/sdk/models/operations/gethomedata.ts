/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

/**
 * Home Data
 */
export type GetHomeDataResponseBody = {
  id?: number | undefined;
  name?: string | undefined;
  guestUserID?: number | undefined;
  guestUserUUID?: string | undefined;
  guestEnabled?: boolean | undefined;
  subscription?: boolean | undefined;
};

export type GetHomeDataResponse = {
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
   * Home Data
   */
  object?: GetHomeDataResponseBody | undefined;
};

/** @internal */
export const GetHomeDataResponseBody$inboundSchema: z.ZodType<
  GetHomeDataResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  guestUserID: z.number().optional(),
  guestUserUUID: z.string().optional(),
  guestEnabled: z.boolean().optional(),
  subscription: z.boolean().optional(),
});

/** @internal */
export type GetHomeDataResponseBody$Outbound = {
  id?: number | undefined;
  name?: string | undefined;
  guestUserID?: number | undefined;
  guestUserUUID?: string | undefined;
  guestEnabled?: boolean | undefined;
  subscription?: boolean | undefined;
};

/** @internal */
export const GetHomeDataResponseBody$outboundSchema: z.ZodType<
  GetHomeDataResponseBody$Outbound,
  z.ZodTypeDef,
  GetHomeDataResponseBody
> = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  guestUserID: z.number().optional(),
  guestUserUUID: z.string().optional(),
  guestEnabled: z.boolean().optional(),
  subscription: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetHomeDataResponseBody$ {
  /** @deprecated use `GetHomeDataResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetHomeDataResponseBody$inboundSchema;
  /** @deprecated use `GetHomeDataResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetHomeDataResponseBody$outboundSchema;
  /** @deprecated use `GetHomeDataResponseBody$Outbound` instead. */
  export type Outbound = GetHomeDataResponseBody$Outbound;
}

/** @internal */
export const GetHomeDataResponse$inboundSchema: z.ZodType<
  GetHomeDataResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetHomeDataResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetHomeDataResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetHomeDataResponseBody$Outbound | undefined;
};

/** @internal */
export const GetHomeDataResponse$outboundSchema: z.ZodType<
  GetHomeDataResponse$Outbound,
  z.ZodTypeDef,
  GetHomeDataResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetHomeDataResponseBody$outboundSchema).optional(),
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
export namespace GetHomeDataResponse$ {
  /** @deprecated use `GetHomeDataResponse$inboundSchema` instead. */
  export const inboundSchema = GetHomeDataResponse$inboundSchema;
  /** @deprecated use `GetHomeDataResponse$outboundSchema` instead. */
  export const outboundSchema = GetHomeDataResponse$outboundSchema;
  /** @deprecated use `GetHomeDataResponse$Outbound` instead. */
  export type Outbound = GetHomeDataResponse$Outbound;
}
