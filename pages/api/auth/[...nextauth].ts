import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async redirect({ url }) {
      if (url.includes("/login")) {
        return "/";
      }
      if (!url.includes("/")) {
        return "/login";
      }
      return url;
    },
  },
};

export default NextAuth(authOptions);
