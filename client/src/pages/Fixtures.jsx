import Axios from "axios";
import Matchdisplay from "../components/Matchdisplay";
import Header from "../components/Header"
import { useState,useEffect } from "react";
import "./Fixtures.css";
function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }

function Fixtures(){
    const [matches, getmatches]=useState([])
    var date = new Date();
    var month = pad2(date.getMonth()+1);
    var day = pad2(date.getDate()-1);
    var year= date.getFullYear();
    var dateFrom =  year+"-"+month+"-"+day;
    var nextweek = new Date(date.getFullYear(), date.getMonth(), date.getDate()+6);
    var month = pad2(nextweek.getMonth()+1);
    var day = pad2(nextweek.getDate());
    var year= nextweek.getFullYear();
    var dateTo =  year+"-"+month+"-"+day;
    useEffect(()=>{
    Axios.get("https://api.football-data.org/v2/competitions/PL/matches?dateFrom="+dateFrom+"&dateTo="+dateTo,{
      headers: { 'X-Auth-Token': '8e8bc64801ef46159cbe682329ae6c4e' }
    }).then(
      (response)=>{
        console.log(response);
        getmatches(response.data.matches);
  
      }
      );
  },[]);
    return (<div>
      <Header></Header>
      <div className="fixturewindow">
      {matches.map((item) =>(
      <div className="displaycard">
        <Matchdisplay home={item.homeTeam.name} away={item.awayTeam.name} time={item.utcDate} status={item.status} ascore={item.score.fullTime.homeTeam} hscore={item.score.fullTime.awayTeam} match={item.id}/>
        </div>
      ))}
    </div>
    </div>);
}
export default Fixtures;