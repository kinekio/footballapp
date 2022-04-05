import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Header from "../components/Header";
import "./Ltable.css"

function Table(){
    const [mytable, gettable]=useState([])
    const [league,getleague]=useState("PL")
    let dropDownLinkStyle = {
        color: 'black'
      };
    const handleSelect=(e)=>{
        getleague(e);
        Axios.get('https://api.football-data.org/v2/competitions/'+league+'/standings',{
      headers: { 'X-Auth-Token': '8e8bc64801ef46159cbe682329ae6c4e' }
    }).then(
      (response)=>{
        console.log(response);
        gettable(response.data.standings[0].table)
      }
      );
      }
    useEffect(()=>{
    Axios.get('https://api.football-data.org/v2/competitions/'+league+'/standings',{
      headers: { 'X-Auth-Token': '8e8bc64801ef46159cbe682329ae6c4e' }
    }).then(
      (response)=>{
        console.log(response);
        gettable(response.data.standings[0].table)
      }
      );
  },[]);
return(
    <div>
    <Header/>
    <div className="whole">
    <div className="left">
    </div>
    <div className="tablecontainer">
    <DropdownButton
      alignRight
      title="League"
      variant="white"
      id="dropdown-menu-align-right-btn-secondary"
      style={dropDownLinkStyle}
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="PL">Premiere League</Dropdown.Item>
              <Dropdown.Item eventKey="BL1">Bundesliga</Dropdown.Item>
              <Dropdown.Item eventKey="SA">Serie A</Dropdown.Item>
              <Dropdown.Item eventKey="PD">La liga</Dropdown.Item>
              <Dropdown.Divider />
      </DropdownButton>
    <table className="standings">
    <thead>
    <tr>
      <th scope="col">Club</th>
      <th scope="col">Played</th>
      <th scope="col">W</th>
      <th scope="col">D</th>
      <th scope="col">L</th>
      <th scope="col">GD</th>
      <th scope="col">Points</th>
      </tr>
      </thead>
      <tbody>
  {mytable.map(item => (
          <tr key={item.id}><td><img alt="" src={item.team.crestUrl} style={{ height: 20, width: 20, display: "inline" }}></img> {item.team.name}</td>
          <td>{item.playedGames}</td>
          <td>{item.playedGames-item.draw-item.lost}</td>
          <td>{item.draw}</td>
          <td>{item.lost}</td>
          <td>{item.goalDifference}</td>
          <td>{item.points}</td>
          </tr>
        ))}
    </tbody>
    </table>
    </div>
    </div>
    <div className="right">
    </div>
    </div>
);
}
export default Table;
