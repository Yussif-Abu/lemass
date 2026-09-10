import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  BookText,
  ExternalLink,
  FileText,
  GraduationCap,
  Video,
} from "lucide-react";

export type LibraryResourceSource = "AIT Library" | "MIT OCW" | "External";
export type LibraryResourceAccent = "blue" | "orange" | "gray";

export type LibraryResource = {
  id: number;
  title: string;
  author: string;
  description: string;
  source: LibraryResourceSource;
  type: string;
  format: string;
  icon: LucideIcon;
  accent: LibraryResourceAccent;
};

export const libraryResources: LibraryResource[] = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    author: "by Thomas H. Cormen",
    description:
      "The bible of algorithms — comprehensive coverage of modern algorithmic techniques.",
    source: "AIT Library",
    type: "Computer Science",
    format: "Ebook",
    icon: FileText,
    accent: "blue",
  },
  {
    id: 2,
    title: "Clean Code",
    author: "by Robert C. Martin",
    description: "A handbook of agile software craftsmanship.",
    source: "AIT Library",
    type: "Software Engineering",
    format: "Ebook",
    icon: BookText,
    accent: "blue",
  },
  {
    id: 3,
    title: "Database Systems: The Complete Book",
    author: "by Hector Garcia-Molina",
    description: "Complete reference for database systems.",
    source: "MIT OCW",
    type: "Database",
    format: "Ebook",
    icon: BookOpen,
    accent: "orange",
  },
  {
    id: 4,
    title: "Machine Learning Course",
    author: "by Andrew Ng",
    description: "Comprehensive machine learning course from Stanford.",
    source: "External",
    type: "AI",
    format: "Video",
    icon: Video,
    accent: "gray",
  },
  {
    id: 5,
    title: "Deep Learning Specialization",
    author: "by DeepLearning.AI",
    description:
      "A practical and accessible introduction to neural networks and deep learning.",
    source: "MIT OCW",
    type: "AI",
    format: "Course",
    icon: GraduationCap,
    accent: "orange",
  },
  {
    id: 6,
    title: "Research Methods Handbook",
    author: "by Academic Commons",
    description:
      "A practical guide to research design, citations, and evidence-based writing.",
    source: "External",
    type: "Research",
    format: "PDF",
    icon: ExternalLink,
    accent: "gray",
  },
];

export const libraryStats = [
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
