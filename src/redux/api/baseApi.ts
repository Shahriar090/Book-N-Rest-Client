import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { userLogin, userLogout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:7000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});

// custom base query for refresh token
const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    console.log("Access Token Expired, Attempting To Refresh Token");
    const res = await fetch(
      "http://localhost:7000/api/v1/user/refresh-access-token",
      {
        method: "POST",
        credentials: "include",
      }
    );
    if (res?.ok) {
      const data = await res.json();
      console.log(data);
      const newAccessToken = data?.data?.accessToken;

      if (newAccessToken) {
        const user = (api.getState() as RootState).auth.user;
        api.dispatch(userLogin({ user, accessToken: newAccessToken }));
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(userLogout());
        console.log("Failed To Refresh Access Token. Logging Out");
      }
    } else {
      api.dispatch(userLogout());
      console.log("Refresh Token Is Expired Or Invalid. Logging Out");
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

export default baseApi;
