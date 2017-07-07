import React from 'react';
import styled from 'styled-components';
import Layer from './layer';

const PlacesBodyContainer = styled.div`
  border:1px solid grey;
  margin: 0px;
  padding 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Categor = styled.p`
  margin: 0;
  display: flex;
  font-size: 16px;
  align-items: center;
  height: 20px;
  background-color: white;
  color: hsl(235, 10%, 33%);
  padding: 40px;
  cursor:pointer;
`;


const PlacesBody = () => {

  const Layer_arr = () => {
    let item_arr = [];
    for(let i = 0; i < 10; ++i){
      item_arr.push(<Layer/>)
    }
    return item_arr;
  }


  return (
  <PlacesBodyContainer>
      <Categor> Categories > </Categor>
      {Layer_arr()}
  </PlacesBodyContainer>
  )
}

  export default PlacesBody;
