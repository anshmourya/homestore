import React, { useState,useEffect } from "react";

import dot from "./3-dot.png";
import send from "./send.png";
import ChatData from "./chatData";
import ChatHeader from "./chatHeader";
import menu from "./Menu Icon.png";
import search from "./Vector.png";
import magnify from "./magnify.png";
import call from "./call.png";
import wallpaper from "./wallpaper1.jpg";
import emoji from "./emoji.png";

// import Chat from './chat'



const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
      };

       await socket.emit('send_message', messageData);
       setMessageList((list) => [...list, messageData]);
    }
  };

  useEffect(() => {
    const receiveMessage = (data) => {
      setMessageList((list) => [...list,data])
    };

    socket.on('receive_message', receiveMessage);

    return () => {
      socket.off('receive_message', receiveMessage);
    };
  }, [socket]);

  
  const randomIndex = Math.floor(Math.random() * ChatData.length);
  const randomChats = ChatData.slice(randomIndex, randomIndex + 7);
  const randomIndexx = Math.floor(Math.random() * ChatHeader.length);
  const randomObject = ChatHeader[randomIndexx];

  const [chatMessages, setChatMessages] = useState([
    
    { sender: "me", content: "Hello" },
    { sender: "other", content: "Hi there" },
    { sender: "me", content: "How are you?" },
    { sender: "other", content: "I'm good, thanks!" },
    { sender: "me", content: "I am Interested in your phone?" },
    { sender: "other", content: "When do you plan to buy it?" },
  ]);

  
  return (
    <>
      <div>
      <div className='chat-header'>
        <p>Live chat</p>
      </div>
      <div className='chat-body'>
        {messageList.map((messageContent) => {
          return(
            <>
            
            <div id = {username === messageContent.author ? "me" : "other"}>
            <h1>{messageContent.message}</h1>
            
            </div>
            </>
          );
        })}
      </div>
      <div className='chat-footer'>
        <input type="text" placeholder='Hey...' onChange={(event) => {
          setCurrentMessage(event.target.value);
        }

        } />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
    </>
  );
};

export default Chat;
