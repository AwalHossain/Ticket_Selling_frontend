import { baseApi } from "../baseQuery";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (loginData) => {
                console.log("loginData:", loginData); // Add this line to log the loginData
                return {
                    url: "/user/login",
                    method: "POST",
                    data: loginData,
                };
            },
            invalidatesTags: ['user'],
        }),

    }),
});

export const { useUserLoginMutation } = authApi;