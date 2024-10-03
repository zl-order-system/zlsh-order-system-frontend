import { getAppConstants } from "../util/constants";
import { z } from "zod";
import { formatDate } from "../util/util";
import { useMutation, useQuery } from "react-query";
import { getToken } from "../util/token";

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
  OPTIONS = "OPTIONS"
}


function convertToDateIfDate(str: string): Date | string {
  const date = new Date(str);
  if (isNaN(date.valueOf()))
    return str;
  return date;
}

export function replaceStringWDate(obj: unknown): unknown {
  if (typeof obj === "string")
    return convertToDateIfDate(obj);

  if (Array.isArray(obj))
    return obj.map(replaceStringWDate);

  if (obj === null || obj === undefined)
    return obj;

  if (typeof obj === "object")
    return Object.fromEntries(
      Object
        .entries(obj as object)
        .map(v => [v[0], replaceStringWDate(v[1])])
    );

  return obj;
}

export function replaceDateWString(obj: unknown): unknown {
  if (obj instanceof Date)
    return formatDate(obj);

  if (Array.isArray(obj))
    return obj.map(v => replaceDateWString(v))

  if (typeof obj === "object")
    return Object.fromEntries(Object.entries(obj as object).map(v => [v[0], replaceDateWString(v[1])]))

  return obj;
}

export async function zodParse<T>(response: Response, schema: z.Schema<T>) {
  return schema.parse(replaceStringWDate(await response.json()));
}

export async function zodParseStr<T>(text: string, schema: z.Schema<T>) {
  return schema.parse(replaceStringWDate(JSON.parse(text)));
}

export function searchParamsBuilder<T extends object>(request: T) {
  const data = replaceDateWString(request);
  return (new URLSearchParams(Object.entries(data as object))).toString();
}

export async function fetchBackend(path: string, init: RequestInit = {}) {
  const headers = {
    "Authorization": `Bearer ${getToken()}`,
    "Content-Type": "application/json"
  };
  return fetch(`https://${getAppConstants().BACKEND_HOST}${path}`, {...init, headers: {...headers, ...init.headers}});
}

export function fetchBackendWParams<T extends object>(path: string, request: T, init?: RequestInit) {
  return fetchBackend(`${path}?${searchParamsBuilder(request)}`, init);
}

export async function fetchBackendWParamsShort<T extends object, R>(path: string, request: T, resSchema: z.Schema<R>): Promise<R> {
  const params = searchParamsBuilder(request);
  const response = await fetchBackend(`${path}?${params}`);
  return zodParse(response, resSchema);
}

export async function fetchBackendWBodyShort<T extends object, R>(path: string, method: HttpMethod, request: T, resSchema: z.Schema<R>): Promise<R | undefined> {
  const response = await fetchBackend(path, {body: JSON.stringify(replaceDateWString(request)), method});
  if (resSchema instanceof z.ZodUndefined)
    return undefined;
  return zodParse(response, resSchema);
}

export function fetchBackendCurry<R>(url: string, resSchema: z.Schema<R>) {
  return async (): Promise<R> => {
    const response = await fetchBackend(url);
    if (response.status === 401) {
      window.location.href = '#/login';
      throw new Error();
    }
    return zodParse(response, resSchema);
  }
}

// Custom hooks
export function useMutationShort<Req extends object, Res>(path: string, method: HttpMethod, resSchema: z.Schema<Res>, key: string) {
  return useMutation({
    mutationKey: [key],
    mutationFn: async (request: Req) => fetchBackendWBodyShort<Req, Res>(path, method, request, resSchema)
  }).mutateAsync;
}

export function useQueryWParamsShort<Req extends object, Res>(path: string, data: {body: Req, resSchema: z.Schema<Res>, key: any, enabled: boolean}) {
  const query = useQuery({
    enabled: data.enabled,
    queryKey: data.key,
    queryFn: async function(): Promise<Res> {
      return fetchBackendWParamsShort(path, data.body, data.resSchema);
    }
  });
  return query;
}


// Curry functions
// export function fetchBackendCurry<R>(url: string, resSchema: z.Schema<R>) {
//   return async (): Promise<R> => {
//     const response = await fetchBackend(url);
//     return zodParse(response, resSchema);
//   }
// }

// export function fetchBackendWBodyCurry<T extends object, R>(url: string, method: HttpMethod, request: T, resSchema: z.Schema<R>) {
//   return async (): Promise<R> => {
//     const response = await fetchBackend(url, {body: JSON.stringify(request), method});
//     return zodParse(response, resSchema);
//   }
// }

// export function fetchBackendWParamsCurry<T extends object, R>(url: string, request: T, resSchema: z.Schema<R>) {
//   return async (): Promise<R> => {
//     const response = await fetchBackendWParams(url, request);
//     return zodParse(response, resSchema);
//   }
// }
