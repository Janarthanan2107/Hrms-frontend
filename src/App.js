import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./Components/layouts/app-layout";
import { ThemeProvider } from "./Components/themeProvider";
import "./App.css";

// Pages
import BranchSelection from "./pages/dashboard/branch"; // ✅ Branch selection page
import Dashboard from "./pages/dashboard/dashboard";
import Home from "./pages/dashboard/home";
import ReportIndex from "./pages/reports/reportIndex";
import SettingsLayout from "./pages/settings/Settings";
import HelpDesk from "./pages/help/HelpDesk";

// Mock role (later from login/session)
const userRole = "superadmin"; // "admin" | "superadmin" | "employee"

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-lg font-medium">Oops! Page not found.</p>
      <p className="text-sm text-gray-500">The page you are looking for does not exist.</p>
      <a
        href="/"
        className="mt-6 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Go Home
      </a>
    </div>
  );
}

const App = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);

  useEffect(() => {
    const branch = localStorage.getItem("selectedBranch");
    if (branch) {
      setSelectedBranch(JSON.parse(branch));
    }
  }, []);

  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);
    localStorage.setItem("selectedBranch", JSON.stringify(branch));
  };

  const handleLogout = () => {
    localStorage.removeItem("selectedBranch");
    setSelectedBranch(null);
  };

  return (
    <Router>
      <ThemeProvider defaultTheme="system">
        <div className="app font-sans">
          <Routes>
            {/* ✅ Step 1: Show Branch selection if no branch is chosen */}
            {!selectedBranch && (
              <Route path="/*" element={<BranchSelection onSelect={handleBranchSelect} />} />
            )}

            {/* ✅ Step 2: If branch is selected, show full AppLayout */}
            {selectedBranch && (
              <Route path="/" element={<AppLayout userRole={userRole} handleLogout={handleLogout} />}>
                {/* Default redirect after login */}
                <Route
                  index
                  element={
                    userRole === "employee" ? (
                      <Navigate to="/home" replace />
                    ) : (
                      <Navigate to="/dashboard" replace />
                    )
                  }
                />

                {/* Admin & Superadmin Dashboard */}
                <Route
                  path="dashboard"
                  element={
                    userRole === "admin" || userRole === "superadmin" ? (
                      <Dashboard />
                    ) : (
                      <NotFound />
                    )
                  }
                />

                {/* Employee Home */}
                <Route
                  path="home"
                  element={userRole === "employee" ? <Home /> : <NotFound />}
                />

                {/* Reports */}
                <Route path="reports" element={<ReportIndex />} />

                {/* Settings */}
                <Route path="settings" element={<SettingsLayout userRolePermission={userRole} />}>
                  <Route index element={<Navigate to="general" replace />} />
                  <Route path="general" element={<div>General Settings Page</div>} />
                  <Route path="organization" element={<div>Organization Settings Page</div>} />
                  <Route path="employees" element={<div>Employees Settings Page</div>} />
                  <Route path="payroll" element={<div>Payroll & Compliance</div>} />
                  <Route path="leave-attendance" element={<div>Leave & Attendance</div>} />
                  <Route path="workflow" element={<div>Approval Workflow</div>} />
                  <Route path="security" element={<div>Security & Access</div>} />
                  <Route path="integrations" element={<div>Integrations</div>} />
                  <Route path="appearance" element={<div>Appearance</div>} />
                  <Route path="configuration" element={<div>Configuration</div>} />
                </Route>

                {/* Help */}
                <Route path="help" element={<HelpDesk />} />

                {/* Catch-all */}
                <Route path="*" element={<NotFound />} />
              </Route>
            )}
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
