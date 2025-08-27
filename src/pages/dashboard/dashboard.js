import React from "react";
import {
    Users, Calendar, DollarSign, Clock, FileText,
    Megaphone, Briefcase, Building2, AlertCircle, Gift
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const Dashboard = () => {
    const stats = [
        { title: "Employees", value: 120, icon: <Users className="w-6 h-6 text-blue-600" /> },
        { title: "On Leave", value: 8, icon: <Calendar className="w-6 h-6 text-emerald-600" /> },
        { title: "Pending Attendance", value: 5, icon: <Clock className="w-6 h-6 text-amber-600" /> },
        { title: "Payroll", value: "₹12.5L", icon: <DollarSign className="w-6 h-6 text-indigo-600" /> },
    ];

    const quickLinks = [
        { title: "Employees", icon: <Users className="w-4 h-4" /> },
        { title: "Attendance", icon: <Clock className="w-4 h-4" /> },
        { title: "Leave", icon: <Calendar className="w-4 h-4" /> },
        { title: "Payroll", icon: <DollarSign className="w-4 h-4" /> },
        { title: "Departments", icon: <Building2 className="w-4 h-4" /> },
        { title: "Jobs", icon: <Briefcase className="w-4 h-4" /> },
        { title: "Documents", icon: <FileText className="w-4 h-4" /> },
        { title: "Announcements", icon: <Megaphone className="w-4 h-4" /> },
    ];

    const announcements = [
        { id: 1, title: "Holiday on Sep 1st", date: "Aug 25, 2025" },
        { id: 2, title: "Salary Revision Notice", date: "Aug 20, 2025" },
        { id: 3, title: "Team Outing Scheduled", date: "Aug 15, 2025" },
    ];

    const approvals = [
        { id: 1, task: "Leave request from John D.", type: "Leave" },
        { id: 2, task: "Timesheet approval - Marketing", type: "Timesheet" },
        { id: 3, task: "New hire document verification", type: "Documents" },
        { id: 4, task: "Expense claim - Sales team", type: "Expense" },
        { id: 5, task: "Overtime approval - Production", type: "Overtime" },
        { id: 6, task: "Training request approval", type: "Training" },
    ];

    const events = [
        { id: 1, name: "Shalini Sharma - Birthday 🎂", date: "Aug 28, 2025" },
        { id: 2, name: "Rajesh Kumar - Work Anniversary 🎉", date: "Sep 1, 2025" },
        { id: 3, name: "Ganesh Chaturthi Holiday", date: "Sep 5, 2025" },
    ];

    const attendanceData = [
        { day: "Mon", present: 100, absent: 20 },
        { day: "Tue", present: 110, absent: 10 },
        { day: "Wed", present: 95, absent: 25 },
        { day: "Thu", present: 105, absent: 15 },
        { day: "Fri", present: 112, absent: 8 },
    ];

    const deptData = [
        { name: "Engineering", value: 50 },
        { name: "HR", value: 20 },
        { name: "Finance", value: 15 },
        { name: "Sales", value: 25 },
        { name: "Support", value: 10 },
    ];

    const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"];

    return (
        <div className="p-5 bg-gray-50 dark:bg-gray-900 min-h-screen rounded-md">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Good morning! Teena
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-5">
                "Coming together is a beginning, staying together is progress, and working together is success."
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
                {stats.map((item, idx) => (
                    <div
                        key={idx}
                        className="relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 
                 p-5 rounded-xl border dark:border-gray-700 shadow-sm hover:shadow-md transition"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-500 dark:text-gray-400">{item.title}</span>
                            {item.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{item.value}</h2>
                        <p className="text-xs text-emerald-600">↑ 12% from last month</p>

                        {/* Sparkline placeholder */}
                        <div className="absolute bottom-2 right-2 opacity-30">
                            📈
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border shadow-sm lg:col-span-2">
                    <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-3 uppercase">Attendance Overview</h2>
                    <ResponsiveContainer width="100%" height={220}>
                        <BarChart data={attendanceData}>
                            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip />
                            <Bar dataKey="present" fill="#3b82f6" radius={[4, 4, 0, 0]} /> {/* blue */}
                            <Bar dataKey="absent" fill="#ef4444" radius={[4, 4, 0, 0]} /> {/* red */}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border shadow-sm">
                    <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-3 uppercase">Department Distribution</h2>
                    <ResponsiveContainer width="100%" height={220}>
                        <PieChart>
                            <Pie
                                data={deptData}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={40}
                                outerRadius={80}
                                paddingAngle={3}
                                labelLine={true}
                                // label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {deptData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" height={38} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Quick Links + Announcements + Approvals */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border shadow-sm">
                    <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-3 uppercase">Quick Links</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {quickLinks.map((link, idx) => (
                            <button
                                key={idx}
                                className="
                                flex flex-col items-center justify-center gap-2
                                p-3 rounded-lg border shadow-sm
                                border-gray-200 dark:border-gray-700
                                hover:bg-blue-50 dark:hover:bg-gray-600
                                transition-colors duration-200
                                text-gray-800 dark:text-gray-100
                            "
                            >
                                <span className="w-6 h-6">{link.icon}</span>
                                <span className="text-xs font-medium">{link.title}</span>
                            </button>
                        ))}
                    </div>

                </div>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border shadow-sm">
                    <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-3 uppercase">Announcements</h2>
                    <ul className="space-y-3 overflow-y-auto max-h-72 pr-2">
                        {announcements.map((a) => (
                            <li
                                key={a.id}
                                className="
                                    p-2 border rounded-md 
                                    hover:bg-gray-50 dark:hover:bg-gray-600 
                                    bg-white dark:bg-gray-800 
                                    border-gray-200 dark:border-gray-700
                                "
                            >
                                <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                                    {a.title}
                                </p>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {a.date}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border shadow-sm">
                    <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-3 uppercase">Pending Approvals</h2>
                    <ul className="space-y-3 overflow-y-auto max-h-72 pr-2">
                        {approvals.map((task) => (
                            <li
                                key={task.id}
                                className="flex items-center gap-2 p-2 border rounded-md 
                                hover:bg-gray-50 dark:hover:bg-gray-600 
                                border-gray-200 dark:border-gray-700"
                            >
                                <AlertCircle className="text-yellow-500 w-4 h-4" />
                                <div>
                                    <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                                        {task.task}
                                    </p>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {task.type}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

            {/* Events */}
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border shadow-sm">
                <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-100 mb-3 uppercase">
                    Upcoming Events
                </h2>

                {events.length === 0 ? (
                    <p className="text-gray-500 text-sm">No upcoming events 🎉</p>
                ) : (
                    <div className="max-h-60 overflow-y-auto">
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {events.map((e) => (
                                <li
                                    key={e.id}
                                    className="cursor-pointer p-3 border border-gray-200 dark:border-gray-700 rounded-md flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                                >
                                    <Gift className="text-pink-500 w-4 h-4" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{e.name}</p>
                                        <span className="text-xs text-gray-500">{e.date}</span>
                                        {e.isToday && (
                                            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                                                Today
                                            </span>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
