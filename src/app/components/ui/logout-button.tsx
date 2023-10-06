"use client"

import { signOut } from "next-auth/react";


const LogoutButton = () => {
  return (  
    <button onClick={()=>signOut()}className="btn btn-primary">Logout</button>
  );
}
 
export default LogoutButton;