import Image from "next/image";
import { PrimaryButton } from "../primary";
import ConnectIcon from "@/app/assets/Connect.svg";
import ConnectWhiteIcon from "@/app/assets/Connect-White.svg";
import styled from "@emotion/styled";
import { TEXT_24_400 } from "@/app/styles/global-typography";
import { Ubuntu } from "next/font/google";
import { useState } from "react";
import { css } from "@emotion/react";
import LoadingIcon from "@/app/assets/Loading.svg";
import { ROW_CENTER } from "@/app/styles/global-styles";
import { mediaQueries } from "@/app/styles/mediaQueries";

const ubontu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  preload: true,
});

interface ConnectButtonProps
  extends React.ComponentProps<typeof PrimaryButton> {
  loading?: boolean;
  disabled?: boolean;
  customStyles?: boolean;
}

export const ConnectButton = ({
  loading,
  disabled,
  customStyles,
  ...props
}: ConnectButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ConnectButtonStyled
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      startIcon={
        <Image
          src={
            loading ? LoadingIcon : isHovered ? ConnectWhiteIcon : ConnectIcon
          }
          alt="Connect Wallet"
        />
      }
      className={ubontu.className}
      loading={loading ? loading : undefined}
      disabled={disabled}
      customStyles={customStyles}
      {...props}
    >
      <span>{loading ? "Loading..." : "Connect Wallet"}</span>
    </ConnectButtonStyled>
  );
};

const ConnectButtonStyled = styled(PrimaryButton)<{
  loading: boolean;
  customStyles?: boolean;
}>`
  gap: 8px;
  ${TEXT_24_400}
  width: 268px;
  min-width: 150px;
  padding: 14px 24px 14px 16px;
  overflow: hidden;
  ${(props) =>
    props.customStyles &&
    css`
      color: var(--Whitish);
      background: linear-gradient(92.74deg, #9d4edd 4.16%, #5a189a 99.16%);
      box-shadow: inset 0px -4px 8px rgba(36, 0, 70, 0.34);
    `}
  ${mediaQueries.lessThan("lg")`
    width: 200px;
    padding: 5px 10px;
    align-items: center;
    & > span {
      font-size: 18px;
    }
    `}
  
  ${mediaQueries.lessThan("md")`
    padding:5px 10px ;
    .MuiButton-startIcon {
    margin-right: 0;
    }
    `}
  ${mediaQueries.lessThan("sm")`
  
    padding: 10px 12px;
    & > span {
      font-size: 18px;
    } 
    .MuiButton-startIcon {
    &>img{
        width: 24px;
        height: 24px;
      }
    }
    `}
  ${mediaQueries.lessThan("xs")`
   width: 160px;
    height: 45px;
    padding:14px ;
     & > span {
      font-size: 14px;
    } 
     `}
`;
