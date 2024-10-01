/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PlexAPICore } from "../core.js";
import { encodeFormQuery } from "../lib/encodings.js";
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
 * Start Universal Transcode
 *
 * @remarks
 * Begin a Universal Transcode Session
 */
export async function videoStartUniversalTranscode(
  client: PlexAPICore,
  request: operations.StartUniversalTranscodeRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.StartUniversalTranscodeResponse,
    | errors.StartUniversalTranscodeBadRequest
    | errors.StartUniversalTranscodeUnauthorized
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input = request;

  const parsed = safeParse(
    input,
    (value) =>
      operations.StartUniversalTranscodeRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/video/:/transcode/universal/start.mpd")();

  const query = encodeFormQuery({
    "addDebugOverlay": payload.addDebugOverlay,
    "audioBoost": payload.audioBoost,
    "autoAdjustQuality": payload.autoAdjustQuality,
    "directPlay": payload.directPlay,
    "directStream": payload.directStream,
    "fastSeek": payload.fastSeek,
    "hasMDE": payload.hasMDE,
    "location": payload.location,
    "mediaBufferSize": payload.mediaBufferSize,
    "mediaIndex": payload.mediaIndex,
    "partIndex": payload.partIndex,
    "path": payload.path,
    "protocol": payload.protocol,
    "session": payload.session,
    "subtites": payload.subtites,
    "subtitleSize": payload.subtitleSize,
  });

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.accessToken);
  const securityInput = secConfig == null ? {} : { accessToken: secConfig };
  const context = {
    operationID: "startUniversalTranscode",
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
    operations.StartUniversalTranscodeResponse,
    | errors.StartUniversalTranscodeBadRequest
    | errors.StartUniversalTranscodeUnauthorized
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.nil(200, operations.StartUniversalTranscodeResponse$inboundSchema),
    M.jsonErr(400, errors.StartUniversalTranscodeBadRequest$inboundSchema),
    M.jsonErr(401, errors.StartUniversalTranscodeUnauthorized$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
