import styled from "styled-components";

export const StatisticsContainer = styled.div`
  margin-top:75px;
  justify-content: center;
  align-items: center;
  height: 91vh;
  position: relative;
  z-index: 1;
`;

export const StatisticsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 11px;
  
`;


export const Dashimg = styled.img`
grid-area: 1 / 1 / 10 / 13; 
height:91vh;
width:100%
`;
export const StatisticsWrapper1 = styled.div`
grid-area: 1 / 1 / 2 / 13;
`;
export const StatisticsWrapper2 = styled.div`
grid-area: 2 / 1 / 10 / 13; 
`;
export const StatisticsWrapper3 = styled.div`
grid-area:  3 / 5 / 9 / 9; 
padding-bottom: 25px;
`;
export const StatisticsWrapper4 = styled.div`
grid-area: 3 / 2 / 6 / 5; 
padding-left: 25px;
padding-top: 25px;
`;
export const StatisticsWrapper5 = styled.div`
grid-area: 6 / 2 / 9 / 5; 
padding-left: 25px;
padding-bottom: 25px;
`;
export const StatisticsWrapper6 = styled.div`
grid-area: 3 / 9 / 6 / 12;
padding-right: 25px;
padding-top: 25px;
`;
export const StatisticsWrapper7 = styled.div`
grid-area: 6 / 9 / 9 / 12;
padding-right: 25px;
padding-bottom: 25px;
`;
export const StatisticsWrapper8 = styled.div`
grid-area: 10 / 1 / 14 / 13;
padding-right: 25px;
padding-bottom: 25px;
`;
export const StatisticsTitle = styled.h1`
  color: white;
  margin-bottom: 24px;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Button = styled.button`
  margin-top: 14px;
  border-radius: 50px;
  background: #a3c2f0;
  color: #17263c;
  white-space: nowrap;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #17263c;
    color: white;
  }
`;

export const DashImage = styled.div`
 padding :20px;
 width:100%;
 height:100%;
`;

export const CenterImage = styled.div`
 padding :20px;
 width:620px;
 height:660px;
`;