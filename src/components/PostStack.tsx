import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink } from "lucide-react";

const posts = [
  {
    id: 1,
    color: "bg-white",
    badge: "TÍNH NĂNG AI",
    title: "KHÁM PHÁ CÁC TÍNH NĂNG MỚI",
    description: "Tự động gợi ý caption sáng tạo, xây dựng kịch bản video xu hướng và thiết kế hình ảnh độc đáo với trợ lí AI.",
    textColor: "text-slate-900",
    descColor: "text-slate-600",
    badgeBg: "bg-blue-50 text-blue-600 border border-blue-200/60",
    link: "https://pixabay.com/vi/photos/ph%C6%B0%C6%A1ng-ti%E1%BB%87n-truy%E1%BB%81n-th%C3%B4ng-x%C3%A3-h%E1%BB%99i-7647812/",
    btnStyle: "bg-blue-50 text-blue-600 hover:bg-blue-100",
  },
  {
    id: 2,
    color: "bg-[#1E293B]",
    badge: "XU HƯỚNG 2026",
    title: "CÁCH TẠO TREND 2026",
    description: "Nắm bắt sớm các chủ đề nóng nhất, phân tích hành vi người xem và tối ưu thời điểm đăng bài hiệu quả.",
    textColor: "text-white",
    descColor: "text-slate-300",
    badgeBg: "bg-slate-800 text-slate-300 border border-slate-700",
    link: "https://www.istockphoto.com/photo/many-human-hands-with-mobile-phones-and-social-media-icons-likes-and-followers-media-gm2047634113-563079150?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_photo&utm_content=srp_grid_media&utm_term=m%E1%BA%A1ng+x%C3%A3+h%E1%BB%99i",
    btnStyle: "bg-slate-800 text-slate-200 hover:bg-slate-700",
  },
  {
    id: 3,
    color: "bg-[#3B82F6]",
    badge: "TƯƠNG TÁC TỰ NHIÊN",
    title: "BÍ QUYẾT TĂNG TƯƠNG TÁC",
    description: "Cá nhân hóa phong cách truyền thông, thu hút người theo dõi trung thành và gia tăng tỷ lệ gắn kết bài viết.",
    textColor: "text-white",
    descColor: "text-blue-100",
    badgeBg: "bg-blue-600 text-white border border-blue-400/40",
    link: "https://pixabay.com/vi/images/download/x-952091_1920.jpg",
    btnStyle: "bg-white/20 text-white hover:bg-white/30 backdrop-blur-md",
  },
];

export const PostStack = () => {
  const [cards, setCards] = useState(posts);

  const flipCard = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const topCard = newCards.shift();
      if (topCard) newCards.push(topCard);
      return newCards;
    });
  };

  return (
    <div className="relative w-full h-[360px] flex justify-center cursor-pointer perspective-1000" onClick={flipCard}>
      <AnimatePresence>
        {cards.map((card, index) => {
          const isTop = index === 0;

          return (
            <motion.div
              key={card.id}
              layout
              initial={false}
              animate={{
                scale: 1,
                y: 0,
                x: isTop ? -25 : index === 1 ? 15 : 55,
                zIndex: 3 - index,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className={`absolute w-[265px] h-[340px] rounded-[24px] shadow-xl flex flex-col justify-between p-6 ${card.color} ${
                isTop ? "border border-blue-200/40 shadow-2xl ring-1 ring-blue-400/20" : "opacity-90"
              }`}
            >
              {/* Top Section: Badge & External Link */}
              <div className="flex items-center justify-between">
                <span className={`text-[9px] font-extrabold px-3 py-1 rounded-full tracking-wider ${card.badgeBg}`}>
                  {card.badge}
                </span>

                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="Mở bài viết chi tiết"
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold transition-all ${card.btnStyle}`}
                >
                  <span>Mở bài viết</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Main Content: Title & Short Meaningful Paragraph */}
              <div className="my-auto py-2">
                <h3 className={`text-[19px] font-black leading-snug tracking-tight uppercase mb-3 ${card.textColor}`}>
                  {card.title}
                </h3>
                <p className={`text-[12px] font-medium leading-relaxed ${card.descColor}`}>
                  {card.description}
                </p>
              </div>

              {/* Bottom Footer hint */}
              <div className="pt-3 border-t border-slate-200/20 flex items-center justify-between text-[10px] font-bold opacity-60">
                <span>SOCIAL SENSE</span>
                <span>CHẠM ĐỂ LẬT ➔</span>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};


