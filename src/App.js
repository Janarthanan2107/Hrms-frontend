import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./Components/layouts/app-layout";
import { ThemeProvider } from "./Components/themeProvider";
import "./App.css";

// Pages
import Dashboard from "./pages/dashboard/dashboard"; // ✅ Capitalized
import Home from "./pages/dashboard/home";

// Mock role (later from login/session)
const userRole = "employee"; // "admin" | "superadmin" | "employee"

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-lg font-medium">Oops! Page not found.</p>
      <p className="text-sm text-gray-500">
        The page you are looking for does not exist.
      </p>
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
  return (
    <Router>
      <ThemeProvider defaultTheme="system">
        <div className="app font-sans">
          <Routes>
            {/* Common App Layout */}
            <Route path="/" element={<AppLayout userRole={userRole} />}>
              {/* Default index based on role */}
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

              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
