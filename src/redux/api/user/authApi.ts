import { baseApi } from "../baseQuery";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (loginData) => {
                return {
                    url: "/user/login",
                    method: "POST",
                    data: loginData,
                };
            },
            invalidatesTags: ['user'],
        }),
        userRegister: builder.mutation({
            query: (data) => {
                return {
                    url: "/user/signup",
                    method: "POST",
                    data: data,
                };
            },
            invalidatesTags: ['user']
        })
    }),
});

export const { useUserLoginMutation, useUserRegisterMutation } = authApi;