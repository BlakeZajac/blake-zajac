"use client";

import Image from "next/image";
import { relative } from "path";

interface FullwidthImageProps {
  spacingTop?: boolean;
  spacingTopValue?: string;
  imageSrc: string;
  imageAlt: string;
  relative?: boolean;
}

const FullwidthImage: React.FC<FullwidthImageProps> = ({
  spacingTop,
  spacingTopValue,
  imageSrc,
  imageAlt,
  relative,
}) => {
  return (
    <div className={`${spacingTop ? spacingTopValue : ""}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className={`object-cover ${relative ? "!relative" : ""}`}
        loading="lazy"
      />
    </div>
  );
};

export default FullwidthImage;
