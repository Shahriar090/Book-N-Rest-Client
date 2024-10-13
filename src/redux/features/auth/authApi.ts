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
    logout: builder.mutation({
      query: (id) => ({
        url: `/user/logout-user/${id}`,
        method: "POST",
      }),
    }),
    updateUser: builder.mutation({
      query: ({ userId, userInfos }) => ({
        url: `/user/update-user/${userId}`,
        method: "PATCH",
        body: userInfos,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useUpdateUserMutation,
} = authApi;
