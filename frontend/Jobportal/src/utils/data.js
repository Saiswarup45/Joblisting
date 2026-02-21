import {
  Search,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Shield,
  Clock,
  Award,
  Briefcase,
  Building2,
  LayoutDashboard,
  Plus,
} from "lucide-react";

/* =========================
   Job Seeker Features
========================= */


  export const jobSeekerFeatures = [
  {
    icon: Search,
    title: "Advanced Job Discovery",
    description:
      "Find the right opportunities faster with intelligent filters, personalized recommendations, and location-based search.",
  },
  {
    icon: FileText,
    title: "Professional Profile Builder",
    description:
      "Build a standout profile that highlights your experience, skills, and achievements in a structured and professional format.",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Recruiter Chat",
    description:
      "Engage directly with employers through secure messaging and get faster responses to your applications.",
  },
  {
    icon: Award,
    title: "Verified Skill Badges",
    description:
      "Earn industry-recognized skill badges by completing assessments that validate your expertise to recruiters.",
  },
];

/* =========================
   Employer Features
========================= */

export const employerFeatures = [
  {
    icon: Users,
    title: "Talent Pool Access",
    description:
      "Access our vast database of pre-screened candidates and find the perfect fit for your team.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track your hiring performance with detailed analytics and insights on candidate engagement.",
  },
  {
    icon: Shield,
    title: "Verified Candidates",
    description:
      "All candidates undergo background verification to ensure you're hiring trustworthy professionals.",
  },
  {
    icon: Clock,
    title: "Quick Hiring",
    description:
      "Streamlined hiring process reduces time-to-hire by 60% with automated screening tools.",
  },
];

/* =========================
   Navigation Menu
========================= */

export const NAVIGATION_MENU = [
  { id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard },
  { id: "post-job", name: "Post Job", icon: Plus },
  { id: "manage-jobs", name: "Manage Jobs", icon: Briefcase },
  { id: "company-profile", name: "Company Profile", icon: Building2 },
];

/* =========================
   Categories
========================= */

export const CATEGORIES = [
  { value: "Engineering", label: "Engineering" },
  { value: "Design", label: "Design" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "IT & Software", label: "IT & Software" },
  { value: "Customer-service", label: "Customer Service" },
  { value: "Product", label: "Product" },
  { value: "Operations", label: "Operations" },
  { value: "Finance", label: "Finance" },
  { value: "HR", label: "Human Resources" },
  { value: "Other", label: "Other" },
];

/* =========================
   Job Types
========================= */

export const JOB_TYPES = [
  { value: "Remote", label: "Remote" },
  { value: "Full-Time", label: "Full-Time" },
  { value: "Part-Time", label: "Part-Time" },
  { value: "Contract", label: "Contract" },
  { value: "Internship", label: "Internship" },
];

/* =========================
   Salary Ranges
========================= */

export const SALARY_RANGES = [
  "Less than $1000",
  "$1000 - $15,000",
  "More than $15,000",
];