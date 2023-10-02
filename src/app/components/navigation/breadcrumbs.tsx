"use client"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const Breadcrumbs = () => {
  

  return (  
    <NavigationMenu.List className="flex gap-2 items-center">
      <NavigationMenu.Item>
        <Link href="#" className="hover:link-hover">Breadcrumb-1</Link>
      </NavigationMenu.Item>
      <ChevronRight className="h-3 w-3" />
      <NavigationMenu.Item>
        <Link href="#" className="hover:link-hover">
          Breadcrumb-2
        </Link>
      </NavigationMenu.Item>
    </NavigationMenu.List>  
  );
}
 
