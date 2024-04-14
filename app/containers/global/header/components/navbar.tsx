import { ROW_ALIGN_CENTER__SPACE_B } from "@/app/styles/global-styles";
import { TEXT_24_400 } from "@/app/styles/global-typography";
import styled from "@emotion/styled";
import { NAVBAR_ITEMS } from "../../constants";
import { SecondaryButton } from "@/app/components/button/secondary";
import { mediaQueries } from "@/app/styles/mediaQueries";

export const Navbar = () => {
  return (
    <NavbarContainer>
      {NAVBAR_ITEMS.map((item, index) => (
        <NavbarItem key={index}>{item.title}</NavbarItem>
      ))}
    </NavbarContainer>
  );
};

const NavbarContainer = styled("nav")`
  ${TEXT_24_400};
  ${ROW_ALIGN_CENTER__SPACE_B};
  ${mediaQueries.lessThan("md")` 
  `}
  ${mediaQueries.lessThan("sm")`
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  `}
  ${mediaQueries.lessThan("xs")`
  
  `}
`;

const NavbarItem = styled(SecondaryButton)`
  padding: 10px;
  ${mediaQueries.lessThan("lg")`
    padding: 8px;
    font-size: 20px;
    gap: 8px;
    `}
  ${mediaQueries.lessThan("md")`
  font-size: 18px;
    padding: 7px;
    `}
     @media (max-width: 866px) {
    padding: 6px;
    font-size: 16px;
  }
  ${mediaQueries.lessThan("sm")`
    font-size: 18px;
   padding: 6px;
   color: var(--White);
   width: 100%;
   text-align: left;
    `}
  ${mediaQueries.lessThan("xs")`
    `}
`;
