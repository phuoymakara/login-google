'use client'

import { LoginRequest } from "@/server/api"


export function LoginPage(){
  
  const handleSubmit = async (e:any) =>{
    const {user} = await LoginRequest(e);
    console.log('Hello',user)
  }
  return(
    <>
      <div className="flex justify-center">
        <form action={handleSubmit} className="p-3 w-[500px] mt-10 bg-gray-700 rounded-lg" >
          <div className="flex my-12">
            <input type="text" name="username" className="w-full rounded-md p-2 outline-none text-blue-900" placeholder="username..." id="" />
          </div>
          <div className="flex my-12">
            <input type="password" name="password" className="w-full rounded-md p-2 outline-none text-blue-900" placeholder="password..." id="" />
          </div>
          <div className="flex justify-center w-full my-4">
            <button type="submit" className="bg-red-300 rounded-md text-white px-3 py-1">Login</button>
          </div>
        </form>
      </div>
    </>
  )
}