import logo from './logo.svg';
import './App.css';
import List from "./views/List";
import {Route, Routes} from "react-router-dom";
import Create from "./service/Create";
import Info from "./service/Info";
import Update from "./service/Update";
import Delete from "./service/Delete";

function App() {
  return (
    <div className="App">
     <Routes>
         <Route path={"/"} element={<List/>}></Route>
         <Route path={"/create"} element={<Create/>}></Route>
         <Route path={"/update/:id"} element={<Update/>}></Route>
         <Route path={"/delete/:id"} element={<Delete/>}></Route>
         <Route path={"/info/:id"} element={<Info/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
