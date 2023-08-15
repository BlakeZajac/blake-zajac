"use client";

import Image from "next/image";

interface BadgeProps {
  dotColor?: string;
  image?: string;
  text?: string;
}

const Badge: React.FC<BadgeProps> = ({ dotColor, image, text }) => {
  return (
    <div className="flex items-center justify-center gap-2 px-[8px] py-[6px] w-full sm:w-fit bg-white border border-black-700 rounded-full overflow-hidden transition">
      {dotColor && (
        <div className={`w-[5px] h-[5px] block rounded-full ${dotColor}`}></div>
      )}

      {image && (
        <Image
          src={image}
          alt=""
          className="w-4 h-4 object-cover rounded-full"
        />
      )}

      {text && (
        <p className="text-[0.75rem] font-medium tracking-[0.05em] uppercase">
          {text}
        </p>
      )}
    </div>
  );
};

export default Badge;
