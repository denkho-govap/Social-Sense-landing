import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Sparkles, TrendingUp, UserCheck } from "lucide-react";

const tips = [
  {
    id: 1,
    tipNumber: "TIP 01",
    icon: Sparkles,
    color: "bg-white",
    badge: "SÁNG TẠO NỘI DUNG",
    title: "MẸO TẠO CAPTION TRIỆU VIEW",
    description: "Gõ từ khóa chủ đề bài viết và để trợ lí Social Sense gợi ý ngay caption cuốn hút, kèm hashtag trend phù hợp với từng nền tảng.",
    textColor: "text-slate-900",
    descColor: "text-slate-600",
    badgeBg: "bg-blue-50 text-blue-600 border border-blue-200/60",
    accentColor: "#3B82F6",
  },
  {
    id: 2,
    tipNumber: "TIP 02",
    icon: TrendingUp,
    color: "bg-[#1E293B]",
    badge: "PHÂN TÍCH CHỈ SỐ",
    title: "TỐI ƯU KHUNG GIỜ ĐĂNG BÀI",
    description: "Theo dõi báo cáo chỉ số tương tác trực quan để chọn mốc thời gian khán giả của bạn online đông nhất, tăng 200% lượng tiếp cận.",
    textColor: "text-white",
    descColor: "text-slate-300",
    badgeBg: "bg-slate-800 text-slate-300 border border-slate-700",
    accentColor: "#60A5FA",
  },
  {
    id: 3,
    tipNumber: "TIP 03",
    icon: UserCheck,
    color: "bg-[#3B82F6]",
    badge: "CÁ NHÂN HÓA AI",
    title: "TẠO GIỌNG VĂN ĐỘC BẢN",
    description: "Cung cấp các bài viết mẫu yêu thích của bạn. Trợ lí AI sẽ tự học phong cách, giọng văn (hài hước, chuyên nghiệp...) để áp dụng cho bài mới.",
    textColor: "text-white",
    descColor: "text-blue-100",
    badgeBg: "bg-blue-600 text-white border border-blue-400/40",
    accentColor: "#93C5FD",
  },
];

export const PostStack = () => {
  const [cards, setCards] = useState(tips);

  const nextCard = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const topCard = newCards.shift();
      if (topCard) newCards.push(topCard);
      return newCards;
    });
  };

  const prevCard = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const lastCard = newCards.pop();
      if (lastCard) newCards.unshift(lastCard);
      return newCards;
    });
  };

  const topCard = cards[0];

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      {/* Cards Stack Frame */}
      <div 
        className="relative w-full h-[330px] flex justify-center cursor-pointer perspective-1000" 
        onClick={nextCard}
      >
        <AnimatePresence>
          {cards.map((card, index) => {
            const isTop = index === 0;
            const IconComp = card.icon;

            return (
              <motion.div
                key={card.id}
                layout
                initial={false}
                animate={{
                  scale: 1 - index * 0.04,
                  y: 0,
                  x: isTop ? -20 : index === 1 ? 15 : 50,
                  zIndex: 3 - index,
                  opacity: 1 - index * 0.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className={`absolute w-[285px] h-[310px] rounded-[24px] shadow-xl flex flex-col justify-between p-6 ${card.color} ${
                  isTop ? "border border-blue-200/50 shadow-2xl ring-2 ring-blue-400/30" : "opacity-90"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${card.badgeBg}`}>
                      {card.tipNumber} • {card.badge}
                    </span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-50/20 backdrop-blur-sm">
                      <IconComp className="w-4 h-4 text-blue-500" />
                    </div>
                  </div>

                  <h3 className={`text-[18px] font-extrabold leading-snug tracking-tight mb-3 ${card.textColor}`}>
                    {card.title}
                  </h3>
                  <p className={`text-[12.5px] font-medium leading-relaxed ${card.descColor}`}>
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/20 flex items-center justify-between text-[11px] font-semibold text-blue-500">
                  <span>Chạm hoặc bấm mũi tên để đổi thẻ</span>
                  <ChevronRight className="w-4 h-4 animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows & Controls Bar */}
      <div className="flex items-center justify-between gap-6 mt-4 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-blue-200/60 shadow-md">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prevCard();
          }}
          aria-label="Thẻ trước"
          className="w-9 h-9 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-all active:scale-95 shadow-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1.5">
          {tips.map((t) => (
            <span
              key={t.id}
              className={`h-2 rounded-full transition-all duration-300 ${
                topCard.id === t.id ? "w-6 bg-blue-600" : "w-2 bg-blue-200"
              }`}
            />
          ))}
          <span className="text-xs font-bold text-slate-600 ml-2">
            Tip {topCard.id} / {tips.length}
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            nextCard();
          }}
          aria-label="Thẻ tiếp theo"
          className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-all active:scale-95 shadow-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
