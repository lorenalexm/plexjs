/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetRecentlyAddedLibraryErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetRecentlyAddedUnauthorizedData = {
  errors?: Array<GetRecentlyAddedLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetRecentlyAddedUnauthorized extends Error {
  errors?: Array<GetRecentlyAddedLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetRecentlyAddedUnauthorizedData;

  constructor(err: GetRecentlyAddedUnauthorizedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetRecentlyAddedUnauthorized";
  }
}

export type GetRecentlyAddedErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type GetRecentlyAddedBadRequestData = {
  errors?: Array<GetRecentlyAddedErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class GetRecentlyAddedBadRequest extends Error {
  errors?: Array<GetRecentlyAddedErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetRecentlyAddedBadRequestData;

  constructor(err: GetRecentlyAddedBadRequestData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetRecentlyAddedBadRequest";
  }
}

/** @internal */
export const GetRecentlyAddedLibraryErrors$inboundSchema: z.ZodType<
  GetRecentlyAddedLibraryErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetRecentlyAddedLibraryErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetRecentlyAddedLibraryErrors$outboundSchema: z.ZodType<
  GetRecentlyAddedLibraryErrors$Outbound,
  z.ZodTypeDef,
  GetRecentlyAddedLibraryErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRecentlyAddedLibraryErrors$ {
  /** @deprecated use `GetRecentlyAddedLibraryErrors$inboundSchema` instead. */
  export const inboundSchema = GetRecentlyAddedLibraryErrors$inboundSchema;
  /** @deprecated use `GetRecentlyAddedLibraryErrors$outboundSchema` instead. */
  export const outboundSchema = GetRecentlyAddedLibraryErrors$outboundSchema;
  /** @deprecated use `GetRecentlyAddedLibraryErrors$Outbound` instead. */
  export type Outbound = GetRecentlyAddedLibraryErrors$Outbound;
}

/** @internal */
export const GetRecentlyAddedUnauthorized$inboundSchema: z.ZodType<
  GetRecentlyAddedUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetRecentlyAddedLibraryErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetRecentlyAddedUnauthorized(remapped);
  });

/** @internal */
export type GetRecentlyAddedUnauthorized$Outbound = {
  errors?: Array<GetRecentlyAddedLibraryErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetRecentlyAddedUnauthorized$outboundSchema: z.ZodType<
  GetRecentlyAddedUnauthorized$Outbound,
  z.ZodTypeDef,
  GetRecentlyAddedUnauthorized
> = z.instanceof(GetRecentlyAddedUnauthorized)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(
        z.lazy(() => GetRecentlyAddedLibraryErrors$outboundSchema),
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
export namespace GetRecentlyAddedUnauthorized$ {
  /** @deprecated use `GetRecentlyAddedUnauthorized$inboundSchema` instead. */
  export const inboundSchema = GetRecentlyAddedUnauthorized$inboundSchema;
  /** @deprecated use `GetRecentlyAddedUnauthorized$outboundSchema` instead. */
  export const outboundSchema = GetRecentlyAddedUnauthorized$outboundSchema;
  /** @deprecated use `GetRecentlyAddedUnauthorized$Outbound` instead. */
  export type Outbound = GetRecentlyAddedUnauthorized$Outbound;
}

/** @internal */
export const GetRecentlyAddedErrors$inboundSchema: z.ZodType<
  GetRecentlyAddedErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetRecentlyAddedErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetRecentlyAddedErrors$outboundSchema: z.ZodType<
  GetRecentlyAddedErrors$Outbound,
  z.ZodTypeDef,
  GetRecentlyAddedErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRecentlyAddedErrors$ {
  /** @deprecated use `GetRecentlyAddedErrors$inboundSchema` instead. */
  export const inboundSchema = GetRecentlyAddedErrors$inboundSchema;
  /** @deprecated use `GetRecentlyAddedErrors$outboundSchema` instead. */
  export const outboundSchema = GetRecentlyAddedErrors$outboundSchema;
  /** @deprecated use `GetRecentlyAddedErrors$Outbound` instead. */
  export type Outbound = GetRecentlyAddedErrors$Outbound;
}

/** @internal */
export const GetRecentlyAddedBadRequest$inboundSchema: z.ZodType<
  GetRecentlyAddedBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetRecentlyAddedErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetRecentlyAddedBadRequest(remapped);
  });

/** @internal */
export type GetRecentlyAddedBadRequest$Outbound = {
  errors?: Array<GetRecentlyAddedErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetRecentlyAddedBadRequest$outboundSchema: z.ZodType<
  GetRecentlyAddedBadRequest$Outbound,
  z.ZodTypeDef,
  GetRecentlyAddedBadRequest
> = z.instanceof(GetRecentlyAddedBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => GetRecentlyAddedErrors$outboundSchema))
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
export namespace GetRecentlyAddedBadRequest$ {
  /** @deprecated use `GetRecentlyAddedBadRequest$inboundSchema` instead. */
  export const inboundSchema = GetRecentlyAddedBadRequest$inboundSchema;
  /** @deprecated use `GetRecentlyAddedBadRequest$outboundSchema` instead. */
  export const outboundSchema = GetRecentlyAddedBadRequest$outboundSchema;
  /** @deprecated use `GetRecentlyAddedBadRequest$Outbound` instead. */
  export type Outbound = GetRecentlyAddedBadRequest$Outbound;
}
