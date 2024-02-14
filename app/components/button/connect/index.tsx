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

const ubontu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  preload: true,
});

interface ConnectButtonProps
  extends React.ComponentProps<typeof PrimaryButton> {
  loading?: boolean;
}

export const ConnectButton = ({ loading, ...props }: ConnectButtonProps) => {
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
      loading={loading ? loading : false}
      {...props}
    >
      {loading ? "Loading..." : "Connect Wallet"}
    </ConnectButtonStyled>
  );
};

const ConnectButtonStyled = styled(PrimaryButton)<{ loading: boolean }>`
  gap: 8px;
  ${TEXT_24_400}
  min-width: 268px;
  padding: 14px 24px 14px 16px;
  ${ubontu.style}
  &:hover {
    color: var(--Whitish);
    /* Gradient/2 color */
    background: linear-gradient(92.74deg, #9d4edd 4.16%, #5a189a 99.16%);
    /* Inner-shadow - Hover Primary BTN */
    box-shadow: inset 0px -4px 8px rgba(36, 0, 70, 0.34);
  }
  // style when loading props is true
  ${(props) =>
    props.loading &&
    css`
      pointer-events: none;
      color: var(--Whitish);
      ${ROW_CENTER}
    `}
`;
