/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteLibraryRequest = {
  /**
   * The unique key of the Plex library.
   *
   * @remarks
   * Note: This is unique in the context of the Plex server.
   */
  sectionKey: number;
};

export type DeleteLibraryResponse = {
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
export const DeleteLibraryRequest$inboundSchema: z.ZodType<
  DeleteLibraryRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  sectionKey: z.number().int(),
});

/** @internal */
export type DeleteLibraryRequest$Outbound = {
  sectionKey: number;
};

/** @internal */
export const DeleteLibraryRequest$outboundSchema: z.ZodType<
  DeleteLibraryRequest$Outbound,
  z.ZodTypeDef,
  DeleteLibraryRequest
> = z.object({
  sectionKey: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteLibraryRequest$ {
  /** @deprecated use `DeleteLibraryRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteLibraryRequest$inboundSchema;
  /** @deprecated use `DeleteLibraryRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteLibraryRequest$outboundSchema;
  /** @deprecated use `DeleteLibraryRequest$Outbound` instead. */
  export type Outbound = DeleteLibraryRequest$Outbound;
}

export function deleteLibraryRequestToJSON(
  deleteLibraryRequest: DeleteLibraryRequest,
): string {
  return JSON.stringify(
    DeleteLibraryRequest$outboundSchema.parse(deleteLibraryRequest),
  );
}

export function deleteLibraryRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteLibraryRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteLibraryRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteLibraryRequest' from JSON`,
  );
}

/** @internal */
export const DeleteLibraryResponse$inboundSchema: z.ZodType<
  DeleteLibraryResponse,
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
export type DeleteLibraryResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const DeleteLibraryResponse$outboundSchema: z.ZodType<
  DeleteLibraryResponse$Outbound,
  z.ZodTypeDef,
  DeleteLibraryResponse
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
export namespace DeleteLibraryResponse$ {
  /** @deprecated use `DeleteLibraryResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteLibraryResponse$inboundSchema;
  /** @deprecated use `DeleteLibraryResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteLibraryResponse$outboundSchema;
  /** @deprecated use `DeleteLibraryResponse$Outbound` instead. */
  export type Outbound = DeleteLibraryResponse$Outbound;
}

export function deleteLibraryResponseToJSON(
  deleteLibraryResponse: DeleteLibraryResponse,
): string {
  return JSON.stringify(
    DeleteLibraryResponse$outboundSchema.parse(deleteLibraryResponse),
  );
}

export function deleteLibraryResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteLibraryResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteLibraryResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteLibraryResponse' from JSON`,
  );
}
