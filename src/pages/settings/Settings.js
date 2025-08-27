import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
    Building,
    Users,
    CreditCard,
    Calendar,
    Workflow,
    Shield,
    Plug,
    Settings,
    Monitor,
    Menu,
    X,
} from "lucide-react";
import { Button } from "../../Components/ui/button";

const tabs = [
    { name: "General", icon: Settings, route: "/settings/general", roles: ["employee", "admin", "superadmin"] },
    { name: "Security & Access", icon: Shield, route: "/settings/security", roles: ["employee", "admin", "superadmin"] },
    { name: "Appearance", icon: Monitor, route: "/settings/appearance", roles: ["employee", "admin", "superadmin"] },
    { name: "Organization", icon: Building, route: "/settings/organization", roles: ["admin", "superadmin"] },
    { name: "Employees", icon: Users, route: "/settings/employees", roles: ["admin", "superadmin"] },
    { name: "Payroll & Compliance", icon: CreditCard, route: "/settings/payroll", roles: ["admin", "superadmin"] },
    { name: "Leave & Attendance", icon: Calendar, route: "/settings/leave-attendance", roles: ["admin", "superadmin"] },
    { name: "Approval Workflow", icon: Workflow, route: "/settings/workflow", roles: ["admin", "superadmin"] },
    { name: "Integrations", icon: Plug, route: "/settings/integrations", roles: ["superadmin"] },
    { name: "Configuration", icon: Settings, route: "/settings/configuration", roles: ["superadmin"] },
];

const SettingsLayout = ({ userRolePermission }) => {
    const userRole = userRolePermission; // replace with auth like employee # admin # superadmin
    const visibleTabs = tabs.filter((tab) => tab.roles.includes(userRole));
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen gap-3">
            {/* Mobile Hamburger (only show when sidebar is closed) */}
            {!sidebarOpen && (
                <Button
                    className="fixed top-2 left-14 md:hidden z-10 p-2 h-10 w-10 rounded-lg transition-all ease-in-out delay-300"
                    onClick={() => setSidebarOpen(true)}
                >
                    <Menu size={20} />
                </Button>
            )}


            {/* Sidebar */}
            <aside
                className={`fixed z-40 md:z-0 md:static top-0 left-0 h-full w-64 rounded-md bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 transform transition-transform duration-300 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                {/* Close button (mobile only) */}
                <div className="flex justify-between items-center mb-4 md:hidden">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        Settings
                    </h2>
                    <button onClick={() => setSidebarOpen(false)}>
                        <X size={20} className="text-gray-600 dark:text-gray-300" />
                    </button>
                </div>

                <h2 className="hidden md:block text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Settings
                </h2>

                <nav className="flex flex-col gap-2">
                    {visibleTabs.map((tab) => (
                        <NavLink
                            key={tab.route}
                            to={tab.route}
                            onClick={() => setSidebarOpen(false)} // auto close on mobile
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive
                                    ? "bg-blue-100 text-blue-600 font-medium dark:bg-blue-900 dark:text-blue-300"
                                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                                }`
                            }
                        >
                            <tab.icon size={18} />
                            {tab.name}
                        </NavLink>
                    ))}
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-6 overflow-y-auto text-gray-900 dark:text-gray-100 dark:bg-gray-900 bg-gray-50 rounded-md">
                <Outlet />
            </main>
        </div>
    );
};

export default SettingsLayout;
