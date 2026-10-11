import Logo from "./Logo";
import { h2, pill } from "../styles";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-[550px] overflow-hidden bg-[#fff7f4] px-[7%] pb-[27px] pt-[105px] max-[650px]:px-[22px] max-[650px]:pb-[23px] max-[650px]:pt-[85px]">
      <div className="pointer-events-none absolute -bottom-[350px] -right-[190px] h-[600px] w-[850px] bg-[radial-gradient(ellipse,#f25321_0%,#fa9871_25%,#fff7f400_68%)] opacity-[.88] blur-[34px] max-[650px]:-bottom-[310px] max-[650px]:-right-[350px]" />
      <div className="reveal relative max-w-[690px]">
        <span className={pill}>LET'S BUILD WHAT'S NEXT</span>
        <h2 className={`${h2} !mt-[25px]`}>Let's make it work<br />for your business<span className="text-primary">.</span></h2>
        <p className="mb-[30px] mt-[22px] max-w-[420px] leading-[1.7] text-[#606a63]">
          Tell us what you're working toward. We'll help you find the right way forward.
        </p>
        <div className="inline-block rounded border border-[#eab7a6] bg-[#fff9f6] px-4 py-3 text-xs text-[#9e4a2d]">
          Consultation booking details coming soon.
        </div>
      </div>
      <footer className="relative mt-[125px] flex items-center justify-between gap-5 border-t border-[#bd8c7840] pt-[25px] text-[11px] text-[#5a625c] max-[900px]:flex-wrap max-[650px]:mt-[120px] max-[650px]:grid max-[650px]:grid-cols-2 max-[650px]:gap-[18px]">
        <div className="max-[650px]:col-span-full"><Logo small /></div>
        <span>Building AI That Works for Business</span>
        <a href="#home">Back to top ↑</a>
        <span className="max-[650px]:col-span-full">© {new Date().getFullYear()} OnlyUs Labs</span>
      </footer>
    </section>
  );
}
