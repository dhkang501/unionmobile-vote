import Header from "@/app/components/ui/Header";
import Image from 'next/image';
import TimerComponent from "@/app/components/ui/TimerComponent";

export default function Home() {
  // 마감시간 2025년 2월 3일 0시 0분 0초
  const deadline = new Date("2025-02-03T00:00:00").getTime();
  return (
    <div>
      <Header />
      <div style={{ position: "relative" }}>
        <div className="imageContainer">
          <Image
            src="/static/images/mainHome/mainHomeBg.jpeg"
            alt="main image"
            layout="intrinsic"
            objectFit="cover"
            width={1920}
            height={1080}
          />
        </div>
        <TimerComponent deadline={deadline}/>
      </div>
    </div>
  );
}
