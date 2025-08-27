import {
  LayoutDashboard,
  Users,
  UserCog,
  UserCircle,
  Building2,
  ShieldCheck,
  Megaphone,
  FileText,
  FileArchive,
  FileSpreadsheet,
  FileBox,
  IdCard,
  Layers3,
  CalendarDays,
  CalendarClock,
  Settings,
  Lock,
  Briefcase,
  UserCheck,
  UserPlus,
  ClipboardList,
  Wallet,
  DollarSign,
  Receipt,
  HandCoins,
  PlaneTakeoff,
  UserX,
  Inbox,
  FileSignature,
  GraduationCap,
  Calculator,
  Clock,
  Clipboard,
  Package,
  Boxes,
  Monitor,
  HardDrive,
  Server,
  BarChart3,
  LifeBuoy,
} from "lucide-react";

export const useNavigation = (userRole) => {
  const navItems = [
    // Dashboard changes based on role
    userRole === "employee"
      ? { label: "Home", href: "/home", icon: LayoutDashboard }
      : { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },

    // Admin Panel (only for admin roles)
    (userRole === "admin" || userRole === "superadmin") && {
      label: "Admin",
      href: "/admin",
      icon: UserCog,
      subItems: [
        { label: "Organization", href: "/admin/companyprofile", icon: Building2 },
        { label: "User Group", href: "/admin/usergroup", icon: Users },
        { label: "User Permission", href: "/admin/userpermission", icon: ShieldCheck },
        { label: "Notice Board", href: "/admin/noticeboard", icon: Megaphone },
        { label: "Password Policy", href: "/admin/passwordpolicy", icon: Lock },
        { label: "Organization Documents", href: "/admin/organizationdocuments", icon: FileArchive },
      ],
    },

    // Master (Admin/Superadmin only)
    (userRole === "admin" || userRole === "superadmin") && {
      label: "Master",
      href: "/master",
      icon: Layers3,
      subItems: [
        { label: "Employee Type", href: "/master/employeetype", icon: IdCard },
        { label: "Department", href: "/master/department", icon: Building2 },
        { label: "Designation", href: "/master/designation", icon: Briefcase },
        { label: "Leave and Remote Setup", href: "/master/leavetype", icon: CalendarClock },
        { label: "Employee Group", href: "/master/employeegroup", icon: Users },
        { label: "Reimbursement Type", href: "/master/reimbursementstype", icon: Receipt },
        { label: "Asset Type", href: "/master/assettype", icon: Package },
        { label: "Asset Category", href: "/master/assetcategory", icon: Boxes },
        { label: "Asset Sub Category", href: "/master/assetcsubategory", icon: FileBox },
        { label: "Letter Type", href: "/master/lettertype", icon: FileText },
        { label: "Letter Template", href: "/master/lettertemplate", icon: FileSignature },
      ],
    },

    // Configuration (Admin/Superadmin only)
    (userRole === "admin" || userRole === "superadmin") && {
      label: "Configuration",
      href: "/configuration",
      icon: Settings,
      subItems: [
        { label: "Shift Configuration", href: "/configuration/shiftconfiguration", icon: CalendarClock },
        { label: "Holiday Setup", href: "/configuration/holiday", icon: CalendarDays },
        { label: "Weekoff", href: "/configuration/weekoff", icon: Clipboard },
        { label: "Payroll Period", href: "/configuration/payrollperiod", icon: CalendarDays },
        { label: "Subordinate Setup", href: "/configuration/subordinate", icon: UserCheck },
        { label: "Custom Configuration", href: "/configuration/customconfiguration", icon: Settings },
        { label: "Salary Component", href: "/configuration/salarycomponent", icon: Wallet },
        { label: "Salary Template", href: "/configuration/salarytemplate", icon: FileSpreadsheet },
      ],
    },

    // Employee Section
    {
      label: "Employee",
      href: "/employee",
      icon: UserCircle,
      subItems: [
        { label: "Employees", href: "/employee/employee", icon: Users },
        { label: "Leave Request", href: "/employee/leaverequest", icon: PlaneTakeoff },
        { label: "Reimbursement Request", href: "/employee/reimbursementrequest", icon: Receipt },
        { label: "Advance Salary Request", href: "/employee/advancerequest", icon: HandCoins },
        userRole === "superadmin" && { label: "Subordinates", href: "/employee/subordinate", icon: UserCheck },
        { label: "Resignation", href: "/employee/resignationrequest", icon: UserX },
        { label: "Approval Inbox", href: "/employee/approvalinbox", icon: Inbox },
        { label: "TDS Declaration Form", href: "/employee/tdsdeclaration", icon: FileText },
        userRole !== "employee" && { label: "Employee Onboarding", href: "/employee/employeeonboarding", icon: UserPlus },
        userRole === "admin" && { label: "Intern Onboarding", href: "/employee/internonboarding", icon: GraduationCap },
      ].filter(Boolean), // clean nulls if condition fails
    },

    // Payroll (Admin/Superadmin only)
    (userRole === "admin" || userRole === "superadmin") && {
      label: "Payroll",
      href: "/payroll",
      icon: DollarSign,
      subItems: [
        { label: "Run Payroll", href: "/payroll/runpayroll", icon: ClipboardList },
        { label: "Payroll", href: "/payroll/payroll", icon: FileText },
        { label: "Payslip", href: "/payroll/payslips", icon: FileSpreadsheet },
        { label: "Salary Calculator", href: "/payroll/salarycalcualtor", icon: Calculator },
      ],
    },

    // Attendance (All users, but different)
    {
      label: "Attendance",
      href: "/attendance",
      icon: Clock,
      subItems:
        userRole === "employee"
          ? [
              { label: "My Attendance", href: "/attendance/myattendance", icon: CalendarDays },
              { label: "My Attendance Log", href: "/attendance/mylog", icon: ClipboardList },
            ]
          : [
              { label: "Day Attendance", href: "/attendance/dayattendance", icon: CalendarDays },
              { label: "Attendance Log", href: "/attendance/attendancelog", icon: ClipboardList },
            ],
    },

    // Asset Management (Admin/Superadmin only)
    (userRole === "admin" || userRole === "superadmin") && {
      label: "Asset Management",
      href: "/assetmanagement",
      icon: Monitor,
      subItems: [
        { label: "Asset Registry", href: "/assetmanagement/assetregistry", icon: HardDrive },
        { label: "Employee Asset Audit", href: "/assetmanagement/assetemployeeaudit", icon: Server },
      ],
    },

    // Roster (everyone)
    { label: "Roster", href: "/roster", icon: CalendarClock },

    // Reports (all, but richer for admin)
    {
      label: "Reports",
      href: "/reports",
      icon: BarChart3,
      isSecondary: true,
    },

    // Settings (admin only)
    (userRole === "admin" || userRole === "superadmin") && {
      label: "Settings",
      href: "/settings",
      icon: Settings,
      isSecondary: true,
    },

    // Help (everyone)
    { label: "Help", href: "/help", icon: LifeBuoy, isSecondary: true },
  ].filter(Boolean); // remove false entries

  return { navItems };
};
