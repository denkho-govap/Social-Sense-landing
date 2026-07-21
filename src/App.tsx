/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from "react";
import {
  Mic,
  Heart,
  ShoppingBag,
  Bug,
  Camera,
  Headphones,
  Monitor,
  Download,
  ChevronDown,
  ImageIcon,
  Sparkles,
  BarChart2,
} from "lucide-react";
import { PostStack } from "./components/PostStack";

// ── Hệ màu dịu nhẹ ──
// BG chính : #EFF6FF  (Xanh nhạt dịu)
// Card tint : #DBEAFE  (Xanh pastel)
// Accent    : #3B82F6  (Xanh dương dịu)
// Soft Blue : #60A5FA  (Xanh dương nhạt)

// ----- FAQ Item -----
const FAQItem = ({ question }: { question: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full h-12 bg-white rounded-2xl flex items-center justify-between px-5 transition-all shadow-sm"
      style={{ border: "1px solid #BFDBFE" }}
    >
      <span className="text-xs font-semibold text-slate-600 text-left line-clamp-1">{question}</span>
      <ChevronDown
        className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        style={{ color: "#3B82F6" }}
      />
    </button>
  );
};

export default function App() {
  const registrationRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [stickmanReady, setStickmanReady] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStickmanReady(true), 120);
    return () => { clearTimeout(t1); };
  }, []);

  const scrollToSection = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const focusRegistration = () => {
    scrollToSection("contact");
    window.setTimeout(() => registrationRef.current?.focus(), 450);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) {
      alert(`Cảm ơn bạn đã đăng ký với email: ${email}`);
      setEmail("");
      registrationRef.current?.blur();
    }
  };

  return (
    <div
      className="min-h-screen font-sans text-black selection:bg-blue-300 selection:text-white flex flex-col w-full max-w-[480px] mx-auto relative shadow-2xl"
      style={{ background: "#EFF6FF" }}
    >

      {/* ══════════ NAV ══════════ */}
      <div className="sticky top-4 z-50 px-4 mt-4">
        <nav className="w-full h-12 bg-slate-500/60 backdrop-blur-md border border-white/20 rounded-[20px] flex items-center justify-around px-4 shadow-sm">
          {[
            { label: "Về chúng tôi", target: "about" },
            { label: "Bài viết", target: "posts" },
            { label: "F&Q", target: "faq" },
          ].map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className="text-white text-xs font-medium tracking-wide hover:opacity-80 transition-opacity whitespace-nowrap px-2 py-2"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* ══════════ HERO ══════════ */}
      <section
        id="about"
        className="pt-8 flex flex-col relative z-10"
        style={{ overflow: "hidden", background: "#EFF6FF" }}
      >
        <div className="px-6 mb-5">
          <img src="/logo.png" alt="Social Sense" className="h-10 w-auto object-contain" />
        </div>

        <div className="px-6 z-20" style={{ width: "60%" }}>
          <h1 className="text-[38px] font-bold leading-[1.1] tracking-tight text-black">
            Trợ lí tí hon <br />cho các nhà<br />sáng tạo
          </h1>
        </div>

        {/* Stickman */}
        <div style={{ position: "absolute", right: "-30px", top: "30px", width: "320px", height: "360px", overflow: "hidden", zIndex: 30, pointerEvents: "none" }}>
          <img
            src="/stickman.png"
            alt="Social Sense Stickman"
            className={stickmanReady ? "stickman-animate" : ""}
            style={{
              position: "absolute", width: "1000px", maxWidth: "none", height: "auto",
              top: "-230px", left: "-272px",
              opacity: stickmanReady ? undefined : 0,
              transform: stickmanReady ? undefined : "translateX(500px)",
              filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.10))",
            }}
          />
        </div>

        {/* White CTA card */}
        <div className="bg-white w-full relative px-6 pt-10 pb-8 rounded-t-[30px]" style={{ marginTop: "200px", zIndex: 20, boxShadow: "0 -2px 16px rgba(164,198,57,0.08)" }}>
          <a
            href="https://drive.google.com/drive/folders/1Cyp88viSs6DUMPWnxFKvtknxyuWIaxMy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 w-full max-w-[290px] h-14 px-5 rounded-2xl active:scale-95 transition-all duration-150"
            style={{
              background: "#A4C639",
              boxShadow: "0 2px 12px rgba(164,198,57,0.30)",
            }}
          >
            {/* Android robot icon */}
            <svg width="28" height="28" viewBox="0 0 48 48" fill="#1A1A1A" className="shrink-0">
              <line x1="16" y1="9" x2="11" y2="3" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="32" y1="9" x2="37" y2="3" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M8 22 C8 13.16 15.16 6 24 6 C32.84 6 40 13.16 40 22 L8 22 Z"/>
              <circle cx="17.5" cy="17" r="2" fill="#A4C639"/>
              <circle cx="30.5" cy="17" r="2" fill="#A4C639"/>
              <rect x="8" y="23" width="32" height="18" rx="3"/>
              <rect x="1" y="23" width="6" height="14" rx="3"/>
              <rect x="41" y="23" width="6" height="14" rx="3"/>
              <rect x="12" y="40" width="8" height="7" rx="3"/>
              <rect x="28" y="40" width="8" height="7" rx="3"/>
            </svg>

            <span className="flex flex-col leading-tight">
              <span className="text-[10px] font-semibold" style={{ color: "rgba(0,0,0,0.55)" }}>Tải về cho Android</span>
              <span className="text-[14px] font-bold tracking-tight text-[#1A1A1A]">Dùng thử miễn phí</span>
            </span>
          </a>
        </div>
      </section>

      {/* ══════════ CORE BELIEFS ══════════ */}
      <section className="py-8 flex flex-col items-center z-10" style={{ background: "#EFF6FF" }}>
        <div
          className="relative mx-4 rounded-3xl overflow-hidden"
          style={{
            width: "calc(100% - 32px)", maxWidth: "420px", aspectRatio: "1 / 1",
            background: "linear-gradient(145deg, #DBEAFE 0%, #EFF6FF 100%)",
            border: "1px solid #BFDBFE",
            boxShadow: "0 4px 24px rgba(59,130,246,0.06)",
          }}
        >
          {/* 8 icons — màu xanh dịu #3B82F6 */}
          {[
            { Icon: Mic,         pos: { left: "4%",  top: "43%",   transform: "translateY(-50%)" }, size: "13%" },
            { Icon: Heart,       pos: { left: "20%", top: "13%"  },                                 size: "15%" },
            { Icon: ShoppingBag, pos: { right:"20%", top: "10%"  },                                 size: "15%" },
            { Icon: Bug,         pos: { right:"4%",  top: "30%"  },                                 size: "13%" },
            { Icon: Download,    pos: { right:"5%",  top: "57%"  },                                 size: "13%" },
            { Icon: Monitor,     pos: { right:"20%", bottom:"9%" },                                 size: "16%" },
            { Icon: Headphones,  pos: { left: "20%", bottom:"9%" },                                 size: "16%" },
            { Icon: Camera,      pos: { left: "4%",  top: "57%"  },                                 size: "13%" },
          ].map(({ Icon, pos, size }, i) => (
            <div
              key={i}
              className="absolute flex items-center justify-center rounded-full"
              style={{
                width: size, aspectRatio: "1/1", ...pos,
                background: "#3B82F6",
                boxShadow: "0 2px 8px rgba(59,130,246,0.25)",
              }}
            >
              <Icon className="text-white" style={{ width: "45%", height: "45%" }} />
            </div>
          ))}

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-12 text-center">
            <p className="text-[11px] font-semibold mb-1.5" style={{ color: "#3B82F6" }}>Chúng tôi tin rằng</p>
            <h2 className="text-[20px] font-bold leading-[1.25] text-slate-800">
              mỗi ý tưởng đều xứng đáng
              <br />được bắt đầu
            </h2>
          </div>
        </div>
      </section>

      {/* ══════════ FEATURES ══════════ */}
      <section className="flex flex-col items-center w-full z-10" style={{ background: "#EFF6FF" }}>
        {/* Badge */}
        <div className="mt-2 mb-8 px-5 py-2 rounded-full" style={{ background: "#DBEAFE", border: "1px solid #BFDBFE" }}>
          <p className="text-[10px] font-bold tracking-widest" style={{ color: "#3B82F6" }}>SOCIAL SENSE CÓ NHỮNG GÌ?</p>
        </div>

        {/* Cards wrapper */}
        <div className="w-full space-y-3 px-4 pb-10">

          {/* Feature 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm" style={{ border: "1px solid #DBEAFE" }}>
            <div className="p-5 flex gap-4 items-center">
              <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#60A5FA,#3B82F6)" }}>
                <ImageIcon className="text-white w-7 h-7" />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-slate-800 mb-1">Không lo bế tắc</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">công cụ gợi ý caption, tạo hình ảnh bài đăng theo ý muốn của bạn</p>
              </div>
            </div>
            <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#60A5FA,#93C5FD)" }} />
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm" style={{ border: "1px solid #DBEAFE" }}>
            <div className="p-5 flex gap-4 items-center flex-row-reverse">
              <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#3B82F6,#2563EB)" }}>
                <BarChart2 className="text-white w-7 h-7" />
              </div>
              <div className="flex-1 text-right">
                <h3 className="text-[16px] font-bold text-slate-800 mb-1">Hỗ trợ qua các con số</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">báo cáo số liệu hữu ích, giúp bạn hiểu nền tảng của mình</p>
              </div>
            </div>
            <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#3B82F6,#60A5FA)" }} />
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm" style={{ border: "1px solid #DBEAFE" }}>
            <div className="p-5 flex gap-4 items-center">
              <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#93C5FD,#60A5FA)" }}>
                <Sparkles className="text-white w-7 h-7" />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-slate-800 mb-1">Xây dựng phong cách mình muốn</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">cá nhân hoá AI theo người dùng</p>
              </div>
            </div>
            <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#93C5FD,#3B82F6)" }} />
          </div>

        </div>
      </section>

      {/* ══════════ POSTS ══════════ */}
      <section id="posts" className="pt-8 pb-14 flex flex-col items-center w-full z-10 relative overflow-hidden" style={{ background: "#DBEAFE" }}>
        <div className="bg-white px-5 py-2 rounded-full mb-10" style={{ border: "1px solid #BFDBFE" }}>
          <p className="text-[10px] font-bold tracking-widest" style={{ color: "#3B82F6" }}>CÁC BÀI VIẾT MỚI</p>
        </div>
        <PostStack />
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section id="faq" className="pt-10 pb-12 flex flex-col items-center w-full z-10 px-5" style={{ background: "#EFF6FF" }}>
        <div className="px-5 py-2 rounded-full mb-8" style={{ background: "#DBEAFE", border: "1px solid #BFDBFE" }}>
          <p className="text-[10px] font-bold tracking-widest" style={{ color: "#3B82F6" }}>CÁC CÂU HỎI THƯỜNG GẶP</p>
        </div>
        <div className="w-full rounded-3xl p-4 space-y-3" style={{ background: "#DBEAFE", border: "1px solid #BFDBFE" }}>
          {[
            "Social Sense tương thích với thiết bị nào?",
            "Làm thế nào để cá nhân hoá AI?",
            "Dữ liệu của tôi có bảo mật không?",
            "Tôi có thể dùng thử miễn phí không?",
          ].map((q, i) => <FAQItem key={i} question={q} />)}
        </div>
      </section>

      {/* ══════════ FOOTER (Màu xanh dịu nhẹ, hài hoà) ══════════ */}
      <section id="contact" className="pt-10 pb-8 px-6 text-white w-full z-10" style={{ background: "#3B82F6" }}>
        <div className="flex gap-4 items-start mb-8">
          <img src="/logo.png" alt="Social Sense" className="h-8 w-auto mt-1 object-contain" style={{ filter: "brightness(0) invert(1)", opacity: 0.95 }} />
          <p className="text-[10px] leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.85)" }}>
            Công cụ hỗ trợ các nhà sáng tạo nội dung tạo bài viết, phân tích chỉ số và theo dõi trend cơ bản
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-base font-bold mb-2 text-white">Liên hệ với chúng tôi</h3>
            <div className="flex h-11 rounded-full overflow-hidden shadow-sm">
              <div className="w-20 flex items-center justify-center text-xs font-bold shrink-0" style={{ background: "rgba(255,255,255,0.22)", color: "white" }}>
                Gmail
              </div>
              <div className="flex-1 bg-white flex items-center px-4">
                <a href="mailto:socialsense@gmail.com" className="text-sm font-semibold" style={{ color: "#2563EB" }}>
                  socialsense@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold mb-2 text-white">Hoặc đăng kí để tải bản thử nghiệm</h3>
            <form onSubmit={handleSubmit} className="flex h-11 rounded-full overflow-hidden shadow-sm">
              <div className="w-20 flex items-center justify-center text-xs font-bold shrink-0" style={{ background: "rgba(255,255,255,0.22)", color: "white" }}>
                Gmail
              </div>
              <div className="flex-1 bg-white flex items-center px-4">
                <input
                  ref={registrationRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email của bạn"
                  required
                  className="w-full outline-none bg-transparent text-sm text-slate-600 placeholder-slate-400"
                />
              </div>
              <button type="submit" className="hidden">Submit</button>
            </form>
          </div>
        </div>

        <p className="text-[9px] mt-14 text-center font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>
          © 2026 SocialSense. Bảo lưu mọi quyền.
        </p>
      </section>

    </div>
  );
}

