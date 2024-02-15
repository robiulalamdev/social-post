import { api } from "../../api/apiSlice";

const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    newPost: builder.mutation({
      query: ({ data, message }) => ({
        // url: `https://graph.facebook.com/v19.0/234690443061270/feed?message=${message}&access_token=EAAK97AqeosABO53dwvrkGZBqZA4n7nFdRa17XUE11NT2svwZA0ei8KwZCnZBRLv1McKAWYKZCUZBUmnQXU9MWnZAcUj3q1TdnKZAzJ4e6kyAY3rto4sX3XupX77LuzbU2OZBMDJYZByDTRlk4ZCWMYtdjjj3bEvp1nvUDwn0l4icZANC2pg0SwzyUNyXgzulQWFnEBTIXgA0fBuZAQjIzjxIyTj4F8ajvstnosOLSePn889hgZD`,
        url: `https://graph.facebook.com/v19.0/234690443061270/photos`,
        method: "POST",
        body: data,
      }),
    }),

    // getHome: builder.query({
    //   query: () => `/landing`,
    //   providesTags: ["landing"],
    // }),
  }),
});

export const { useNewPostMutation } = homeApi;
