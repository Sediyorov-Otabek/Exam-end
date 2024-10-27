import { api } from "./index";

export const fileApi = api.injectEndpoints({
  endpoints: (build) => ({
    Upload: build.mutation({
      query: (body) => ({
        url: "/api/upload/files",
        method: "POST",
        body,
      }),
      invalidatesTags: [],
    }),
  }),
});

export const { useUploadMutation } = fileApi;
