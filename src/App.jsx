import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Body from "./components/Body";
import Input from "./components/Input";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MainPage from "./components/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const is = true;
  const [messages, setMessages] = useState([
    {
      type: "chat",
      data: "Welcome to the AI Phishing Detector Chatbot! 🚀 I'm here to help you identify potential phishing emails. To get started, please enter the subject, email body, and sender's details in the input fields provided. Once you've filled in the information, I'll analyze it and let you know if it looks suspicious. Let's keep your inbox safe! 🛡️",
    },
  ]);
  if (!is) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" />
        </Routes>
        <div className="flex flex-col h-screen">
          <Nav />
          <Body messages={messages} setMessages={setMessages} />
          <Input messages={messages} setMessages={setMessages} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <div className="h-screen flex flex-col">
        <MainPage></MainPage>
      </div>
    );
  }
}

export default App;
