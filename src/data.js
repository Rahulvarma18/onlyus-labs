import { Bot, BriefcaseBusiness, Code2, MessageCircle, Mic2, Workflow } from "lucide-react";

export const navLinks = [
  ["Home", "#home"], ["Services", "#services"], ["Approach", "#approach"],
  ["Healthcare", "#healthcare"], ["FAQ", "#faq"], ["Contact", "#contact"],
];

export const services = [
  { number: "01", title: "AI Automation", desc: "Turn repetitive processes into intelligent, connected workflows that give your team time back.", icon: Workflow, items: "Workflows · CRM · Operations" },
  { number: "02", title: "AI Agents", desc: "Purpose-built agents for customer support, sales, healthcare, and your internal teams.", icon: Bot, items: "Support · Sales · Healthcare" },
  { number: "03", title: "Voice AI", desc: "Conversations that keep your business moving, from the first call to the next appointment.", icon: Mic2, items: "Reception · Calling · Booking" },
  { number: "04", title: "AI Chatbots", desc: "Be there for every question across your website, WhatsApp, and social channels.", icon: MessageCircle, items: "Website · WhatsApp · Social" },
  { number: "05", title: "Web Development", desc: "Fast, considered digital experiences built for the way your business actually works.", icon: Code2, items: "Websites · Portals · SaaS" },
  { number: "06", title: "Digital Marketing", desc: "Performance-led marketing that turns visibility into meaningful business growth.", icon: BriefcaseBusiness, items: "SEO · Paid media · Growth" },
];

export const process = ["Discovery", "Strategy", "Development", "Deployment", "Optimization", "Continuous support"];
export const industries = ["Healthcare", "Manufacturing", "Enterprise", "Startups", "And beyond"];
export const journey = ["Discovery", "First conversation", "Appointment", "Ongoing care"];

export const faqs = [
  { q: "What can OnlyUs Labs automate?", a: "We work across business processes, CRM, sales, finance, HR, customer support, document processing, and custom workflows. We start by understanding where automation will make the most difference." },
  { q: "Can AI solutions work with our existing tools?", a: "Integration is part of the approach. We design connected solutions around your current workflows, systems, and business requirements." },
  { q: "Do you build solutions for healthcare organizations?", a: "Yes. Our healthcare work includes hospital marketing, patient acquisition, AI receptionists, appointment booking, WhatsApp automation, and CRM integration." },
  { q: "What happens after launch?", a: "Our process continues through optimization and ongoing support, so the solution can evolve with your team and your goals." },
];
