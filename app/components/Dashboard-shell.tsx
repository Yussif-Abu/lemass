"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { getSidebarNavigation, type UserRole } from "../config/navigation";

type DashboardShellProps = {
  children: React.ReactNode;
  initialRole: UserRole;
};

const DashboardShell = ({ children, initialRole }: DashboardShellProps) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [role, setRole] = useState<UserRole>(initialRole);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = window.localStorage.getItem("lms-fake-user");

    if (!storedUser) {
      router.replace("/login");
      return;
    }

    try {
      const user = JSON.parse(storedUser) as { role?: UserRole };
      if (user.role === "admin" || user.role === "student") {
        setRole(user.role);
        setIsAuthenticated(true);
        return;
      }

      window.localStorage.removeItem("lms-fake-user");
      router.replace("/login");
    } catch {
      window.localStorage.removeItem("lms-fake-user");
      router.replace("/login");
    }
  }, [router]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  if (!isAuthenticated) return null;

  return (
    <div className="dashboard-shell">
      {isSidebarOpen && (
        <button
          type="button"
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close navigation overlay"
        />
      )}

      <Sidebar
        isOpen={isSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        onClose={() => setIsSidebarOpen(false)}
        onToggleCollapse={() =>
          setIsSidebarCollapsed((collapsed) => !collapsed)
        }
        navigation={getSidebarNavigation(role)}
      />

      <div className="dashboard-body">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="dashboard-main">{children}</main>
      </div>
    </div>
  );
};

export default DashboardShell;
