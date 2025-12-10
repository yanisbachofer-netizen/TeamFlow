import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import Messages from "./pages/Messages";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-800 text-white px-6 py-3 flex justify-between items-center">
        <h1 className="font-semibold">TeamFlow</h1>
        <nav className="flex gap-4 text-sm">
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/tasks">Taskboard</Link>
          <Link to="/users">Users</Link>
          <Link to="/messages">Messages</Link>
        </nav>
      </header>
      <main className="flex-1 p-6 bg-slate-100">{children}</main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/tasks"
        element={
          <Layout>
            <Tasks />
          </Layout>
        }
      />
      <Route
        path="/users"
        element={
          <Layout>
            <Users />
          </Layout>
        }
      />
      <Route
        path="/messages"
        element={
          <Layout>
            <Messages />
          </Layout>
        }
      />
    </Routes>
  );
}
