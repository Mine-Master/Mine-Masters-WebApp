"use client";
import styled from "@emotion/styled";
import { Navbar } from "./components/navbar";
import Logo from "@/app/assets/Logo-Header.svg";
import Image from "next/image";
import { ROW_ALIGN_CENTER__SPACE_B } from "@/app/styles/global-styles";
import { ConnectButton } from "@/app/components/button/connect";
import useScrollingUp from "@/app/hooks/scroll";
import { css } from "@emotion/react";
import { mediaQueries } from "@/app/styles/mediaQueries";
import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import drag_handle from "@/app/assets/drag_handle.svg";

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
        <DrawerStyles anchor="left" open={open} onClose={() => setOpen(false)}>
          <DrawerWrappe>
            <ImageWrapper>
              <Image src={Logo} alt="Logo" width={150} height={50} />
            </ImageWrapper>
            <Navbar />
            <ConnectButtonStyle>
              <ConnectButton />
            </ConnectButtonStyle>
          </DrawerWrappe>
        </DrawerStyles>
      </MobileHeader>
    </>
  );
};

const DrawerStyles = styled(Drawer)`
  display: none;
  color: "var(--White)";
  padding: "20px";
  width: "275px";
  height: "100vh";
  z-index: 10000;
  ${mediaQueries.lessThan("sm")`
            display: block;
  `}
`;
const ImageWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const MobileHeader = styled("div")`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  z-index: 10000;
  ${mediaQueries.lessThan("sm")`
  display: block;
  `}
`;
const IconButtonStyle = styled(IconButton)`
  width: 44px;
  height: 44px;
  border-radius: 8px;
  color: var(--White);
  background: #10002b80;
  img {
    filter: brightness(0) invert(1);
  }
`;

const DrawerWrappe = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: var(--Light-Purple);
  color: var(--White);
  height: 100%;
  width: 100%;
`;
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
  ${mediaQueries.lessThan("lg")` 
        max-width: 1200px;
  `}
  ${mediaQueries.lessThan("md")`
    padding: 20px 0;
 
  `}
  ${mediaQueries.lessThan("sm")`
  display: none;
  `}
`;

const ConnectButtonStyle = styled("div")`
  ${mediaQueries.lessThan("sm")`
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
