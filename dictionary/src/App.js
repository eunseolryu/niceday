import React from "react";
import { Route } from "react-router-dom";
// useDispatch를 가져와요!
// 액션생성함수도 가져오고요!

import AddDic from './AddDic';
import Dictionary from './Dictionary'; 


function App() {
    
    return (
        <div className="App">
            <Route path="/" exact> 
            <Dictionary /> 
            </Route> 
            <Route path="/AddDic" exact> 
            <AddDic/> 
            </Route>
        </div>
    );
}





export default App;