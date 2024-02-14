import styled from "@emotion/styled";
import GameMechanismsBg from "@/app/assets/Game-Mechanics-Bg.png";
import { COLUMN_ALIGN_CENTER___JUSTIFY_START } from "@/app/styles/global-styles";
import { TEXT_64_700 } from "@/app/styles/global-typography";

export const GameMechanics = () => {
  return (
    <GameMechanicsContainer>
      <GameMechanicsContent>
        <SectionTitle>Game Mechanism</SectionTitle>
      </GameMechanicsContent>
    </GameMechanicsContainer>
  );
};

const GameMechanicsContainer = styled("section")`
  background-image: url(${GameMechanismsBg.src});
  background-size: cover;
`;

const GameMechanicsContent = styled("div")`
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START};
  padding-top: 193px;
  padding-bottom: 114px;
`;

const SectionTitle = styled("h1")`
  ${TEXT_64_700}
  color: var(--Dark-Purple);
  /* Elevation - Primary BTN */
  text-shadow: 0px 4px 18px rgba(36, 0, 70, 0.28);
`;
