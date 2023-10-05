import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "jsmith" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {

        if(!credentials){
          return null
        };
        
        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username,
          }
        })

        if(!user){
          return null;
        }

        const passwordsMatch = await bcrypt.compare(credentials.password, user.password);

        if(!passwordsMatch){
          return null;
        }

        return user;

      },
    })
  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST }