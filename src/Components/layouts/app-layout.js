'use client';

import { SidebarProvider, SidebarInset } from '../ui/sidebar';
import { SiteHeader } from './site-header.js';
import { SiteSidebar } from './site-sidebar.js';
import { useNavigation } from '../../hooks/use-navigation.js';
import { Outlet } from 'react-router-dom';  // import Outlet

export function AppLayout({ userRole }) {
  const { navItems } = useNavigation(userRole);

  return (
    <SidebarProvider>
      <SiteSidebar menuItems={navItems} />
      <SidebarInset>
        <SiteHeader />
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {/* Render nested routes */}
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
