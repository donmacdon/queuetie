"use client"

import { useEffect, useState } from "react";
import { Breadcrumbs } from "./breadcrumbs";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export const NavigationBar = () => {
  const [visible, setVisible] = useState(true)
  
  const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if(currentScrollPos > 80){
          setVisible(false)
      }else{
          setVisible(true)
      }

  }

  useEffect( () => {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll)
  })


  return (  
    <>
      {/* improve usability  */}
      <NavigationMenu.Root className={`bg-white overflow-hidden shadow-md sticky pl-5 h-12 md:h-[60px] items-center border-b transition-all duration-300 border-zinc-400  z-[99999] flex top-0 ${visible ? 'opacity-100 ' : 'opacity-0'}`}> 
        <Breadcrumbs />
      </NavigationMenu.Root>
    </>
  );
}
 
