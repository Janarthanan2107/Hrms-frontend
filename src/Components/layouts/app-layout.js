'use client';

import { SidebarProvider, SidebarInset } from '../ui/sidebar';
import { SiteHeader } from './site-header.js';
import { SiteSidebar } from './site-sidebar.js';
import { useNavigation } from '../../hooks/use-navigation.js';
import { Outlet } from 'react-router-dom';  // import Outlet

export function AppLayout({ userRole, handleLogout }) {
  const { navItems } = useNavigation(userRole);

  return (
    <SidebarProvider>
      <SiteSidebar menuItems={navItems} />
      <SidebarInset>
        <SiteHeader handleLogout={handleLogout} />
        <main className="flex-1 p-4 md:p-5 lg:p-5">
          {/* Render nested routes */}
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
