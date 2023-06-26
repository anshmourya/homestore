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

const Chat = ({ socket, username, room }) => {

  // const randomIndex = Math.floor(Math.random() * ChatData.length);
  // const randomChats = ChatData.slice(randomIndex, randomIndex + 7);
  // const randomIndexx = Math.floor(Math.random() * ChatHeader.length);
  // const randomObject = ChatHeader[randomIndexx];

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [randomObject, setRandomObject] = useState({});
  const [randomChats, setRandomChats] = useState([]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * ChatData.length);
    const randomChatsData = ChatData.slice(randomIndex, randomIndex + 7);
    const randomIndexx = Math.floor(Math.random() * ChatHeader.length);
    const randomObjectData = ChatHeader[randomIndexx];

    setRandomObject(randomObjectData);
    setRandomChats(randomChatsData);
  }, []);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
        type: "sent", // Add a "type" property to indicate it's a sent message
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage(""); // Clear the input field after sending the message
    }
  };

  useEffect(() => {
    const receiveMessage = (data) => {
      const messageData = {
        ...data,
        type: "received", // Add a "type" property to indicate it's a received message
      };
      setMessageList((list) => [...list, messageData]);
    };

    socket.on("receive_message", receiveMessage);

    return () => {
      socket.off("receive_message", receiveMessage);
    };
  }, [socket]);

  return (
    <>
      <div className="flex flex-row h-full hide-scrollbar">
        <div className="flex flex-col w-[30%] h-full bg-white">
          <div className="flex flex-row w-[100%] h-[3rem] justify-center items-center mt-[1rem]">
            <img
              src={menu}
              alt="menu"
              className="h-[3rem] w-[3rem] relative right-9"
            />
            <div className="bg-gray-200 font-inter h-[100%] w-[70%] rounded-3xl flex flex-row justify-start">
              <img
                src={search}
                alt="search"
                className="w-[1.5rem] h-[1.5rem] relative top-3 left-4"
              />
              <input
                type="search"
                name="search"
                placeholder="Search"
                className="bg-gray-200 relative left-5 focus:border-transparent focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-row w-[100%] h-[4rem]">
            <div className="flex items-center justify-center w-[3rem] h-[3rem] ">
              <img
                src={randomObject.img}
                alt="image"
                className="rounded-full relative top-2"
              />
            </div>
            <div className="flex flex-col w-[80%] h-[100%]">
              <div className="flex flex-row w-[100%] h-[50%] font-inter justify-between">
                <span className="font-semibold text-lg relative left-4 top-2">
                  {randomObject.name}
                </span>
                <span className="flex justify-center items-center text-gray-400">
                  13:45
                </span>
              </div>
              <div className="relative left-4 text-gray-500">
                Hey I am interested!!
              </div>
            </div>
          </div>

          {randomChats.map((chat, index) => (
            <div key={index} className="flex flex-row w-[100%] h-[4rem]">
              <div className="flex items-center justify-center w-[3rem] h-[3rem] ">
                <img
                  src={chat.img}
                  alt="image"
                  className="rounded-full relative top-2"
                />
              </div>
              <div className="flex flex-col w-[80%] h-[100%]">
                <div className="flex flex-row w-[100%] h-[50%] font-inter justify-between">
                  <span className="font-semibold text-lg relative left-4 top-2">
                    {chat.name}
                  </span>
                  <span className="flex justify-center items-center text-gray-400">
                    {chat.time}
                  </span>
                </div>
                <div className="relative left-4 text-gray-500">
                  {chat.message}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[70%] h-full bg-white">
          <div className="flex flex-row w-[100%] h-[3rem] ">
            <div className="flex justify-center items-center w-[3rem] h-[3rem] ">
              <img
                src={randomObject.img}
                alt="image"
                className="rounded-full relative top-2"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row w-[100%] h-[100%] font-inter justify-between">
                <span className="font-semibold text-lg relative left-4 top-2">
                  {randomObject.name}
                </span>
                <div className="flex justify-end items-center relative top-5 h-[2rem] w-[55rem]">
                  <img src={magnify} alt="image" className="mx-3" />
                  <img src={call} alt="image" className="mx-3" />
                  <img src={dot} alt="image" className="mx-3" />
                </div>
              </div>
              <span className="text-gray-400 relative left-4 top-1">
                {randomObject.last}
              </span>
            </div>
          </div>

          <div className="h-full w-[100%]">
            <img
              src={wallpaper}
              alt="image"
              className="w-[68rem] relative top-4 h-[42rem]"
            />
            <div className="h-[34rem] w-[60%] absolute top-[15%] left-[35%]">
              <div className="chat-body w-full">
                {messageList.map((messageContent, index) => (
                  <div
                    key={index}
                    className={`flex mb-4 ${
                      messageContent.type === "sent" ? "justify-end" : "justify-start"
                    }`}
                  >
                    
                    <div
                      className={`p-2 rounded-lg ${
                        messageContent.type === "sent"
                          ? "bg-blue-500 text-white w-[10rem] rounded-md"
                          : "bg-gray-200 w-[10rem] rounded-md"
                      }`}
                    >
                      <span>{messageContent.message}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row absolute top-[90%] left-[45%] h-[3rem] w-[45rem] items-center bg-white rounded-2xl">
              <img
                src={emoji}
                alt="image"
                className="h-[2rem] w-[2rem] relative left-2"
              />
              <input
                type="text"
                placeholder="Message"
                className="text-gray-700 font-inter mx-7 w-[36rem] focus:border-transparent focus:outline-none"
                value={currentMessage}
                onChange={(event) => setCurrentMessage(event.target.value)}
              />
              <button>
                <img src={send} onClick={sendMessage} alt="image" className="h-[1.5rem] w-[1.5rem]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
