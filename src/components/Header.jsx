import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "../data";
import { btn, glow } from "../styles";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="relative z-10 flex animate-fade-down [animation-delay:2s] h-[83px] items-center justify-between border-b border-[#31231a0a] bg-hero px-[5.2%] max-[900px]:h-[72px] max-[650px]:h-[65px] max-[650px]:px-[18px]">
      <Logo onClick={close} />
      <nav aria-label="Main navigation"
        className={`flex items-center gap-[clamp(17px,2.4vw,37px)] text-[13px] text-[#626764] max-[900px]:gap-[13px] max-[900px]:text-[11px] max-[650px]:absolute max-[650px]:inset-x-0 max-[650px]:top-[65px] max-[650px]:flex-col max-[650px]:items-start max-[650px]:gap-[18px] max-[650px]:bg-hero max-[650px]:px-[25px] max-[650px]:py-5 max-[650px]:text-sm max-[650px]:shadow-[0_16px_20px_#28291e18] ${open ? "max-[650px]:flex" : "max-[650px]:hidden"}`}>
        {navLinks.map(([name, href]) => (
          <a key={name} href={href} onClick={close} className="transition-colors duration-[250ms] hover:text-primary">{name}</a>
        ))}
      </nav>
      <a href="#contact" className={`${btn} ${glow} h-9 rounded-[18px] px-[19px] text-xs max-[650px]:hidden`}>
        Let's talk <ArrowUpRight size={15} />
      </a>
      <button aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}
        className="hidden size-9 items-center justify-center rounded-md max-[650px]:inline-flex">
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}