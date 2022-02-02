import styled from 'styled-components';

const SetAlarmWrapper = styled.section`
  color: white;
  .setHours, .setMinutes {
    padding: 0 20px;
    color: gold;
  }
  .dots {
    color: gold;
  }
  .setHours::-webkit-scrollbar, .setMinutes::-webkit-scrollbar{
    display: none;
  }

  form {
    padding: 20px;
    background-color: #2C314F;
    border-radius: 20px;
  }
  .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }
  .MuiOutlinedInput-input {
    padding: 0;
    color: white;
    svg {
      color: #2C314F !important;
      background-color: #2C314F !important;
    }
  }
  button, a {
    background-color: transparent;
    border: none !important;
    color: gray;
  }
  button:hover, a:hover {
    color: gold;
  }

  .weekday-btns {
    padding: 8px 0;
    gap: 4px;
    button {
      border-radius: 50%;
      width: 25px;
      height: 25px;
      font-size: 12px;
      display: grid;
      place-items: center;
    }
    .active-day {
      border: 1px solid gold !important;
      color: gold;
    }
  }

  .MuiSwitch-input {
    left: unset !important;
  }
  .css-julti5-MuiSwitch-root {
    width: 45px;
    padding: 12px 0 12px 12px;
    overflow: visible;
  }

  .css-jsexje-MuiSwitch-thumb {
    background-color: gold;
    box-shadow: 0 0 5px gold;
  }

  .MuiSwitch-input:checked .css-jsexje-MuiSwitch-thumb {
    background-color: gold !important;
}
`

export default SetAlarmWrapper;