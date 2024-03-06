import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";


function App() {

  return (
    <div>
      
      <BrowserRouter>
      
        <Routes> 
          <Route path='/' exact Component={Home}/>
          <Route path='/list' exact Component={List}/>
        </Routes>
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;