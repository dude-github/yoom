import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardProps {
  clasName: string;
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
}

const HomeCard = ({
  img,
  title,
  description,
  handleClick,
  clasName,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full xl:max-w-80 min-h-[260px] rounded-[14px] cursor-pointer",
        clasName
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[12px]">
        <Image src={img} alt="Meeting" height={27} width={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-xl font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
