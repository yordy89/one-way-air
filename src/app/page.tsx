import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { BigMarquee } from "@/components/home/BigMarquee";
import { DropCollection } from "@/components/home/DropCollection";
import { Features } from "@/components/home/Features";
import { JoinCrew } from "@/components/home/JoinCrew";
import { CrewLove } from "@/components/home/CrewLove";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BigMarquee />
      <DropCollection />
      <Features />
      <JoinCrew />
      <CrewLove />
    </>
  );
}
