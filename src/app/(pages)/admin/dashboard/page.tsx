import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import LogoutButton from "@/app/components/ui/logout-button"


export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  if(!session){
    redirect("/admin")
  }
  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <LogoutButton />
    </>
  )
}
