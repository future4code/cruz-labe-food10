import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  margin: 10px;
  border: 1px solid #e5e5ea;
  border-radius: 5px;
`;

export const Card = styled.div`
  display: flex;
  margin: 15px 15px;
  border: 1px solid #e5e5ea;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
`;
export const ProductInfo = styled.div`
  flex: 1;
`;
export const ProductDescription = styled.div`
  padding: 5px 0;
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ProductTitle = styled.span`
  color: #e86e5a;
  font-size: 16px;
`;
export const ProductText = styled.span`
  color: #e5e5ea;
  font-size: 14px;
`;


export const Img = styled.div`
  width: 100px;
  background: ${(props) => `url(${props.background}) no-repeat center center`};
  background-size:cover;
`;

export const AmountBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const AmountContent = styled.div`
  border: 1px solid #e86e5a;
  border-radius: 4px;
  padding: 5px 20px;
`;
