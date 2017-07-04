import React, { Component } from "react";
import styled from "styled-components";
import items from './ndata.json';
import NavBar from "./NavBar";
import { PageContainer } from "./StyledContainers";
import Tabs from "./Tabs"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const StyledDiv = styled.div`
display : flex ;
flex-direction : row ;
flex : 1 ;
justify-content : center;
background-color : green;
height : 800px;
`

const StyledMapDiv = styled.div`
background-color : red;
height : 800px;
width : 50% ;
`

const StyledHomesDiv = styled.div`
display : flex;
flex : 1 ;
width : 50%;
flex-wrap: wrap;
background-color : blue ;
flex-direction : row;
align-items :center;
justify-content : space-around;
overflow-y : scroll;

`

const ItemDiv = styled.div`
background-color : gray ;
display : flex;
flex-wrap : wrap;
`
const StyledImg = styled.img`
width: 100% ,
height : 100%
`

// Handling pagination
function paginate (array, page_size, page_number) {
  --page_number
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}

const page_count = Math.ceil(items.items.length / 10)

const pages_array = []
for (var i = 1; i < page_count + 1; i++) {
  pages_array.push(i)
  console.log(i)
}

//Make google maps
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={9}
    defaultCenter={{ lat: -33.923036, lng: 151.259052 }}
    onClick={props.onMapClick}
  >
  {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

class Homes extends Component {

  state = {page : 1 , markers :[],}

  onClickHandler(evn){
    this.setState({page : evn.target.value , markers : []})
  }


  render() {

    const home_items = paginate(items.items , 10 , this.state.page ).map(elem => {
        this.state.markers.push({
          position: {
            lat: Number(elem.location.lat),
            lng: Number(elem.location.long),
          },
          defaultAnimation: 2,
        })

    return (
      <ItemDiv>
        <StyledImg src={elem.cover_photo_url}/>
        <p>about ==> {elem.about.slice(0,25)} ,price ==> {elem.price}</p>
      </ItemDiv>
    );
    });

    const pages = pages_array.map(elem => {
    return (
      <input
         type="button"
         value={elem}
         onClick={this.onClickHandler.bind(this)}
       />
    );
    });

    return (
      <PageContainer>

      <NavBar/>
      <Tabs/>
      <StyledDiv>
        <StyledHomesDiv>
        {home_items}
        {pages}
        </StyledHomesDiv>
        <StyledMapDiv>
        <div>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: `800px` }} />
          }
          mapElement={
            <div style={{ height: `800px` }} />
          }
          markers= {this.state.markers}
        />
        </div>
      </StyledMapDiv>
      </StyledDiv>
      </PageContainer>

    );
  }
}

export default Homes;
