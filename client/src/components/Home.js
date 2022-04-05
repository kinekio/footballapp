import Content from "./Content";
import FixturesList from "./FixturesList";
import Header from "./Header";


function Home(){
   return ( 
   <div className="row">
   <Header/>
   <div className="leftchild col-8">
   <Content/>
   </div>
   <div className="rightchild col-4">
   <h2 class="text-bold">Standings</h2>
   <FixturesList/>
   <h2 style={{color: "black"}}>Rennes vs PSG</h2>
   <video className="highlights" controls><source src="vid\h1.mp4"></source>
   </video>
   <h2 style={{color: "black"}}>Liverpool vs ManCity</h2>
   <video className="highlights" controls><source src="vid\h3.mp4"></source>
   </video>
   <h2 style={{color: "black"}}>Advertisements</h2>
   <img className="ad" src="img\ad1.jpeg" alt=""></img>
   <img className="ad" src="img\ad2.jpg" alt=""></img>
   <img className="ad" src="img\ad3.jpeg" alt=""></img>
   <img className="ad" src="img\ad4.jpeg" alt=""></img>
   </div>
   </div>);
}
  


export default Home;