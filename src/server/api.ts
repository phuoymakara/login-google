'use server'
import {cookies} from "next/headers"

export const LoginRequest = async (e:any) =>{
  const res = await fetch("https://dummyjson.com/auth/login",{
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({
        username: e?.get("username"),
        password: e?.get("password")
      })
    }).catch((error:any)=> console.log(error))

  if(res?.status===200){
    const user = await res.json()
    const cookiesStore = cookies()
    //console.log(user?.token)
    cookiesStore.set({
      name:"token",
      value:user.token,
      httpOnly:true
    })
    
    return {
      user : user
    }
  }
  return {
    user:null
  }
}