import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: { url: "/imgmember1.jpg", width: 240, height: 240 },
      name: "デイビッド・チャン",
      position: "CEO",
      profile:
        "グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長にに成功。自身の経験と洞察力により、業界のトレンドを見極めて戦略的な方針を策定し、会社の成長をけん引している。",
    },
    {
      id: "2",
      image: { url: "/imgmember2.jpg", width: 240, height: 240 },
      name: "エミリー・サンダース",
      position: "COO",
      profile:
        "グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長にに成功。自身の経験と洞察力により、業界のトレンドを見極めて戦略的な方針を策定し、会社の成長をけん引している。",
    },
    {
      id: "3",
      image: { url: "/imgmember3.jpg", width: 240, height: 240 },
      name: "ジョン・ウィルソン",
      position: "CTO",
      profile:
        "グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長にに成功。自身の経験と洞察力により、業界のトレンドを見極めて戦略的な方針を策定し、会社の成長をけん引している。",
    },
  ],
};

export default function Page() {
  return (
    <div style={{ margin: 20 }}>
      <h1>メンバーページ</h1>
    </div>
  );
}
