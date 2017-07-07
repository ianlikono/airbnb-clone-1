
import React from 'react';
import styled from 'styled-components';

const img_url = 'https://a0.muscache.com/ac/pictures/b1c8b2d8-83bd-4f6f-bd7f-f3224f942e5c.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70';

const ItemContainer = styled.div`
  cursor:pointer;

  margin: 10px;
  width: 190px;
  height: 230px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const HeadDiv = styled.div`
  display: flex;
  margin: 0;
  height: 190px;
  background-position: center;
  background-image: url(${img_url}) ;
  background-size: cover;
  align-items: flex-end;
  padding: 5px;
`;

const Descript = styled.div`
  margin: 0;
  padding: 2px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 70px;
  width:120px;
`;

const Guide = styled.h5`
  margin: 0;
  display: flex;
  color: hsl(235, 10%, 33%);
  font-size: 11px;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 17px;
  background-color: white;
  border-radius: 5px;
`;

const H4 = styled.h4`
   margin: 0;
   display: flex;
   color: white;
   width: 110px;
   height: 35px;
`;

const FootDiv = styled.div`
  margin: 0px;
  padding: 2px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 30px;
  width: 130px;
`;

const Name = styled.h5`
  margin: 0;
  display: flex;
  font-size: 12px;
  align-items: center;
  height: 17px;
  background-color: white;
  color: hsl(235, 10%, 33%);
`;

const Spec = styled.p`
  margin: 0;
  display: flex;
  font-size: 12px;
  align-items: center;
  height: 17px;
  background-color: white;
  color: hsl(235, 10%, 33%);
`;


const Item = () =>
<ItemContainer>
 <HeadDiv>
   <Descript>
     <Guide>GUIDE</Guide>
     <H4>WATCH THE SUNSET</H4>
   </Descript>
 </HeadDiv>
 <FootDiv>
  <Name>By Carlos Lechuga</Name>
  <Spec> Filmmaker </Spec>
 </FootDiv>
</ItemContainer>

export default Item;
