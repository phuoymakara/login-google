import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next"
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { ReactNode } from "react"


type SignInProps = {
  providers ? : Record<string, any> | null
}

export default function SignIn() {
 
  return (
    <>
      <h1>Hi</h1>
    </>
  )
}