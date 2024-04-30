/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Hubs extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Get Global Hubs
     *
     * @remarks
     * Get Global Hubs filtered by the parameters provided.
     */
    async getGlobalHubs(
        count?: number | undefined,
        onlyTransient?: operations.OnlyTransient | undefined,
        options?: RequestOptions
    ): Promise<operations.GetGlobalHubsResponse> {
        const input$: operations.GetGlobalHubsRequest = {
            count: count,
            onlyTransient: onlyTransient,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetGlobalHubsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/hubs")();

        const query$ = [
            enc$.encodeForm("count", payload$.count, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("onlyTransient", payload$.onlyTransient, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getGlobalHubs",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetGlobalHubsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        object: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.GetGlobalHubsResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }
    }

    /**
     * Get library specific hubs
     *
     * @remarks
     * This endpoint will return a list of library specific hubs
     *
     */
    async getLibraryHubs(
        sectionId: number,
        count?: number | undefined,
        onlyTransient?: operations.QueryParamOnlyTransient | undefined,
        options?: RequestOptions
    ): Promise<operations.GetLibraryHubsResponse> {
        const input$: operations.GetLibraryHubsRequest = {
            sectionId: sectionId,
            count: count,
            onlyTransient: onlyTransient,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetLibraryHubsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            sectionId: enc$.encodeSimple("sectionId", payload$.sectionId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/hubs/sections/{sectionId}")(pathParams$);

        const query$ = [
            enc$.encodeForm("count", payload$.count, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("onlyTransient", payload$.onlyTransient, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.accessToken === "function") {
            security$ = { accessToken: await this.options$.accessToken() };
        } else if (this.options$.accessToken) {
            security$ = { accessToken: this.options$.accessToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getLibraryHubs",
            oAuth2Scopes: [],
            securitySource: this.options$.accessToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "4XX", "5XX"] };
        const request = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetLibraryHubsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        object: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.GetLibraryHubsResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }
    }
}
