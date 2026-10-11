import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import SectionIntro from "./SectionIntro";
import { works } from "../data";
import { section } from "../styles";

const INTERVAL = 6000; // ms each project stays on screen
const pad = (n) => String(n).padStart(2, "0");

const host = (href) => new URL(href).hostname.replace(/^www\./, "");

function BrowserFrame({ work }) {
    return (
        <div className="relative isolate">
            {/* soft colour behind the glass so the blur has something to catch */}
            <span aria-hidden="true" className="pointer-events-none absolute -left-4 top-6 -z-10 size-44 rounded-full bg-primary/45 blur-3xl" />
            <span aria-hidden="true" className="pointer-events-none absolute -bottom-4 right-6 -z-10 size-52 rounded-full bg-[#ffb48f]/70 blur-3xl" />
            <div className="rounded-[20px] border border-white/60 bg-white/25 p-3 shadow-[0_12px_40px_#f2532124,inset_0_1px_0_#ffffffb3] backdrop-blur-xl backdrop-saturate-150 max-[650px]:p-2">
                <div className="overflow-hidden rounded-xl border border-white/50 bg-white/30 shadow-[0_4px_18px_#20242114]">
                    <div className="flex h-10 items-center gap-3 border-b border-white/50 bg-white/50 px-4 backdrop-blur-md">
                        <span className="flex gap-1.5" aria-hidden="true">
                            <i className="size-2.5 rounded-full bg-foreground/20" /><i className="size-2.5 rounded-full bg-foreground/20" /><i className="size-2.5 rounded-full bg-foreground/20" />
                        </span>
                        <span className="flex-1 truncate rounded-[10px] bg-white/60 px-3 py-1 text-center text-xs text-foreground/70">{host(work.href)}</span>
                    </div>
                    <div className="aspect-[2.2/1] bg-white/20">
                        {work.src && <img src={work.src} alt={work.alt} loading="lazy" className="size-full object-cover object-top" />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SelectedWork() {
    const n = works.length;
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [hoverHold, setHoverHold] = useState(false); // mouse over the carousel
    const [focusHold, setFocusHold] = useState(false); // keyboard focus inside the carousel
    const hold = hoverHold || focusHold;
    const [visible, setVisible] = useState(false);
    const root = useRef(null);
    const stage = useRef(null);
    const touchX = useRef(null);

    const go = (i) => setIndex((i + n) % n);

    useEffect(() => {
        if (!("IntersectionObserver" in window)) return setVisible(true);
        const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.1 });
        if (stage.current) io.observe(stage.current);
        return () => io.disconnect();
    }, []);

    // One timeout per slide: any manual change restarts the countdown.
    useEffect(() => {
        if (paused || hold || !visible) return;
        const t = setTimeout(() => setIndex((i) => (i + 1) % n), INTERVAL);
        return () => clearTimeout(t);
    }, [index, paused, hold, visible, n]);

    const round = "inline-flex size-11 items-center justify-center rounded-full transition duration-300";

    return (
        <section id="work" ref={root} aria-roledescription="carousel" aria-label="Selected work" className={`${section} overflow-hidden bg-[#f6faf8]`}>
            <SectionIntro tag="SELECTED WORK" title="Work we're proud of"
                text="Websites and web apps we have designed and built for clients across industries." />

            <div ref={stage} className="reveal"
                onPointerEnter={(e) => e.pointerType === "mouse" && setHoverHold(true)} onPointerLeave={() => setHoverHold(false)}
                onFocus={(e) => e.target.matches(":focus-visible") && setFocusHold(true)} onBlur={() => setFocusHold(false)}
                onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
                onTouchEnd={(e) => {
                    if (touchX.current === null) return;
                    const dx = e.changedTouches[0].clientX - touchX.current;
                    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
                    touchX.current = null;
                }}>
                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-700 ease-[cubic-bezier(.2,.75,.25,1)] motion-reduce:transition-none"
                        style={{ transform: `translateX(-${index * 100}%)` }} aria-live={paused || hold ? "polite" : "off"}>
                        {works.map((w, i) => (
                            <article key={w.title} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${n}: ${w.title}`}
                                aria-hidden={i !== index} inert={i !== index}
                                className="grid w-full shrink-0 grid-cols-[1.6fr_1fr] items-center gap-[64px] px-2 py-8 max-[900px]:grid-cols-1 max-[900px]:gap-8">
                                <BrowserFrame work={w} />
                                <div>
                                    <h3 className="text-[40px] font-medium leading-[1.1] max-[650px]:text-[32px]">{w.title}</h3>
                                    {w.desc && <p className="mt-5 max-w-[420px] text-base leading-[1.7] text-muted-foreground max-[650px]:text-sm">{w.desc}</p>}
                                    <dl className="mt-8 max-w-[420px] border-t border-border">
                                        {w.meta.map((m) => (
                                            <div key={m.label} className="flex justify-between gap-6 border-b border-border py-4 text-sm">
                                                <dt className="text-muted-foreground">{m.label}</dt>
                                                <dd className="font-medium">{m.value}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                    <a href={w.href} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:text-primary">
                                        Visit live site <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                    <div className="flex items-center gap-1">
                        <span className="mr-3 text-sm tabular-nums">{pad(index + 1)} / {pad(n)}</span>
                        {works.map((w, i) => (
                            <button key={w.title} type="button" aria-label={`Show ${w.title}`} aria-current={i === index} onClick={() => go(i)}
                                className="grid h-11 w-5 place-items-center">
                                <span className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-primary" : "w-1.5 bg-border"}`} />
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2.5">
                        <button type="button" aria-label={paused ? "Play slideshow" : "Pause slideshow"} onClick={() => setPaused(!paused)}
                            className={`${round} text-muted-foreground hover:text-foreground`}>{paused ? <Play size={16} /> : <Pause size={16} />}</button>
                        <button type="button" aria-label="Previous project" onClick={() => go(index - 1)}
                            className={`${round} border border-foreground bg-white hover:bg-muted`}><ArrowLeft size={18} /></button>
                        <button type="button" aria-label="Next project" onClick={() => go(index + 1)}
                            className={`${round} bg-foreground text-white hover:-translate-y-0.5`}><ArrowRight size={18} /></button>
                    </div>
                </div>
            </div>
        </section>
    );
}