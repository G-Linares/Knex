import React, { useEffect, useState } from "react";
import io from "socket.io-client";

// aqui la variable esta hardcodeada y apuinta al puerto donde esta montado el servidor de socket.io,
// verificar en donde esta montado en consola de server
const socket = io.connect("http://localhost:3001");

const Chat = () => {
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [conversation, setConversation] = useState([]);

  // esto recupera la conversacion que ya se tenia
  useEffect(() => {
    return () => {
      socket.on("recover_conversation", (data) => {
        setConversation(data);
      });
    };
  }, []);

  // esto checa constantemente el socket, si tiene un cambio lo manda al estado, actualiza y lo manda a vista
  useEffect(() => {
    return () => {
      socket.on("receive_message", (data) => {
        const incomingMessage = {
          message: data.message,
          date: data.date,
          sender: data.sender
        };
        setConversation((conversation) => [...conversation, incomingMessage]);
      });
    };
    //jeje
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit("send_message", {
      message: message,
      date: new Date(),
      sender: sender
    });
  };

  return (
    <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden min-h-[500px]">
      <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
        {/* este mensaje es pdel que manda */}
        {conversation.length < 1 ? (
          <div> No hay mensajes</div>
        ) : (
          //ya se que esto del index como key no se hace pero que se le va a hacer
          conversation.map((item, idx) => {
            if (item.sender === sender) {
              return (
                <div
                  className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end"
                  key={idx}
                >
                  <div>
                    <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                      <p className="text-sm">{item.message}</p>
                    </div>
                    <span className="text-xs text-gray-500 leading-none">
                      {item.date}
                    </span>
                  </div>
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                    {item.sender}
                  </div>
                </div>
              );
            } else {
              return (
                <div className="flex w-full mt-2 space-x-3 max-w-xs">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                    {item.sender}
                  </div>
                  <div>
                    <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                      <p className="text-sm">{item.message}</p>
                    </div>
                    <span className="text-xs text-gray-500 leading-none">
                      {item.date}
                    </span>
                  </div>
                </div>
              );
            }
          })
        )}
      </div>

      <div className="bg-gray-300 p-4">
        <form onSubmit={handleSendMessage} className="flex">
          <input
            className="flex items-center h-10 w-full rounded px-3 text-sm"
            type="text"
            input={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje…"
          />
          <input
            className="flex items-center h-10 w-1/2 rounded px-3 text-sm"
            type="text"
            input={sender}
            required
            onChange={(e) => setSender(e.target.value)}
            placeholder="Iniciales del que manda el Mensaje…"
          />
          <button type="submit" className="pl-2">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
