import { useState, useEffect, useRef } from "react";
const Body = ({ messages, setMessages }) => {
  let divEnd = useRef(null);
  useEffect(() => {
    divEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="flex-1 max-h-full w-full mx-auto overflow-auto m-4">
      <div className="px-[10%] flex flex-col">
        {messages.map((x, i) => {
          return x.type == "user" ? (
            <div className="chat chat-end" key={i}>
              <div className="chat-header">You</div>
              <div className="chat-bubble chat-bubble-primary max-w-[45%]">
                Subject: {x.data.subject}
                <br />
                Body: {x.data.body}
                <br />
                Sender: {x.data.sender}
              </div>
            </div>
          ) : (
            <div className="chat chat-start">
              <div className="chat-header">PhishGuard🛡️</div>
              <div className="chat-bubble chat-bubble-secondary max-w-[45%]">
                {x.data}
              </div>
            </div>
          );
        })}
        <div ref={divEnd} />
      </div>
    </div>
  );
};

export default Body;

/**
 *
 */
