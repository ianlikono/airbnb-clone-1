
import React from 'react';
import styled from 'styled-components';
import Item from './item';


//  border:1px solid grey;
const LineContainer = styled.div`
  
  margin: 0px;
  padding: 20px;
  height: 300px;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
`;

const LineDiv = styled.div`

  margin: 0px;
  height: 240px;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;

`;


const LayerHeader = styled.div`
  margin: 0;
  display: flex;

  padding: 10px;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  color: hsl(235, 10%, 33%);
`;

const Title = styled.h2`
  margin: 0;
  display: flex;

  padding: 10px;
  align-items: center;
  height: 25px;
  color: hsl(235, 10%, 33%);
`;

const SeeAll = styled.p`
  cursor:pointer;
  margin: 0;
  display: flex;
  font-size: 14px;
  padding: 0px;
  align-items: center;
  height: 25px;
  color: hsl(235, 10%, 33%);
`;


const Layer = () => {

  const Item_arr = () => {
    let item_arr = [];
    for(let i = 0; i < 10; ++i){
      item_arr.push(<Item/>)
    }
    return item_arr;
  }


  return (
  <LineContainer>
    <LayerHeader>
      <Title> Title </Title>
      <SeeAll>See all ></SeeAll>
    </LayerHeader>
    <LineDiv>
      {Item_arr()}
    </LineDiv>
  </LineContainer>
  )
}

  export default Layer;
