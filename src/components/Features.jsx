import { ArrowRight, Bot, HeartPulse, MessageCircle, Workflow } from "lucide-react";
import { h2, pill, section } from "../styles";

const area = "relative m-2.5 h-[235px] overflow-hidden rounded-[5px] bg-[#fbfdfc]";
const chip = "relative z-[2] inline-flex items-center gap-[7px] whitespace-nowrap rounded-[5px] border border-border bg-background px-3 py-2.5 text-[11px] shadow-[0_7px_23px_#31473510]";
const msg = "flex items-center gap-2 rounded-lg bg-background px-4 py-[11px] text-[11px] shadow-[0_5px_20px_#31473512]";
const orbit = "absolute rounded-full border border-[#f2532140]";
const dot = "absolute size-3.5 rounded-full bg-primary shadow-[0_0_20px_#f2532155]";
const path = "M0 142 L35 145 L65 131 L90 140 L120 125 L150 128 L175 98 L205 113 L235 90 L270 100 L295 70 L320 80 L345 54 L375 64 L405 30 L430 47 L455 20 L490 38 L520 12";

function Card({ visual, index, title, text }) {
  return (
    <article className="reveal min-h-[375px] overflow-hidden rounded-[7px] border border-border bg-background shadow-[0_5px_22px_#2f473209] max-[650px]:min-h-[360px]">
      {visual}
      <div className="px-[29px] pb-[29px]">
        <span className="text-[9px] font-bold tracking-[2px] text-primary">{index}</span>
        <h3 className="mb-[9px] mt-2.5 text-[22px] font-medium">{title}</h3>
        <p className="max-w-[400px] text-[13px] leading-[1.6] text-muted-foreground">{text}</p>
      </div>
    </article>
  );
}

export default function Features() {
  return (
    <section className={`${section} !pt-[120px]`}>
      <div className="reveal mx-auto mb-[60px] max-w-[720px] text-center max-[650px]:mb-[38px]">
        <span className={pill}>WHY ONLYUS LABS</span>
        <h2 className={`${h2} !mt-7`}>Ideas into impact.<br />Intelligence into action.</h2>
        <p className="mx-auto mt-[21px] max-w-[520px] text-sm leading-[1.7] text-muted-foreground">
          Technology is most powerful when it solves something real. Every solution starts with your business and ends with a better way forward.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[18px] max-[650px]:grid-cols-1">
        <Card index="01 / OPTIMIZE" title="Make every process count"
          text="Automate the routine, connect the moving parts, and free your people to focus on work that matters."
          visual={
            <div className={area}>
              <div className="absolute inset-x-[5%] bottom-[25px] top-[45px] flex flex-col justify-between">
                {[0, 1, 2].map((n) => <span key={n} className="w-full border-t border-dashed border-border" />)}
              </div>
              <svg viewBox="0 0 520 180" preserveAspectRatio="none" aria-hidden="true" className="absolute bottom-3 left-[5%] h-[70%] w-[90%]">
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f9aa8f99" /><stop offset="100%" stopColor="#fff6f200" />
                  </linearGradient>
                </defs>
                <path d={`${path} L520 180 L0 180 Z`} fill="url(#chartFill)" />
                <path d={path} fill="none" stroke="#f25321" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>} />
        <Card index="02 / CONNECT" title="Systems that work together"
          text="Bring your data, tools, and teams into one more intelligent way of working."
          visual={
            <div className={`${area} flex items-center justify-center gap-2`}>
              <span className={chip}><Bot size={15} className="text-primary" /> AI Agent</span>
              <span className={`${chip} -translate-y-[30px]`}><Workflow size={15} className="text-primary" /> Workflow</span>
              <span className={`${chip} translate-y-[25px]`}><ArrowRight size={15} className="text-primary" /> Better outcomes</span>
              <div className="absolute left-[15%] top-1/2 h-px w-[70%] bg-primary opacity-35" />
            </div>} />
        <Card index="03 / ENGAGE" title="Conversations that go further"
          text="Be there when your customers need you, with support that feels seamless and personal."
          visual={
            <div className={`${area} flex flex-col items-center justify-center gap-[13px]`}>
              <div className={`${msg} -translate-x-[30px]`}><MessageCircle size={15} className="text-primary" />How can I help you today?</div>
              <div className={`${msg} translate-x-[50px] text-primary`}>I'd like to book an appointment.</div>
              <div className={`${msg} -translate-x-[30px]`}><Bot size={15} className="text-primary" />Let's find a time that works for you.</div>
            </div>} />
        <Card index="04 / GROW" title="Built around your industry"
          text="Thoughtful solutions for the distinct challenges of healthcare, enterprise, and growing businesses."
          visual={
            <div className={`${area} grid place-items-center`}>
              <span className={`${orbit} size-[190px]`} />
              <span className={`${orbit} size-[125px]`} />
              <span className="grid size-[70px] place-items-center rounded-full bg-background text-primary shadow-[0_8px_24px_#f2532125]">
                <HeartPulse size={32} strokeWidth={1.2} />
              </span>
              <span className={`${dot} translate-x-[92px] -translate-y-[50px]`} />
              <span className={`${dot} -translate-x-[80px] translate-y-20`} />
            </div>} />
      </div>
    </section>
  );
}
