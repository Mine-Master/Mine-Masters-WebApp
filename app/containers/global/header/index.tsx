"use client";
import styled from "@emotion/styled";
import { Navbar } from "./components/navbar";
import Logo from "@/app/assets/Logo-Header.svg";
import Image from "next/image";
import { ROW_ALIGN_CENTER__SPACE_B } from "@/app/styles/global-styles";
import { ConnectButton } from "@/app/components/button/connect";
import useScrollingUp from "@/app/hooks/scroll";
import { css } from "@emotion/react";

export const Header = () => {
  const { scrollingUp, screenBegining } = useScrollingUp();
  console.log(scrollingUp, screenBegining);

  return (
    <HeaderContainer scrollingUp={scrollingUp} screenBegining={screenBegining}>
      <NavbarLogoWrapper>
        <Image src={Logo} alt="Logo" />
        <Navbar />
        <ConnectButton />
      </NavbarLogoWrapper>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled("header")<{
  scrollingUp: boolean;
  screenBegining: boolean;
}>`
  /* position: absolute; */
  position: fixed;
  top: 0;
  max-width: 1728px;
  margin: 0 auto;
  /* background: rgba(254, 247, 255, 0.16); */
  /* backdrop-filter: blur(13.8px); */
  width: 100%;
  padding: 30px 0;
  z-index: 10000;
  ${(props) =>
    !props.scrollingUp
      ? css`
          visibility: hidden;
          transition: visibility 0.3s linear, opacity 0.3s linear;
          opacity: 0;
        `
      : css`
          visibility: visible;
          opacity: 1;
          transition: visibility 0.3s linear, opacity 0.3s linear;
        `}
`;

const NavbarLogoWrapper = styled("div")`
  width: 88%;
  margin: 0 auto;
  padding: 20px;
  ${ROW_ALIGN_CENTER__SPACE_B};

  background: rgba(254, 247, 255, 0.24);
  backdrop-filter: blur(120px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 24px;

  /* border: 2px solid;

  border-image: linear-gradient(
    93.47deg,
    #9d4edd 0%,
    #5a189a 52.7%,
    #10002b 112.04%
  ); */
  position: relative;
  z-index: 1;
  &::before {
    /* content: "";
    position: absolute;
    width: 100%;
    height: 100%;

    -webkit-mask: linear-gradient(
        93.47deg,
        #9d4edd 0%,
        #5a189a 52.7%,
        #10002b 112.04%
      )
      content-box;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    left: 0;
    inset: 0;
    z-index: -1; */
    /* content: "";
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.02),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.25)
    );
    -webkit-mask: linear-gradient(
          93.47deg,
          #9d4edd 0%,
          #5a189a 52.7%,
          #10002b 112.04%
        )
        content-box,
      linear-gradient(
        0deg,
        rgba(254, 247, 255, 0.24),
        rgba(254, 247, 255, 0.24)
      );
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1; */
  }
`;
