/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetMediaProvidersServerErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type GetMediaProvidersUnauthorizedData = {
  errors?: Array<GetMediaProvidersServerErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class GetMediaProvidersUnauthorized extends Error {
  errors?: Array<GetMediaProvidersServerErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetMediaProvidersUnauthorizedData;

  constructor(err: GetMediaProvidersUnauthorizedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetMediaProvidersUnauthorized";
  }
}

export type GetMediaProvidersErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type GetMediaProvidersBadRequestData = {
  errors?: Array<GetMediaProvidersErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class GetMediaProvidersBadRequest extends Error {
  errors?: Array<GetMediaProvidersErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: GetMediaProvidersBadRequestData;

  constructor(err: GetMediaProvidersBadRequestData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "GetMediaProvidersBadRequest";
  }
}

/** @internal */
export const GetMediaProvidersServerErrors$inboundSchema: z.ZodType<
  GetMediaProvidersServerErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetMediaProvidersServerErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetMediaProvidersServerErrors$outboundSchema: z.ZodType<
  GetMediaProvidersServerErrors$Outbound,
  z.ZodTypeDef,
  GetMediaProvidersServerErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMediaProvidersServerErrors$ {
  /** @deprecated use `GetMediaProvidersServerErrors$inboundSchema` instead. */
  export const inboundSchema = GetMediaProvidersServerErrors$inboundSchema;
  /** @deprecated use `GetMediaProvidersServerErrors$outboundSchema` instead. */
  export const outboundSchema = GetMediaProvidersServerErrors$outboundSchema;
  /** @deprecated use `GetMediaProvidersServerErrors$Outbound` instead. */
  export type Outbound = GetMediaProvidersServerErrors$Outbound;
}

/** @internal */
export const GetMediaProvidersUnauthorized$inboundSchema: z.ZodType<
  GetMediaProvidersUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetMediaProvidersServerErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetMediaProvidersUnauthorized(remapped);
  });

/** @internal */
export type GetMediaProvidersUnauthorized$Outbound = {
  errors?: Array<GetMediaProvidersServerErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetMediaProvidersUnauthorized$outboundSchema: z.ZodType<
  GetMediaProvidersUnauthorized$Outbound,
  z.ZodTypeDef,
  GetMediaProvidersUnauthorized
> = z.instanceof(GetMediaProvidersUnauthorized)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(
        z.lazy(() => GetMediaProvidersServerErrors$outboundSchema),
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
export namespace GetMediaProvidersUnauthorized$ {
  /** @deprecated use `GetMediaProvidersUnauthorized$inboundSchema` instead. */
  export const inboundSchema = GetMediaProvidersUnauthorized$inboundSchema;
  /** @deprecated use `GetMediaProvidersUnauthorized$outboundSchema` instead. */
  export const outboundSchema = GetMediaProvidersUnauthorized$outboundSchema;
  /** @deprecated use `GetMediaProvidersUnauthorized$Outbound` instead. */
  export type Outbound = GetMediaProvidersUnauthorized$Outbound;
}

/** @internal */
export const GetMediaProvidersErrors$inboundSchema: z.ZodType<
  GetMediaProvidersErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type GetMediaProvidersErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const GetMediaProvidersErrors$outboundSchema: z.ZodType<
  GetMediaProvidersErrors$Outbound,
  z.ZodTypeDef,
  GetMediaProvidersErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMediaProvidersErrors$ {
  /** @deprecated use `GetMediaProvidersErrors$inboundSchema` instead. */
  export const inboundSchema = GetMediaProvidersErrors$inboundSchema;
  /** @deprecated use `GetMediaProvidersErrors$outboundSchema` instead. */
  export const outboundSchema = GetMediaProvidersErrors$outboundSchema;
  /** @deprecated use `GetMediaProvidersErrors$Outbound` instead. */
  export type Outbound = GetMediaProvidersErrors$Outbound;
}

/** @internal */
export const GetMediaProvidersBadRequest$inboundSchema: z.ZodType<
  GetMediaProvidersBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => GetMediaProvidersErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new GetMediaProvidersBadRequest(remapped);
  });

/** @internal */
export type GetMediaProvidersBadRequest$Outbound = {
  errors?: Array<GetMediaProvidersErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const GetMediaProvidersBadRequest$outboundSchema: z.ZodType<
  GetMediaProvidersBadRequest$Outbound,
  z.ZodTypeDef,
  GetMediaProvidersBadRequest
> = z.instanceof(GetMediaProvidersBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => GetMediaProvidersErrors$outboundSchema))
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
export namespace GetMediaProvidersBadRequest$ {
  /** @deprecated use `GetMediaProvidersBadRequest$inboundSchema` instead. */
  export const inboundSchema = GetMediaProvidersBadRequest$inboundSchema;
  /** @deprecated use `GetMediaProvidersBadRequest$outboundSchema` instead. */
  export const outboundSchema = GetMediaProvidersBadRequest$outboundSchema;
  /** @deprecated use `GetMediaProvidersBadRequest$Outbound` instead. */
  export type Outbound = GetMediaProvidersBadRequest$Outbound;
}
