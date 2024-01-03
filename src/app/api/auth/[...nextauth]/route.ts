import NextAuth from "next-auth/next";
import { authOptions } from "./options";
//import Google from "next-auth/providers/google";
//import { Provider } from "next-auth/providers/index"; 
//import { Provider } from "next-auth/providers/index";



const handle = NextAuth(authOptions);


export { handle as GET, handle as POST};