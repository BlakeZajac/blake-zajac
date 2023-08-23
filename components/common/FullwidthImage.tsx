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
    <div className={`${spacingTop ? spacingTopValue : null}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        objectFit="cover"
        fill
        className={`${relative ? "!relative" : null}`}
      />
    </div>
  );
};

export default FullwidthImage;