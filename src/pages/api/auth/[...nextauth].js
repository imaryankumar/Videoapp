import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "0a7f32adf212115ba53f",
      clientSecret: "28417fb5333090317a9b0c3bafd25a6122d25921",
    }),
    GoogleProvider({
      clientId:
        "1023874642916-ecma2ocr2mlicean6sj0fp7pb3kiacqf.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};
export default NextAuth(authOptions);
