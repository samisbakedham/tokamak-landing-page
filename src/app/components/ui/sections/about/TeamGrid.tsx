import * as React from "react";
import TeamMember from "./TeamMember";

import KevinImage from "@/assets/members/member=Kevin.png";
import ZenaImage from "@/assets/members/member=Zena.png";
import AleImage from "@/assets/members/member=Ale.png";
import JamieImage from "@/assets/members/member=Jamie.png";
import SuahImage from "@/assets/members/member=Suah.png";
import LucasImage from "@/assets/members/member=Lucas Jung.png";
import JadenImage from "@/assets/members/member=Jaden Kong.png";
import PraveenImage from "@/assets/members/member=Praveen Surendran.png";
import MonicaImage from "@/assets/members/member=Monica Kim.png";
import RyanImage from "@/assets/members/member=Ryan Murray.png";
import EugeneImage from "@/assets/members/member=Eugene Cho.png";
import HarveyImage from "@/assets/members/member=Harvey Jo.png";
import SuhyeonImage from "@/assets/members/member=Suhyeon Lee.png";
import DylanImage from "@/assets/members/member=Dylan Zhu.png";
import NamImage from "@/assets/members/member=Pham Tien Nam.png";
import JakeImage from "@/assets/members/member=Jake Jang.png";
import ShrutiImage from "@/assets/members/member=Shruti Shrivastava.png";
import MuhammedImage from "@/assets/members/member=Muhammed Ali Bingol.png";
import TheoImage from "@/assets/members/member=Theo Lee.png";
import AmanImage from "@/assets/members/member=Aman Ullah.png";
import MehdiImage from "@/assets/members/member=Mehdi Beriane.png";
import MohammadImage from "@/assets/members/member=Mohammad Rahm.png";
import IreneImage from "@/assets/members/member=Irene Bae.png";
import ShailendraImage from "@/assets/members/member=Singh Shailendra.png";
import GeorgeImage from "@/assets/members/member=Negru George.png";
import VictorImage from "@/assets/members/member=Victor Hazard.png";
import KaidenImage from "@/assets/members/member=Kaiden Araki.png";
import NguyenImage from "@/assets/members/member=Nguyen Zung.png";

const teamMembers = [
  {
    name: "Kevin Jeong",
    role: "CEO",
    imageUrl: KevinImage,
    isCEO: true,
  },
  {
    name: "Zena Park",
    role: "Blockchain Engineer",
    imageUrl: ZenaImage,
  },
  {
    name: "Ale Son",
    role: "Software Engineer",
    imageUrl: AleImage,
  },
  {
    name: "Jamie Judd",
    role: "Core Researcher",
    imageUrl: JamieImage,
  },
  {
    name: "Suah Kim",
    role: "Core Researcher",
    imageUrl: SuahImage,
  },
  {
    name: "Lucas Jung",
    role: "Product Designer",
    imageUrl: LucasImage,
  },
  {
    name: "Jaden Kong",
    role: "Managing Director",
    imageUrl: JadenImage,
  },
  {
    name: "Praveen Surendran",
    role: "Researcher",
    imageUrl: PraveenImage,
  },
  {
    name: "Monica Kim",
    role: "UX/UI Designer",
    imageUrl: MonicaImage,
  },
  {
    name: "Ryan Murray",
    role: "UX/UI Designer & Planner",
    imageUrl: RyanImage,
  },
  {
    name: "Eugene Cho",
    role: "UXUI Planner & PM",
    imageUrl: EugeneImage,
  },
  {
    name: "Harvey Jo",
    role: "Blockchain Engineer",
    imageUrl: HarveyImage,
  },
  {
    name: "Suhyeon Lee",
    role: "Researcher",
    imageUrl: SuhyeonImage,
  },
  {
    name: "Nguyen Zung",
    role: "Blockchain Engineer",
    imageUrl: NguyenImage,
  },
  {
    name: "Dylan Zhu",
    role: "Software Engineer",
    imageUrl: DylanImage,
  },
  {
    name: "Pham Tien Nam",
    role: "L2 Engineer",
    imageUrl: NamImage,
  },
  {
    name: "Jake Jang",
    role: "ZKP Researcher",
    imageUrl: JakeImage,
  },
  {
    name: "Shruti Shrivastava",
    role: "Business Developer",
    imageUrl: ShrutiImage,
  },
  {
    name: "Muhammed Ali Bingol",
    role: "ZKP Researcher",
    imageUrl: MuhammedImage,
  },
  {
    name: "Theo Lee",
    role: "Blockchain Engineer",
    imageUrl: TheoImage,
  },
  {
    name: "Aman Ullah",
    role: "Blockchain Engineer",
    imageUrl: AmanImage,
  },
  {
    name: "Mehdi Beriane",
    role: "Blockchain Engineer",
    imageUrl: MehdiImage,
  },
  {
    name: "Mohammad Rahm",
    role: "Blockchain Engineer",
    imageUrl: MohammadImage,
  },
  {
    name: "Pham Tien Nam",
    role: "Blockchain Engineer",
    imageUrl: NamImage,
  },
  {
    name: "Irene Bae",
    role: "HR Manager",
    imageUrl: IreneImage,
  },
  {
    name: "Singh Shailendra",
    role: "Blockchain Engineer",
    imageUrl: ShailendraImage,
  },
  {
    name: "Negru George",
    role: "Blockchain Engineer",
    imageUrl: GeorgeImage,
  },
  {
    name: "Victor Hazard",
    role: "Software Engineer",
    imageUrl: VictorImage,
  },
  {
    name: "Kaiden Araki",
    role: "Blockchain Engineer",
    imageUrl: KaidenImage,
  },
];

const TeamGrid: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center pt-[60px]">
      <div className="grid grid-cols-5 max-w-[1000px] gap-[25px] items-start">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
            isCEO={member.isCEO}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
