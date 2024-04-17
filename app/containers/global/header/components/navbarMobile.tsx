import { ROW_ALIGN_CENTER__SPACE_B } from "@/app/styles/global-styles";
import { TEXT_24_400 } from "@/app/styles/global-typography";
import styled from "@emotion/styled";
import { MOBILE_MENU_ITEMS } from "../../constants";
import { SecondaryButton } from "@/app/components/button/secondary";
import { mediaQueries } from "@/app/styles/mediaQueries";

export const NavbarMobile = () => {
  return (
    <NavbarContainer>
      {MOBILE_MENU_ITEMS.map((item, index) => (
        <NavbarItem key={index}>{item.title}</NavbarItem>
      ))}
    </NavbarContainer>
  );
};

const NavbarContainer = styled("nav")`
  ${TEXT_24_400};
  ${ROW_ALIGN_CENTER__SPACE_B};
  ${mediaQueries.lessThan("sm")`
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  `}
`;

const NavbarItem = styled(SecondaryButton)`
  padding: 10px;
  ${mediaQueries.lessThan("sm")`
    font-size: 14px;
   padding: 8px;
   color: var(--White);
   width: 100%;
   text-align: left;
   line-height:16.09px;
   border-bottom:2px solid #5A189A80;
   border-radius: 0;
   width: 100%;
   &:last-child {
    border-bottom: none;
    }

    `}
`;
