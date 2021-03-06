
import './App.css';
import Lside from "./sidebar";
import Tbar from "./topbar";
import Crow from "./contentrow";
import Card from "./card"
import Chart from "./chart";
import User from "./user";
import Createuser from "./createuser";
import Edituser from "./edituser";
import {UserProvider} from "./usercontext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    
      <Router>
      
      <div id="wrapper">
      <Lside></Lside>
      <div id="content">
      <UserProvider>
       <Tbar></Tbar>
       <Switch>
         <Route path ="/" exact="true">
       <div className="container-fluid">
       <Crow></Crow>
       <Card></Card>
       <Chart></Chart>
       </div>
       </Route>
       <Route path="/user" exact="true">
        <User></User>
        </Route>
        <Route path="/createuser" exact="true">
        <Createuser></Createuser>
        </Route>
        <Route path="/edit-user/:id" exact="true">
        <Edituser></Edituser>
        </Route>
       </Switch>
        </UserProvider>
        </div>  
        </div>
        </Router>
        
            );
}

export default App;
