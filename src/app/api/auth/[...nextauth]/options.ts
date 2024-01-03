import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { pages } from "next/dist/build/templates/app-page";
import { signIn, signOut } from "next-auth/react";
import { NextAuthOptions } from "next-auth";
// import User from "@/app/(models)/User";
// import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    // GitHubProvider({
    //   profile(profile) {
    //     console.log("Profile GitHub: ", profile);

    //     let userRole = "GitHub User";
    //     if (profile?.email == "jake@claritycoders.com") {
    //       userRole = "admin";
    //     }

    //     return {
    //       ...profile,
    //       role: userRole,
    //     };
    //   },
    //   clientId: String(process.env.GITHUB_ID),
    //   clientSecret: String(process.env.GITHUB_Secret),
    // }),
   
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "email...",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "password...",
        },
      },
      async authorize(credentials:{email:string, password:string}|any) {
        try {
          const user = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: credentials?.email,
              password: credentials?.password,
              // expiresInMins: 60, // optional
            })
          })
        if(user.ok){
          //console.log(await user.json())
          return await user.json();
        }

          // if (credentials?.email==="xiexieni@gmail.com" && credentials.password==="123456") {
          //   // console.log("User Exists");
          //   // const match = await bcrypt.compare(
          //   //   credentials.password,
          //   //   foundUser.password
          //   // );

          //   // if (match) {
          //   //   console.log("Good Pass");
          //   //   delete foundUser.password;

          //   //   foundUser["role"] = "Unverified Email";
          //   //   return foundUser;
          //   // }
          //   return credentials
          // }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
    GoogleProvider({
      // profile(profile) {
      //   console.log("Profile Google: ", profile);

      //   let userRole = "Google User";
      //   return {
      //     ...profile,
      //     id: profile.sub,
      //     role: userRole,
      //   };
      // },
      clientId: String(process.env.GOOGLE_ID),
      clientSecret: String(process.env.GOOGLE_Secret),
    }),
  ],
  callbacks: {
    async jwt({ token, user }:any) {
      if(user){
        token.access_token = user?.token
      }
      return token;
    },
    async session({ session, token }:any) {
      if (session?.user) session.access_token = token.access_token;
      //console.log("token:",session)
      return session?.access_token;
    },
  },
  pages:{
    // signIn:"/signin",
    // signOut:"/auth/signout"
  }
};