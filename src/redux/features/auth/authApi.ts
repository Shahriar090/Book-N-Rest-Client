import baseApi from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register-user",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/user/login-user",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
