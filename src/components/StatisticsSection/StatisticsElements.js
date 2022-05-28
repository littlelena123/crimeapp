import styled from "styled-components";

export const StatisticsContainer = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
  background: #2a456e;
`;

export const StatisticsWrapper = styled.div`
display: flex;
flex-direction:column;
flex-wrap: nowrap;
justify-content:center;
align-items: center;
width: 98vw;
height: 85vh;

`;


export const StatisticsTitle = styled.h1`
  color: white;
  margin-bottom: 24px;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

