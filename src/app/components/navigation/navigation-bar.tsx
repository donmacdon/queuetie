"use client"

import { Breadcrumbs } from "./breadcrumbs";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export const NavigationBar = () => {
  

  return (  
    <>
      <NavigationMenu.Root className="pl-5 h-12 md:h-[60px] items-center flex border-b border-zinc-400">
        <Breadcrumbs />
      </NavigationMenu.Root>
    </>
  );
}
 
