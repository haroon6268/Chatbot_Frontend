import Body from "./Body";
import Input from "./Input";
import Nav from "./Nav";
import Footer from "./Footer";
import { useState } from "react";
const Phishing = () => {
  const [messages, setMessages] = useState([
    {
      type: "chat",
      data: "Welcome to the AI Phishing Detector Chatbot! 🚀 I'm here to help you identify potential phishing emails. To get started, please enter the subject, email body, and sender's details in the input fields provided. Once you've filled in the information, I'll analyze it and let you know if it looks suspicious. Let's keep your inbox safe! 🛡️",
    },
  ]);
  return (
    <>
      <Body messages={messages} setMessages={setMessages} />
      <Input messages={messages} setMessages={setMessages} />
    </>
  );
};
export default Phishing;
