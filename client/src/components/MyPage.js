import React from 'react';
import NavbarComp from './NavbarComp';
import { BrowserRouter, Route } from 'react-router-dom';
import Resume from './Resume';
import Projects from './Projects';
import Random from './Random';
import Home from './Home';
import Iss from './projectComponents/Iss';
import MinesweeperGame from './projectComponents/Game';
 
class MyPage extends React.Component {
   render() {
       return (
           <div className="thePage">
               <div className="bgBlock">
               </div>
               <NavbarComp></NavbarComp>
               <BrowserRouter>
                   <Route component={Home} exact path="/"></Route>
                   <Route component={Resume} path="/Resume"></Route>
                   <Route component={Projects} path="/Projects"></Route>
                   <Route component={Random} path="/Random"></Route>
                   <Route component={Iss} path="/Iss"></Route>
                   <Route component={MinesweeperGame} path="/Minesweeper"></Route>
               </BrowserRouter>
           </div>
       )
   }
}
 
export default MyPage;
