import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink } from "lucide-react";

const posts = [
  {
    id: 1,
    color: "bg-white",
    title: "KHÁM PHÁ CÁC TÍNH NĂNG MỚI",
    textColor: "text-slate-800",
    image: "/card_features.png",
    link: "https://pixabay.com/vi/photos/ph%C6%B0%C6%A1ng-ti%E1%BB%87n-truy%E1%BB%81n-th%C3%B4ng-x%C3%A3-h%E1%BB%99i-7647812/",
    accentBg: "from-blue-600/10 to-transparent",
  },
  {
    id: 2,
    color: "bg-[#1E293B]",
    title: "CÁCH TẠO TREND 2026",
    textColor: "text-white",
    image: "/card_trend.png",
    link: "https://www.istockphoto.com/photo/many-human-hands-with-mobile-phones-and-social-media-icons-likes-and-followers-media-gm2047634113-563079150?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_photo&utm_content=srp_grid_media&utm_term=m%E1%BA%A1ng+x%C3%A3+h%E1%BB%99i",
    accentBg: "from-slate-800/80 to-transparent",
  },
  {
    id: 3,
    color: "bg-[#3B82F6]",
    title: "BÍ QUYẾT TĂNG TƯƠNG TÁC",
    textColor: "text-white",
    image: "/card_engagement.png",
    link: "https://pixabay.com/vi/images/download/x-952091_1920.jpg",
    accentBg: "from-blue-600/30 to-transparent",
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
    <div className="relative w-full h-[370px] flex justify-center cursor-pointer perspective-1000" onClick={flipCard}>
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
              className={`absolute w-[265px] h-[350px] rounded-[24px] shadow-xl overflow-hidden flex flex-col justify-between p-5 ${card.color} ${isTop ? "border border-blue-200/50 shadow-2xl ring-1 ring-blue-400/20" : "opacity-90"
                }`}
            >
              {/* Clickable Card Image Link */}
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="Mở liên kết bài viết"
                className="w-full h-[180px] rounded-2xl overflow-hidden relative shadow-inner bg-slate-100/50 block group cursor-pointer"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${card.accentBg}`} />
                <div className="absolute top-2.5 right-2.5 bg-black/40 backdrop-blur-md text-white p-1.5 rounded-full opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Title & Badge */}
              <div className="flex flex-col justify-end flex-1 pt-3 pb-1">
                <h3 className={`text-[17px] font-extrabold leading-tight tracking-tight uppercase ${card.textColor}`}>
                  {card.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

