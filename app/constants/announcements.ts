import type { LucideIcon } from "lucide-react";
import {
  Bell,
  BookOpenText,
  FileText,
  GraduationCap,
  Megaphone,
} from "lucide-react";

export type Announcement = {
  id: number;
  title: string;
  summary: string;
  course: string;
  author: string;
  time: string;
  unread: boolean;
  tone: "blue" | "amber" | "purple";
};

export type AnnouncementStat = {
  title: string;
  value: number;
  icon: LucideIcon;
};

export const announcementStats: AnnouncementStat[] = [
  { title: "Total", value: 8, icon: FileText },
  { title: "Unread", value: 4, icon: Bell },
  { title: "Announcements", value: 2, icon: Megaphone },
  { title: "Grades", value: 1, icon: GraduationCap },
];

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "New Announcement: Mid-semester Exam Schedule",
    summary: "Dr. Kofi Mensah posted a new announcement in CS301",
    course: "CS301",
    author: "Dr. Kofi Mensah",
    time: "about 1 year ago",
    unread: true,
    tone: "blue",
  },
  {
    id: 2,
    title: "Assignment Due Soon",
    summary: "Binary Search Tree Implementation is due in 2 days",
    course: "CS301",
    author: "",
    time: "about 1 year ago",
    unread: true,
    tone: "amber",
  },
  {
    id: 3,
    title: "New Reply to Your Discussion",
    summary: 'Dr. Kofi Mensah replied to "Confusion about Big O notation"',
    course: "CS301",
    author: "Dr. Kofi Mensah",
    time: "about 1 year ago",
    unread: true,
    tone: "purple",
  },
];
