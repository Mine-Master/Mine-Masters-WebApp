"use client";
import styled from "@emotion/styled";
import { Navbar } from "./components/navbar";
import Logo from "@/app/assets/Logo-Header.svg";
import Image from "next/image";
import {
  ROW_ALIGN_CENTER__JUSTIFY_START,
  ROW_ALIGN_CENTER__SPACE_B,
  ROW_ALIGN_START__JUSTIFY_START,
} from "@/app/styles/global-styles";
import { ConnectButton } from "@/app/components/button/connect";
import useScrollingUp from "@/app/hooks/scroll";
import { css } from "@emotion/react";
import { mediaQueries } from "@/app/styles/mediaQueries";
import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import drag_handle from "@/app/assets/drag_handle.svg";
import Times from "@/app/assets/Times.svg";
import { TEXT_16_500, TEXT_64_900 } from "@/app/styles/global-typography";
import { bigShoulder } from "@/app/utils/font-loader";
import { COMMINUTIES_ITEMS } from "../constants";
import { NavbarMobile } from "./components/navbarMobile";

export const Header = () => {
  const { scrollingUp, screenBegining } = useScrollingUp();
  const [open, setOpen] = useState(false);

  const handleDrawerOpenClose = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <HeaderContainer
        scrollingUp={scrollingUp}
        screenBegining={screenBegining}
      >
        <NavbarLogoWrapper>
          <Image src={Logo} alt="Logo" />
          <Navbar />
          <ConnectButton />
        </NavbarLogoWrapper>
      </HeaderContainer>
      <MobileHeader>
        <IconButtonStyle onClick={handleDrawerOpenClose}>
          <Image src={drag_handle} alt="Drag Handle" />
        </IconButtonStyle>
        <DrawerStyles open={open} onClose={() => setOpen(false)}>
          <DrawerWrappe>
            <TimesSign onClick={handleDrawerOpenClose}>
              <Image src={Times} alt="Times" width={32} height={32} />
            </TimesSign>
            <ImageWrapper>
              <Image src={Logo} alt="Logo" width={150} height={50} />
              <CompanyNameWrapper>
                <CompanyName className={bigShoulder.className}>M</CompanyName>
                <BlueCharacter className={bigShoulder.className}>
                  I
                </BlueCharacter>
                <CompanyName className={bigShoulder.className}>N</CompanyName>
                <OrangeCharacter className={bigShoulder.className}>
                  E
                </OrangeCharacter>
                &nbsp;
                <CompanyName className={bigShoulder.className}>
                  MASTERS
                </CompanyName>
              </CompanyNameWrapper>
            </ImageWrapper>
            <NavbarMobile />
            <ConnectButtonStyle>
              <ConnectButton customStyles={true} />
            </ConnectButtonStyle>
            <Communities>
              <CommunitiesTitel>Communities</CommunitiesTitel>
              <IconStyleSmall>
                {COMMINUTIES_ITEMS.map(
                  (item: { title: string; icon: string }, index) => {
                    return (
                      <ItemWrapper key={index}>
                        {" "}
                        <IconStyle>
                          <CommunityIcon src={item.icon} alt={item.title} />{" "}
                        </IconStyle>
                      </ItemWrapper>
                    );
                  }
                )}
              </IconStyleSmall>
            </Communities>
          </DrawerWrappe>
        </DrawerStyles>
      </MobileHeader>
    </>
  );
};

const DrawerStyles = styled(Drawer)`
  && {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    background: none;
    color: var(--White);
    z-index: 10000;
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    display: ${(props) => (props.open ? "block" : "none")};
    width: 100vw;
    max-width: 300px;
    height: 704px;
    box-shadow: 0px 8px 100px 30px rgba(16, 0, 43, 0.5);
    .MuiDrawer-paper {
      width: 100%;
      background-color: #10002b80;
    }
    ${mediaQueries.lessThan("sm")`
      display: block;
  `}
    ${mediaQueries.greaterThan(`sm`)`
  display: none;
  `}
    animation: ${(props) =>
      props.open ? "slideUp" : "slideDown"} 0.5s ease forwards;
    ${({ open }) =>
      open &&
      `
        transform: translate(-50%, -50%) scale(1);
      `}
  }

  @keyframes slideUp {
    0% {
      transform: translate(-50%, -50%) scale(0);
      top: 20px;
      left: 20px;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  @keyframes slideDown {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    15% {
      transform: translate(-50%, -50%) scale(0.8);
    }
    30% {
      transform: translate(-50%, -50%) scale(0.5);
      top: 25px;
      left: 25px;
    }
    100% {
      transform: translate(-50%, -50%) scale(0);
      top: 20px;
      left: 20px;
    }
  }
`;
const ImageWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  img {
    ${mediaQueries.lessThan("sm")`
    width:36px;
    height:40px;
    `}
  }
`;
const MobileHeader = styled("div")`
  display: block;
  position: relative;
  ${mediaQueries.greaterThan(`sm`)`
  display: none;
  `}
`;
const IconButtonStyle = styled(IconButton)`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  color: var(--White);
  background: #10002b80;
  img {
    filter: brightness(0) invert(1);
  }
  &:hover {
    background: #10002b80;
  }
`;

const DrawerWrappe = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 100px 30px rgba(16, 0, 43, 0.5);
  border: 1px solid;
  border-image: linear-gradient(to right, #9d4edd, #10002b);
  color: var(--White);
  height: 100%;
  width: 100%;
`;
export const HeaderContainer = styled("header")<{
  scrollingUp: boolean;
  screenBegining: boolean;
}>`
  position: fixed;
  top: 0;
  margin: 0 auto;
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
  ${mediaQueries.lessThan("lg")` 
        max-width: 1200px;
  `}
  ${mediaQueries.lessThan("md")`
    padding: 20px 0;
 
  `}
  ${mediaQueries.lessThan("sm")`
  display: none;
  `}
    ${mediaQueries.greaterThan("fhd")`
    width: 1920px;
    left: calc(calc(100% - 1920px) / 2)
  `}
`;

const ConnectButtonStyle = styled("div")`
  ${mediaQueries.lessThan("sm")`
    padding-top: 8px;
    margin-bottom: 20px;
     .MuiButton-startIcon img {
        filter: brightness(0) invert(1);
       }
      span {
        color: white; 
      }
  `}
`;

const NavbarLogoWrapper = styled("div")`
  width: 92%;
  margin: 0 auto;
  padding: 20px;
  ${ROW_ALIGN_CENTER__SPACE_B};
  overflow: hidden;
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

  ${mediaQueries.lessThan("lg")`
    padding: 15px;
    & > img {
      width: 61px;
      height:70px
}
  `}
  ${mediaQueries.lessThan("md")`
      padding: 10px;
      & > img {
        width:41px;
        height: 50px;
  }
  `}
  ${mediaQueries.lessThan("sm")`
      padding: 10px;
  `}
`;

const BlueCharacter = styled("h1")`
  color: var(--Pastal-Blue);
  ${TEXT_64_900}
  ${mediaQueries.lessThan("sm")`
    font-size: 24px;
    `}
`;

const OrangeCharacter = styled("h1")`
  color: var(--Orange);
  ${TEXT_64_900}
  ${mediaQueries.lessThan("sm")`
    font-size: 24px;
    `}
`;

const CompanyNameWrapper = styled("div")`
  ${ROW_ALIGN_START__JUSTIFY_START}
`;

const CompanyName = styled("h1")`
  ${TEXT_64_900}
  ${mediaQueries.lessThan("sm")`
    font-size: 24px;
    `}
`;

const TimesSign = styled("div")`
  width: 32px;
  height: 32px;
`;

const Communities = styled("div")``;
const CommunitiesTitel = styled("p")`
  margin-bottom: 10px;
  ${TEXT_16_500}
  color:#FEF7FF3D
`;

const IconStyleSmall = styled("div")`
  ${ROW_ALIGN_CENTER__JUSTIFY_START}
  justify-content: space-between;
`;
const ItemWrapper = styled("div")``;
const IconStyle = styled("div")``;
const CommunityIcon = styled(Image)`
  width: 35px;
  height: 35px;
`;
