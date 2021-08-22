import { React } from "react";
import "./Launch.css";
import { Table } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import Window from "./Window";
// import Window from "./Window";
// import Example from "./Example";
// import Filter from './Filter';


function Launch({ data }) {
  const viewDetailsOfLaunch = (id) => {
    console.log(id);
    <Window rocketId={id} />;
  };

  return (
    <div>
    {/* <Filter  /> */}
    
      <Table border="1px">
        <tbody>
          <tr>
            <td>No.</td>
            <td>Launched (UTC)</td>
            <td>Location</td>
            <td>Mission</td>
            <td>Orbit</td>
            <td>Launch Status</td>
            <td>Rocket</td>
            <td>View</td>
          </tr>

          {data.map((items, i) => (
            <tr key={i}>
              <td>{items.flight_number}</td>
              <td>{items.launch_date_utc}</td>
              <td>{items.launch_site.site_name}</td>
              <td>{items.mission_name}</td>
              <td>{items.rocket.second_stage.payloads[0].orbit}</td>
              <td>
                {items.upcoming === true ? (
                  <div className="upcoming"> upcoming</div>
                ) : items.launch_success === true ? (
                  <div className="success">successed</div>
                ) : (
                  <div className="failed"> failed</div>
                )}
              </td>

              <td>{items.rocket.rocket_name}</td>
              {/* <td><Button onClick={()=>viewDetailsOfLaunch(items.flight_number)} >View</Button></td> */}
              <td>
                <Window rocketId={items.flight_number} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Launch;
