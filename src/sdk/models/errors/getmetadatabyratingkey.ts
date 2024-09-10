/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetMetaDataByRatingKeyLibraryErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetMetaDataByRatingKeyUnauthorizedData = {
  errors?: Array<GetMetaDataByRatingKeyLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetMetaDataByRatingKeyUnauthorized extends Error {
  errors?: Array<GetMetaDataByRatingKeyLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetMetaDataByRatingKeyUnauthorizedData;

  constructor(err: GetMetaDataByRatingKeyUnauthorizedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetMetaDataByRatingKeyUnauthorized";
  }
}

export type GetMetaDataByRatingKeyErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type GetMetaDataByRatingKeyBadRequestData = {
  errors?: Array<GetMetaDataByRatingKeyErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class GetMetaDataByRatingKeyBadRequest extends Error {
  errors?: Array<GetMetaDataByRatingKeyErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetMetaDataByRatingKeyBadRequestData;

  constructor(err: GetMetaDataByRatingKeyBadRequestData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetMetaDataByRatingKeyBadRequest";
  }
}

/** @internal */
export const GetMetaDataByRatingKeyLibraryErrors$inboundSchema: z.ZodType<
  GetMetaDataByRatingKeyLibraryErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetMetaDataByRatingKeyLibraryErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetMetaDataByRatingKeyLibraryErrors$outboundSchema: z.ZodType<
  GetMetaDataByRatingKeyLibraryErrors$Outbound,
  z.ZodTypeDef,
  GetMetaDataByRatingKeyLibraryErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMetaDataByRatingKeyLibraryErrors$ {
  /** @deprecated use `GetMetaDataByRatingKeyLibraryErrors$inboundSchema` instead. */
  export const inboundSchema =
    GetMetaDataByRatingKeyLibraryErrors$inboundSchema;
  /** @deprecated use `GetMetaDataByRatingKeyLibraryErrors$outboundSchema` instead. */
  export const outboundSchema =
    GetMetaDataByRatingKeyLibraryErrors$outboundSchema;
  /** @deprecated use `GetMetaDataByRatingKeyLibraryErrors$Outbound` instead. */
  export type Outbound = GetMetaDataByRatingKeyLibraryErrors$Outbound;
}

/** @internal */
export const GetMetaDataByRatingKeyUnauthorized$inboundSchema: z.ZodType<
  GetMetaDataByRatingKeyUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(
    z.lazy(() => GetMetaDataByRatingKeyLibraryErrors$inboundSchema),
  ).optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetMetaDataByRatingKeyUnauthorized(remapped);
  });

/** @internal */
export type GetMetaDataByRatingKeyUnauthorized$Outbound = {
  errors?: Array<GetMetaDataByRatingKeyLibraryErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetMetaDataByRatingKeyUnauthorized$outboundSchema: z.ZodType<
  GetMetaDataByRatingKeyUnauthorized$Outbound,
  z.ZodTypeDef,
  GetMetaDataByRatingKeyUnauthorized
> = z.instanceof(GetMetaDataByRatingKeyUnauthorized)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(
        z.lazy(() => GetMetaDataByRatingKeyLibraryErrors$outboundSchema),
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
export namespace GetMetaDataByRatingKeyUnauthorized$ {
  /** @deprecated use `GetMetaDataByRatingKeyUnauthorized$inboundSchema` instead. */
  export const inboundSchema = GetMetaDataByRatingKeyUnauthorized$inboundSchema;
  /** @deprecated use `GetMetaDataByRatingKeyUnauthorized$outboundSchema` instead. */
  export const outboundSchema =
    GetMetaDataByRatingKeyUnauthorized$outboundSchema;
  /** @deprecated use `GetMetaDataByRatingKeyUnauthorized$Outbound` instead. */
  export type Outbound = GetMetaDataByRatingKeyUnauthorized$Outbound;
}

/** @internal */
export const GetMetaDataByRatingKeyErrors$inboundSchema: z.ZodType<
  GetMetaDataByRatingKeyErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetMetaDataByRatingKeyErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetMetaDataByRatingKeyErrors$outboundSchema: z.ZodType<
  GetMetaDataByRatingKeyErrors$Outbound,
  z.ZodTypeDef,
  GetMetaDataByRatingKeyErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMetaDataByRatingKeyErrors$ {
  /** @deprecated use `GetMetaDataByRatingKeyErrors$inboundSchema` instead. */
  export const inboundSchema = GetMetaDataByRatingKeyErrors$inboundSchema;
  /** @deprecated use `GetMetaDataByRatingKeyErrors$outboundSchema` instead. */
  export const outboundSchema = GetMetaDataByRatingKeyErrors$outboundSchema;
  /** @deprecated use `GetMetaDataByRatingKeyErrors$Outbound` instead. */
  export type Outbound = GetMetaDataByRatingKeyErrors$Outbound;
}

/** @internal */
export const GetMetaDataByRatingKeyBadRequest$inboundSchema: z.ZodType<
  GetMetaDataByRatingKeyBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetMetaDataByRatingKeyErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetMetaDataByRatingKeyBadRequest(remapped);
  });

/** @internal */
export type GetMetaDataByRatingKeyBadRequest$Outbound = {
  errors?: Array<GetMetaDataByRatingKeyErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetMetaDataByRatingKeyBadRequest$outboundSchema: z.ZodType<
  GetMetaDataByRatingKeyBadRequest$Outbound,
  z.ZodTypeDef,
  GetMetaDataByRatingKeyBadRequest
> = z.instanceof(GetMetaDataByRatingKeyBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => GetMetaDataByRatingKeyErrors$outboundSchema))
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
export namespace GetMetaDataByRatingKeyBadRequest$ {
  /** @deprecated use `GetMetaDataByRatingKeyBadRequest$inboundSchema` instead. */
  export const inboundSchema = GetMetaDataByRatingKeyBadRequest$inboundSchema;
  /** @deprecated use `GetMetaDataByRatingKeyBadRequest$outboundSchema` instead. */
  export const outboundSchema = GetMetaDataByRatingKeyBadRequest$outboundSchema;
  /** @deprecated use `GetMetaDataByRatingKeyBadRequest$Outbound` instead. */
  export type Outbound = GetMetaDataByRatingKeyBadRequest$Outbound;
}
