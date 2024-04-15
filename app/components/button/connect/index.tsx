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
}

export const ConnectButton = ({
  loading,
  disabled,
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
      {...props}
    >
      <span>{loading ? "Loading..." : "Connect Wallet"}</span>
    </ConnectButtonStyled>
  );
};

const ConnectButtonStyled = styled(PrimaryButton)<{ loading?: boolean }>`
  gap: 8px;
  ${TEXT_24_400}
  width: 268px;
  padding: 14px 24px 14px 16px;
  overflow: hidden;
  ${mediaQueries.lessThan("lg")`
    width: 200px;
    height: 50px;
    padding: 5px 10px;
    align-items: center;
    & > span {
      font-size: 18px;
    }
    `}
  ${mediaQueries.lessThan("md")`
    min-width: 150px;
    padding:5px 10px ;
    .MuiButton-startIcon {
    margin-right: 0;
    }
    `}
   @media (max-width: 866px) {
    min-width: 100px;
    justify-content: center;
    & > span {
      font-size: 14px;
    }
    .MuiButton-startIcon {
    }
  }
  ${mediaQueries.lessThan("sm")`
    padding: 10px 12px;
    & > span {
      font-size: 18px;
    }
    .MuiButton-startIcon {
    } 
    `}
`;
