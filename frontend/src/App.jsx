import React from "react";
import {
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
} from "react-router-dom";

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Tasks from "./pages/Tasks.jsx";
import Users from "./pages/Users.jsx";
import Messages from "./pages/Messages.jsx";

const getToken = () => {
  try {
    return localStorage.getItem("token");
  } catch {
    return null;
  }
};

const isAuthenticated = () => !!getToken();

function PrivateRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function AppLayout({ children }) {
  const location = useLocation();
  const auth = isAuthenticated();

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 border-b-2 border-blue-600"
      : "text-gray-600 hover:text-blue-600";

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {auth && location.pathname !== "/login" && (
        <header className="bg-white border-b shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-blue-600">TeamFlow</span>
              <span className="text-xs text-gray-400 tracking-wide">
                Project Manager
              </span>
            </div>

            <nav className="flex items-center gap-6 text-sm">
              <Link to="/" className={isActive("/")}>
                Dashboard
              </Link>
              <Link to="/tasks" className={isActive("/tasks")}>
                Tasks
              </Link>
              <Link to="/users" className={isActive("/users")}>
                Users
              </Link>
              <Link to="/messages" className={isActive("/messages")}>
                Messages
              </Link>

              <button
                onClick={handleLogout}
                className="ml-4 px-3 py-1.5 rounded-md border text-xs text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </nav>
          </div>
        </header>
      )}

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/tasks"
          element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          }
        />

        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />

        <Route
          path="/messages"
          element={
            <PrivateRoute>
              <Messages />
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            isAuthenticated() ? (
              <Navigate to="/" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </AppLayout>
  );
}

export default App;
