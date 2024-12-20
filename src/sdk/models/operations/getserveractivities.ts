/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Context = {
  librarySectionID?: string | undefined;
};

export type Activity = {
  uuid?: string | undefined;
  type?: string | undefined;
  cancellable?: boolean | undefined;
  userID?: number | undefined;
  title?: string | undefined;
  subtitle?: string | undefined;
  progress?: number | undefined;
  context?: Context | undefined;
};

export type GetServerActivitiesMediaContainer = {
  size?: number | undefined;
  activity?: Array<Activity> | undefined;
};

/**
 * The Server Activities
 */
export type GetServerActivitiesResponseBody = {
  mediaContainer?: GetServerActivitiesMediaContainer | undefined;
};

export type GetServerActivitiesResponse = {
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
   * The Server Activities
   */
  object?: GetServerActivitiesResponseBody | undefined;
};

/** @internal */
export const Context$inboundSchema: z.ZodType<Context, z.ZodTypeDef, unknown> =
  z.object({
    librarySectionID: z.string().optional(),
  });

/** @internal */
export type Context$Outbound = {
  librarySectionID?: string | undefined;
};

/** @internal */
export const Context$outboundSchema: z.ZodType<
  Context$Outbound,
  z.ZodTypeDef,
  Context
> = z.object({
  librarySectionID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Context$ {
  /** @deprecated use `Context$inboundSchema` instead. */
  export const inboundSchema = Context$inboundSchema;
  /** @deprecated use `Context$outboundSchema` instead. */
  export const outboundSchema = Context$outboundSchema;
  /** @deprecated use `Context$Outbound` instead. */
  export type Outbound = Context$Outbound;
}

export function contextToJSON(context: Context): string {
  return JSON.stringify(Context$outboundSchema.parse(context));
}

export function contextFromJSON(
  jsonString: string,
): SafeParseResult<Context, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Context$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Context' from JSON`,
  );
}

/** @internal */
export const Activity$inboundSchema: z.ZodType<
  Activity,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string().optional(),
  type: z.string().optional(),
  cancellable: z.boolean().optional(),
  userID: z.number().optional(),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  progress: z.number().optional(),
  Context: z.lazy(() => Context$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "Context": "context",
  });
});

/** @internal */
export type Activity$Outbound = {
  uuid?: string | undefined;
  type?: string | undefined;
  cancellable?: boolean | undefined;
  userID?: number | undefined;
  title?: string | undefined;
  subtitle?: string | undefined;
  progress?: number | undefined;
  Context?: Context$Outbound | undefined;
};

/** @internal */
export const Activity$outboundSchema: z.ZodType<
  Activity$Outbound,
  z.ZodTypeDef,
  Activity
> = z.object({
  uuid: z.string().optional(),
  type: z.string().optional(),
  cancellable: z.boolean().optional(),
  userID: z.number().optional(),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  progress: z.number().optional(),
  context: z.lazy(() => Context$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    context: "Context",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Activity$ {
  /** @deprecated use `Activity$inboundSchema` instead. */
  export const inboundSchema = Activity$inboundSchema;
  /** @deprecated use `Activity$outboundSchema` instead. */
  export const outboundSchema = Activity$outboundSchema;
  /** @deprecated use `Activity$Outbound` instead. */
  export type Outbound = Activity$Outbound;
}

export function activityToJSON(activity: Activity): string {
  return JSON.stringify(Activity$outboundSchema.parse(activity));
}

export function activityFromJSON(
  jsonString: string,
): SafeParseResult<Activity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Activity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Activity' from JSON`,
  );
}

/** @internal */
export const GetServerActivitiesMediaContainer$inboundSchema: z.ZodType<
  GetServerActivitiesMediaContainer,
  z.ZodTypeDef,
  unknown
> = z.object({
  size: z.number().optional(),
  Activity: z.array(z.lazy(() => Activity$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "Activity": "activity",
  });
});

/** @internal */
export type GetServerActivitiesMediaContainer$Outbound = {
  size?: number | undefined;
  Activity?: Array<Activity$Outbound> | undefined;
};

/** @internal */
export const GetServerActivitiesMediaContainer$outboundSchema: z.ZodType<
  GetServerActivitiesMediaContainer$Outbound,
  z.ZodTypeDef,
  GetServerActivitiesMediaContainer
> = z.object({
  size: z.number().optional(),
  activity: z.array(z.lazy(() => Activity$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    activity: "Activity",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetServerActivitiesMediaContainer$ {
  /** @deprecated use `GetServerActivitiesMediaContainer$inboundSchema` instead. */
  export const inboundSchema = GetServerActivitiesMediaContainer$inboundSchema;
  /** @deprecated use `GetServerActivitiesMediaContainer$outboundSchema` instead. */
  export const outboundSchema =
    GetServerActivitiesMediaContainer$outboundSchema;
  /** @deprecated use `GetServerActivitiesMediaContainer$Outbound` instead. */
  export type Outbound = GetServerActivitiesMediaContainer$Outbound;
}

export function getServerActivitiesMediaContainerToJSON(
  getServerActivitiesMediaContainer: GetServerActivitiesMediaContainer,
): string {
  return JSON.stringify(
    GetServerActivitiesMediaContainer$outboundSchema.parse(
      getServerActivitiesMediaContainer,
    ),
  );
}

export function getServerActivitiesMediaContainerFromJSON(
  jsonString: string,
): SafeParseResult<GetServerActivitiesMediaContainer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetServerActivitiesMediaContainer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetServerActivitiesMediaContainer' from JSON`,
  );
}

/** @internal */
export const GetServerActivitiesResponseBody$inboundSchema: z.ZodType<
  GetServerActivitiesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  MediaContainer: z.lazy(() => GetServerActivitiesMediaContainer$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "MediaContainer": "mediaContainer",
  });
});

/** @internal */
export type GetServerActivitiesResponseBody$Outbound = {
  MediaContainer?: GetServerActivitiesMediaContainer$Outbound | undefined;
};

/** @internal */
export const GetServerActivitiesResponseBody$outboundSchema: z.ZodType<
  GetServerActivitiesResponseBody$Outbound,
  z.ZodTypeDef,
  GetServerActivitiesResponseBody
> = z.object({
  mediaContainer: z.lazy(() => GetServerActivitiesMediaContainer$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    mediaContainer: "MediaContainer",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetServerActivitiesResponseBody$ {
  /** @deprecated use `GetServerActivitiesResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetServerActivitiesResponseBody$inboundSchema;
  /** @deprecated use `GetServerActivitiesResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetServerActivitiesResponseBody$outboundSchema;
  /** @deprecated use `GetServerActivitiesResponseBody$Outbound` instead. */
  export type Outbound = GetServerActivitiesResponseBody$Outbound;
}

export function getServerActivitiesResponseBodyToJSON(
  getServerActivitiesResponseBody: GetServerActivitiesResponseBody,
): string {
  return JSON.stringify(
    GetServerActivitiesResponseBody$outboundSchema.parse(
      getServerActivitiesResponseBody,
    ),
  );
}

export function getServerActivitiesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetServerActivitiesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetServerActivitiesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetServerActivitiesResponseBody' from JSON`,
  );
}

/** @internal */
export const GetServerActivitiesResponse$inboundSchema: z.ZodType<
  GetServerActivitiesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => GetServerActivitiesResponseBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetServerActivitiesResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  object?: GetServerActivitiesResponseBody$Outbound | undefined;
};

/** @internal */
export const GetServerActivitiesResponse$outboundSchema: z.ZodType<
  GetServerActivitiesResponse$Outbound,
  z.ZodTypeDef,
  GetServerActivitiesResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => GetServerActivitiesResponseBody$outboundSchema)
    .optional(),
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
export namespace GetServerActivitiesResponse$ {
  /** @deprecated use `GetServerActivitiesResponse$inboundSchema` instead. */
  export const inboundSchema = GetServerActivitiesResponse$inboundSchema;
  /** @deprecated use `GetServerActivitiesResponse$outboundSchema` instead. */
  export const outboundSchema = GetServerActivitiesResponse$outboundSchema;
  /** @deprecated use `GetServerActivitiesResponse$Outbound` instead. */
  export type Outbound = GetServerActivitiesResponse$Outbound;
}

export function getServerActivitiesResponseToJSON(
  getServerActivitiesResponse: GetServerActivitiesResponse,
): string {
  return JSON.stringify(
    GetServerActivitiesResponse$outboundSchema.parse(
      getServerActivitiesResponse,
    ),
  );
}

export function getServerActivitiesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetServerActivitiesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetServerActivitiesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetServerActivitiesResponse' from JSON`,
  );
}
