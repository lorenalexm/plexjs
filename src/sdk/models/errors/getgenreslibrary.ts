/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type GetGenresLibraryLibraryErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetGenresLibraryUnauthorizedData = {
  errors?: Array<GetGenresLibraryLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetGenresLibraryUnauthorized extends Error {
  errors?: Array<GetGenresLibraryLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetGenresLibraryUnauthorizedData;

  constructor(err: GetGenresLibraryUnauthorizedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetGenresLibraryUnauthorized";
  }
}

export type GetGenresLibraryErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type GetGenresLibraryBadRequestData = {
  errors?: Array<GetGenresLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class GetGenresLibraryBadRequest extends Error {
  errors?: Array<GetGenresLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetGenresLibraryBadRequestData;

  constructor(err: GetGenresLibraryBadRequestData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetGenresLibraryBadRequest";
  }
}

/** @internal */
export const GetGenresLibraryLibraryErrors$inboundSchema: z.ZodType<
  GetGenresLibraryLibraryErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetGenresLibraryLibraryErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetGenresLibraryLibraryErrors$outboundSchema: z.ZodType<
  GetGenresLibraryLibraryErrors$Outbound,
  z.ZodTypeDef,
  GetGenresLibraryLibraryErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGenresLibraryLibraryErrors$ {
  /** @deprecated use `GetGenresLibraryLibraryErrors$inboundSchema` instead. */
  export const inboundSchema = GetGenresLibraryLibraryErrors$inboundSchema;
  /** @deprecated use `GetGenresLibraryLibraryErrors$outboundSchema` instead. */
  export const outboundSchema = GetGenresLibraryLibraryErrors$outboundSchema;
  /** @deprecated use `GetGenresLibraryLibraryErrors$Outbound` instead. */
  export type Outbound = GetGenresLibraryLibraryErrors$Outbound;
}

export function getGenresLibraryLibraryErrorsToJSON(
  getGenresLibraryLibraryErrors: GetGenresLibraryLibraryErrors,
): string {
  return JSON.stringify(
    GetGenresLibraryLibraryErrors$outboundSchema.parse(
      getGenresLibraryLibraryErrors,
    ),
  );
}

export function getGenresLibraryLibraryErrorsFromJSON(
  jsonString: string,
): SafeParseResult<GetGenresLibraryLibraryErrors, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetGenresLibraryLibraryErrors$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGenresLibraryLibraryErrors' from JSON`,
  );
}

/** @internal */
export const GetGenresLibraryUnauthorized$inboundSchema: z.ZodType<
  GetGenresLibraryUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetGenresLibraryLibraryErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetGenresLibraryUnauthorized(remapped);
  });

/** @internal */
export type GetGenresLibraryUnauthorized$Outbound = {
  errors?: Array<GetGenresLibraryLibraryErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetGenresLibraryUnauthorized$outboundSchema: z.ZodType<
  GetGenresLibraryUnauthorized$Outbound,
  z.ZodTypeDef,
  GetGenresLibraryUnauthorized
> = z.instanceof(GetGenresLibraryUnauthorized)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(
        z.lazy(() => GetGenresLibraryLibraryErrors$outboundSchema),
      ).optional(),
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }).optional(),
    }).transform((v) => {
      return remap$(v, {
        rawResponse: "RawResponse",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGenresLibraryUnauthorized$ {
  /** @deprecated use `GetGenresLibraryUnauthorized$inboundSchema` instead. */
  export const inboundSchema = GetGenresLibraryUnauthorized$inboundSchema;
  /** @deprecated use `GetGenresLibraryUnauthorized$outboundSchema` instead. */
  export const outboundSchema = GetGenresLibraryUnauthorized$outboundSchema;
  /** @deprecated use `GetGenresLibraryUnauthorized$Outbound` instead. */
  export type Outbound = GetGenresLibraryUnauthorized$Outbound;
}

/** @internal */
export const GetGenresLibraryErrors$inboundSchema: z.ZodType<
  GetGenresLibraryErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetGenresLibraryErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetGenresLibraryErrors$outboundSchema: z.ZodType<
  GetGenresLibraryErrors$Outbound,
  z.ZodTypeDef,
  GetGenresLibraryErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGenresLibraryErrors$ {
  /** @deprecated use `GetGenresLibraryErrors$inboundSchema` instead. */
  export const inboundSchema = GetGenresLibraryErrors$inboundSchema;
  /** @deprecated use `GetGenresLibraryErrors$outboundSchema` instead. */
  export const outboundSchema = GetGenresLibraryErrors$outboundSchema;
  /** @deprecated use `GetGenresLibraryErrors$Outbound` instead. */
  export type Outbound = GetGenresLibraryErrors$Outbound;
}

export function getGenresLibraryErrorsToJSON(
  getGenresLibraryErrors: GetGenresLibraryErrors,
): string {
  return JSON.stringify(
    GetGenresLibraryErrors$outboundSchema.parse(getGenresLibraryErrors),
  );
}

export function getGenresLibraryErrorsFromJSON(
  jsonString: string,
): SafeParseResult<GetGenresLibraryErrors, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetGenresLibraryErrors$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGenresLibraryErrors' from JSON`,
  );
}

/** @internal */
export const GetGenresLibraryBadRequest$inboundSchema: z.ZodType<
  GetGenresLibraryBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetGenresLibraryErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetGenresLibraryBadRequest(remapped);
  });

/** @internal */
export type GetGenresLibraryBadRequest$Outbound = {
  errors?: Array<GetGenresLibraryErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetGenresLibraryBadRequest$outboundSchema: z.ZodType<
  GetGenresLibraryBadRequest$Outbound,
  z.ZodTypeDef,
  GetGenresLibraryBadRequest
> = z.instanceof(GetGenresLibraryBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => GetGenresLibraryErrors$outboundSchema))
        .optional(),
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }).optional(),
    }).transform((v) => {
      return remap$(v, {
        rawResponse: "RawResponse",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGenresLibraryBadRequest$ {
  /** @deprecated use `GetGenresLibraryBadRequest$inboundSchema` instead. */
  export const inboundSchema = GetGenresLibraryBadRequest$inboundSchema;
  /** @deprecated use `GetGenresLibraryBadRequest$outboundSchema` instead. */
  export const outboundSchema = GetGenresLibraryBadRequest$outboundSchema;
  /** @deprecated use `GetGenresLibraryBadRequest$Outbound` instead. */
  export type Outbound = GetGenresLibraryBadRequest$Outbound;
}
