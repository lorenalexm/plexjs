/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type PerformVoiceSearchRequest = {
  /**
   * The query term
   */
  query: string;
  /**
   * This gives context to the search, and can result in re-ordering of search result hubs
   */
  sectionId?: number | undefined;
  /**
   * The number of items to return per hub
   */
  limit?: number | undefined;
};

export type PerformVoiceSearchResponse = {
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
export const PerformVoiceSearchRequest$inboundSchema: z.ZodType<
  PerformVoiceSearchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  query: z.string(),
  sectionId: z.number().optional(),
  limit: z.number().default(3),
});

/** @internal */
export type PerformVoiceSearchRequest$Outbound = {
  query: string;
  sectionId?: number | undefined;
  limit: number;
};

/** @internal */
export const PerformVoiceSearchRequest$outboundSchema: z.ZodType<
  PerformVoiceSearchRequest$Outbound,
  z.ZodTypeDef,
  PerformVoiceSearchRequest
> = z.object({
  query: z.string(),
  sectionId: z.number().optional(),
  limit: z.number().default(3),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PerformVoiceSearchRequest$ {
  /** @deprecated use `PerformVoiceSearchRequest$inboundSchema` instead. */
  export const inboundSchema = PerformVoiceSearchRequest$inboundSchema;
  /** @deprecated use `PerformVoiceSearchRequest$outboundSchema` instead. */
  export const outboundSchema = PerformVoiceSearchRequest$outboundSchema;
  /** @deprecated use `PerformVoiceSearchRequest$Outbound` instead. */
  export type Outbound = PerformVoiceSearchRequest$Outbound;
}

/** @internal */
export const PerformVoiceSearchResponse$inboundSchema: z.ZodType<
  PerformVoiceSearchResponse,
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
export type PerformVoiceSearchResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const PerformVoiceSearchResponse$outboundSchema: z.ZodType<
  PerformVoiceSearchResponse$Outbound,
  z.ZodTypeDef,
  PerformVoiceSearchResponse
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
export namespace PerformVoiceSearchResponse$ {
  /** @deprecated use `PerformVoiceSearchResponse$inboundSchema` instead. */
  export const inboundSchema = PerformVoiceSearchResponse$inboundSchema;
  /** @deprecated use `PerformVoiceSearchResponse$outboundSchema` instead. */
  export const outboundSchema = PerformVoiceSearchResponse$outboundSchema;
  /** @deprecated use `PerformVoiceSearchResponse$Outbound` instead. */
  export type Outbound = PerformVoiceSearchResponse$Outbound;
}
