import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "0a7f32adf212115ba53f",
      clientSecret: "28417fb5333090317a9b0c3bafd25a6122d25921",
    }),
  ],
};
export default NextAuth(authOptions);
