import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Sparkles, Zap } from "lucide-react";

export const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"yearly" | "monthly">("yearly");

  const pricingData = {
    monthly: [
      {
        id: "starter-monthly",
        name: "GÓI NGƯỜI DÙNG MỚI",
        originalPrice: "179,000 VND",
        price: "79,000 VND",
        unit: "/ tháng",
        cardBg: "bg-white border border-blue-200/80 shadow-xl",
        priceColor: "text-[#3B82F6]",
        originalPriceColor: "text-amber-500 line-through font-semibold",
        titleColor: "text-[#2563EB]",
        starColor: "text-[#3B82F6]",
        dividerLine: "bg-blue-200",
        dividerDot: "bg-blue-500 border-white",
        featuresBg: "bg-[#64A9FF] text-white",
        checkIconBg: "bg-white text-[#2563EB]",
        badge: "Tiết kiệm 56%",
        badgeBg: "bg-blue-100 text-blue-700 border-blue-200",
        buttonStyle: "bg-[#3B82F6] hover:bg-blue-600 text-white shadow-md shadow-blue-500/20",
        features: [
          "50 lượt tạo content/ngày",
          "Ưu tiên xử lý AI",
          "Công cụ phân tích đầy đủ",
          "Tăng lưu lượng kiến thức AI",
        ],
      },
      {
        id: "pro-monthly",
        name: "GÓI NGƯỜI DÙNG CHUYÊN NGHIỆP",
        originalPrice: "179,000 VND",
        price: "99,000 VND",
        unit: "/ tháng",
        cardBg: "bg-gradient-to-b from-[#3B82F6] to-[#2563EB] text-white shadow-2xl shadow-blue-500/30 ring-2 ring-blue-400/40",
        priceColor: "text-white",
        originalPriceColor: "text-pink-200 line-through font-semibold",
        titleColor: "text-white",
        starColor: "text-white",
        dividerLine: "bg-blue-300/40",
        dividerDot: "bg-white border-blue-600",
        featuresBg: "bg-white text-slate-800 shadow-inner",
        checkIconBg: "bg-[#3B82F6] text-white",
        badge: "Khuyên dùng",
        badgeBg: "bg-white/20 text-white border-white/30 backdrop-blur-md",
        buttonStyle: "bg-white hover:bg-blue-50 text-[#2563EB] shadow-lg font-extrabold",
        features: [
          "300 lượt tạo content/ngày",
          "Custom AI theo yêu cầu",
          "Công cụ phân tích mở rộng",
          "Tăng và lưu trữ lưu lượng kiến thức AI",
        ],
      },
    ],
    yearly: [
      {
        id: "starter-yearly",
        name: "GÓI NGƯỜI DÙNG MỚI",
        originalPrice: "1,800,000 VND",
        price: "800,000 VND",
        unit: "/ năm",
        cardBg: "bg-white border border-blue-200/80 shadow-xl",
        priceColor: "text-[#3B82F6]",
        originalPriceColor: "text-amber-500 line-through font-semibold",
        titleColor: "text-[#2563EB]",
        starColor: "text-[#3B82F6]",
        dividerLine: "bg-blue-200",
        dividerDot: "bg-blue-500 border-white",
        featuresBg: "bg-[#64A9FF] text-white",
        checkIconBg: "bg-white text-[#2563EB]",
        badge: "Tiết kiệm 55%",
        badgeBg: "bg-blue-100 text-blue-700 border-blue-200",
        buttonStyle: "bg-[#3B82F6] hover:bg-blue-600 text-white shadow-md shadow-blue-500/20",
        features: [
          "50 lượt tạo content/ngày",
          "Ưu tiên xử lý AI",
          "Công cụ phân tích đầy đủ",
          "Tăng lưu lượng kiến thức AI",
        ],
      },
      {
        id: "pro-yearly",
        name: "GÓI NGƯỜI DÙNG CHUYÊN NGHIỆP",
        originalPrice: "1,992,000 VND",
        price: "1,008,000 VND",
        unit: "/ năm",
        cardBg: "bg-gradient-to-b from-[#3B82F6] to-[#2563EB] text-white shadow-2xl shadow-blue-500/30 ring-2 ring-blue-400/40",
        priceColor: "text-white",
        originalPriceColor: "text-pink-200 line-through font-semibold",
        titleColor: "text-white",
        starColor: "text-white",
        dividerLine: "bg-blue-300/40",
        dividerDot: "bg-white border-blue-600",
        featuresBg: "bg-white text-slate-800 shadow-inner",
        checkIconBg: "bg-[#3B82F6] text-white",
        badge: "Khuyên dùng - Tiết kiệm 50%",
        badgeBg: "bg-white/20 text-white border-white/30 backdrop-blur-md",
        buttonStyle: "bg-white hover:bg-blue-50 text-[#2563EB] shadow-lg font-extrabold",
        features: [
          "300 lượt tạo content/ngày",
          "Custom AI theo yêu cầu",
          "Công cụ phân tích mở rộng",
          "Tăng và lưu trữ lưu lượng kiến thức AI",
        ],
      },
    ],
  };

  const currentPlans = pricingData[billingCycle];

  const handleRegister = (planName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col items-center max-w-5xl mx-auto px-4">
      {/* Billing Cycle Toggle Switch */}
      <div className="flex items-center justify-center mb-10">
        <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-blue-200 shadow-md flex items-center relative">
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`relative px-6 py-2.5 rounded-full text-xs lg:text-sm font-bold transition-all duration-300 cursor-pointer ${
              billingCycle === "monthly"
                ? "bg-[#3B82F6] text-white shadow-md"
                : "text-slate-600 hover:text-blue-600"
            }`}
          >
            Theo Tháng
          </button>

          <button
            type="button"
            onClick={() => setBillingCycle("yearly")}
            className={`relative px-6 py-2.5 rounded-full text-xs lg:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              billingCycle === "yearly"
                ? "bg-[#3B82F6] text-white shadow-md"
                : "text-slate-600 hover:text-blue-600"
            }`}
          >
            <span>Theo Năm</span>
            <span className="bg-amber-400 text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-sm">
              -55%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Layout */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 justify-items-center items-stretch max-w-4xl">
        <AnimatePresence mode="wait">
          {currentPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className={`w-full max-w-[360px] lg:max-w-[390px] rounded-[30px] p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 relative ${plan.cardBg}`}
            >
              {/* Top Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${plan.badgeBg}`}>
                  {plan.badge}
                </span>
                <div className="flex items-center gap-1">
                  <Sparkles className={`w-4 h-4 ${plan.starColor} animate-pulse`} />
                  <Sparkles className={`w-3 h-3 ${plan.starColor} opacity-80`} />
                </div>
              </div>

              {/* Price Header */}
              <div className="mb-2">
                <div className="text-[13px] mb-1">
                  <span className={plan.originalPriceColor}>{plan.originalPrice}</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-2xl lg:text-3xl font-black tracking-tight ${plan.priceColor}`}>
                    {plan.price}
                  </span>
                  <span className="text-xs font-semibold opacity-80">{plan.unit}</span>
                </div>
              </div>

              {/* Decorative Divider Line with Dot */}
              <div className="relative w-full my-4 flex items-center justify-center">
                <div className={`w-full h-[1.5px] ${plan.dividerLine}`} />
                <div className={`absolute w-3 h-3 rounded-full border-2 ${plan.dividerDot}`} />
              </div>

              {/* Plan Title */}
              <h3 className={`text-center font-extrabold text-base lg:text-lg tracking-wide uppercase mb-5 ${plan.titleColor}`}>
                {plan.name}
              </h3>

              {/* Features Container Box */}
              <div className={`rounded-[22px] p-5 mb-6 flex-1 flex flex-col justify-center space-y-3.5 ${plan.featuresBg}`}>
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 font-bold ${plan.checkIconBg}`}>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs lg:text-[13px] font-semibold leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={() => handleRegister(plan.name)}
                className={`w-full py-3.5 rounded-full text-xs lg:text-sm font-extrabold transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center gap-2 ${plan.buttonStyle}`}
              >
                <span>ĐĂNG KÝ NGAY</span>
                <Zap className="w-4 h-4 fill-current" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
