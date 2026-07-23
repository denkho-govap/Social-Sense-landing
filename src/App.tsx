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
  Send,
  Lightbulb,
} from "lucide-react";
import { PostStack } from "./components/PostStack";

// ----- FAQ Item -----
const faqList = [
  {
    question: "Social Sense tương thích với thiết bị nào?",
    answer: "Social Sense hiện tại tối ưu tốt nhất cho hệ điều hành Android (hỗ trợ Android 8.0 trở lên). Bạn có thể tải trực tiếp bản thử nghiệm APK về thiết bị để cài đặt ngay."
  },
  {
    question: "Làm thế nào để cá nhân hoá AI?",
    answer: "Bạn chỉ cần cung cấp các bài viết mẫu hoặc lựa chọn giọng văn mong muốn (hài hước, chuyên nghiệp, truyền cảm hứng...). AI sẽ tự học và tinh chỉnh phong cách viết đúng theo thương hiệu của bạn."
  },
  {
    question: "Dữ liệu của tôi có bảo mật không?",
    answer: "Tuyệt đối an toàn. Tất cả dữ liệu bài viết, ý tưởng và thông tin cá nhân của bạn đều được mã hóa theo tiêu chuẩn bảo mật cao và không chia sẻ cho bên thứ ba."
  },
  {
    question: "Tôi có thể dùng thử miễn phí không?",
    answer: "Hoàn toàn miễn phí! Bạn có thể tải tệp APK và trải nghiệm các tính năng cốt lõi của Social Sense mà không cần đăng ký thẻ thanh toán."
  }
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border border-blue-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full min-h-[50px] flex items-center justify-between px-5 text-left py-3.5 hover:bg-blue-50/50 transition-colors"
      >
        <span className="text-[13.5px] font-bold text-slate-800 leading-snug pr-2">{question}</span>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-blue-600" : "text-slate-400"}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 pt-2 text-[12px] text-slate-600 leading-relaxed border-t border-blue-50 bg-blue-50/30">
          {answer}
        </div>
      )}
    </div>
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
      alert(`Cảm ơn bạn đã đăng ký trải nghiệm với email: ${email}`);
      setEmail("");
      registrationRef.current?.blur();
    }
  };

  return (
    <div
      className="min-h-screen font-sans text-slate-900 selection:bg-blue-400 selection:text-white flex flex-col w-full relative overflow-x-hidden"
      style={{ background: "#EFF6FF" }}
    >

      {/* ════════════════════════════════════════════════════════════════
          MOBILE VIEW ONLY (< md)
         ════════════════════════════════════════════════════════════════ */}
      <div className="block md:hidden w-full max-w-[480px] mx-auto shadow-2xl relative" style={{ background: "#EFF6FF" }}>
        
        {/* NAV (Mobile Sticky Header) */}
        <div className="sticky top-0 z-50 px-3 py-2 bg-blue-50/80 backdrop-blur-lg border-b border-blue-200/60 shadow-sm">
          <nav className="w-full h-11 bg-slate-800/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-around px-3 shadow-md">
            {[
              { label: "Về chúng tôi", target: "about" },
              { label: "Tính năng", target: "features-mobile" },
              { label: "Tips sử dụng", target: "posts" },
              { label: "F&Q", target: "faq" },
            ].map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-white text-[11px] font-semibold tracking-wide hover:text-blue-300 transition-colors whitespace-nowrap px-1.5 py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* HERO (Mobile) */}
        <section id="about" className="pt-6 flex flex-col relative z-10" style={{ overflow: "hidden", background: "#EFF6FF" }}>
          <div className="px-6 mb-4">
            <img src="/logo.png" alt="Social Sense" className="h-9 w-auto object-contain" />
          </div>

          <div className="px-6 z-20" style={{ width: "65%" }}>
            <h1 className="text-[34px] font-black leading-[1.15] tracking-tight text-slate-900">
              Trợ lý tí hon <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                cho các nhà sáng tạo
              </span>
            </h1>
          </div>

          {/* Stickman (Mobile) */}
          <div style={{ position: "absolute", right: "-35px", top: "25px", width: "320px", height: "360px", overflow: "hidden", zIndex: 30, pointerEvents: "none" }}>
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

          {/* White CTA card (Mobile with 'Đăng ký trải nghiệm' button) */}
          <div className="bg-white w-full relative px-6 pt-8 pb-7 rounded-t-[30px]" style={{ marginTop: "180px", zIndex: 20, boxShadow: "0 -4px 20px rgba(59,130,246,0.12)" }}>
            <div className="flex flex-col gap-3 w-full max-w-[320px] mx-auto">
              <a
                href="https://drive.google.com/drive/folders/1Cyp88viSs6DUMPWnxFKvtknxyuWIaxMy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full h-13 px-5 rounded-2xl active:scale-95 transition-all duration-150 shadow-md"
                style={{
                  background: "#A4C639",
                  boxShadow: "0 4px 14px rgba(164,198,57,0.35)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 48 48" fill="#1A1A1A" className="shrink-0">
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
                  <span className="text-[9.5px] font-semibold" style={{ color: "rgba(0,0,0,0.6)" }}>Tải về cho Android</span>
                  <span className="text-[13.5px] font-extrabold tracking-tight text-[#1A1A1A]">Dùng thử miễn phí</span>
                </span>
              </a>

              {/* Added explicit 'Đăng ký trải nghiệm' button for mobile */}
              <button
                type="button"
                onClick={focusRegistration}
                className="w-full h-11 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center transition-all shadow-md active:scale-95"
              >
                Đăng ký trải nghiệm
              </button>
            </div>
          </div>
        </section>

        {/* CORE BELIEFS (Mobile) */}
        <section className="py-8 flex flex-col items-center z-10" style={{ background: "#EFF6FF" }}>
          <div className="relative w-full max-w-[420px]" style={{ aspectRatio: "1 / 1" }}>
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
              <div key={i} className="absolute flex items-center justify-center rounded-full" style={{ width: size, aspectRatio: "1/1", ...pos, background: "#3B82F6", boxShadow: "0 2px 8px rgba(59,130,246,0.25)" }}>
                <Icon className="text-white" style={{ width: "45%", height: "45%" }} />
              </div>
            ))}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-12 text-center">
              <p className="text-[11px] font-bold mb-1.5" style={{ color: "#3B82F6" }}>Chúng tôi tin rằng</p>
              <h2 className="text-[20px] font-bold leading-[1.25] text-slate-800">
                mỗi ý tưởng đều xứng đáng<br />được bắt đầu
              </h2>
            </div>
          </div>
        </section>

        {/* FEATURES (Mobile with rich visual images) */}
        <section id="features-mobile" className="flex flex-col items-center w-full z-10" style={{ background: "#EFF6FF" }}>
          <div className="mt-2 mb-6 px-5 py-2 rounded-full bg-blue-100 border border-blue-200 shadow-sm">
            <p className="text-[10px] font-extrabold tracking-widest text-blue-600">SOCIAL SENSE CÓ NHỮNG GÌ?</p>
          </div>

          <div className="w-full space-y-4 px-4 pb-10">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-blue-100 p-5">
              <div className="flex gap-4 items-center mb-3">
                <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#60A5FA,#3B82F6)" }}>
                  <ImageIcon className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-slate-900">Không lo bế tắc</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Công cụ gợi ý caption, xây dựng kịch bản video xu hướng và thiết kế bài đăng theo ý muốn.</p>
                </div>
              </div>
              <div className="w-full overflow-hidden rounded-2xl border border-blue-100/80 shadow-sm mt-2">
                <img src="/card_features.png" alt="Không lo bế tắc" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="h-1 w-full mt-4 rounded-full" style={{ background: "linear-gradient(90deg,#60A5FA,#93C5FD)" }} />
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-blue-100 p-5">
              <div className="flex gap-4 items-center mb-3">
                <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#3B82F6,#2563EB)" }}>
                  <BarChart2 className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-slate-900">Hỗ trợ qua các con số</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Báo cáo số liệu hữu ích, giúp bạn thấu hiểu nền tảng và tối ưu thời điểm đăng bài.</p>
                </div>
              </div>
              <div className="w-full overflow-hidden rounded-2xl border border-blue-100/80 shadow-sm mt-2">
                <img src="/card_trend.png" alt="Hỗ trợ qua các con số" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="h-1 w-full mt-4 rounded-full" style={{ background: "linear-gradient(90deg,#3B82F6,#60A5FA)" }} />
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-blue-100 p-5">
              <div className="flex gap-4 items-center mb-3">
                <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#93C5FD,#60A5FA)" }}>
                  <Sparkles className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-slate-900">Xây dựng phong cách mình muốn</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Cá nhân hoá AI theo từng người dùng để truyền tải chuẩn phong cách thương hiệu.</p>
                </div>
              </div>
              <div className="w-full overflow-hidden rounded-2xl border border-blue-100/80 shadow-sm mt-2">
                <img src="/card_engagement.png" alt="Xây dựng phong cách" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="h-1 w-full mt-4 rounded-full" style={{ background: "linear-gradient(90deg,#93C5FD,#3B82F6)" }} />
            </div>
          </div>
        </section>

        {/* TIPS SỬ DỤNG (Mobile) */}
        <section id="posts" className="pt-8 pb-14 flex flex-col items-center w-full z-10 relative overflow-hidden" style={{ background: "#DBEAFE" }}>
          <div className="bg-white px-5 py-2 rounded-full mb-8 border border-blue-200 shadow-sm flex items-center gap-2">
            <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
            <p className="text-[10px] font-extrabold tracking-widest text-blue-600">TIPS SỬ DỤNG</p>
          </div>
          <PostStack />
        </section>

        {/* FAQ (Mobile) */}
        <section id="faq" className="pt-10 pb-12 flex flex-col items-center w-full z-10 px-5" style={{ background: "#EFF6FF" }}>
          <div className="px-5 py-2 rounded-full mb-8 bg-blue-100 border border-blue-200 shadow-sm">
            <p className="text-[10px] font-extrabold tracking-widest text-blue-600">CÁC CÂU HỎI THƯỜNG GẶP</p>
          </div>
          <div className="w-full rounded-3xl p-4 space-y-3 bg-blue-100/60 border border-blue-200">
            {faqList.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>

        {/* FOOTER (Mobile with Visible Submit Button) */}
        <section id="contact" className="pt-10 pb-8 px-6 text-white w-full z-10" style={{ background: "#3B82F6" }}>
          <div className="flex gap-4 items-start mb-8">
            <img src="/logo.png" alt="Social Sense" className="h-8 w-auto mt-1 object-contain" style={{ filter: "brightness(0) invert(1)", opacity: 0.95 }} />
            <p className="text-[10.5px] leading-relaxed flex-1 text-blue-50">
              Social Sense - Trợ lý AI hỗ trợ các nhà sáng tạo nội dung tự động tạo bài viết, phân tích chỉ số và bắt trend hiệu quả.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-bold mb-2 text-white">Liên hệ với chúng tôi</h3>
              <div className="flex h-11 rounded-full overflow-hidden shadow-sm bg-white p-1">
                <div className="w-16 flex items-center justify-center text-[11px] font-bold shrink-0 bg-blue-100 text-blue-700 rounded-full my-0.5 ml-0.5">
                  Gmail
                </div>
                <div className="flex-1 bg-white flex items-center px-3">
                  <a href="mailto:socialsense@gmail.com" className="text-xs font-bold text-blue-600 truncate">
                    socialsense@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-2 text-white">Đăng ký bản thử nghiệm</h3>
              <form onSubmit={handleSubmit} className="flex h-11 rounded-full overflow-hidden shadow-sm bg-white p-1">
                <div className="w-16 flex items-center justify-center text-[11px] font-bold shrink-0 bg-blue-100 text-blue-700 rounded-full my-0.5 ml-0.5">
                  Gmail
                </div>
                <div className="flex-1 bg-white flex items-center px-2">
                  <input
                    ref={registrationRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email của bạn"
                    required
                    className="w-full outline-none bg-transparent text-xs text-slate-700 placeholder-slate-400"
                  />
                </div>
                {/* Visible Submit Button */}
                <button
                  type="submit"
                  className="px-4 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs rounded-full flex items-center gap-1 transition-all shrink-0 shadow-sm"
                >
                  <span>Gửi</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

          <p className="text-[10px] mt-12 text-center font-medium text-blue-100/70">
            © 2026 SocialSense. Bảo lưu mọi quyền.
          </p>
        </section>

      </div>


      {/* ════════════════════════════════════════════════════════════════
          DESKTOP VIEW ONLY (>= md)
         ════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:flex flex-col w-full min-h-screen" style={{ background: "#EFF6FF" }}>
        
        {/* DESKTOP HEADER (Sticky Nav) */}
        <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-blue-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Social Sense" className="h-10 w-auto object-contain" />
            </div>

            <div className="flex items-center gap-10">
              <button onClick={() => scrollToSection("about-desktop")} className="text-slate-700 hover:text-blue-600 font-bold text-sm transition-colors">Về chúng tôi</button>
              <button onClick={() => scrollToSection("features-desktop")} className="text-slate-700 hover:text-blue-600 font-bold text-sm transition-colors">Tính năng</button>
              <button onClick={() => scrollToSection("posts-desktop")} className="text-slate-700 hover:text-blue-600 font-bold text-sm transition-colors">Tips sử dụng</button>
              <button onClick={() => scrollToSection("faq-desktop")} className="text-slate-700 hover:text-blue-600 font-bold text-sm transition-colors">F&Q</button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={focusRegistration}
                className="px-5 py-2.5 rounded-full bg-blue-50 text-blue-600 font-bold text-xs hover:bg-blue-100 transition-all border border-blue-200"
              >
                Đăng ký trải nghiệm
              </button>
              <a
                href="https://drive.google.com/drive/folders/1Cyp88viSs6DUMPWnxFKvtknxyuWIaxMy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-slate-900 font-bold text-xs transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95"
                style={{ background: "#A4C639" }}
              >
                <Download className="w-4 h-4 text-slate-900" />
                <span>Tải APK Android</span>
              </a>
            </div>
          </div>
        </header>

        {/* DESKTOP HERO */}
        <section id="about-desktop" className="py-20 px-8 max-w-7xl mx-auto w-full grid grid-cols-12 gap-12 items-center">
          <div className="col-span-7 flex flex-col items-start pr-4">
            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight mb-6">
              Trợ lý tí hon <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                cho các nhà sáng tạo
              </span>
            </h1>

            <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Social Sense mang tới bộ công cụ AI thông minh hỗ trợ bạn lên ý tưởng, tự động tạo bài viết hấp dẫn, phân tích chỉ số truyền thông và nắm bắt sớm các xu hướng nóng nhất.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="https://drive.google.com/drive/folders/1Cyp88viSs6DUMPWnxFKvtknxyuWIaxMy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3.5 px-8 py-4 rounded-2xl text-slate-900 font-bold text-base transition-all shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-95"
                style={{ background: "#A4C639" }}
              >
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
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-xs font-semibold text-slate-800/70">Tải về cho Android</span>
                  <span className="text-base font-extrabold text-[#1A1A1A]">Dùng thử miễn phí</span>
                </div>
              </a>

              <button
                onClick={focusRegistration}
                className="px-7 py-4 rounded-2xl bg-white border border-blue-200 text-blue-600 font-bold text-base hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
              >
                Đăng ký trải nghiệm
              </button>
            </div>
          </div>

          {/* Desktop Stickman Showcase Frame */}
          <div className="col-span-5 relative w-full h-[460px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-sky-200/30 rounded-3xl filter blur-2xl -z-10" />
            <div className="w-full h-full bg-white/80 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-6 relative overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-full pointer-events-none">
                <img
                  src="/stickman.png"
                  alt="Social Sense Stickman"
                  className={stickmanReady ? "stickman-animate" : ""}
                  style={{
                    position: "absolute",
                    width: "950px",
                    maxWidth: "none",
                    height: "auto",
                    top: "-210px",
                    left: "-250px",
                    opacity: stickmanReady ? undefined : 0,
                    transform: stickmanReady ? undefined : "translateX(500px)",
                    filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.12))",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* DESKTOP CORE BELIEFS */}
        <section className="py-20 bg-gradient-to-b from-[#EFF6FF] via-[#DBEAFE]/40 to-[#EFF6FF]">
          <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
            <div className="relative w-full max-w-[460px]" style={{ aspectRatio: "1 / 1" }}>
              {[
                { Icon: Mic,         pos: { left: "4%",  top: "43%",   transform: "translateY(-50%)" }, size: "14%" },
                { Icon: Heart,       pos: { left: "20%", top: "12%"  },                                 size: "15%" },
                { Icon: ShoppingBag, pos: { right:"20%", top: "10%"  },                                 size: "15%" },
                { Icon: Bug,         pos: { right:"4%",  top: "30%"  },                                 size: "14%" },
                { Icon: Download,    pos: { right:"5%",  top: "57%"  },                                 size: "14%" },
                { Icon: Monitor,     pos: { right:"20%", bottom:"8%" },                                 size: "16%" },
                { Icon: Headphones,  pos: { left: "20%", bottom:"8%" },                                 size: "16%" },
                { Icon: Camera,      pos: { left: "4%",  top: "57%"  },                                 size: "14%" },
              ].map(({ Icon, pos, size }, i) => (
                <div
                  key={i}
                  className="absolute flex items-center justify-center rounded-full transition-transform hover:scale-125 duration-300 cursor-pointer shadow-lg"
                  style={{
                    width: size, aspectRatio: "1/1", ...pos,
                    background: "#3B82F6",
                    boxShadow: "0 6px 16px rgba(59,130,246,0.30)",
                  }}
                >
                  <Icon className="text-white" style={{ width: "48%", height: "48%" }} />
                </div>
              ))}

              <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
                <p className="text-base font-bold mb-3 tracking-wide" style={{ color: "#3B82F6" }}>Chúng tôi tin rằng</p>
                <h2 className="text-3xl lg:text-4xl font-extrabold leading-snug text-slate-800">
                  mỗi ý tưởng đều xứng đáng<br />được bắt đầu
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* DESKTOP FEATURES (With visual images) */}
        <section id="features-desktop" className="py-20 px-8 max-w-7xl mx-auto w-full">
          <div className="text-center mb-14">
            <span className="px-6 py-2.5 rounded-full text-xs lg:text-sm font-extrabold tracking-widest bg-blue-100 text-blue-600 border border-blue-200 inline-block shadow-sm">
              SOCIAL SENSE CÓ NHỮNG GÌ?
            </span>
          </div>

          <div className="grid grid-cols-3 gap-8 items-stretch">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl p-7 border border-blue-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1.5 duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md" style={{ background: "linear-gradient(135deg,#60A5FA,#3B82F6)" }}>
                    <ImageIcon className="text-white w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">Không lo bế tắc</h3>
                    <p className="text-xs text-blue-600 font-semibold">Tự động gợi ý & tạo nội dung</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">Gợi ý caption sáng tạo, xây dựng kịch bản video trend và thiết kế hình ảnh độc đáo.</p>
                
                {/* Visual Image */}
                <div className="w-full overflow-hidden rounded-2xl border border-blue-100 shadow-sm">
                  <img src="/card_features.png" alt="Không lo bế tắc" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="h-1.5 w-full rounded-full mt-6" style={{ background: "linear-gradient(90deg,#60A5FA,#93C5FD)" }} />
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-3xl p-7 border border-blue-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1.5 duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md" style={{ background: "linear-gradient(135deg,#3B82F6,#2563EB)" }}>
                    <BarChart2 className="text-white w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">Hỗ trợ qua các con số</h3>
                    <p className="text-xs text-blue-600 font-semibold">Báo cáo & phân tích chỉ số</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">Phân tích hiệu quả kênh, đo lường tương tác giúp bạn tối ưu kế hoạch đăng bài.</p>
                
                {/* Visual Image */}
                <div className="w-full overflow-hidden rounded-2xl border border-blue-100 shadow-sm">
                  <img src="/card_trend.png" alt="Hỗ trợ qua các con số" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="h-1.5 w-full rounded-full mt-6" style={{ background: "linear-gradient(90deg,#3B82F6,#60A5FA)" }} />
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-3xl p-7 border border-blue-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1.5 duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md" style={{ background: "linear-gradient(135deg,#93C5FD,#60A5FA)" }}>
                    <Sparkles className="text-white w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">Xây dựng phong cách</h3>
                    <p className="text-xs text-blue-600 font-semibold">Cá nhân hóa AI độc bản</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">Huấn luyện giọng văn AI chuẩn theo thương hiệu cá nhân của riêng bạn.</p>
                
                {/* Visual Image */}
                <div className="w-full overflow-hidden rounded-2xl border border-blue-100 shadow-sm">
                  <img src="/card_engagement.png" alt="Xây dựng phong cách" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="h-1.5 w-full rounded-full mt-6" style={{ background: "linear-gradient(90deg,#93C5FD,#3B82F6)" }} />
            </div>
          </div>
        </section>

        {/* DESKTOP TIPS SỬ DỤNG */}
        <section id="posts-desktop" className="py-20 bg-blue-100/60 border-y border-blue-200/50">
          <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
            <span className="px-6 py-2.5 rounded-full text-xs lg:text-sm font-extrabold tracking-widest bg-white text-blue-600 border border-blue-200 mb-12 shadow-sm flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-blue-600" />
              <span>TIPS SỬ DỤNG</span>
            </span>
            <div className="w-full max-w-4xl flex justify-center">
              <PostStack />
            </div>
          </div>
        </section>

        {/* DESKTOP FAQ */}
        <section id="faq-desktop" className="py-20 px-8 max-w-7xl mx-auto w-full flex flex-col items-center">
          <span className="px-6 py-2.5 rounded-full text-xs lg:text-sm font-extrabold tracking-widest bg-blue-100 text-blue-600 border border-blue-200 mb-10">
            CÁC CÂU HỎI THƯỜNG GẶP
          </span>

          <div className="w-full max-w-4xl bg-blue-100/60 rounded-3xl p-6 lg:p-8 border border-blue-200 space-y-4">
            {faqList.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>

        {/* DESKTOP FOOTER (With Visible Submit Button) */}
        <footer id="contact-desktop" className="bg-[#3B82F6] text-white pt-16 pb-12 px-8 mt-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 items-center pb-12 border-b border-white/20">
            <div className="col-span-5 pr-6">
              <img src="/logo.png" alt="Social Sense" className="h-11 w-auto mb-5 object-contain" style={{ filter: "brightness(0) invert(1)", opacity: 0.95 }} />
              <p className="text-sm text-blue-50 leading-relaxed max-w-md">
                Social Sense - Trợ lý AI sáng tạo nội dung hàng đầu cho TikTok, Facebook và Instagram. Giúp bạn tiết kiệm 80% thời gian lên ý tưởng & viết bài.
              </p>
            </div>

            <div className="col-span-7 grid grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-base font-bold mb-3 text-white">Liên hệ với chúng tôi</h3>
                <div className="flex h-12 rounded-full overflow-hidden shadow-md bg-white p-1">
                  <div className="w-20 flex items-center justify-center text-xs font-bold shrink-0 bg-blue-100 text-blue-700 rounded-full my-0.5 ml-0.5">
                    Gmail
                  </div>
                  <div className="flex-1 bg-white flex items-center px-4">
                    <a href="mailto:socialsense@gmail.com" className="text-sm font-bold text-blue-600 hover:underline truncate">
                      socialsense@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold mb-3 text-white">Đăng ký bản thử nghiệm</h3>
                <form onSubmit={handleSubmit} className="flex h-12 rounded-full overflow-hidden shadow-md bg-white p-1">
                  <div className="w-20 flex items-center justify-center text-xs font-bold shrink-0 bg-blue-100 text-blue-700 rounded-full my-0.5 ml-0.5">
                    Gmail
                  </div>
                  <div className="flex-1 bg-white flex items-center px-3">
                    <input
                      ref={registrationRef}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email của bạn"
                      required
                      className="w-full outline-none bg-transparent text-sm text-slate-700 placeholder-slate-400"
                    />
                  </div>
                  {/* Visible Submit Button */}
                  <button
                    type="submit"
                    className="px-5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs rounded-full flex items-center gap-1.5 transition-all shrink-0 shadow-sm"
                  >
                    <span>Gửi</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto pt-8 flex items-center justify-between text-xs text-blue-100 font-medium">
            <p>© 2026 SocialSense. Bảo lưu mọi quyền.</p>
            <div className="flex gap-6">
              <button onClick={() => scrollToSection("about-desktop")} className="hover:underline">Về chúng tôi</button>
              <button onClick={() => scrollToSection("features-desktop")} className="hover:underline">Tính năng</button>
              <button onClick={() => scrollToSection("posts-desktop")} className="hover:underline">Tips sử dụng</button>
              <button onClick={() => scrollToSection("faq-desktop")} className="hover:underline">Hỏi đáp</button>
            </div>
          </div>
        </footer>

      </div>

    </div>
  );
}
