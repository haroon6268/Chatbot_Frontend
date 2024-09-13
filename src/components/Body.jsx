import { useState, useEffect } from "react";
const Body = ({ messages, setMessages }) => {
  useEffect(() => {}, [messages]);

  return (
    <div className="flex-auto  w-full mx-auto overflow-auto m-5">
      <div className="h-full overflow-auto px-[10%] flex flex-col">
        {messages.map((x, i) => {
          return (
            <div
              className={`flex ${
                x.type == "user" ? "justify-start" : "justify-end"
              } pt-5`}
            >
              {x.type == "user" ? (
                <div className="w-[35rem] bg-gray-600 h-fit p-3 rounded-2xl">
                  <p className="text-white">Subject: {x.data.subject}</p>
                  <p className="text-white">Body: {x.data.body}</p>
                  <p className="text-white">Sender: {x.data.sender}</p>
                </div>
              ) : (
                <div className="w-[35rem] bg-gray-600 h-fit p-3 rounded-2xl">
                  <p className="text-white whitespace-pre-line">{x.data}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
