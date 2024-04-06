import styled from "styled-components";

function getRandomColor() {
  const randomColors = ["#ff7f50", "#6495ed", "#ff69b4", "#20b2aa", "#6aa305", "#b3a400"];

  return randomColors[Math.floor(Math.random() * randomColors.length)];
}

export const Container = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  
  border-radius: 50%;

  background: ${({ backGroundImage }) => backGroundImage || getRandomColor()};

  width: ${({ size }) => size+"rem" || "3.2rem"};
  height: ${({ size }) => size+"rem" || "3.2rem"};

  font-size: ${({ size }) => (size*0.625)+"rem" || "2rem"};

  color: ${({ theme }) => theme.COLORS.WHITE_700};

  font-weight: 600;
`;
