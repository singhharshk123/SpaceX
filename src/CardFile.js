import React, { Fragment } from 'react';
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import "./Launch.css";



function CardFile ({rocketId}) {

    const [data, setData] = useState([]);
    const fetchDetails = () => {
      fetch("https://api.spacexdata.com/v3/launches")
        .then((response) => response.json())
        .then((result) => setData(result));
    };
  
    useEffect(() => {
      fetchDetails();
    }, []);

    // console.log(rocketId);
const selectedRocket = data.find((rocket)=>rocket.flight_number === rocketId);
// console.log(selectedRocket);

return (
<div>{
  selectedRocket && <div>
  <Card  style={{ width: '40rem' }}>
        <Fragment>
            
        <Card.Img variant="top" src={selectedRocket.links.mission_patch_small}  style ={{   width:"60px" , height: "60px"}} />
        <Card.Body>
          <Card.Title>{selectedRocket.mission_name}</Card.Title>
          <h6>{selectedRocket.rocket.rocket_name}</h6> <h6 style={{width:"100px"}}> {selectedRocket.upcoming === true ? (
                  <div className="upcoming"> upcoming</div>
                ) : selectedRocket.launch_success === true ? (
                  <div className="success">successed</div>
                ) : (
                  <div className="failed"> failed</div>
                )}</h6>
          <Card.Text>{selectedRocket.details } <a href={selectedRocket.links.wikipedia}>wikipedia</a> </Card.Text>
        </Card.Body>
       
       
        <ListGroup className="list-group-flush" >
          <ListGroupItem>Flight Number {selectedRocket.flight_number}</ListGroupItem>
          <ListGroupItem>Mission Name {selectedRocket.mission_name}</ListGroupItem>
          <ListGroupItem>Rocket Type {selectedRocket.rocket.rocket_type} </ListGroupItem>
          <ListGroupItem>Rocket Name {selectedRocket.rocket.rocket_name} </ListGroupItem>
          <ListGroupItem>Manufacture {selectedRocket.rocket.second_stage.payloads[0].manufacturer} </ListGroupItem>
          <ListGroupItem>Nationality {selectedRocket.rocket.second_stage.payloads[0].nationality} </ListGroupItem>
          <ListGroupItem>Launch Date {selectedRocket.launch_date_local} </ListGroupItem>
          <ListGroupItem>Payload Type {selectedRocket.rocket.second_stage.payloads[0].payload_type}</ListGroupItem>
          <ListGroupItem>Orbit {selectedRocket.rocket.second_stage.payloads[0].orbit}</ListGroupItem>
          <ListGroupItem>Launch Site {selectedRocket.launch_site.site_name}</ListGroupItem>
        </ListGroup>
        
        </Fragment>
      </Card>

  </div>
}
           
       
</div>       
    )
}
export default CardFile;