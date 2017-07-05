import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { PageContainer } from "./StyledContainers";
import NavBar from "./NavBar";
import Tabs from "./Tabs";


const link = 'http://visualise.com/wp-content/uploads/2016/11/Snowboard.jpg';
//  to know, in styled.div` content: url(http://visualise.com/wp-content/uploads/2016/11/Snowboard.jpg);
const link2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6s5DTAMpy2B_GO6sVo9RCuqZd3Jaah2zdTcsTEYa8MkJe-96X3A';
const link3 = 'http://img.atb.am/upload/images/Monument/babajanayn/babajanayn_1.jpg';
const link4 = 'http://i.huffpost.com/gen/1162506/images/o-BICYCLING-facebook.jpg';
const link5 = 'http://extremefamily.ru/images/montenegro/RopeJumping_montenegro_14.jpg';
const link6 = 'http://c1.bravo.am/uploads/2010/02/big_saryan4_ts1323259510.jpg';
const link7 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2rmLcj3Cf9y3Ux6ICwI9vLY-ojXtOOHQgqJykTfjjSD0G0xcI3w';
const link8 = 'http://www.jermukararat.com/news_gallery/1_760_big.jpg';
const link9 = 'https://media-cdn.tripadvisor.com/media/photo-s/0d/f2/aa/ee/entertainment-in-armenia.jpg';
const link10 = 'https://armeniagogo-huvjjtmj02bn.netdna-ssl.com/wp-content/uploads/2016/11/tumblr_nva7yvYxUv1uwrc5ko2_500-e1478655942413.jpg';
const link11 = 'https://armeniagogo-huvjjtmj02bn.netdna-ssl.com/wp-content/uploads/2017/02/paparazzi-e1488302780565.jpg';
const link12 = 'http://www.bsc.am/site_files/slides/barrels_6300.jpg';


const styleing_img = {
  display: 'flex',
  flex: '1',
  flexFlow: 'row',
  justifyContent: 'space-around',
  maxWidth:'300px',
  maxHeight:'150px',
}
const style = {
  fontStyle: 'italic',
  fontSize: '25px'
}

const Images = styled.div`
  display: flex;
  flex-direction : row ;
  justify-content: space-around;
`

const ItemsDiv = styled.div`
display : flex ;
flex-direction : column ;
flex : 1 ;
background-color : aliceblue;
`

const Eachcolumn = styled.div`
display: flex;
flex-direction : column;

`
const crop = {
    width: '200px',
    height: '150px',
    overflow: 'hidden'
}


class Experiences extends Component {

render() {

  return (
   <PageContainer>
     <NavBar/>
     <Tabs/>
     <ItemsDiv>
      <Eachcolumn>
       <p style={style}>Sports</p>
       <Images>
         <div class = {crop} ><img src={link} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link} style={styleing_img}/><p>Info about the item</p></div>
       </Images>
      </Eachcolumn>
      <Eachcolumn>
       <p style={style}>Food & Drink</p>
       <Images>
         <div class = {crop} ><img src={link2} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link2} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link2} style={styleing_img}/><p>Info about the item</p></div>
       </Images>
      </Eachcolumn>
      <Eachcolumn>
       <p style={style}>Music</p>
       <Images>
         <div class = {crop} ><img src={link3} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link3} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link3} style={styleing_img}/><p>Info about the item</p></div>
       </Images>
      </Eachcolumn>
      <Eachcolumn>
       <p style={style}>Lifestyle</p>
       <Images>
         <div class = {crop} ><img src={link4} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link4} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link4} style={styleing_img}/><p>Info about the item</p></div>
       </Images>
      </Eachcolumn>
      <Eachcolumn>
       <p style={style}>Nature</p>
       <Images>
         <div class = {crop} ><img src={link5} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link5} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link5} style={styleing_img}/><p>Info about the item</p></div>
       </Images>
      </Eachcolumn>
      <Eachcolumn>
       <p style={style}>Arts & Design</p>
       <Images>
         <div class = {crop} ><img src={link6} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link6} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link6} style={styleing_img}/><p>Info about the item</p></div>
       </Images>
      </Eachcolumn>
      <Eachcolumn>
       <p style={style}>History</p>
       <Images>
         <div class = {crop} ><img src={link7} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link7} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link7} style={styleing_img}/><p>Info about the item</p></div>
       </Images>
      </Eachcolumn>
      <Eachcolumn>
       <p style={style}>Wellness</p>
       <Images>
         <div class = {crop} ><img src={link8} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link8} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link8} style={styleing_img}/><p>Info about the item</p></div>
       </Images>
      </Eachcolumn>
      <Eachcolumn>
       <p style={style}>Entertainment</p>
       <Images>
         <div class = {crop} ><img src={link9} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link9} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link9} style={styleing_img}/><p>Info about the item</p></div>
       </Images>
      </Eachcolumn>
      <Eachcolumn>
       <p style={style}>Fashion</p>
       <Images>
         <div class = {crop} ><img src={link10} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link10} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link10} style={styleing_img}/><p>Info about the item</p></div>
       </Images>
      </Eachcolumn>
      <Eachcolumn>
       <p style={style}>Nightlife</p>
       <Images>
         <div class = {crop} ><img src={link11} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link11} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link11} style={styleing_img}/><p>Info about the item</p></div>
       </Images>
      </Eachcolumn>
      <Eachcolumn>
       <p style={style}>Business</p>
       <Images>
         <div class = {crop} ><img src={link12} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link12} style={styleing_img}/><p>Info about the item</p></div>
         <div class = {crop} ><img src={link12} style={styleing_img}/><p>Info about the item</p></div>
       </Images>
      </Eachcolumn>
   </ItemsDiv>
   </PageContainer>
  );
 }
}


export default Experiences;
