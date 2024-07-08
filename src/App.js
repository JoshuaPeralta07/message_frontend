import './App.css';
import TopBar from "./components/TopBar";
import ChatRoom from "./components/ChatRoom";
import Home from "./components/Home";
import {Route, Routes} from "react-router";
import NumberSumUp from "./components/NumberSumUp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
        <TopBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chatroom" element={<ChatRoom/>}/>
          <Route path="/sumupnum" element={<NumberSumUp/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
