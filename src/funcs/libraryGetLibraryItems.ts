/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PlexAPICore } from "../core.js";
import {
  encodeFormQuery as encodeFormQuery$,
  encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import * as errors from "../sdk/models/errors/index.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Get Library Items
 *
 * @remarks
 * Fetches details from a specific section of the library identified by a section key and a tag. The tag parameter accepts the following values:
 * - `all`: All items in the section.
 * - `unwatched`: Items that have not been played.
 * - `newest`: Items that are recently released.
 * - `recentlyAdded`: Items that are recently added to the library.
 * - `recentlyViewed`: Items that were recently viewed.
 * - `onDeck`: Items to continue watching.
 * - `collection`: Items categorized by collection.
 * - `edition`: Items categorized by edition.
 * - `genre`: Items categorized by genre.
 * - `year`: Items categorized by year of release.
 * - `decade`: Items categorized by decade.
 * - `director`: Items categorized by director.
 * - `actor`: Items categorized by starring actor.
 * - `country`: Items categorized by country of origin.
 * - `contentRating`: Items categorized by content rating.
 * - `rating`: Items categorized by rating.
 * - `resolution`: Items categorized by resolution.
 * - `firstCharacter`: Items categorized by the first letter.
 * - `folder`: Items categorized by folder.
 */
export async function libraryGetLibraryItems(
  client$: PlexAPICore,
  request: operations.GetLibraryItemsRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.GetLibraryItemsResponse,
    | errors.GetLibraryItemsBadRequest
    | errors.GetLibraryItemsUnauthorized
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$ = request;

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) => operations.GetLibraryItemsRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const pathParams$ = {
    sectionKey: encodeSimple$("sectionKey", payload$.sectionKey, {
      explode: false,
      charEncoding: "percent",
    }),
    tag: encodeSimple$("tag", payload$.tag, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc("/library/sections/{sectionKey}/{tag}")(pathParams$);

  const query$ = encodeFormQuery$({
    "includeGuids": payload$.includeGuids,
    "includeMeta": payload$.includeMeta,
    "type": payload$.type,
    "X-Plex-Container-Size": payload$["X-Plex-Container-Size"],
    "X-Plex-Container-Start": payload$["X-Plex-Container-Start"],
  });

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const accessToken$ = await extractSecurity(client$.options$.accessToken);
  const security$ = accessToken$ == null ? {} : { accessToken: accessToken$ };
  const context = {
    operationID: "get-library-items",
    oAuth2Scopes: [],
    securitySource: client$.options$.accessToken,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "GET",
    path: path$,
    headers: headers$,
    query: query$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["400", "401", "4XX", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields$ = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result$] = await m$.match<
    operations.GetLibraryItemsResponse,
    | errors.GetLibraryItemsBadRequest
    | errors.GetLibraryItemsUnauthorized
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, operations.GetLibraryItemsResponse$inboundSchema, {
      key: "object",
    }),
    m$.jsonErr(400, errors.GetLibraryItemsBadRequest$inboundSchema),
    m$.jsonErr(401, errors.GetLibraryItemsUnauthorized$inboundSchema),
    m$.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
