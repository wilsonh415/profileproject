import React from 'react';
import NavbarComp from './NavbarComp';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom';
import Resume from './Resume';
import Projects from './Projects';
import Random from './Random';
 
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
               </BrowserRouter>
           </div>
       )
   }
}
 
export default MyPage;
