import { api } from "./index";

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    uploadPost: build.mutation({
      query: (body) => ({
        url: "/api/post",
        method: "POST",
        body,
      }),
      invalidatesTags: [],
    }),
    getUserPosts: build.query({
      query: (username) => ({
        url: `/api/post/${username}`,
      }),
      providesTags: ["Product", "User"],
    }),
  }),
});

export const { useUploadPostMutation, useGetUserPostsQuery } = postApi;
