import { useState, useRef, useEffect } from "react";
import { Avatar, Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import socket from "../Driver/Socket";

const Chat = () => {
  const driverSocketId = useSelector((store) => store.findcab.findcabData.userSocketId);
  const [open, setOpen] = useState(false);
  const [totalMessage, setTotalMessage] = useState([]);
  const [message, setMessage] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }

    socket.on("recieve-message", (data) => {
      setTotalMessage(prev => [...prev, { type: "received", message: data.message }]);
    });

    return () => {
      socket.off("recieve-message");
    };
  }, [totalMessage]);

  const handleSendMessage = async () => {
    socket.emit("send-message", { driverSocketId, message });
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
    setTotalMessage(prev => [...prev, { type: "send", message }]);
    setMessage('');
  };

  return (
    <div
      className={`bg-white lg:w-96  ${!open ? "lg:h-[8vh]" : "lg:h-[75vh]"} duration-200`}
    >
      <div className="flex border p-2 shadow-2xl items-center">
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="sm" />
        <div>
          <h1 className="font-bold">Driver Name</h1>
          <p className="text-xs">8089568695</p>
        </div>
        <h1 className="ml-auto" onClick={() => setOpen(!open)}>{open ? "Close" : "Open"}</h1>
      </div>

      <div className={`${!open ? "hidden" : ""}`}>
        <div className={`h-[60vh] overflow-y-auto px-2`} ref={chatContainerRef}>
          {totalMessage.map((value, index) => (
            <div key={index} className={value.type === "send" ? "chat chat-end" : "chat chat-start"}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Avatar" src="https://docs.material-tailwind.com/img/face-2.jpg" />
                </div>
              </div>
              <div className="chat-header">
                {value.type === "send" ? "Anakin" : "Obi-Wan Kenobi"}
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble">{value.message}</div>
              <div className="chat-footer opacity-50">{value.type === "send" ? "Seen at 12:46" : "Delivered"}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={`flex absolute bottom-0 w-full border p-2 shadow-inner rounded-full mb-2 ${!open ? "hidden" : ""}`}>
        <input
          type="text"
          className="w-full px-2"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          maxLength={30}
        />
        <Button variant="gradient" className="px-3 py-2 rounded-2xl" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chat;
