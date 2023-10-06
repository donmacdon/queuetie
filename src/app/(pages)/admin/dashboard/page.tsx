"use client"

import { redirect } from "next/navigation"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react";

export default function DashboardPage() {
  const {data: session, status } = useSession()

  if(!session){
    redirect("/admin")
  }
  console.log(session)
  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <button onClick={()=>signOut()}className="btn btn-primary">Logout</button>
    </>
  )
}
