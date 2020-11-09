import React from 'react';
import NavbarComp from './NavbarComp';
import { BrowserRouter, Route } from 'react-router-dom';
import Resume from './Resume';
import Projects from './Projects';
import Random from './Random';
import Iss from './projectComponents/Iss';
 
class MyPage extends React.Component {
   render() {
       return (
           <div className="thePage">
               <div className="bgBlock">
               </div>
               <NavbarComp></NavbarComp>
               <BrowserRouter>
                   <Route component={Resume} path="/Resume"></Route>
                   <Route component={Projects} path="/Projects"></Route>
                   <Route component={Random} path="/Random"></Route>
                   <Route component={Iss} path="/Iss"></Route>
               </BrowserRouter>
           </div>
       )
   }
}
 
export default MyPage;
