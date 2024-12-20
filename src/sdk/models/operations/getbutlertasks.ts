/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ButlerTask = {
  name?: string | undefined;
  interval?: number | undefined;
  scheduleRandomized?: boolean | undefined;
  enabled?: boolean | undefined;
  title?: string | undefined;
  description?: string | undefined;
};

export type ButlerTasks = {
  butlerTask?: Array<ButlerTask> | undefined;
};

/**
 * All butler tasks
 */
export type GetButlerTasksResponseBody = {
  butlerTasks?: ButlerTasks | undefined;
};

export type GetButlerTasksResponse = {
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
  /**
   * All butler tasks
   */
  object?: GetButlerTasksResponseBody | undefined;
};

/** @internal */
export const ButlerTask$inboundSchema: z.ZodType<
  ButlerTask,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  interval: z.number().optional(),
  scheduleRandomized: z.boolean().optional(),
  enabled: z.boolean().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type ButlerTask$Outbound = {
  name?: string | undefined;
  interval?: number | undefined;
  scheduleRandomized?: boolean | undefined;
  enabled?: boolean | undefined;
  title?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const ButlerTask$outboundSchema: z.ZodType<
  ButlerTask$Outbound,
  z.ZodTypeDef,
  ButlerTask
> = z.object({
  name: z.string().optional(),
  interval: z.number().optional(),
  scheduleRandomized: z.boolean().optional(),
  enabled: z.boolean().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ButlerTask$ {
  /** @deprecated use `ButlerTask$inboundSchema` instead. */
  export const inboundSchema = ButlerTask$inboundSchema;
  /** @deprecated use `ButlerTask$outboundSchema` instead. */
  export const outboundSchema = ButlerTask$outboundSchema;
  /** @deprecated use `ButlerTask$Outbound` instead. */
  export type Outbound = ButlerTask$Outbound;
}

export function butlerTaskToJSON(butlerTask: ButlerTask): string {
  return JSON.stringify(ButlerTask$outboundSchema.parse(butlerTask));
}

export function butlerTaskFromJSON(
  jsonString: string,
): SafeParseResult<ButlerTask, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ButlerTask$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ButlerTask' from JSON`,
  );
}

/** @internal */
export const ButlerTasks$inboundSchema: z.ZodType<
  ButlerTasks,
  z.ZodTypeDef,
  unknown
> = z.object({
  ButlerTask: z.array(z.lazy(() => ButlerTask$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "ButlerTask": "butlerTask",
  });
});

/** @internal */
export type ButlerTasks$Outbound = {
  ButlerTask?: Array<ButlerTask$Outbound> | undefined;
};

/** @internal */
export const ButlerTasks$outboundSchema: z.ZodType<
  ButlerTasks$Outbound,
  z.ZodTypeDef,
  ButlerTasks
> = z.object({
  butlerTask: z.array(z.lazy(() => ButlerTask$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    butlerTask: "ButlerTask",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ButlerTasks$ {
  /** @deprecated use `ButlerTasks$inboundSchema` instead. */
  export const inboundSchema = ButlerTasks$inboundSchema;
  /** @deprecated use `ButlerTasks$outboundSchema` instead. */
  export const outboundSchema = ButlerTasks$outboundSchema;
  /** @deprecated use `ButlerTasks$Outbound` instead. */
  export type Outbound = ButlerTasks$Outbound;
}

export function butlerTasksToJSON(butlerTasks: ButlerTasks): string {
  return JSON.stringify(ButlerTasks$outboundSchema.parse(butlerTasks));
}

export function butlerTasksFromJSON(
  jsonString: string,
): SafeParseResult<ButlerTasks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ButlerTasks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ButlerTasks' from JSON`,
  );
}

/** @internal */
export const GetButlerTasksResponseBody$inboundSchema: z.ZodType<
  GetButlerTasksResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  ButlerTasks: z.lazy(() => ButlerTasks$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ButlerTasks": "butlerTasks",
  });
});

/** @internal */
export type GetButlerTasksResponseBody$Outbound = {
  ButlerTasks?: ButlerTasks$Outbound | undefined;
};

/** @internal */
export const GetButlerTasksResponseBody$outboundSchema: z.ZodType<
  GetButlerTasksResponseBody$Outbound,
  z.ZodTypeDef,
  GetButlerTasksResponseBody
> = z.object({
  butlerTasks: z.lazy(() => ButlerTasks$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    butlerTasks: "ButlerTasks",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetButlerTasksResponseBody$ {
  /** @deprecated use `GetButlerTasksResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetButlerTasksResponseBody$inboundSchema;
  /** @deprecated use `GetButlerTasksResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetButlerTasksResponseBody$outboundSchema;
  /** @deprecated use `GetButlerTasksResponseBody$Outbound` instead. */
  export type Outbound = GetButlerTasksResponseBody$Outbound;
}

export function getButlerTasksResponseBodyToJSON(
  getButlerTasksResponseBody: GetButlerTasksResponseBody,
): string {
  return JSON.stringify(
    GetButlerTasksResponseBody$outboundSchema.parse(getButlerTasksResponseBody),
  );
}

export function getButlerTasksResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetButlerTasksResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetButlerTasksResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetButlerTasksResponseBody' from JSON`,
  );
}

/** @internal */
export const GetButlerTasksResponse$inboundSchema: z.ZodType<
  GetButlerTasksResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetButlerTasksResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetButlerTasksResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetButlerTasksResponseBody$Outbound | undefined;
};

/** @internal */
export const GetButlerTasksResponse$outboundSchema: z.ZodType<
  GetButlerTasksResponse$Outbound,
  z.ZodTypeDef,
  GetButlerTasksResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetButlerTasksResponseBody$outboundSchema).optional(),
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
export namespace GetButlerTasksResponse$ {
  /** @deprecated use `GetButlerTasksResponse$inboundSchema` instead. */
  export const inboundSchema = GetButlerTasksResponse$inboundSchema;
  /** @deprecated use `GetButlerTasksResponse$outboundSchema` instead. */
  export const outboundSchema = GetButlerTasksResponse$outboundSchema;
  /** @deprecated use `GetButlerTasksResponse$Outbound` instead. */
  export type Outbound = GetButlerTasksResponse$Outbound;
}

export function getButlerTasksResponseToJSON(
  getButlerTasksResponse: GetButlerTasksResponse,
): string {
  return JSON.stringify(
    GetButlerTasksResponse$outboundSchema.parse(getButlerTasksResponse),
  );
}

export function getButlerTasksResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetButlerTasksResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetButlerTasksResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetButlerTasksResponse' from JSON`,
  );
}
