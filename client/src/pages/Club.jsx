import Header from "../components/Header";
import "./Club.css"
function Club(){
    return(
        <div>
            <Header/>
            <div class="container">
	<div class="match">
		<div class="match-header">
			<div class="match-tournament"><img src="https://assets.codepen.io/285131/pl-logo.svg" />English Premier League</div>
			<div class="match-actions">
				<button class="btn-icon"><i class="material-icons-outlined">grade</i></button>
				<button class="btn-icon"><i class="material-icons-outlined">add_alert</i></button>
			</div>
		</div>
		<div class="match-content">
			<div class="column">
				<div class="team team--home">
					<div class="team-logo">
						<img style={{ height: 100, width: 100 }} src="https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg" />
					</div>
					<h2 class="team-name">Arsenal</h2>
				</div>
			</div>
			<div class="column">
				<div class="match-details">
					<div class="match-date">
						2 Dec at <strong>1:00</strong>
					</div>
					<div class="match-score">
						<span class="match-score-number match-score-number--leading">3</span>
						<span class="match-score-divider">:</span>
						<span class="match-score-number">1</span>
					</div>
	
					<div class="match-referee">
						Referee: <strong>Mike dean</strong>
					</div>
					
				</div>
			</div>
			<div class="column">
				<div class="team team--away">
					<div class="team-logo">
				
						<img src="https://resources.premierleague.com/premierleague/badges/t1.svg" />
					</div>
					<h2 class="team-name"> Man Utd</h2>
				</div>
			</div>
		</div>
	</div>
</div>
<div className="recap">
<h3 className="text-bold">Match recap</h3>
<p>Manchester United came back from a goal down to beat Arsenal 3-2 at Old Trafford, with Michael Carrick maintaining his unbeaten run as caretaker manager and stepping down as first team coach.



In the 13th minute, Arsenal took the lead through Emile Smith-Rowe in bizarre fashion as David de Gea was on the floor clutching his foot when the shot found its way into the back of his net. T



he goal stood as referee Martin Atkinson had not blown his whistle before the ball crossed the line.



United equalised just before half-time through a well-worked move finished off by Bruno Fernandes. The hosts kept that momentum after the break as Cristiano Ronaldo put them in front with his 800th career goal in the 52nd minute.



Martin Odegaard restored parity for Arsenal just two minutes later with a similar goal. But, after Fred was fouled in the box by the Norwegian, Ronaldo scored his second from the spot to put United 3-2 up with 20 minutes to go.



The game kicked into life from there as both sides jostled for control but neither could find a way through.



That win was United's first in four league games and takes them up to seventh in the table, while Arsenal remain in fifth.</p>
</div>
<br></br>
<div className="fixture">
<h3 className="text-bold">Upcoming Fixture</h3>
<p>Manchester United failed to win either of their league meetings with Crystal Palace last season (D1 L1). They've not gone three without a win against the

Eagles since a run of four between 1925 and 1970.

Crystal Palace have won their last two away league games against Manchester United, as many as they'd managed in their previous 22 visits to Old Trafford in league competition (W2 D3 L17).

Crystal Palace have taken seven points from their last four league meetings with Manchester United (W2 D1 L1), as many as they'd managed in their previous 23 against them (W1 D4 L18).

Crystal Palace have already won 2-0 away against

Manchester City in the Premier League this season - the last London side to win away at both Manchester clubs (City & United) in the same top-flight campaign was Arsenal in 1990-91. </p>
</div>
        </div>
    );
}
export default Club;