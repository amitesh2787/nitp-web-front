import styled from "styled-components"

export const AdminStyle = styled.div`
  width: 100vw;
  height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
  text-rendering: optimizeLegibility;
  .mainDiv {
    display: flex;
    width: 75vw;
    margin: 2vw 0 0 0;
    padding:1rem;
    height: 80vh;
    box-shadow: -3px -3px 12px #ffffff73, 3px 3px 12px rgba(94, 104, 121, 0.288);
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: scroll;
    align-content: flex-start;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
  display: none;
}
  }
  @media (max-width: 768px) {
      margin-top: 7rem;
      .mainDiv{
          margin-top: 50px;
          width: 80vw;
      }
  }
`
