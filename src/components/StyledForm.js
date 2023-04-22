import styled from 'styled-components';

const StyledForm = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .container {
    background-color: rgba(50,255,0,0.08);
    border: 5px double rgb(50,255,0);
    border-radius: 10px;
    padding: 40px;
  }
  input {
    display: block;
    border: 3px double rgb(50,255,0);    
    border-radius: 10px;
    padding: 10px 20px;
    background-color: #000;
    color: rgb(50,255,0);
    outline: none;
  }
  .error {
    color: red;
  }
  .red {
    border-color: red;
  }
  .submitBtn {
    border: none;
    border-radius: 20px;
    background-color: rgb(50,255,0);
    box-shadow: 0 4px 0 black;
    color: black;
    font-family: inherit;
    font-size: 15px;
    font-weight: 800;
    padding: 5px 10px;
    cursor: pointer;
  }
  .submitBtn:hover {
    background-color: yellow;
  }
  .submitBtn:active {
    box-shadow: 0 1px 0 black;
    transform: translateY(3px);
  }
  .submitBtn:disabled {
    box-shadow: 0 1px 0 black;
    transform: translateY(3px);
    background-color: #555;
    cursor: auto;
  }
`;

export default StyledForm;
