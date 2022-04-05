import Home from "./components/Home";
import Login from "./pages/Login"
import Community from "./pages/Community";
import Fixtures from "./pages/Fixtures";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"; 
import Ltable from "./pages/Ltable";
import Club from "./pages/Club";
function App(){

   return ( 
      <Router>
      <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/home" component={Home}/>
      <Route path="/community" component={Community}/>
      <Route path="/fixtures" component={Fixtures}/>
      <Route path="/table" component={Ltable}/>
      <Route path="/club" component={Club}/>
      </Switch>
      </Router>
   );
}



export default App;
