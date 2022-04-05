import Axios from "axios";
import { useState,useEffect } from "react";
function Standing(){
    const [mytable, gettable]=useState([])
    useEffect(()=>{
    Axios.get('https://api.football-data.org/v2/competitions/PL/matches',{
      headers: { 'X-Auth-Token': '8e8bc64801ef46159cbe682329ae6c4e' }
    }).then(
      (response)=>{
        console.log(response);
        gettable(response.data.matches)
      }
      );
  },[]);
    return (
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
          <tr key={item.id}><td><img src={item.team.crestUrl} height="20px" width="20px"></img> {item.team.name}</td>
          <td>{item.playedGames}</td>
          <td>{item.playedGames-item.draw-item.lost}</td>
          <td>{item.draw}</td>
          <td>{item.lost}</td>
          <td>{item.goalDifference}</td>
          <td>{item.points}</td>
          </tr>
        ))}
    </tbody>
    </table>);
}
export default Standing;