import Child from "./components/Child";

import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from "./components/Home";


const App = () => {
  
  return (
    <div className="App">
        <div>
          <h1>Wel come to Play With Number </h1>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Home />}></Route>
            <Route path='add' element={<Child operation = {1} />}></Route>
            <Route path='substract' element={<Child operation = {2} />}></Route>
            <Route path='multiply' element={<Child operation = {3} />}></Route>
            <Route path='division' element={<Child operation = {4} />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App