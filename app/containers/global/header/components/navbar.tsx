import { ROW_ALIGN_CENTER__SPACE_B } from "@/app/styles/global-styles";
import { TEXT_24_400 } from "@/app/styles/global-typography";
import styled from "@emotion/styled";
import { NAVBAR_ITEMS } from "../../constants";
import { SecondaryButton } from "@/app/components/button/secondary";
import { mediaQueries } from "@/app/styles/mediaQueries";
import Link from "next/link";

export const Navbar = () => {
  return (
    <NavbarContainer>
      {NAVBAR_ITEMS.map((item, index) => (
        <StyledLink href={item.href} key={index}>
          <NavbarItem>{item.title}</NavbarItem>
        </StyledLink>
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
    font-size: 14px;
  }
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
    `}
  ${mediaQueries.lessThan("xs")`
    `}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
