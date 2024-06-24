import './App.css';
import TopBar from "./components/TopBar";
import ChatRoom from "./components/ChatRoom";
import Home from "./components/Home";
import {Route, Routes} from "react-router";

function App() {
  return (
    <div className="App">
        <TopBar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/chatroom" element={<ChatRoom/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
