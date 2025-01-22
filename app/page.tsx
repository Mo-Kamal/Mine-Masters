import dynamic from "next/dynamic";
import { MainStyled } from "@/containers/layout/styles";

// containers component
import { Hero } from "@/containers/hero";
import { Introduction } from "@/containers/introduction";
import { GameMechanics } from "@/containers/game-mechanism";

// Lazily loaded containers component
const StartMineMasters = dynamic(() => import("@/containers/start/start"));
const LandNft = dynamic(() => import("@/containers/land-nft"));
const MinerNft = dynamic(() => import("@/containers/miner-nft/miner-nft"));
const WarPeace = dynamic(() => import("@/containers/war-peace"));
const Marketplace = dynamic(() => import("@/containers/market"));
const News = dynamic(() => import("@/containers/news/news"));
const Faq = dynamic(() => import("@/containers/faq"));

export default function Home() {
  return (
    <MainStyled>
      <Hero />
      <Introduction />
      <GameMechanics />
      <StartMineMasters />
      <LandNft />
      <MinerNft />
      <WarPeace />
      <Marketplace />
      <News />
      <Faq />
    </MainStyled>
  );
}
