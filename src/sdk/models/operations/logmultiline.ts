/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LogMultiLineResponse = {
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
export const LogMultiLineResponse$inboundSchema: z.ZodType<
  LogMultiLineResponse,
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
export type LogMultiLineResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const LogMultiLineResponse$outboundSchema: z.ZodType<
  LogMultiLineResponse$Outbound,
  z.ZodTypeDef,
  LogMultiLineResponse
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
export namespace LogMultiLineResponse$ {
  /** @deprecated use `LogMultiLineResponse$inboundSchema` instead. */
  export const inboundSchema = LogMultiLineResponse$inboundSchema;
  /** @deprecated use `LogMultiLineResponse$outboundSchema` instead. */
  export const outboundSchema = LogMultiLineResponse$outboundSchema;
  /** @deprecated use `LogMultiLineResponse$Outbound` instead. */
  export type Outbound = LogMultiLineResponse$Outbound;
}

export function logMultiLineResponseToJSON(
  logMultiLineResponse: LogMultiLineResponse,
): string {
  return JSON.stringify(
    LogMultiLineResponse$outboundSchema.parse(logMultiLineResponse),
  );
}

export function logMultiLineResponseFromJSON(
  jsonString: string,
): SafeParseResult<LogMultiLineResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LogMultiLineResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LogMultiLineResponse' from JSON`,
  );
}
