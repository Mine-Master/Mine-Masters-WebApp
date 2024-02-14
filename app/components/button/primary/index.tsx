import styled from "@emotion/styled";
import { FC } from "react";
import { BaseButtonProps, BaseButton } from "../base";
import { ROW_ALIGN_CENTER__SPACE_B } from "@/app/styles/global-styles";
import { Ubuntu } from "next/font/google";
import { TEXT_24_400 } from "@/app/styles/global-typography";

const ubontu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  preload: true,
});

export interface PrimaryProps extends BaseButtonProps {}

export const PrimaryButton: FC<BaseButtonProps> = ({ children, ...props }) => {
  return (
    <PrimaryButtonStyled className={ubontu.className} {...props}>
      {children}
    </PrimaryButtonStyled>
  );
};

export const PrimaryButtonStyled = styled(BaseButton)`
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
`;
