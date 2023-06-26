import { BrowserRouter, Routes, Route} from "react-router-dom";
import React, { useEffect, useState } from 'react'

import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Request from "./pages/request/Request";
import Seller from "./pages/seller/Seller";
import Chat from "./pages/chat/chat"
import io from 'socket.io-client'

const socket = io.connect("http://localhost:3001")

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const joinRoom = () => {
    setRoom(123);
    // if (username !== '' || room !== '') {
      socket.emit("join_room", 123);
    // }
  }

  useEffect(() => {
    joinRoom();
  }, []);
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/request" element={<Request />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/chat" element={<Chat socket={socket} username={username} room={room} />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
