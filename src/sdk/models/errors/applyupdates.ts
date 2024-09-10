/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type ApplyUpdatesUpdaterErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type ApplyUpdatesUnauthorizedData = {
  errors?: Array<ApplyUpdatesUpdaterErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class ApplyUpdatesUnauthorized extends Error {
  errors?: Array<ApplyUpdatesUpdaterErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: ApplyUpdatesUnauthorizedData;

  constructor(err: ApplyUpdatesUnauthorizedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "ApplyUpdatesUnauthorized";
  }
}

export type ApplyUpdatesErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type ApplyUpdatesBadRequestData = {
  errors?: Array<ApplyUpdatesErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class ApplyUpdatesBadRequest extends Error {
  errors?: Array<ApplyUpdatesErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: ApplyUpdatesBadRequestData;

  constructor(err: ApplyUpdatesBadRequestData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "ApplyUpdatesBadRequest";
  }
}

/** @internal */
export const ApplyUpdatesUpdaterErrors$inboundSchema: z.ZodType<
  ApplyUpdatesUpdaterErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type ApplyUpdatesUpdaterErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const ApplyUpdatesUpdaterErrors$outboundSchema: z.ZodType<
  ApplyUpdatesUpdaterErrors$Outbound,
  z.ZodTypeDef,
  ApplyUpdatesUpdaterErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplyUpdatesUpdaterErrors$ {
  /** @deprecated use `ApplyUpdatesUpdaterErrors$inboundSchema` instead. */
  export const inboundSchema = ApplyUpdatesUpdaterErrors$inboundSchema;
  /** @deprecated use `ApplyUpdatesUpdaterErrors$outboundSchema` instead. */
  export const outboundSchema = ApplyUpdatesUpdaterErrors$outboundSchema;
  /** @deprecated use `ApplyUpdatesUpdaterErrors$Outbound` instead. */
  export type Outbound = ApplyUpdatesUpdaterErrors$Outbound;
}

/** @internal */
export const ApplyUpdatesUnauthorized$inboundSchema: z.ZodType<
  ApplyUpdatesUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => ApplyUpdatesUpdaterErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new ApplyUpdatesUnauthorized(remapped);
  });

/** @internal */
export type ApplyUpdatesUnauthorized$Outbound = {
  errors?: Array<ApplyUpdatesUpdaterErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const ApplyUpdatesUnauthorized$outboundSchema: z.ZodType<
  ApplyUpdatesUnauthorized$Outbound,
  z.ZodTypeDef,
  ApplyUpdatesUnauthorized
> = z.instanceof(ApplyUpdatesUnauthorized)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => ApplyUpdatesUpdaterErrors$outboundSchema))
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
export namespace ApplyUpdatesUnauthorized$ {
  /** @deprecated use `ApplyUpdatesUnauthorized$inboundSchema` instead. */
  export const inboundSchema = ApplyUpdatesUnauthorized$inboundSchema;
  /** @deprecated use `ApplyUpdatesUnauthorized$outboundSchema` instead. */
  export const outboundSchema = ApplyUpdatesUnauthorized$outboundSchema;
  /** @deprecated use `ApplyUpdatesUnauthorized$Outbound` instead. */
  export type Outbound = ApplyUpdatesUnauthorized$Outbound;
}

/** @internal */
export const ApplyUpdatesErrors$inboundSchema: z.ZodType<
  ApplyUpdatesErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type ApplyUpdatesErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const ApplyUpdatesErrors$outboundSchema: z.ZodType<
  ApplyUpdatesErrors$Outbound,
  z.ZodTypeDef,
  ApplyUpdatesErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplyUpdatesErrors$ {
  /** @deprecated use `ApplyUpdatesErrors$inboundSchema` instead. */
  export const inboundSchema = ApplyUpdatesErrors$inboundSchema;
  /** @deprecated use `ApplyUpdatesErrors$outboundSchema` instead. */
  export const outboundSchema = ApplyUpdatesErrors$outboundSchema;
  /** @deprecated use `ApplyUpdatesErrors$Outbound` instead. */
  export type Outbound = ApplyUpdatesErrors$Outbound;
}

/** @internal */
export const ApplyUpdatesBadRequest$inboundSchema: z.ZodType<
  ApplyUpdatesBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => ApplyUpdatesErrors$inboundSchema)).optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new ApplyUpdatesBadRequest(remapped);
  });

/** @internal */
export type ApplyUpdatesBadRequest$Outbound = {
  errors?: Array<ApplyUpdatesErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const ApplyUpdatesBadRequest$outboundSchema: z.ZodType<
  ApplyUpdatesBadRequest$Outbound,
  z.ZodTypeDef,
  ApplyUpdatesBadRequest
> = z.instanceof(ApplyUpdatesBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => ApplyUpdatesErrors$outboundSchema))
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
export namespace ApplyUpdatesBadRequest$ {
  /** @deprecated use `ApplyUpdatesBadRequest$inboundSchema` instead. */
  export const inboundSchema = ApplyUpdatesBadRequest$inboundSchema;
  /** @deprecated use `ApplyUpdatesBadRequest$outboundSchema` instead. */
  export const outboundSchema = ApplyUpdatesBadRequest$outboundSchema;
  /** @deprecated use `ApplyUpdatesBadRequest$Outbound` instead. */
  export type Outbound = ApplyUpdatesBadRequest$Outbound;
}
