import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { MyAuthOptions } from "./authTypes";
import prisma from "./db";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";

// export const authOptions = {
//   adapter: PrismaAdapter(prisma),
//   // Configure one or more authentication providers
//   providers: [
//     // ...add more providers here
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string
//     }),

//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
//     }),

//     EmailProvider({
//         server: {
//           host: process.env.EMAIL_SERVER_HOST,
//           port: process.env.EMAIL_SERVER_PORT,
//           auth: {
//             user: process.env.EMAIL_SERVER_USER,
//             pass: process.env.EMAIL_SERVER_PASSWORD
//           }
//         },
//         from: process.env.EMAIL_FROM
//       }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET
// } satisfies NextAuthOptions;


export const authOptions: MyAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),

    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT as string),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions;

