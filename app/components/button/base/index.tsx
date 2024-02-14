import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";
import { FC, ReactNode } from "react";
import { Ubuntu } from "next/font/google";

const ubontu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  preload: true,
});

export interface BaseButtonProps extends ButtonProps {}
export const BaseButton: FC<BaseButtonProps> = ({ children, ...props }) => {
  return (
    <BaseButtonStyled className={ubontu.className} {...props}>
      {children}
    </BaseButtonStyled>
  );
};

export const BaseButtonStyled = styled(Button)<BaseButtonProps>`
  text-transform: capitalize;
  white-space: nowrap;
`;
