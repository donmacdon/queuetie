"use client"

import { useEffect, useState } from "react";
import { Breadcrumbs } from "./breadcrumbs";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export const NavigationBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)
  
  const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if(currentScrollPos > prevScrollPos) {
          setVisible(false)
      }else{
          setVisible(true)
      }

      setPrevScrollPos(currentScrollPos)
  }

  useEffect( () => {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll)
  })


  return (  
    <>
      <NavigationMenu.Root className={`bg-white overflow-hidden shadow-md sticky pl-5 h-12 md:h-[60px] items-center border-b transition-all duration-300 border-zinc-400  flex top-0 ${visible ? 'opacity-100 z-[99999]' : 'opacity-0 -z-20'}`}> 
        <Breadcrumbs />
      </NavigationMenu.Root>
    </>
  );
}
 
