import styled from "@emotion/styled";
import { FC } from "react";
import { BaseButtonProps, BaseButton } from "../base";
import {
  ROW_ALIGN_CENTER__SPACE_B,
  ROW_CENTER,
} from "@/app/styles/global-styles";
import { Ubuntu } from "next/font/google";
import { TEXT_24_400 } from "@/app/styles/global-typography";
import { css } from "@emotion/react";
import { mediaQueries } from "@/app/styles/mediaQueries";

const ubontu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  preload: true,
});

export interface PrimaryProps extends BaseButtonProps {
  loading?: boolean;
  disabled?: boolean;
}

export const PrimaryButton: FC<BaseButtonProps> = ({ children, ...props }) => {
  return (
    <PrimaryButtonStyled className={ubontu.className} {...props}>
      {children}
    </PrimaryButtonStyled>
  );
};

export const PrimaryButtonStyled = styled(BaseButton)<PrimaryProps>`
  ${ROW_ALIGN_CENTER__SPACE_B};
  padding: 14px 24px 14px 16px;
  gap: 16px;
  height: 60px;
  ${TEXT_24_400}

  background: rgba(254, 247, 255, 0.16);
  /* Elevation - Primary BTN */
  box-shadow: 0px 4px 18px rgba(36, 0, 70, 0.28);
  border-radius: 16px;
  color: var(--Primary);
  border: 2.5px solid var(--Primary);
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
      ${mediaQueries.lessThan("sm")`
      padding: 12px 16px 12px 12px;
      height: 48px;
      font-size: 16px;
      `}
      ${mediaQueries.lessThan("xs")`
      padding: 8px 12px 8px 8px;
      height: 40px;
      font-size: 14px;
      `}
    `}

  // style disabled
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      background-color: rgba(90, 24, 154, 0.1);
      img {
        opacity: 50%;
      }
      color: rgba(90, 24, 154, 0.5);
      border: none;
      box-shadow: none;
    `}
    ${mediaQueries.lessThan("sm")`
    padding: 12px 16px 12px 12px;
    height: 48px;
    font-size: 16px;
    `}
    ${mediaQueries.lessThan("xs")`
    padding: 8px 12px 8px 8px;
    height: 40px;
    font-size: 14px;
    `}
`;
