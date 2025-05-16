import { Boxes, Globe, RefreshCcw, Shield } from "lucide-react";

export const ENTERPRISE_FEATURES = [
  {
    icon: Globe,
    label: "Global Infrastructure",
    desc: "Lightning-fast execution across worldwide edge nodes",
  },
  {
    icon: Shield,
    label: "Enterprise Security",
    desc: "Bank-grade encryption and security protocols",
  },
  {
    icon: RefreshCcw,
    label: "Real-time Sync",
    desc: "Instant synchronization across all devices",
  },
  {
    icon: Boxes,
    label: "Unlimited Storage",
    desc: "Store unlimited snippets and projects",
  },
];

export const FEATURES = {
  development: [
    "Advanced AI",
    "Custom theme builder",
    "Integrated debugging tools",
    "Full language support (JS, Python & Java free)",
  ],
  collaboration: [
    "Real-time pair programming",
    "Team workspaces",
    "Version control integration",
    "Code review tools",
  ],
  deployment: [
    "One-click deployment",
    "CI/CD integration",
    "Container support",
    "Custom domain mapping",
  ],
};
