
import "./Matchdisplay.css";

function Matchdisplay({home,away,time,status,hscore,ascore,matchid}){
    return(
    <div id='tickets'>
    <div class='ticket-container'>
    <div class='ticket'>
		<h2 className="matchtime">{time}</h2>
        <p className="teams">{home}vs{away}</p>
        {status === "FINISHED" ? <p className="score">{hscore}-{ascore}</p> : <p className="score">yet to be played</p>}
        <p className="status" style={{ backgroundColor: status !== "FINISHED"? 'green': 'red'}}>{status}</p>
        </div>		
	</div>
</div>
    );
}
export default Matchdisplay;