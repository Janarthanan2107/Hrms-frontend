import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    CalendarDays,
    CalendarClock,
    DollarSign,
    FileSpreadsheet,
    FileText,
    ClipboardList,
    FileArchive,
    File,
    Users,
    UserCheck,
    Clock,
    ListChecks,
    List,
    Grid,
    Table,
    Search,
    ChevronRight,
} from "lucide-react";
import { Input } from "../../components/ui/input"; 
import { Button } from "../../components/ui/button"; 
import { useSidebar } from "../../components/ui/sidebar"; 
import { cn } from "../../utils/tailwindUtils";

const reports = [
    { title: "Day-wise Attendance", icon: CalendarClock, description: "View daily attendance of employees.", route: "/reports/daywise-attendance" },
    { title: "Month Wise Attendance", icon: CalendarDays, description: "Monthly attendance summary of all employees.", route: "/reports/monthwise-attendance" },
    { title: "Salary Process Bank", icon: DollarSign, description: "Details of salary processing and bank transfers.", route: "/reports/salary-process-bank" },
    { title: "Employee Salary Summary", icon: FileSpreadsheet, description: "Summary of employee salaries for the period.", route: "/reports/employee-salary-summary" },
    { title: "Payroll Detailed Summary", icon: FileText, description: "Detailed payroll report with components.", route: "/reports/payroll-detailed-summary" },
    { title: "Employee ESI Statement", icon: FileArchive, description: "Employee ESI contributions and statements.", route: "/reports/employee-esi-statement" },
    { title: "Employee PF Statement", icon: ClipboardList, description: "Employee Provident Fund details.", route: "/reports/employee-pf-statement" },
    { title: "Muster Roll", icon: File, description: "Daily workforce attendance report.", route: "/reports/muster-roll" },
    { title: "Employee Credits & Debits", icon: Users, description: "Track employee credits and deductions.", route: "/reports/employee-credits-debits" },
    { title: "Attendance Correction", icon: Clock, description: "Manage and approve attendance corrections.", route: "/reports/attendance-correction" },
    { title: "Subordinates Report", icon: UserCheck, description: "Reports related to your subordinates.", route: "/reports/subordinates-report" },
    { title: "Roster Report", icon: ListChecks, description: "Employee roster schedule and shifts.", route: "/reports/roster-report" },
    { title: "Leave Permission Report", icon: FileText, description: "Track employee leave approvals.", route: "/reports/leave-permission-report" },
];

const ReportIndex = () => {
    const navigate = useNavigate();
    const [view, setView] = useState("card"); // card | list | table
    const [search, setSearch] = useState("");
    const { isMobile } = useSidebar();

    const filteredReports = reports.filter(report =>
        report.title.toLowerCase().includes(search.toLowerCase()) ||
        report.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-4 md:p-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">
                        Reports
                    </h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        Access all your HR and payroll reports in one place
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    {/* Search Bar */}
                    <div className="relative flex-1 max-w-full sm:max-w-xs">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search reports..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className={cn(
                                "pl-9 pr-3 h-10 w-full rounded-lg",
                                "bg-background border-border",
                                "placeholder:text-muted-foreground",
                                "focus-visible:ring-2 focus-visible:ring-ring"
                            )}
                        />
                    </div>

                    {/* View Toggle */}
                    {!isMobile && (
                        <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
                            <Button
                                variant="ghost"
                                size="sm"
                                className={cn(
                                    "p-2 rounded-md",
                                    view === "card" 
                                        ? "bg-background text-foreground shadow-sm" 
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                                onClick={() => setView("card")}
                            >
                                <Grid className="w-4 h-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                className={cn(
                                    "p-2 rounded-md",
                                    view === "list" 
                                        ? "bg-background text-foreground shadow-sm" 
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                                onClick={() => setView("list")}
                            >
                                <List className="w-4 h-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                className={cn(
                                    "p-2 rounded-md",
                                    view === "table" 
                                        ? "bg-background text-foreground shadow-sm" 
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                                onClick={() => setView("table")}
                            >
                                <Table className="w-4 h-4" />
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            {/* Reports Count */}
            <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                    {filteredReports.length} {filteredReports.length === 1 ? 'report' : 'reports'} found
                </p>
            </div>

            {/* Reports Display */}
            {view === "card" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredReports.map((report, idx) => {
                        const Icon = report.icon;
                        return (
                            <div
                                key={idx}
                                onClick={() => navigate(report.route)}
                                className={cn(
                                    "group flex flex-col gap-3 p-5 rounded-xl border",
                                    "bg-card text-card-foreground",
                                    "hover:shadow-md hover:border-border/80",
                                    "cursor-pointer transition-all duration-200",
                                    "hover:scale-[1.02] transform-gpu"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        "p-2.5 rounded-lg",
                                        "bg-primary/10 text-primary",
                                        "group-hover:bg-primary/20 transition-colors"
                                    )}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                                        {report.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {report.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}

            {view === "list" && (
                <div className="space-y-2">
                    {filteredReports.map((report, idx) => {
                        const Icon = report.icon;
                        return (
                            <div
                                key={idx}
                                onClick={() => navigate(report.route)}
                                className={cn(
                                    "group flex items-center gap-4 p-4 rounded-lg border",
                                    "bg-card text-card-foreground",
                                    "hover:shadow-sm hover:border-border/80",
                                    "cursor-pointer transition-all duration-200"
                                )}
                            >
                                <div className={cn(
                                    "p-2 rounded-md",
                                    "bg-primary/10 text-primary",
                                    "group-hover:bg-primary/20 transition-colors"
                                )}>
                                    <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors truncate">
                                        {report.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground truncate">
                                        {report.description}
                                    </p>
                                </div>
                                <div className={cn(
                                    "opacity-0 group-hover:opacity-100",
                                    "text-muted-foreground transition-opacity"
                                )}>
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {view === "table" && (
                <div className="overflow-x-auto rounded-lg border">
                    <table className="w-full bg-card text-card-foreground">
                        <thead className="bg-muted/50">
                            <tr className="text-left text-sm text-muted-foreground">
                                <th className="px-6 py-3 font-medium">#</th>
                                <th className="px-6 py-3 font-medium">Report</th>
                                <th className="px-6 py-3 font-medium">Description</th>
                                <th className="px-6 py-3 font-medium">Category</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {filteredReports.map((report, idx) => {
                                const Icon = report.icon;
                                return (
                                    <tr
                                        key={idx}
                                        onClick={() => navigate(report.route)}
                                        className={cn(
                                            "group cursor-pointer transition-colors",
                                            "hover:bg-muted/50"
                                        )}
                                    >
                                        <td className="px-6 py-4 text-sm text-muted-foreground">
                                            {idx + 1}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                                                    <Icon className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                                                    {report.title}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground">
                                            {report.description}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                                HR
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Empty State */}
            {filteredReports.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="p-4 rounded-full bg-muted mb-4">
                        <Search className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                        No reports found
                    </h3>
                    <p className="text-muted-foreground max-w-md">
                        No reports match your search criteria. Try different keywords or browse all reports.
                    </p>
                </div>
            )}
        </div>
    );
};

export default ReportIndex;
