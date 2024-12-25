import Image from "next/image";
import { NewsCardProps } from "../types";
import { NewsDate } from "./NewDate";
import DefaultThumbnail from "@/assets/images/insight/default-thumnail.svg";

export function NewsCard({ post }: NewsCardProps) {
  return (
    <div className="flex flex-col w-full max-w-[360px] text-[#1C1C1C]">
      <div className="relative w-full h-[198px] rounded-lg overflow-hidden mb-4">
        <Image
          src={post.thumbnail || DefaultThumbnail}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="text-[13px] font-bold">{post.categories[0]}</span>
        <NewsDate dateString={post.pubDate} />
      </div>
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[18px] font-bold  line-clamp-1 hover:text-tokamak-blue transition-colors cursor-pointer"
      >
        {post.title}
      </a>
    </div>
  );
}
