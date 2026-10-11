import palazzoImg from "./assets/work-palazzo.webp";
import zenithImg from "./assets/work-zenith.webp";
import xecutablesImg from "./assets/work-xecutables.webp";
import dezinexpertImg from "./assets/work-dezinexpert.webp";
import { Bot, BriefcaseBusiness, Code2, MessageCircle, Mic2, Workflow } from "lucide-react";

export const navLinks = [
  ["Home", "#home"], ["Services", "#services"], ["Work", "#work"], ["Approach", "#approach"],
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

// src: null leaves the screenshot frame empty. desc is optional (shown under the title when set).
export const works = [
  {
    title: "Palazzo Lakeside Hotel", subtitle: "Hospitality / Web Design", href: "https://palazzolakesidehotel.com/",
    src: palazzoImg, alt: "Palazzo Lakeside Hotel website screenshot",
    meta: [{ label: "Industry", value: "Hospitality" }, { label: "Type", value: "Web Design" }]
  },
  {
    title: "Zenith Holidays", subtitle: "Travel & Tourism / Web App", href: "https://www.zenithholidays.com/",
    src: zenithImg, alt: "Zenith Holidays website screenshot",
    meta: [{ label: "Industry", value: "Travel & Tourism" }, { label: "Type", value: "Web App" }]
  },
  {
    title: "The Block Silverthorne", subtitle: "Real Estate / Web Design", href: "https://theblocksilverthorne.com/",
    src: null, alt: "The Block Silverthorne website screenshot", // add a screenshot
    meta: [{ label: "Industry", value: "Real Estate" }, { label: "Type", value: "Web Design" }]
  },
  {
    title: "Xecutables", subtitle: "Tech Consulting / Web App", href: "https://www.xecutables.com/",
    src: xecutablesImg, alt: "Xecutables website screenshot",
    meta: [{ label: "Industry", value: "Tech Consulting" }, { label: "Type", value: "Web App" }]
  },
  {
    title: "Sologix Energy", subtitle: "Energy Solutions / Web App", href: "https://www.sologixenergy.in/",
    src: null, alt: "Sologix Energy website screenshot", // add a screenshot
    meta: [{ label: "Industry", value: "Energy Solutions" }, { label: "Type", value: "Web App" }]
  },
  {
    title: "Dezinexpert", subtitle: "Design Agency / Portfolio", href: "https://dezinexpert.com/",
    src: dezinexpertImg, alt: "Dezinexpert website screenshot",
    meta: [{ label: "Industry", value: "Design Agency" }, { label: "Type", value: "Portfolio" }]
  },
];