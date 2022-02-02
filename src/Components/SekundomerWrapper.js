import styled from "styled-components";
const SekundomerWrapper = styled.div`
  color: #4d4f5f;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  padding-top: 80px;
  align-items: center;
  flex-direction: column;
  background-color: #191f37;
  .btn {
    font-size: 30px;
    background-color: transparent;
    border-radius: 30px;
    border: 2px solid yellow;
    color: yellow;
    padding: 16px 24px;
    margin: 45px 20px 0px 20px;
  }
  .mainColor {
    font-size: 48px;
    color: #f3df00;
  }
  table {
    color: white;
    min-height: 300px;
    border: 2px solid white;
  }
  .borderBottom {
    color: #f3df00;
  }
  .sekund {
    width: 100px;
  }
  .row {
    height: 50vh;
    display: flex;
    flex-direction: column;
  }
  .col-12 {
    flex: 1;
    height: 100%;
    overflow: auto;
  }
  .col-12::-webkit-scrollbar {
    display: none;
  }
`;
export default SekundomerWrapper;
