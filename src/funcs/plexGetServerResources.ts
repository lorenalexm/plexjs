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
import { GetServerResourcesServerList } from "../sdk/models/operations/getserverresources.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Get Server Resources
 *
 * @remarks
 * Get Plex server access tokens and server connections
 */
export async function plexGetServerResources(
  client: PlexAPICore,
  includeHttps?: operations.IncludeHttps | undefined,
  includeRelay?: operations.IncludeRelay | undefined,
  includeIPv6?: operations.IncludeIPv6 | undefined,
  clientID?: string | undefined,
  options?: RequestOptions & { serverURL?: string },
): Promise<
  Result<
    operations.GetServerResourcesResponse,
    | errors.GetServerResourcesBadRequest
    | errors.GetServerResourcesUnauthorized
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input: operations.GetServerResourcesRequest = {
    includeHttps: includeHttps,
    includeRelay: includeRelay,
    includeIPv6: includeIPv6,
    clientID: clientID,
  };

  const parsed = safeParse(
    input,
    (value) => operations.GetServerResourcesRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const baseURL = options?.serverURL
    || pathToFunc(GetServerResourcesServerList[0], {
      charEncoding: "percent",
    })();

  const path = pathToFunc("/resources")();

  const query = encodeFormQuery({
    "includeHttps": payload.includeHttps,
    "includeIPv6": payload.includeIPv6,
    "includeRelay": payload.includeRelay,
  });

  const headers = new Headers({
    Accept: "application/json",
    "X-Plex-Client-Identifier": encodeSimple(
      "X-Plex-Client-Identifier",
      payload.ClientID,
      { explode: false, charEncoding: "none" },
    ),
    "X-Plex-Client-Identifier": encodeSimple(
      "X-Plex-Client-Identifier",
      client._options.clientID,
      { explode: false, charEncoding: "none" },
    ),
  });

  const secConfig = await extractSecurity(client._options.accessToken);
  const securityInput = secConfig == null ? {} : { accessToken: secConfig };
  const context = {
    operationID: "get-server-resources",
    oAuth2Scopes: [],
    securitySource: client._options.accessToken,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: baseURL,
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
    operations.GetServerResourcesResponse,
    | errors.GetServerResourcesBadRequest
    | errors.GetServerResourcesUnauthorized
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.GetServerResourcesResponse$inboundSchema, {
      key: "PlexDevices",
    }),
    M.jsonErr(400, errors.GetServerResourcesBadRequest$inboundSchema),
    M.jsonErr(401, errors.GetServerResourcesUnauthorized$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
