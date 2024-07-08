import './App.css';
import TopBar from "./components/TopBar";
import ChatRoom from "./components/ChatRoom";
import Home from "./components/Home";
import {Route, Routes} from "react-router";
import NumberSumUp from "./components/NumberSumUp";

function App() {
  return (
    <div className="App">
        <TopBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chatroom" element={<ChatRoom/>}/>
          <Route path="/sumupnum" element={<NumberSumUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
