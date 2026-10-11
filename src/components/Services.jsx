import { useState, useEffect, useRef } from "react";
import {
  Workflow,
  Bot,
  Mic2,
  MessageCircle,
  Code2,
  BriefcaseBusiness,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Video,
  MapPin,
  Search,
  Heart,
  Activity,
  Phone,
  Calendar,
  CheckCircle2,
  X,
  ExternalLink,
  Target,
  Send,
  Sparkles,
  TrendingUp,
  Cpu,
  Layers,
  Zap,
} from "lucide-react";
import SectionIntro from "./SectionIntro";
import { services } from "../data";
import { section } from "../styles";

export default function Services() {
  const [activeCard, setActiveCard] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Micro-interaction states
  const [mobileAssetExit, setMobileAssetExit] = useState(true);
  const [mobileAssetEnter, setMobileAssetEnter] = useState(true);
  const [cameraSensor, setCameraSensor] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isCalling, setIsCalling] = useState(true);
  const [chatChannel, setChatChannel] = useState("WhatsApp");
  const [chatMessages, setChatMessages] = useState([
    { from: "user", text: "Can you automate our patient intake bookings?" },
    { from: "bot", text: "Yes! Connected to your CRM & WhatsApp, bookings sync in real time." },
  ]);
  const [chatInput, setChatInput] = useState("");

  const intervalRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // Service configuration mapped directly to user services
  const serviceConfigs = [
    {
      ...services[0], // 01 AI Automation
      tag: "#01_AI_Automation",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      dotColor: "#059669",
    },
    {
      ...services[1], // 02 AI Agents
      tag: "#02_AI_Agents",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      dotColor: "#0d9488",
    },
    {
      ...services[2], // 03 Voice AI
      tag: "#03_Voice_AI",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      dotColor: "#4f46e5",
    },
    {
      ...services[3], // 04 AI Chatbots
      tag: "#04_AI_Chatbots",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      dotColor: "#0284c7",
    },
    {
      ...services[4], // 05 Web Development
      tag: "#05_Web_Development",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      dotColor: "#7c3aed",
    },
    {
      ...services[5], // 06 Digital Marketing
      tag: "#06_Digital_Marketing",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      dotColor: "#e11d48",
    },
  ];

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) {
      clearInterval(intervalRef.current);
      clearInterval(progressIntervalRef.current);
      setProgress(0);
      return;
    }

    const duration = 5000;
    const step = 50;
    setProgress(0);

    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(100, prev + (step / duration) * 100));
    }, step);

    const nextTimer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % serviceConfigs.length);
      setProgress(0);
    }, duration);

    intervalRef.current = nextTimer;
    progressIntervalRef.current = progressTimer;

    return () => {
      clearInterval(nextTimer);
      clearInterval(progressTimer);
    };
  }, [isPlaying, activeCard, serviceConfigs.length]);

  const handleSelectCard = (index) => {
    setActiveCard(index);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveCard((prev) => (prev + 1) % serviceConfigs.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setActiveCard((prev) => (prev - 1 + serviceConfigs.length) % serviceConfigs.length);
    setProgress(0);
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      { from: "user", text: chatInput },
      { from: "bot", text: "Got it! AI Agent is executing the workflow instantly." },
    ]);
    setChatInput("");
  };

  const current = serviceConfigs[activeCard];
  const CurrentIcon = current.icon;

  return (
    <section id="services" className={`${section} relative overflow-hidden bg-[#faf9fe]`}>
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#e8e4fb]/60 to-transparent blur-3xl" />

      {/* Section Header */}
      <SectionIntro
        tag="WHAT WE DO"
        title={
          <>
            Intelligence, built
            <br />
            for the real world
          </>
        }
        text="From everyday operations to new customer experiences, we bring together the right technology and thinking to move your business forward."
      />

      {/* Showcase Wrapper */}
      <div
        className="mx-auto max-w-[1100px]"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Top Pills Bar (Featuring All 6 Services in Exact Dribbble Style) */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {serviceConfigs.map((s, idx) => {
              const Icon = s.icon;
              const isActive = activeCard === idx;
              return (
                <button
                  key={s.number}
                  type="button"
                  onClick={() => handleSelectCard(idx)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#6353e8] text-white shadow-[0_6px_20px_#6353e845] scale-[1.02]"
                      : "bg-[#ece9fb] text-[#5546b8] hover:bg-[#e2def9] hover:text-[#4335a0]"
                  }`}
                >
                  <span
                    className={`flex size-4.5 items-center justify-center rounded-full text-[10px] ${
                      isActive ? "bg-white/20 text-white" : "bg-[#5546b8]/15 text-[#5546b8]"
                    }`}
                  >
                    <Icon size={11} strokeWidth={2.4} />
                  </span>
                  <span>
                    {s.number}. {s.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Playback Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex size-9 items-center justify-center rounded-full bg-white text-[#5546b8] shadow-sm transition hover:bg-[#ede9fc]"
              title={isPlaying ? "Pause autoplay" : "Resume autoplay"}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
            </button>
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex size-9 items-center justify-center rounded-full bg-white text-[#5546b8] shadow-sm transition hover:bg-[#ede9fc]"
              title="Previous service"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex size-9 items-center justify-center rounded-full bg-white text-[#5546b8] shadow-sm transition hover:bg-[#ede9fc]"
              title="Next service"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* 3D Folder Presentation Container */}
        <div className="relative isolate pt-4">
          {/* Layer 1: Backing Folder Sheet (Lilac pastel 3D flap) */}
          <div
            className="absolute -inset-x-3.5 -bottom-3.5 top-0 -z-10 rounded-[32px] bg-[#ddd8fa] transition-all duration-500 max-[650px]:-inset-x-2 max-[650px]:-bottom-2"
            style={{
              transform: "rotate(-0.8deg) translateY(4px)",
              boxShadow: "0 28px 60px -20px rgba(99, 83, 232, 0.22)",
            }}
          />

          {/* Layer 2: Secondary Accent Sheet */}
          <div
            className="absolute -inset-x-1.5 -bottom-1.5 top-2 -z-10 rounded-[28px] bg-[#e8e4fc] transition-all duration-500"
            style={{ transform: "rotate(0.3deg)" }}
          />

          {/* Layer 3: Main Active Folder Card */}
          <div className="relative z-10 overflow-hidden rounded-[26px] border border-white/80 bg-white shadow-[0_20px_50px_-15px_rgba(40,30,90,0.14)]">
            {/* Folder Tab Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f0eef8] bg-white/95 px-7 py-3.5 backdrop-blur-sm max-[650px]:px-4">
              <div className="flex items-center gap-3">

                <span className="text-xs font-semibold text-[#1e293b]">
                  {current.title}
                </span>
                <span className="rounded-full bg-[#f1f5f9] px-2.5 py-0.5 text-[11px] font-medium text-[#64748b] max-[750px]:hidden">
                  {current.items}
                </span>
              </div>

              {/* Progress & Counter */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-muted-foreground">
                  {current.number} / 06
                </span>
                <div className="h-1.5 w-16 overflow-hidden rounded-full bg-[#eae6fb]">
                  <div
                    className="h-full rounded-full bg-[#6353e8] transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Service Summary Banner inside Folder */}
            <div className="border-b border-[#f4f2fb] bg-[#fbfafef0] px-7 py-3.5 max-[650px]:px-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-[#6353e8] text-white">
                    <CurrentIcon size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1e293b]">{current.title}</h3>
                    <p className="text-xs text-muted-foreground">{current.desc}</p>
                  </div>
                </div>
                <div className="text-xs font-semibold text-[#6353e8] max-[650px]:text-[11px]">
                  {current.items}
                </div>
              </div>
            </div>

            {/* Folder Body: Interactive Mockup Canvas */}
            <div className="min-h-[460px] p-7 max-[800px]:p-5 max-[650px]:min-h-[430px] max-[650px]:p-3.5">
              {/* ---------------- 01: AI Automation ---------------- */}
              {activeCard === 0 && (
                <div className="grid min-h-[420px] grid-cols-12 items-center gap-6 rounded-[22px] bg-gradient-to-br from-[#e4f8f3] via-[#f7fdfb] to-[#ecfaf6] p-7 transition-all duration-500 max-[850px]:grid-cols-1 max-[850px]:gap-5 max-[650px]:p-4">
                  {/* Left Column: Mobile Asset & Camera Controls */}
                  <div className="col-span-5 flex flex-col gap-4 max-[850px]:col-span-1">
                    {/* Mobile Asset Card */}
                    <div className="rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_8px_25px_rgba(20,70,50,0.06)] backdrop-blur-md">
                      <div className="mb-3.5 flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-xl bg-[#38bdf8] text-white shadow-sm">
                          <Smartphone size={18} strokeWidth={2.2} />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#1e293b]">Mobile Asset</h4>
                          <p className="text-[11px] text-[#64748b]">Connected Workflows · CRM</p>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between border-t border-[#f1f5f9] pt-2 text-xs">
                          <span className="text-[#334155]">Exit area trigger</span>
                          <button
                            type="button"
                            onClick={() => setMobileAssetExit(!mobileAssetExit)}
                            className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out ${
                              mobileAssetExit ? "bg-[#10b981]" : "bg-[#cbd5e1]"
                            }`}
                          >
                            <span
                              className={`pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                                mobileAssetExit ? "translate-x-4" : "translate-x-0"
                              }`}
                            />
                          </button>
                        </div>

                        <div className="flex items-center justify-between border-t border-[#f1f5f9] pt-2 text-xs">
                          <span className="text-[#334155]">Enter area trigger</span>
                          <button
                            type="button"
                            onClick={() => setMobileAssetEnter(!mobileAssetEnter)}
                            className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out ${
                              mobileAssetEnter ? "bg-[#10b981]" : "bg-[#cbd5e1]"
                            }`}
                          >
                            <span
                              className={`pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                                mobileAssetEnter ? "translate-x-4" : "translate-x-0"
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Security Camera Card */}
                    <div className="rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_8px_25px_rgba(20,70,50,0.06)] backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex size-9 items-center justify-center rounded-xl bg-[#a855f7] text-white shadow-sm">
                            <Video size={18} strokeWidth={2.2} />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-[#1e293b]">Security Camera</h4>
                            <p className="text-[11px] text-[#64748b]">Sensor · AI Feed Sync</p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setCameraSensor(!cameraSensor)}
                          className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out ${
                            cameraSensor ? "bg-[#10b981]" : "bg-[#cbd5e1]"
                          }`}
                        >
                          <span
                            className={`pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                              cameraSensor ? "translate-x-4" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Workflow Automation Pipeline */}
                  <div className="relative col-span-7 flex h-full min-h-[340px] items-center max-[850px]:col-span-1">
                    <svg
                      className="pointer-events-none absolute -left-6 top-0 hidden h-full w-12 text-[#93c5fd] max-[850px]:hidden min-[851px]:block"
                      fill="none"
                      viewBox="0 0 50 300"
                    >
                      <path
                        d="M 0,80 C 25,80 25,150 50,150"
                        stroke="#93c5fd"
                        strokeWidth="2"
                        strokeDasharray="4 3"
                      />
                      <path
                        d="M 0,220 C 25,220 25,150 50,150"
                        stroke="#93c5fd"
                        strokeWidth="2"
                        strokeDasharray="4 3"
                      />
                      <circle cx="50" cy="150" r="4" fill="#3b82f6" />
                    </svg>

                    <div className="w-full overflow-hidden rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_12px_32px_rgba(20,70,50,0.08)] backdrop-blur-md">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="flex size-7 items-center justify-center rounded-lg bg-[#10b981] text-white">
                            <Workflow size={15} />
                          </div>
                          <span className="text-sm font-semibold text-[#1e293b]">Workflow Pipeline</span>
                        </div>
                        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600">
                          Live Execution
                        </span>
                      </div>

                      {/* Pipeline Stages */}
                      <div className="space-y-3">
                        {/* Stage Row 1: Trigger → Process → Action */}
                        <div className="flex items-center gap-2">
                          <div className="flex flex-1 items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50/60 px-3 py-2.5">
                            <Zap size={14} className="shrink-0 text-emerald-600" />
                            <div className="min-w-0">
                              <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-500">Trigger</span>
                              <span className="block truncate text-xs font-semibold text-[#1e293b]">New Lead via CRM</span>
                            </div>
                          </div>
                          <svg className="shrink-0" width="20" height="12" viewBox="0 0 20 12"><path d="M0,6 L14,6 M10,2 L15,6 L10,10" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                          <div className="flex flex-1 items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/60 px-3 py-2.5">
                            <Cpu size={14} className="shrink-0 text-blue-600" />
                            <div className="min-w-0">
                              <span className="block text-[10px] font-bold uppercase tracking-wider text-blue-500">Process</span>
                              <span className="block truncate text-xs font-semibold text-[#1e293b]">AI Qualification</span>
                            </div>
                          </div>
                          <svg className="shrink-0" width="20" height="12" viewBox="0 0 20 12"><path d="M0,6 L14,6 M10,2 L15,6 L10,10" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                          <div className="flex flex-1 items-center gap-2 rounded-xl border border-purple-100 bg-purple-50/60 px-3 py-2.5">
                            <Send size={14} className="shrink-0 text-purple-600" />
                            <div className="min-w-0">
                              <span className="block text-[10px] font-bold uppercase tracking-wider text-purple-500">Action</span>
                              <span className="block truncate text-xs font-semibold text-[#1e293b]">Auto Follow-up</span>
                            </div>
                          </div>
                        </div>

                        {/* Stage Row 2 */}
                        <div className="flex items-center gap-2">
                          <div className="flex flex-1 items-center gap-2 rounded-xl border border-amber-100 bg-amber-50/60 px-3 py-2.5">
                            <Calendar size={14} className="shrink-0 text-amber-600" />
                            <div className="min-w-0">
                              <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-500">Trigger</span>
                              <span className="block truncate text-xs font-semibold text-[#1e293b]">Booking Request</span>
                            </div>
                          </div>
                          <svg className="shrink-0" width="20" height="12" viewBox="0 0 20 12"><path d="M0,6 L14,6 M10,2 L15,6 L10,10" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                          <div className="flex flex-1 items-center gap-2 rounded-xl border border-teal-100 bg-teal-50/60 px-3 py-2.5">
                            <Sparkles size={14} className="shrink-0 text-teal-600" />
                            <div className="min-w-0">
                              <span className="block text-[10px] font-bold uppercase tracking-wider text-teal-500">Process</span>
                              <span className="block truncate text-xs font-semibold text-[#1e293b]">Slot Matching</span>
                            </div>
                          </div>
                          <svg className="shrink-0" width="20" height="12" viewBox="0 0 20 12"><path d="M0,6 L14,6 M10,2 L15,6 L10,10" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
                          <div className="flex flex-1 items-center gap-2 rounded-xl border border-sky-100 bg-sky-50/60 px-3 py-2.5">
                            <CheckCircle2 size={14} className="shrink-0 text-sky-600" />
                            <div className="min-w-0">
                              <span className="block text-[10px] font-bold uppercase tracking-wider text-sky-500">Action</span>
                              <span className="block truncate text-xs font-semibold text-[#1e293b]">Confirm & Notify</span>
                            </div>
                          </div>
                        </div>

                        {/* Execution Metrics Bar */}
                        <div className="mt-1 grid grid-cols-3 gap-2.5 rounded-xl border border-[#f1f5f9] bg-[#f8fafc] p-3">
                          <div className="text-center">
                            <span className="block text-lg font-black text-[#0f172a]">1,240</span>
                            <span className="text-[10px] font-medium text-[#64748b]">Tasks / day</span>
                          </div>
                          <div className="text-center">
                            <span className="block text-lg font-black text-[#10b981]">99.8%</span>
                            <span className="text-[10px] font-medium text-[#64748b]">Success rate</span>
                          </div>
                          <div className="text-center">
                            <span className="block text-lg font-black text-[#6353e8]">0.3s</span>
                            <span className="text-[10px] font-medium text-[#64748b]">Avg latency</span>
                          </div>
                        </div>

                        {/* Live Activity Log */}
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 rounded-lg bg-[#f0fdf4] px-3 py-1.5 text-[11px]">
                            <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                            <span className="font-medium text-emerald-700">Lead scored & routed to sales pipeline</span>
                            <span className="ml-auto font-mono text-[10px] text-emerald-400">2s ago</span>
                          </div>
                          <div className="flex items-center gap-2 rounded-lg bg-[#eff6ff] px-3 py-1.5 text-[11px]">
                            <span className="size-1.5 rounded-full bg-blue-500" />
                            <span className="font-medium text-blue-700">Appointment confirmed via WhatsApp</span>
                            <span className="ml-auto font-mono text-[10px] text-blue-400">8s ago</span>
                          </div>
                          <div className="flex items-center gap-2 rounded-lg bg-[#faf5ff] px-3 py-1.5 text-[11px]">
                            <span className="size-1.5 rounded-full bg-purple-500" />
                            <span className="font-medium text-purple-700">Invoice generated & sent to client</span>
                            <span className="ml-auto font-mono text-[10px] text-purple-400">14s ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ---------------- 02: AI Agents ---------------- */}
              {activeCard === 1 && (
                <div className="grid min-h-[420px] grid-cols-12 items-center gap-6 rounded-[22px] bg-gradient-to-br from-[#e8f6f5] via-[#f8fdfc] to-[#eef9f8] p-7 transition-all duration-500 max-[850px]:grid-cols-1 max-[850px]:gap-5 max-[650px]:p-4">
                  {/* Left Column: Autonomous Agents Monitoring */}
                  <div className="col-span-4 flex flex-col gap-4 max-[850px]:col-span-1">
                    <div className="rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_8px_25px_rgba(20,70,60,0.06)] backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-[#94a3b8]">#AGENT-01</span>
                        <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-600">
                          <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                          Support Agent
                        </span>
                      </div>
                      <h4 className="mt-1 text-sm font-bold text-[#1e293b]">Robin · Patient Triage</h4>
                      <div className="mt-2.5 flex items-baseline gap-1.5">
                        <span className="text-2xl font-black text-[#0f172a]">98.4%</span>
                        <span className="text-xs font-semibold text-[#64748b]">FCR</span>
                        <span className="ml-auto rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                          Autonomous
                        </span>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_8px_25px_rgba(20,70,60,0.06)] backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-[#94a3b8]">#AGENT-02</span>
                        <span className="flex items-center gap-1 text-[10px] font-medium text-teal-600">
                          <span className="size-1.5 animate-pulse rounded-full bg-teal-500" />
                          Sales Agent
                        </span>
                      </div>
                      <h4 className="mt-1 text-sm font-bold text-[#1e293b]">Falcon · Lead Qualifier</h4>
                      <div className="mt-2.5 flex items-baseline gap-1.5">
                        <span className="text-2xl font-black text-[#0f172a]">3.4x</span>
                        <span className="text-xs font-semibold text-[#64748b]">Velocity</span>
                        <span className="ml-auto rounded-md bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-teal-600">
                          Active Sync
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Multi-Agent Context & Routing */}
                  <div className="col-span-8 flex flex-col gap-3.5 max-[850px]:col-span-1">
                    <div className="rounded-2xl border border-white/80 bg-white/95 p-5 shadow-[0_10px_30px_rgba(20,70,60,0.06)] backdrop-blur-md">
                      <div className="mb-3">
                        <h4 className="text-sm font-bold text-[#1e293b]">Agent Context & Healthcare Routing</h4>
                        <p className="text-[11px] text-[#64748b]">Cross-system decision tree · Subject #30992</p>
                      </div>

                      <div className="grid grid-cols-3 gap-3 border-t border-[#f1f5f9] pt-3 text-xs max-[600px]:grid-cols-2">
                        <div>
                          <span className="text-[10px] text-[#94a3b8]">Domain</span>
                          <p className="font-semibold text-[#1e293b]">Healthcare & Sales</p>
                        </div>
                        <div>
                          <span className="text-[10px] text-[#94a3b8]">Latency</span>
                          <p className="font-semibold text-[#1e293b]">420 ms</p>
                        </div>
                        <div>
                          <span className="text-[10px] text-[#94a3b8]">Resolution</span>
                          <p className="font-semibold text-[#1e293b]">Instant Verification</p>
                        </div>
                        <div className="col-span-3 max-[600px]:col-span-2">
                          <span className="text-[10px] text-[#94a3b8]">Integrated Tools</span>
                          <p className="font-semibold text-[#1e293b]">EHR / CRM / WhatsApp / PostgreSQL</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3.5 max-[600px]:grid-cols-1">
                      <div className="rounded-xl border border-white/80 bg-white/90 p-3 text-xs shadow-sm">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0d9488]">
                          Customer & Patient Flow
                        </span>
                        <p className="mt-1 text-[#334155]">
                          Discovery: <span className="font-semibold">Auto-scheduled</span>
                        </p>
                        <p className="text-[#334155]">
                          Follow-up: <span className="font-semibold">Context-aware reminder</span>
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/80 bg-white/90 p-3 text-xs shadow-sm">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0d9488]">
                          Deployment Status
                        </span>
                        <p className="mt-1 text-[#334155]">
                          Cluster: <span className="font-semibold">OnlyUs Agent Engine</span>
                        </p>
                        <p className="text-[#334155]">
                          Security: <span className="font-mono font-bold text-[#0d9488]">HIPAA Compliant</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ---------------- 03: Voice AI ---------------- */}
              {activeCard === 2 && (
                <div className="flex min-h-[420px] flex-col justify-center gap-4 rounded-[22px] bg-gradient-to-br from-[#eff1fd] via-[#f8f9ff] to-[#f2f4fe] p-7 transition-all duration-500 max-[650px]:p-4">
                  {/* Top Card: Performed Metrics & Floating Phone Badge */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-white/95 p-6 shadow-[0_12px_32px_rgba(70,50,180,0.08)] backdrop-blur-md">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#64748b]">
                          <Target size={15} className="text-[#6353e8]" />
                          <span>Voice AI Receptions & Calling</span>
                        </div>
                        <div className="mt-2 flex items-baseline gap-2">
                          <span className="text-[44px] font-black leading-none text-[#1e1b4b]">8</span>
                          <span className="text-xl font-bold text-[#94a3b8]">/ 12</span>
                        </div>
                      </div>

                      {/* Floating Phone Button with Animated Waves */}
                      <div className="relative">
                        {isCalling && (
                          <>
                            <span className="absolute -inset-2 animate-[ping-slow_1.8s_infinite] rounded-full bg-[#6353e8]/30" />
                            <span className="absolute -inset-4 animate-[ping-slow_1.8s_0.6s_infinite] rounded-full bg-[#6353e8]/20" />
                          </>
                        )}
                        <button
                          type="button"
                          onClick={() => setIsCalling(!isCalling)}
                          className="relative flex size-14 items-center justify-center rounded-full bg-[#5c4ce4] text-white shadow-lg shadow-[#5c4ce4]/40 transition hover:scale-105 active:scale-95"
                          title="Click to toggle Voice AI simulated call"
                        >
                          <Phone size={24} className={isCalling ? "animate-[float-subtle_1.5s_infinite]" : ""} />
                        </button>
                      </div>
                    </div>

                    {/* Dual Tone Progress Bar */}
                    <div className="mt-4">
                      <div className="h-3 w-full overflow-hidden rounded-full bg-[#f1f5f9]">
                        <div className="flex h-full">
                          <div className="w-[33%] bg-[#f59e0b]" />
                          <div className="w-[34%] bg-[#3b82f6]" />
                        </div>
                      </div>
                      <div className="mt-1.5 flex justify-between text-xs text-[#64748b]">
                        <span>Reception · Calling · Booking</span>
                        <span className="font-semibold text-[#6353e8]">33% to goal</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Card: Appointment Outcomes Donut Chart */}
                  <div className="rounded-2xl border border-white/80 bg-white/95 p-5 shadow-[0_12px_32px_rgba(70,50,180,0.08)] backdrop-blur-md">
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-[#64748b]">
                      <Calendar size={15} className="text-[#6353e8]" />
                      <span>Appointment Outcomes</span>
                    </div>

                    <div className="flex items-center justify-between gap-6 max-[600px]:flex-col max-[600px]:items-start">
                      <div className="relative flex size-28 items-center justify-center">
                        <svg className="size-28 -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#f1f5f9"
                            strokeWidth="3.5"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="3.8"
                            strokeDasharray="35, 100"
                            strokeDashoffset="0"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="3.8"
                            strokeDasharray="25, 100"
                            strokeDashoffset="-35"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#f43f5e"
                            strokeWidth="3.8"
                            strokeDasharray="20, 100"
                            strokeDashoffset="-60"
                          />
                        </svg>
                        <div className="absolute text-center">
                          <span className="text-base font-black text-[#1e1b4b]">80%</span>
                          <p className="text-[9px] text-[#94a3b8]">Booked</p>
                        </div>
                      </div>

                      <div className="flex-1 space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="size-2.5 rounded-full bg-[#10b981]" />
                            <span className="text-[#334155]">Performed</span>
                          </div>
                          <span className="font-bold text-[#0f172a]">35%</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="size-2.5 rounded-full bg-[#3b82f6]" />
                            <span className="text-[#334155]">Scheduled</span>
                          </div>
                          <span className="font-bold text-[#0f172a]">25%</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="size-2.5 rounded-full bg-[#f43f5e]" />
                            <span className="text-[#334155]">Declined</span>
                          </div>
                          <span className="font-bold text-[#0f172a]">20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ---------------- 04: AI Chatbots ---------------- */}
              {activeCard === 3 && (
                <div className="flex min-h-[420px] flex-col justify-center rounded-[22px] bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#eaf6ff] p-7 transition-all duration-500 max-[650px]:p-4">
                  <div className="mx-auto w-full max-w-[620px] overflow-hidden rounded-2xl border border-white/90 bg-white/95 shadow-[0_16px_40px_rgba(2,132,199,0.12)] backdrop-blur-md">
                    {/* Chatbot Header */}
                    <div className="flex items-center justify-between border-b border-[#f1f5f9] px-5 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-[#0284c7] text-white">
                          <MessageCircle size={16} />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[#0f172a]">AI Chatbot Simulator</h4>
                          <span className="text-[10px] text-emerald-600 font-medium">● Online across Website & WhatsApp</span>
                        </div>
                      </div>

                      {/* Channel Tabs */}
                      <div className="flex items-center gap-1 rounded-lg bg-[#f1f5f9] p-1 text-[11px] font-semibold text-[#64748b]">
                        {["WhatsApp", "Website", "Social"].map((ch) => (
                          <button
                            key={ch}
                            type="button"
                            onClick={() => setChatChannel(ch)}
                            className={`rounded-md px-2.5 py-1 transition ${
                              chatChannel === ch ? "bg-white text-[#0284c7] shadow-xs" : "hover:text-[#0f172a]"
                            }`}
                          >
                            {ch}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Messages Body */}
                    <div className="space-y-3 p-5 h-56 overflow-y-auto bg-[#f8fafc]/60">
                      {chatMessages.map((m, i) => (
                        <div
                          key={i}
                          className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-xs ${
                              m.from === "user"
                                ? "bg-[#0284c7] text-white rounded-br-none"
                                : "bg-white text-[#1e293b] shadow-sm border border-[#f1f5f9] rounded-bl-none"
                            }`}
                          >
                            <p>{m.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Input Form */}
                    <form onSubmit={handleSendChat} className="flex items-center gap-2 border-t border-[#f1f5f9] p-3 bg-white">
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        placeholder={`Ask anything on ${chatChannel}...`}
                        className="flex-1 rounded-xl bg-[#f8fafc] px-3.5 py-2 text-xs text-[#0f172a] outline-none placeholder:text-[#94a3b8]"
                      />
                      <button
                        type="submit"
                        className="flex size-8 items-center justify-center rounded-xl bg-[#0284c7] text-white shadow-xs transition hover:bg-[#0369a1]"
                      >
                        <Send size={14} />
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* ---------------- 05: Web Development ---------------- */}
              {activeCard === 4 && (
                <div className="relative flex min-h-[420px] items-center justify-center rounded-[22px] bg-gradient-to-br from-[#faedf4] via-[#fdf9fb] to-[#f6effb] p-7 transition-all duration-500 max-[650px]:p-4">
                  {/* Modal Window Mockup */}
                  <div className="w-full max-w-[560px] rounded-2xl border border-white/90 bg-white/95 p-6 shadow-[0_20px_45px_rgba(120,40,90,0.12)] backdrop-blur-md">
                    <div className="mb-4 flex items-center justify-between border-b border-[#f1f5f9] pb-3">
                      <div>
                        <span className="text-xs font-semibold text-[#64748b]">Websites · Portals · SaaS</span>
                        <h4 className="text-sm font-bold text-[#1e293b]">High-Performance Digital Architecture</h4>
                      </div>
                      <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-[10px] font-bold text-purple-700">
                        100/100 Lighthouse
                      </span>
                    </div>

                    <div className="grid grid-cols-12 gap-5 max-[650px]:grid-cols-1">
                      {/* Left Thumbnail Asset */}
                      <div className="col-span-5 flex flex-col items-center justify-center rounded-xl bg-gradient-to-tr from-[#fed7aa] via-[#fbcfe8] to-[#e9d5ff] p-4 max-[650px]:col-span-1 max-[650px]:h-36">
                        <svg className="size-24 drop-shadow-md" viewBox="0 0 100 60" fill="none">
                          <path
                            d="M10,42 Q20,38 35,42 Q55,46 75,32 Q85,25 90,32 L92,44 Q90,50 78,50 L15,50 Q10,50 10,42 Z"
                            fill="#7c3aed"
                          />
                          <path
                            d="M32,42 Q45,28 60,25 Q70,23 75,32 Q55,46 35,42 Z"
                            fill="#c084fc"
                          />
                          <path
                            d="M12,48 L90,48"
                            stroke="#ffffff"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="mt-2 text-[10px] font-bold text-[#581c87]">Modern SaaS Engine</span>
                      </div>

                      {/* Right Form Fields */}
                      <div className="col-span-7 space-y-2.5 text-xs max-[650px]:col-span-1">
                        <div>
                          <label className="text-[10px] font-medium text-[#64748b]">Platform Stack</label>
                          <input
                            type="text"
                            defaultValue="Next.js · React · Tailwind · Edge API"
                            className="mt-0.5 w-full rounded-lg border border-[#e2e8f0] bg-white px-2.5 py-1.5 font-medium text-[#1e293b] outline-none"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[10px] font-medium text-[#64748b]">Load Time</label>
                            <input
                              type="text"
                              defaultValue="0.4s (Global Edge)"
                              className="mt-0.5 w-full rounded-lg border border-[#e2e8f0] bg-white px-2.5 py-1.5 text-[#1e293b] outline-none"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-medium text-[#64748b]">Uptime</label>
                            <input
                              type="text"
                              defaultValue="99.99%"
                              className="mt-0.5 w-full rounded-lg border border-[#e2e8f0] bg-white px-2.5 py-1.5 text-[#1e293b] outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-medium text-[#64748b]">Live Endpoint</label>
                          <div className="mt-0.5 flex items-center gap-1.5 rounded-lg border border-[#e2e8f0] bg-white px-2.5 py-1.5 text-[#64748b]">
                            <ExternalLink size={12} className="shrink-0" />
                            <span className="truncate text-[11px] text-[#7c3aed]">https://app.onlyuslabs.com</span>
                          </div>
                        </div>

                        <div>
                          <p className="mt-0.5 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-2 text-[11px] text-[#334155]">
                            Custom web portals, SaaS platforms, and enterprise web solutions engineered for speed and conversion.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ---------------- 06: Digital Marketing ---------------- */}
              {activeCard === 5 && (
                <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[22px] bg-gradient-to-br from-[#fff1eb] via-[#fefaf7] to-[#fef3ee] p-7 transition-all duration-500 max-[650px]:p-4">
                  {/* Search Bar at Top */}
                  <div className="mb-6 flex w-full max-w-[520px] items-center rounded-full border border-white/90 bg-white/95 p-1.5 shadow-[0_8px_25px_rgba(200,80,40,0.08)] backdrop-blur-md">
                    <div className="flex items-center gap-2 pl-3 text-xs font-medium text-[#475569]">
                      <MapPin size={15} className="text-[#e15b4f]" />
                      <span>Global Markets</span>
                    </div>

                    <div className="mx-3 h-4 w-px bg-[#e2e8f0]" />

                    <div className="flex flex-1 items-center gap-2 text-xs text-[#94a3b8]">
                      <Search size={14} />
                      <input
                        type="text"
                        defaultValue="AI healthcare marketing campaigns"
                        className="w-full bg-transparent text-xs text-[#1e293b] outline-none"
                      />
                    </div>

                    <button
                      type="button"
                      className="flex size-8 items-center justify-center rounded-full bg-[#e15b4f] text-white shadow-sm transition hover:bg-[#c94d42]"
                    >
                      <Search size={14} strokeWidth={2.4} />
                    </button>
                  </div>

                  {/* Growth Campaign Card */}
                  <div className="w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/90 bg-white/95 shadow-[0_16px_36px_rgba(200,80,40,0.12)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
                    <div className="relative h-44 w-full overflow-hidden bg-gradient-to-tr from-[#f97316] via-[#fb923c] to-[#fdba74]">
                      <div className="absolute -bottom-6 left-1/2 size-36 -translate-x-1/2 rounded-full bg-[#fef08a]/50 blur-sm" />
                      <div className="absolute inset-0 flex items-end justify-center pb-2 opacity-80">
                        <svg className="h-28 w-64 text-[#431407]" viewBox="0 0 200 80" fill="currentColor">
                          <circle cx="40" cy="18" r="5" />
                          <path d="M38,25 L42,25 L45,45 L35,45 Z M28,32 L40,27 L52,32 M38,45 L32,70 M42,45 L48,70" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                          <circle cx="100" cy="14" r="5" />
                          <path d="M98,21 L102,21 L105,43 L95,43 Z M88,18 L100,23 L112,18 M98,43 L93,68 M102,43 L107,68" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                          <circle cx="160" cy="18" r="5" />
                          <path d="M158,25 L162,25 L165,45 L155,45 Z M148,32 L160,27 L172,32 M158,45 L152,70 M162,45 L168,70" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                        </svg>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsFavorited(!isFavorited)}
                        className="absolute right-3.5 top-3.5 flex size-8 items-center justify-center rounded-full bg-white/90 text-[#64748b] shadow-sm backdrop-blur-sm transition-all hover:scale-105"
                      >
                        <Heart
                          size={16}
                          className={isFavorited ? "fill-[#ef4444] text-[#ef4444]" : "text-[#64748b]"}
                        />
                      </button>
                    </div>

                    <div className="p-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#e11d48]">
                        SEO · PAID MEDIA · GROWTH
                      </span>
                      <h4 className="mt-1 text-sm font-semibold text-[#1e293b]">
                        Performance-Led Acquisition & Brand Expansion
                      </h4>

                      <div className="mt-3.5 flex items-center justify-between border-t border-[#f1f5f9] pt-3 text-xs">
                        <span className="text-[#64748b]">ROAS: 4.8x · CTR: 5.2%</span>
                        <span className="font-semibold text-[#0f172a]">+240% Patient Growth</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-[#e11d48]" />
                    <span className="size-1.5 rounded-full bg-[#cbd5e1]" />
                    <span className="size-1.5 rounded-full bg-[#cbd5e1]" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
