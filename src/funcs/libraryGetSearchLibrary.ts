/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PlexAPICore } from "../core.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
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
 * Search Library
 *
 * @remarks
 * Search for content within a specific section of the library.
 *
 * ### Types
 * Each type in the library comes with a set of filters and sorts, aiding in building dynamic media controls:
 *
 * - **Type Object Attributes**:
 *   - `type`: Metadata type (if standard Plex type).
 *   - `title`: Title for this content type (e.g., "Movies").
 *
 * - **Filter Objects**:
 *   - Subset of the media query language.
 *   - Attributes include `filter` (name), `filterType` (data type), `key` (endpoint for value range), and `title`.
 *
 * - **Sort Objects**:
 *   - Description of sort fields.
 *   - Attributes include `defaultDirection` (asc/desc), `descKey` and `key` (sort parameters), and `title`.
 *
 * > **Note**: Filters and sorts are optional; without them, no filtering controls are rendered.
 */
export async function libraryGetSearchLibrary(
  client: PlexAPICore,
  sectionKey: number,
  type: operations.GetSearchLibraryQueryParamType,
  options?: RequestOptions,
): Promise<
  Result<
    operations.GetSearchLibraryResponse,
    | errors.GetSearchLibraryBadRequest
    | errors.GetSearchLibraryUnauthorized
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input: operations.GetSearchLibraryRequest = {
    sectionKey: sectionKey,
    type: type,
  };

  const parsed = safeParse(
    input,
    (value) => operations.GetSearchLibraryRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    sectionKey: encodeSimple("sectionKey", payload.sectionKey, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/library/sections/{sectionKey}/search")(pathParams);

  const query = encodeFormQuery({
    "type": payload.type,
  });

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.accessToken);
  const securityInput = secConfig == null ? {} : { accessToken: secConfig };
  const context = {
    operationID: "get-search-library",
    oAuth2Scopes: [],
    securitySource: client._options.accessToken,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "4XX", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result] = await M.match<
    operations.GetSearchLibraryResponse,
    | errors.GetSearchLibraryBadRequest
    | errors.GetSearchLibraryUnauthorized
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.GetSearchLibraryResponse$inboundSchema, {
      key: "object",
    }),
    M.jsonErr(400, errors.GetSearchLibraryBadRequest$inboundSchema),
    M.jsonErr(401, errors.GetSearchLibraryUnauthorized$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
