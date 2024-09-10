/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetButlerTasksButlerErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetButlerTasksUnauthorizedData = {
  errors?: Array<GetButlerTasksButlerErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetButlerTasksUnauthorized extends Error {
  errors?: Array<GetButlerTasksButlerErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetButlerTasksUnauthorizedData;

  constructor(err: GetButlerTasksUnauthorizedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetButlerTasksUnauthorized";
  }
}

export type GetButlerTasksErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type GetButlerTasksBadRequestData = {
  errors?: Array<GetButlerTasksErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class GetButlerTasksBadRequest extends Error {
  errors?: Array<GetButlerTasksErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetButlerTasksBadRequestData;

  constructor(err: GetButlerTasksBadRequestData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetButlerTasksBadRequest";
  }
}

/** @internal */
export const GetButlerTasksButlerErrors$inboundSchema: z.ZodType<
  GetButlerTasksButlerErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetButlerTasksButlerErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetButlerTasksButlerErrors$outboundSchema: z.ZodType<
  GetButlerTasksButlerErrors$Outbound,
  z.ZodTypeDef,
  GetButlerTasksButlerErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetButlerTasksButlerErrors$ {
  /** @deprecated use `GetButlerTasksButlerErrors$inboundSchema` instead. */
  export const inboundSchema = GetButlerTasksButlerErrors$inboundSchema;
  /** @deprecated use `GetButlerTasksButlerErrors$outboundSchema` instead. */
  export const outboundSchema = GetButlerTasksButlerErrors$outboundSchema;
  /** @deprecated use `GetButlerTasksButlerErrors$Outbound` instead. */
  export type Outbound = GetButlerTasksButlerErrors$Outbound;
}

/** @internal */
export const GetButlerTasksUnauthorized$inboundSchema: z.ZodType<
  GetButlerTasksUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetButlerTasksButlerErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetButlerTasksUnauthorized(remapped);
  });

/** @internal */
export type GetButlerTasksUnauthorized$Outbound = {
  errors?: Array<GetButlerTasksButlerErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetButlerTasksUnauthorized$outboundSchema: z.ZodType<
  GetButlerTasksUnauthorized$Outbound,
  z.ZodTypeDef,
  GetButlerTasksUnauthorized
> = z.instanceof(GetButlerTasksUnauthorized)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => GetButlerTasksButlerErrors$outboundSchema))
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
export namespace GetButlerTasksUnauthorized$ {
  /** @deprecated use `GetButlerTasksUnauthorized$inboundSchema` instead. */
  export const inboundSchema = GetButlerTasksUnauthorized$inboundSchema;
  /** @deprecated use `GetButlerTasksUnauthorized$outboundSchema` instead. */
  export const outboundSchema = GetButlerTasksUnauthorized$outboundSchema;
  /** @deprecated use `GetButlerTasksUnauthorized$Outbound` instead. */
  export type Outbound = GetButlerTasksUnauthorized$Outbound;
}

/** @internal */
export const GetButlerTasksErrors$inboundSchema: z.ZodType<
  GetButlerTasksErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetButlerTasksErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetButlerTasksErrors$outboundSchema: z.ZodType<
  GetButlerTasksErrors$Outbound,
  z.ZodTypeDef,
  GetButlerTasksErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetButlerTasksErrors$ {
  /** @deprecated use `GetButlerTasksErrors$inboundSchema` instead. */
  export const inboundSchema = GetButlerTasksErrors$inboundSchema;
  /** @deprecated use `GetButlerTasksErrors$outboundSchema` instead. */
  export const outboundSchema = GetButlerTasksErrors$outboundSchema;
  /** @deprecated use `GetButlerTasksErrors$Outbound` instead. */
  export type Outbound = GetButlerTasksErrors$Outbound;
}

/** @internal */
export const GetButlerTasksBadRequest$inboundSchema: z.ZodType<
  GetButlerTasksBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetButlerTasksErrors$inboundSchema)).optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetButlerTasksBadRequest(remapped);
  });

/** @internal */
export type GetButlerTasksBadRequest$Outbound = {
  errors?: Array<GetButlerTasksErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetButlerTasksBadRequest$outboundSchema: z.ZodType<
  GetButlerTasksBadRequest$Outbound,
  z.ZodTypeDef,
  GetButlerTasksBadRequest
> = z.instanceof(GetButlerTasksBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => GetButlerTasksErrors$outboundSchema))
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
export namespace GetButlerTasksBadRequest$ {
  /** @deprecated use `GetButlerTasksBadRequest$inboundSchema` instead. */
  export const inboundSchema = GetButlerTasksBadRequest$inboundSchema;
  /** @deprecated use `GetButlerTasksBadRequest$outboundSchema` instead. */
  export const outboundSchema = GetButlerTasksBadRequest$outboundSchema;
  /** @deprecated use `GetButlerTasksBadRequest$Outbound` instead. */
  export type Outbound = GetButlerTasksBadRequest$Outbound;
}
