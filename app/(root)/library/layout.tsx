import React from "react";
import { BookOpen, ExternalLink, GraduationCap } from "lucide-react";
import Tabs from "../../components/Tabs";
import Heading from "../../components/Header";
import StatsGrid from "../../components/ui/stat-grid";

const LibraryTabs = [
  { id: "all-library", label: "All Resources", href: "/library" },
  { id: "ait-library", label: "AIT Library", href: "/library/ait-library" },
  { id: "mit-cw", label: "MIT OCW", href: "/library/mit" },
  { id: "external", label: "External", href: "/library/external" },
];

const libraryStats = [
  {
    title: "AIT Library",
    value: "4",
    description: "resources available",
    icon: BookOpen,
  },
  {
    title: "MIT OpenCourseWare",
    value: "1",
    description: "course linked",
    icon: GraduationCap,
  },
  {
    title: "External Resources",
    value: "1",
    description: "resource linked",
    icon: ExternalLink,
  },
];

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-container">
      <Heading
        title="E-Library"
        subtitle="Access digital books, journals, and global learning resources."
      />
      <StatsGrid stats={libraryStats} />
      <Tabs items={LibraryTabs} />
      {children}
    </div>
  );
};

export default layout;
