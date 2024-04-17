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

export interface SecondaryProps extends BaseButtonProps {
  loading?: boolean;
  disabled?: boolean;
}

export const SecondaryButton: FC<BaseButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <SecondaryButtonStyled className={ubontu.className} {...props}>
      {children}
    </SecondaryButtonStyled>
  );
};

export const SecondaryButtonStyled = styled(BaseButton)<SecondaryProps>`
  ${ROW_ALIGN_CENTER__SPACE_B};
  padding: 14px 24px 14px 16px;
  gap: 16px;
  height: 60px;
  ${TEXT_24_400}
  border: none;
  background: transparent;
  border-radius: 16px;
  color: var(--Primary);
  ${ubontu.style}

  &:hover {
    color: #3c096c;
    background: transparent;
  }
  // style when loading props is true
  ${(props) =>
    props.loading &&
    css`
      pointer-events: none;
      color: #3c096c;
      ${ROW_CENTER}
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
    ${mediaQueries.lessThan(`md`)`
    height:50px;
    `}
     @media (max-width: 866px) {
    justify-content: center;
  }
  ${mediaQueries.lessThan(`sm`)`
    justify-content: space-between;
  `}
`;
