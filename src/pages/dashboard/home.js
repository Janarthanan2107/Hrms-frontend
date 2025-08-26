import React, { useState, useEffect } from "react";
import {
    Clock,
    Calendar,
    Gift,
    Users,
    Briefcase,
    Bell,
    CheckCircle,
    LogOut,
} from "lucide-react";

function AttendanceCard() {
  const [attendance, setAttendance] = useState({
    isPresent: false,
    clockIn: null,
    clockOut: null,
    totalHours: "0h 0m 0s",
  });

  const [elapsed, setElapsed] = useState("0h 0m 0s");

  // Helper: format time difference to hh:mm:ss
  const formatDiff = (ms) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const mins = Math.floor((ms / (1000 * 60)) % 60);
    const secs = Math.floor((ms / 1000) % 60);
    return `${hours}h ${mins}m ${secs}s`;
  };

  // Helper: format clock-in/out time to 12hr format
  const formatTime = (dateString) => {
    if (!dateString) return "--";
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    //   second: "2-digit",
      hour12: true,
    });
  };

  // Live timer
  useEffect(() => {
    let interval;
    if (attendance.isPresent && attendance.clockIn) {
      interval = setInterval(() => {
        const diff = Date.now() - new Date(attendance.clockIn).getTime();
        setElapsed(formatDiff(diff));
      }, 1000);
    } else {
      setElapsed(attendance.totalHours);
    }
    return () => clearInterval(interval);
  }, [attendance.isPresent, attendance.clockIn, attendance.totalHours]);

  // Clock In
  const handleClockIn = () => {
    const now = new Date();
    setAttendance({
      ...attendance,
      isPresent: true,
      clockIn: now.toISOString(),
      clockOut: null,
    });
  };

  // Clock Out
  const handleClockOut = () => {
    const now = new Date();
    const diff = now - new Date(attendance.clockIn).getTime();

    setAttendance({
      isPresent: false,
      clockIn: attendance.clockIn,
      clockOut: now.toISOString(),
      totalHours: formatDiff(diff),
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md border hover:shadow-lg transition">
      {/* Title */}
      <h2 className="text-xs font-semibold mb-2 uppercase text-gray-700 dark:text-gray-200 flex justify-between items-center">
        <span className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-600" />
          Attendance
        </span>
        <a href="#" className="text-blue-600 hover:underline text-xs">
          View
        </a>
      </h2>

      {/* Hours */}
      <p className="text-sm text-gray-500">Total Hours</p>
      <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100">
        {elapsed}
      </h3>

      {/* Clock In/Out Times */}
      <div className="mt-3 flex justify-between text-xs text-gray-600 dark:text-gray-300">
        <span>Clock In: {formatTime(attendance.clockIn)}</span>
        <span>Clock Out: {formatTime(attendance.clockOut)}</span>
      </div>

      {/* Action Button */}
      <div className="mt-4 flex justify-end">
        {!attendance.isPresent ? (
          <button
            onClick={handleClockIn}
            className="flex items-center gap-1 text-xs px-3 py-1.5 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
          >
            <CheckCircle className="w-3 h-3" /> Clock In
          </button>
        ) : (
          <button
            onClick={handleClockOut}
            className="flex items-center gap-1 text-xs px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
          >
            <LogOut className="w-3 h-3" /> Clock Out
          </button>
        )}
      </div>
    </div>
  );
}

const Home = () => {
    const today = "10th January 2025";

    const meetings = [
        // { id: 1, title: "UX Updates", time: "01:30 PM – 02:00 PM", members: 3 },
        // { id: 2, title: "NPI App Changes", time: "04:00 PM – 04:30 PM", members: 2 },
    ];
    const holidays = [
        { id: 1, date: "Sunday 26th Jan, 2025", name: "Independence Day" },
    ];
    const announcements = [
        {
            id: 1,
            author: "HR Team",
            title: "🎉 Welcome Aboard!",
            content: "We’re thrilled to welcome Neha Singh to the work family!",
            role: "Product Designer",
            posted: "25 mins ago",
        },
        {
            id: 2,
            author: "Amit Saxena",
            title: "Information Request",
            content: `Preparing sheet where I’ll need details:
- Resource Name : Demo
- Role : Admin/Developer
- TL Name : XYZ
- Current Project : ZBC
Please share info via mail ASAP.`,
            posted: "30 mins ago",
        },
    ];
    const birthdays = [
        { id: 1, name: "Priya Nayar", role: "Developer" },
        { id: 2, name: "Prakash Panday", role: "UI Developer" },
        { id: 3, name: "Rohit Mandan", role: "DevOps" },
    ];
    const anniversaries = [
        // { id: 1, name: "Asha Zubair", years: 2 },
        // { id: 2, name: "Mathew John", years: 5 },
    ];
    const onLeave = [
        // { id: 1, name: "Nitya Roop", role: "Visual Designer" },
        // { id: 2, name: "Manas Raj", role: "UI Designer" },
    ];

    const Placeholder = ({ icon: Icon, text }) => (
        <div className="flex flex-col items-center justify-center py-8 text-gray-400">
            <Icon className="w-10 h-10 mb-2" />
            <p className="text-sm">{text}</p>
        </div>
    );

    return (
        <div className="p-5 bg-gray-50 dark:bg-gray-900 min-h-screen space-y-6 rounded-md">
            {/* Greeting */}
            <div className="text-center md:text-left">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    Good Morning, Teena!
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Here’s your dashboard overview • {today}
                </p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* LEFT COLUMN */}
                <div className="space-y-5 lg:col-span-1">
                    {/* Attendance */}
                    <AttendanceCard />

                    {/* Meetings */}
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md border hover:shadow-lg transition">
                        <h2 className="text-xs font-semibold mb-3 uppercase text-gray-700 dark:text-gray-200 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-purple-600" /> Meetings Today
                        </h2>
                        {meetings.length > 0 ? (
                            <ul className="space-y-2">
                                {meetings.map((m) => (
                                    <li
                                        key={m.id}
                                        className="flex justify-between items-center border p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                                    >
                                        <div>
                                            <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                                                {m.title}
                                            </p>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                {m.time}
                                            </span>
                                        </div>
                                        <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded-md shadow">
                                            Join
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <Placeholder icon={Calendar} text="No upcoming meetings" />
                        )}
                    </div>

                    {/* Holidays */}
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md border hover:shadow-lg transition">
                        <h2 className="text-xs font-semibold mb-3 uppercase text-gray-700 dark:text-gray-200 flex items-center gap-2">
                            <Gift className="w-4 h-4 text-pink-600" /> Upcoming Holidays
                        </h2>
                        {holidays.length > 0 ? (
                            <ul className="text-sm text-gray-800 dark:text-gray-100">
                                {holidays.map((h) => (
                                    <li key={h.id} className="mb-1">
                                        <strong>{h.date}</strong> — {h.name}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <Placeholder icon={Gift} text="No upcoming holidays" />
                        )}
                    </div>
                </div>

                {/* MIDDLE COLUMN */}
                <div className="lg:col-span-2 space-y-5">
                    {/* Announcements */}
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md border hover:shadow-lg transition">
                        <h2 className="text-xs font-semibold mb-3 uppercase text-gray-700 dark:text-gray-200 flex items-center gap-2">
                            <Bell className="w-4 h-4 text-yellow-600" /> Announcements
                        </h2>
                        {announcements.length > 0 ? (
                            <div className="space-y-4">
                                {announcements.map((a) => (
                                    <div key={a.id} className="border p-4 rounded-lg hover:shadow-md transition">
                                        <p className="text-xs text-gray-500 mb-1">
                                            {a.author} • {a.posted}
                                        </p>
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-100">{a.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{a.content}</p>
                                        {a.role && <p className="text-xs text-gray-500 mt-1">Role: {a.role}</p>}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <Placeholder icon={Bell} text="No announcements yet" />
                        )}
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="lg:col-span-1 space-y-5">
                    {/* Birthdays */}
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md border hover:shadow-lg transition">
                        <h2 className="text-xs font-semibold mb-3 uppercase text-gray-700 dark:text-gray-200 flex items-center gap-2">
                            <Gift className="w-4 h-4 text-pink-500" /> Birthdays Today
                        </h2>
                        {birthdays.length > 0 ? (
                            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-100">
                                {birthdays.map((b) => (
                                    <li key={b.id} className="flex justify-between">
                                        <span>{b.name}</span>
                                        <span className="text-gray-500 dark:text-gray-400">{b.role}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <Placeholder icon={Gift} text="No birthdays today" />
                        )}
                    </div>

                    {/* Anniversaries */}
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md border hover:shadow-lg transition">
                        <h2 className="text-xs font-semibold mb-3 uppercase text-gray-700 dark:text-gray-200 flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-indigo-600" /> Work Anniversaries
                        </h2>
                        {anniversaries.length > 0 ? (
                            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-100">
                                {anniversaries.map((a) => (
                                    <li key={a.id} className="flex justify-between">
                                        <span>{a.name}</span>
                                        <span className="text-gray-500 dark:text-gray-400">{a.years} yrs</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <Placeholder icon={Briefcase} text="No anniversaries today" />
                        )}
                    </div>

                    {/* Team on Leave */}
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md border hover:shadow-lg transition">
                        <h2 className="text-xs font-semibold mb-3 uppercase text-gray-700 dark:text-gray-200 flex items-center gap-2">
                            <Users className="w-4 h-4 text-red-600" /> Team on Leave
                        </h2>
                        {onLeave.length > 0 ? (
                            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-100">
                                {onLeave.map((p) => (
                                    <li key={p.id} className="flex justify-between">
                                        <span>{p.name}</span>
                                        <span className="text-gray-500 dark:text-gray-400">{p.role}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <Placeholder icon={Users} text="No team members on leave" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
