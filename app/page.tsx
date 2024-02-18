"use client";
import { Hero } from "./containers/hero";
import { Introduction } from "./containers/introduction";
import { GameMechanics } from "./containers/game-mechanism";
import { StartMineMasters } from "./containers/start";
import { LandNft } from "./containers/land-nft";
import { MinerNft } from "./containers/miner-nft";
import { WarPeace } from "./containers/war-peace";
import { Marketplace } from "./containers/market";
import { News } from "./containers/news";
import { Faq } from "./containers/faq";
import { FooterMargin } from "./containers/global/footer";
import styled from "@emotion/styled";
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

const MainStyled = styled("main")`
  overflow-x: clip;
`;
