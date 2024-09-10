/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetMyPlexAccountServerErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetMyPlexAccountUnauthorizedData = {
  errors?: Array<GetMyPlexAccountServerErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetMyPlexAccountUnauthorized extends Error {
  errors?: Array<GetMyPlexAccountServerErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetMyPlexAccountUnauthorizedData;

  constructor(err: GetMyPlexAccountUnauthorizedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetMyPlexAccountUnauthorized";
  }
}

export type GetMyPlexAccountErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type GetMyPlexAccountBadRequestData = {
  errors?: Array<GetMyPlexAccountErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class GetMyPlexAccountBadRequest extends Error {
  errors?: Array<GetMyPlexAccountErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetMyPlexAccountBadRequestData;

  constructor(err: GetMyPlexAccountBadRequestData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetMyPlexAccountBadRequest";
  }
}

/** @internal */
export const GetMyPlexAccountServerErrors$inboundSchema: z.ZodType<
  GetMyPlexAccountServerErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetMyPlexAccountServerErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetMyPlexAccountServerErrors$outboundSchema: z.ZodType<
  GetMyPlexAccountServerErrors$Outbound,
  z.ZodTypeDef,
  GetMyPlexAccountServerErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMyPlexAccountServerErrors$ {
  /** @deprecated use `GetMyPlexAccountServerErrors$inboundSchema` instead. */
  export const inboundSchema = GetMyPlexAccountServerErrors$inboundSchema;
  /** @deprecated use `GetMyPlexAccountServerErrors$outboundSchema` instead. */
  export const outboundSchema = GetMyPlexAccountServerErrors$outboundSchema;
  /** @deprecated use `GetMyPlexAccountServerErrors$Outbound` instead. */
  export type Outbound = GetMyPlexAccountServerErrors$Outbound;
}

/** @internal */
export const GetMyPlexAccountUnauthorized$inboundSchema: z.ZodType<
  GetMyPlexAccountUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetMyPlexAccountServerErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetMyPlexAccountUnauthorized(remapped);
  });

/** @internal */
export type GetMyPlexAccountUnauthorized$Outbound = {
  errors?: Array<GetMyPlexAccountServerErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetMyPlexAccountUnauthorized$outboundSchema: z.ZodType<
  GetMyPlexAccountUnauthorized$Outbound,
  z.ZodTypeDef,
  GetMyPlexAccountUnauthorized
> = z.instanceof(GetMyPlexAccountUnauthorized)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => GetMyPlexAccountServerErrors$outboundSchema))
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
export namespace GetMyPlexAccountUnauthorized$ {
  /** @deprecated use `GetMyPlexAccountUnauthorized$inboundSchema` instead. */
  export const inboundSchema = GetMyPlexAccountUnauthorized$inboundSchema;
  /** @deprecated use `GetMyPlexAccountUnauthorized$outboundSchema` instead. */
  export const outboundSchema = GetMyPlexAccountUnauthorized$outboundSchema;
  /** @deprecated use `GetMyPlexAccountUnauthorized$Outbound` instead. */
  export type Outbound = GetMyPlexAccountUnauthorized$Outbound;
}

/** @internal */
export const GetMyPlexAccountErrors$inboundSchema: z.ZodType<
  GetMyPlexAccountErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetMyPlexAccountErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetMyPlexAccountErrors$outboundSchema: z.ZodType<
  GetMyPlexAccountErrors$Outbound,
  z.ZodTypeDef,
  GetMyPlexAccountErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMyPlexAccountErrors$ {
  /** @deprecated use `GetMyPlexAccountErrors$inboundSchema` instead. */
  export const inboundSchema = GetMyPlexAccountErrors$inboundSchema;
  /** @deprecated use `GetMyPlexAccountErrors$outboundSchema` instead. */
  export const outboundSchema = GetMyPlexAccountErrors$outboundSchema;
  /** @deprecated use `GetMyPlexAccountErrors$Outbound` instead. */
  export type Outbound = GetMyPlexAccountErrors$Outbound;
}

/** @internal */
export const GetMyPlexAccountBadRequest$inboundSchema: z.ZodType<
  GetMyPlexAccountBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetMyPlexAccountErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetMyPlexAccountBadRequest(remapped);
  });

/** @internal */
export type GetMyPlexAccountBadRequest$Outbound = {
  errors?: Array<GetMyPlexAccountErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetMyPlexAccountBadRequest$outboundSchema: z.ZodType<
  GetMyPlexAccountBadRequest$Outbound,
  z.ZodTypeDef,
  GetMyPlexAccountBadRequest
> = z.instanceof(GetMyPlexAccountBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => GetMyPlexAccountErrors$outboundSchema))
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
export namespace GetMyPlexAccountBadRequest$ {
  /** @deprecated use `GetMyPlexAccountBadRequest$inboundSchema` instead. */
  export const inboundSchema = GetMyPlexAccountBadRequest$inboundSchema;
  /** @deprecated use `GetMyPlexAccountBadRequest$outboundSchema` instead. */
  export const outboundSchema = GetMyPlexAccountBadRequest$outboundSchema;
  /** @deprecated use `GetMyPlexAccountBadRequest$Outbound` instead. */
  export type Outbound = GetMyPlexAccountBadRequest$Outbound;
}
