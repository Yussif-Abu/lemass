"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Activity,
  BarChart3,
  Bell,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Cpu,
  CreditCard,
  FileText,
  Layers3,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Monitor,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  X,GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { School } from 'lucide-react';
import type { NavigationIcon, SidebarNavigation } from "../config/navigation";

const iconMap: Record<NavigationIcon, LucideIcon> = {
  activity: Activity,
  "bar-chart": BarChart3,
  bell: Bell,
  "book-open": BookOpen,
  calendar: CalendarDays,
  "check-circle": CheckCircle2,
  clock: Clock3,
  cpu: Cpu,
  "credit-card": CreditCard,
  "file-text": FileText,
  "graduation-cap": GraduationCap,
  layers: Layers3,
  "layout-dashboard": LayoutDashboard,
  "log-out": LogOut,
  "message-square": MessageSquare,
  monitor: Monitor,
  settings: Settings,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  "user-check": UserCheck,
  users: Users,
};

type SidebarProps = {
  isOpen: boolean;
  isCollapsed: boolean;
  onClose: () => void;
  onToggleCollapse: () => void;
  navigation: SidebarNavigation;
};

const Sidebar = ({
  isOpen,
  isCollapsed,
  onClose,
  onToggleCollapse,
  navigation,
}: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigationClick = (title: string) => {
    if (title !== "Logout") return;

    window.localStorage.removeItem("lms-fake-user");
    onClose();
    router.push("/login");
  };

  const isActiveRoute = (href: string) => {
    if (href === "/admin" || href === "/dashboard") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside
      className={`dashboard-sidebar ${
        isOpen ? "dashboard-sidebar-open" : ""
      } ${isCollapsed ? "dashboard-sidebar-collapsed" : ""}`}
      aria-label="Main navigation"
    >
      {/* Brand */}
      <div className="sidebar-header">
        <Link href="/dashboard" className="sidebar-brand" onClick={onClose}>
        
            <School size={20} />
          <span>
            <span className="sidebar-brand-title">School Portal</span>
            <span className="sidebar-brand-subtitle">Management System</span>
          </span>
        </Link>

        <button
          type="button"
          className="sidebar-collapse-button"
          onClick={onToggleCollapse}
          aria-label={isCollapsed ? "Expand navigation" : "Collapse navigation"}
          aria-pressed={isCollapsed}
          title={isCollapsed ? "Expand navigation" : "Collapse navigation"}
        >
          {isCollapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}
        </button>

        <button
          type="button"
          className="sidebar-close-button"
          onClick={onClose}
          aria-label="Close navigation"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="sidebar-navigation">
        {[{ title: "Main", items: navigation.main }].map((group) => (
          <div key={group.title} className="sidebar-nav-group text-white">
            <p className="sidebar-section-title">{group.title}</p>

            <ul className="sidebar-menu">
              {group.items.map((item) => {
                const Icon = iconMap[item.icon];

                const active = isActiveRoute(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      title={isCollapsed ? item.title : undefined}
                      className={`sidebar-link ${item.title === "StudyMate AI" ? "sidebar-link-ai" : ""} ${
                        active ? "sidebar-link-active" : ""
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      <Icon size={19} strokeWidth={1.8} />

                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="sidebar-link-badge">{item.badge}</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="sidebar-footer-links">
          {navigation.bottom.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <Link
                key={item.href}
                href={item.href}
                className="sidebar-logout-button"
                onClick={() => handleNavigationClick(item.title)}
              >
                <Icon size={19} strokeWidth={1.8} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
