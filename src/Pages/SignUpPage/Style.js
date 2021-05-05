import styled from "styled-components";

export const RenderContainer = styled.div`
  box-sizing: border-box;
  padding: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const GoBack = styled.img`
  cursor: pointer;
  margin: 10px 321px 0 16px;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: max-content;
  width: 100%;
`;

export const Button = styled.button`
  height: 42px;
  width: 328px;
  padding: 12px 16px;
  border: none;
  outline: none;
  background-color: #e86e5a;
  height: 42px;
  font-size: 16px;
  letter-spacing: -0.39px;
  cursor: pointer;
  border-radius: 2px;
`;

export const LogoMain = styled.img`
  width: 104px;
  margin: 24px 0 16px;
`;

export const ButtonSignUp = styled.div`
  margin-top: 28px;
  p {
    margin-top: 0;
    cursor: pointer;
  }
`;
