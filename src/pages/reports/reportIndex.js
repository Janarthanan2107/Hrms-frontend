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
} from "lucide-react";
import { Input } from "../../Components/ui/input";
import { Button } from "../../Components/ui/button";
import { useSidebar } from "../../Components/ui/sidebar";

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
    const { isMobile } = useSidebar()

    const filteredReports = reports.filter(report =>
        report.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="px-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
                <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Reports
                </h1>

                {/* Search Bar */}
                <div className="relative flex-1 max-w-full sm:max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search reports..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-9 pr-3 h-9 w-full rounded-lg text-sm focus:ring-2 focus:ring-primary bg-white"
                    />
                </div>

                {/* View Toggle */}
                {!isMobile && (
                    <div className="flex items-center gap-2">
                        <Button
                            className={`p-2 rounded-md ${view === "card"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                                }`}
                            onClick={() => setView("card")}
                        >
                            <Grid className="w-5 h-5" />
                        </Button>
                        <Button
                            className={`p-2 rounded-md ${view === "list"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                                }`}
                            onClick={() => setView("list")}
                        >
                            <List className="w-5 h-5" />
                        </Button>
                        <Button
                            className={`p-2 rounded-md ${view === "table"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                                }`}
                            onClick={() => setView("table")}
                        >
                            <Table className="w-5 h-5" />
                        </Button>
                    </div>
                )}
            </div>

            {/* Reports Display */}
            {view === "card" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {filteredReports.map((report, idx) => {
                        const Icon = report.icon;
                        return (
                            <div
                                key={idx}
                                onClick={() => navigate(report.route)}
                                className="flex flex-col gap-2 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <p className="text-gray-800 text-sm dark:text-gray-100 font-medium">{report.title}</p>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{report.description}</p>
                            </div>
                        );
                    })}
                </div>
            )}

            {view === "list" && (
                <ul className="space-y-2">
                    {filteredReports.map((report, idx) => {
                        const Icon = report.icon;
                        return (
                            <li
                                key={idx}
                                onClick={() => navigate(report.route)}
                                className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md cursor-pointer"
                            >
                                <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                <div>
                                    <p className="text-gray-800 dark:text-gray-100 font-medium">{report.title}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{report.description}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}

            {view === "table" && (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-700 text-left text-gray-600 dark:text-gray-300 text-sm">
                                <th className="px-4 py-2">#</th>
                                <th className="px-4 py-2">Report</th>
                                <th className="px-4 py-2">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReports.map((report, idx) => {
                                const Icon = report.icon;
                                return (
                                    <tr
                                        key={idx}
                                        onClick={() => navigate(report.route)}
                                        className="border-b cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                                    >
                                        <td className="px-4 py-2">{idx + 1}</td>
                                        <td className="px-4 py-2 flex items-center gap-2">
                                            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                            {report.title}
                                        </td>
                                        <td className="px-4 py-2">{report.description}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ReportIndex;
