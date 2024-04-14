import styled from "@emotion/styled";
import GameMechanismsBg from "@/app/assets/Game-Mechanics-Bg.png";
import { COLUMN_ALIGN_CENTER___JUSTIFY_START } from "@/app/styles/global-styles";
import { TEXT_64_700 } from "@/app/styles/global-typography";
import { mediaQueries } from "@/app/styles/mediaQueries";

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
  ${mediaQueries.lessThan("md")`
    padding-top: 144px;
    padding-bottom: 80px;
  `}
  ${mediaQueries.lessThan("sm")`
    padding-top: 96px;
    padding-bottom: 56px;
  `}
  ${mediaQueries.lessThan("xs")`
    padding-top: 48px;
    padding-bottom: 32px;
    `}
`;

const SectionTitle = styled("h1")`
  ${TEXT_64_700}
  color: var(--Dark-Purple);
  /* Elevation - Primary BTN */
  text-shadow: 0px 4px 18px rgba(36, 0, 70, 0.28);
  ${mediaQueries.lessThan("md")`
    font-size: 48px;
    `}
  ${mediaQueries.lessThan("sm")`
    font-size: 40px;
    `}
  ${mediaQueries.lessThan("xs")`
    font-size: 32px;
    `}
`;
