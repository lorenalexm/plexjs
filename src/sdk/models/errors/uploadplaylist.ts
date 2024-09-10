/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type UploadPlaylistPlaylistsErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type UploadPlaylistUnauthorizedData = {
  errors?: Array<UploadPlaylistPlaylistsErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class UploadPlaylistUnauthorized extends Error {
  errors?: Array<UploadPlaylistPlaylistsErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: UploadPlaylistUnauthorizedData;

  constructor(err: UploadPlaylistUnauthorizedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "UploadPlaylistUnauthorized";
  }
}

export type UploadPlaylistErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type UploadPlaylistBadRequestData = {
  errors?: Array<UploadPlaylistErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class UploadPlaylistBadRequest extends Error {
  errors?: Array<UploadPlaylistErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: UploadPlaylistBadRequestData;

  constructor(err: UploadPlaylistBadRequestData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "UploadPlaylistBadRequest";
  }
}

/** @internal */
export const UploadPlaylistPlaylistsErrors$inboundSchema: z.ZodType<
  UploadPlaylistPlaylistsErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type UploadPlaylistPlaylistsErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const UploadPlaylistPlaylistsErrors$outboundSchema: z.ZodType<
  UploadPlaylistPlaylistsErrors$Outbound,
  z.ZodTypeDef,
  UploadPlaylistPlaylistsErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadPlaylistPlaylistsErrors$ {
  /** @deprecated use `UploadPlaylistPlaylistsErrors$inboundSchema` instead. */
  export const inboundSchema = UploadPlaylistPlaylistsErrors$inboundSchema;
  /** @deprecated use `UploadPlaylistPlaylistsErrors$outboundSchema` instead. */
  export const outboundSchema = UploadPlaylistPlaylistsErrors$outboundSchema;
  /** @deprecated use `UploadPlaylistPlaylistsErrors$Outbound` instead. */
  export type Outbound = UploadPlaylistPlaylistsErrors$Outbound;
}

/** @internal */
export const UploadPlaylistUnauthorized$inboundSchema: z.ZodType<
  UploadPlaylistUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => UploadPlaylistPlaylistsErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new UploadPlaylistUnauthorized(remapped);
  });

/** @internal */
export type UploadPlaylistUnauthorized$Outbound = {
  errors?: Array<UploadPlaylistPlaylistsErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const UploadPlaylistUnauthorized$outboundSchema: z.ZodType<
  UploadPlaylistUnauthorized$Outbound,
  z.ZodTypeDef,
  UploadPlaylistUnauthorized
> = z.instanceof(UploadPlaylistUnauthorized)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(
        z.lazy(() => UploadPlaylistPlaylistsErrors$outboundSchema),
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
export namespace UploadPlaylistUnauthorized$ {
  /** @deprecated use `UploadPlaylistUnauthorized$inboundSchema` instead. */
  export const inboundSchema = UploadPlaylistUnauthorized$inboundSchema;
  /** @deprecated use `UploadPlaylistUnauthorized$outboundSchema` instead. */
  export const outboundSchema = UploadPlaylistUnauthorized$outboundSchema;
  /** @deprecated use `UploadPlaylistUnauthorized$Outbound` instead. */
  export type Outbound = UploadPlaylistUnauthorized$Outbound;
}

/** @internal */
export const UploadPlaylistErrors$inboundSchema: z.ZodType<
  UploadPlaylistErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type UploadPlaylistErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const UploadPlaylistErrors$outboundSchema: z.ZodType<
  UploadPlaylistErrors$Outbound,
  z.ZodTypeDef,
  UploadPlaylistErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadPlaylistErrors$ {
  /** @deprecated use `UploadPlaylistErrors$inboundSchema` instead. */
  export const inboundSchema = UploadPlaylistErrors$inboundSchema;
  /** @deprecated use `UploadPlaylistErrors$outboundSchema` instead. */
  export const outboundSchema = UploadPlaylistErrors$outboundSchema;
  /** @deprecated use `UploadPlaylistErrors$Outbound` instead. */
  export type Outbound = UploadPlaylistErrors$Outbound;
}

/** @internal */
export const UploadPlaylistBadRequest$inboundSchema: z.ZodType<
  UploadPlaylistBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => UploadPlaylistErrors$inboundSchema)).optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new UploadPlaylistBadRequest(remapped);
  });

/** @internal */
export type UploadPlaylistBadRequest$Outbound = {
  errors?: Array<UploadPlaylistErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const UploadPlaylistBadRequest$outboundSchema: z.ZodType<
  UploadPlaylistBadRequest$Outbound,
  z.ZodTypeDef,
  UploadPlaylistBadRequest
> = z.instanceof(UploadPlaylistBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => UploadPlaylistErrors$outboundSchema))
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
export namespace UploadPlaylistBadRequest$ {
  /** @deprecated use `UploadPlaylistBadRequest$inboundSchema` instead. */
  export const inboundSchema = UploadPlaylistBadRequest$inboundSchema;
  /** @deprecated use `UploadPlaylistBadRequest$outboundSchema` instead. */
  export const outboundSchema = UploadPlaylistBadRequest$outboundSchema;
  /** @deprecated use `UploadPlaylistBadRequest$Outbound` instead. */
  export type Outbound = UploadPlaylistBadRequest$Outbound;
}
