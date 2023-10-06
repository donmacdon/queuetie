import { NextAuthProvider } from "@/app/providers/next-auth-provider";

type Props = {
  children: React.ReactNode;
}


const AdminLayout = ({
    children,

}:Props) => {
    return ( 
      <NextAuthProvider>
        {children}
      </NextAuthProvider>
     );
}
 
export default AdminLayout;