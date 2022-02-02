import styled from "styled-components";

const TimerWrapper = styled.div`
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
  }

  .container {
    border-radius: 10px;
    color: #eae8c9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .container h1 {
    font-size: 2.6rem;
    margin-bottom: 0.2rem;
  }

  .container .labels {
    list-style: none;
    display: flex;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 0.3rem 0.3rem;
    background-color: #0c0e1b;
    border-radius: 1.5rem;
  }

  .active-label {
    color: #0c0e1b;
    background-color: #fef46b;
  }

  .timer-container {
    display: flex;
    color: yellow;
    flex: 2;
    align-items: center;
    justify-content: center;
  }

  .time-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15rem;
    width: 15rem;
    border-radius: 7.5rem;
    color: #efefef;
    background: #151932;
    font-size: 3.5rem;
    box-shadow: 1rem 1.5rem 2rem rgba(0, 0, 0, 0.6);
  }

  button {
    color: #efefef;
    font-size: 0.8rem;
    padding: 0.5rem 1.2rem;
    border-radius: 3rem;
    margin: 0.2rem;
    background-color: #2C314F;
    border: 0.5px solid gold;
    width: 125px;
    cursor: pointer;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .button-wrapper button.activve {
    color: #0c0e1b;
  }
  .form-container {
    text-align: center;
  }
  .input-wrapper {
    margin: 1.5rem;
  }
  .input-wrapper input {
    border: 2px solid gold;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    outline: none;
    background-color: #151932;
    margin-right: 0.3rem;
    text-align: center;
    font-size: 14pt;
    color: gold;
  }

  .btnn {
    display: flex;
    gap: 50px;
    margin-bottom: 60px;
  }
  .btnn > button {
    margin-top: 40px;
    background: transparent !important;
    border: 2px solid #e9c912;
    color: #ffe500;
  }
  .boxx > button {
    margin-bottom: 60px;
    width: 200px;
    background: transparent !important;
    border: 2px solid #e9c912;
    color: #ffe500;
  }
`;

export default TimerWrapper;
