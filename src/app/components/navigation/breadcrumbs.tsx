"use client"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export const Breadcrumbs = () => {
  

  return (  
    <NavigationMenu.List className="flex gap-2 items-center">
      <NavigationMenu.Item>Test</NavigationMenu.Item>
      <NavigationMenu.Item>Test 2</NavigationMenu.Item>
    </NavigationMenu.List>  
  );
}
 
