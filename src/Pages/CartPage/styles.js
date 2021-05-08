import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  margin: 10px;
  border: 1px solid #e5e5ea;
  border-radius: 5px;
`;
export const DivBack = styled.div`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #b8b8b8;
  box-sizing: border-box;
  padding: 0px 16px;
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  > div {
    width: 23px;
    height: 24px;
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;

export const ImgBack = styled.img`
  width: 23px;
  height: 24px;
  cursor: pointer;
`;

export const P = styled.p`
  width: 175px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

export const Card = styled.div`
  width: 80%;
  display: flex;
  margin: 10px;
  border: 1px solid #e5e5ea;
  border-radius: 5px;
`;

export const Img = styled.img`
  width: 100px;
`;

export const AddressContainer = styled.div`
  text-align: left;
  padding: 4vw 8vw;
  padding-bottom: 1vw;
  background-color: #eeeeee;
`;

export const RestaurantAddress = styled.div`
  text-align: left;
  padding: 4vw 8vw;
  padding-bottom: 1vw;
`;
export const RestaurantAddressTitle = styled.h4`
  text-align: left;
  color: #e86e5a;
  margin-bottom: 10px;
`;

export const RestaurantAddressInfo = styled.p`
  color: #8e8e93;
  font-size: 15px;
  margin: 0 0 5px 0;
`;
export const AddressTitle = styled.p`
  text-align: left;
  margin: 0;
  color: #b8b8b8;
`;

export const PaymentMethodContent = styled.div`
  margin: 0 20px;
`;

export const Space = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 100px;
`;

export const SubTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;

export const SubTotalTitle = styled.div`
  margin-top: 30px;
`;

export const CartMainContent = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const SubTotalCount = styled.h4`
  color: #e86e5a;
  display: flex;
  justify-content: flex-end;
`;
export const EmptyCart = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: center;
  margin: 50px 0;
`;
