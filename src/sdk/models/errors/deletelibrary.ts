/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type DeleteLibraryLibraryErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export type DeleteLibraryUnauthorizedData = {
  errors?: Array<DeleteLibraryLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Unauthorized - Returned if the X-Plex-Token is missing from the header or query.
 */
export class DeleteLibraryUnauthorized extends Error {
  errors?: Array<DeleteLibraryLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: DeleteLibraryUnauthorizedData;

  constructor(err: DeleteLibraryUnauthorizedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "DeleteLibraryUnauthorized";
  }
}

export type DeleteLibraryErrors = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export type DeleteLibraryBadRequestData = {
  errors?: Array<DeleteLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

/**
 * Bad Request - A parameter was not specified, or was specified incorrectly.
 */
export class DeleteLibraryBadRequest extends Error {
  errors?: Array<DeleteLibraryErrors> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: DeleteLibraryBadRequestData;

  constructor(err: DeleteLibraryBadRequestData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "DeleteLibraryBadRequest";
  }
}

/** @internal */
export const DeleteLibraryLibraryErrors$inboundSchema: z.ZodType<
  DeleteLibraryLibraryErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type DeleteLibraryLibraryErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const DeleteLibraryLibraryErrors$outboundSchema: z.ZodType<
  DeleteLibraryLibraryErrors$Outbound,
  z.ZodTypeDef,
  DeleteLibraryLibraryErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteLibraryLibraryErrors$ {
  /** @deprecated use `DeleteLibraryLibraryErrors$inboundSchema` instead. */
  export const inboundSchema = DeleteLibraryLibraryErrors$inboundSchema;
  /** @deprecated use `DeleteLibraryLibraryErrors$outboundSchema` instead. */
  export const outboundSchema = DeleteLibraryLibraryErrors$outboundSchema;
  /** @deprecated use `DeleteLibraryLibraryErrors$Outbound` instead. */
  export type Outbound = DeleteLibraryLibraryErrors$Outbound;
}

/** @internal */
export const DeleteLibraryUnauthorized$inboundSchema: z.ZodType<
  DeleteLibraryUnauthorized,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => DeleteLibraryLibraryErrors$inboundSchema))
    .optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new DeleteLibraryUnauthorized(remapped);
  });

/** @internal */
export type DeleteLibraryUnauthorized$Outbound = {
  errors?: Array<DeleteLibraryLibraryErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const DeleteLibraryUnauthorized$outboundSchema: z.ZodType<
  DeleteLibraryUnauthorized$Outbound,
  z.ZodTypeDef,
  DeleteLibraryUnauthorized
> = z.instanceof(DeleteLibraryUnauthorized)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => DeleteLibraryLibraryErrors$outboundSchema))
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
export namespace DeleteLibraryUnauthorized$ {
  /** @deprecated use `DeleteLibraryUnauthorized$inboundSchema` instead. */
  export const inboundSchema = DeleteLibraryUnauthorized$inboundSchema;
  /** @deprecated use `DeleteLibraryUnauthorized$outboundSchema` instead. */
  export const outboundSchema = DeleteLibraryUnauthorized$outboundSchema;
  /** @deprecated use `DeleteLibraryUnauthorized$Outbound` instead. */
  export type Outbound = DeleteLibraryUnauthorized$Outbound;
}

/** @internal */
export const DeleteLibraryErrors$inboundSchema: z.ZodType<
  DeleteLibraryErrors,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/** @internal */
export type DeleteLibraryErrors$Outbound = {
  code?: number | undefined;
  message?: string | undefined;
  status?: number | undefined;
};

/** @internal */
export const DeleteLibraryErrors$outboundSchema: z.ZodType<
  DeleteLibraryErrors$Outbound,
  z.ZodTypeDef,
  DeleteLibraryErrors
> = z.object({
  code: z.number().int().optional(),
  message: z.string().optional(),
  status: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteLibraryErrors$ {
  /** @deprecated use `DeleteLibraryErrors$inboundSchema` instead. */
  export const inboundSchema = DeleteLibraryErrors$inboundSchema;
  /** @deprecated use `DeleteLibraryErrors$outboundSchema` instead. */
  export const outboundSchema = DeleteLibraryErrors$outboundSchema;
  /** @deprecated use `DeleteLibraryErrors$Outbound` instead. */
  export type Outbound = DeleteLibraryErrors$Outbound;
}

/** @internal */
export const DeleteLibraryBadRequest$inboundSchema: z.ZodType<
  DeleteLibraryBadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.lazy(() => DeleteLibraryErrors$inboundSchema)).optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new DeleteLibraryBadRequest(remapped);
  });

/** @internal */
export type DeleteLibraryBadRequest$Outbound = {
  errors?: Array<DeleteLibraryErrors$Outbound> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const DeleteLibraryBadRequest$outboundSchema: z.ZodType<
  DeleteLibraryBadRequest$Outbound,
  z.ZodTypeDef,
  DeleteLibraryBadRequest
> = z.instanceof(DeleteLibraryBadRequest)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.lazy(() => DeleteLibraryErrors$outboundSchema))
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
export namespace DeleteLibraryBadRequest$ {
  /** @deprecated use `DeleteLibraryBadRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteLibraryBadRequest$inboundSchema;
  /** @deprecated use `DeleteLibraryBadRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteLibraryBadRequest$outboundSchema;
  /** @deprecated use `DeleteLibraryBadRequest$Outbound` instead. */
  export type Outbound = DeleteLibraryBadRequest$Outbound;
}
