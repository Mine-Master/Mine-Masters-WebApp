import { ROW_ALIGN_CENTER__SPACE_B } from "@/app/styles/global-styles";
import { TEXT_24_400 } from "@/app/styles/global-typography";
import styled from "@emotion/styled";
import { NAVBAR_ITEMS } from "../../constants";

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
`;

const NavbarItem = styled("div")`
  color: var(--Primary);
  padding: 16px;
`;
