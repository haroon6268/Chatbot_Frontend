import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Input from "./components/Input";

function App() {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([]);
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Body messages={messages} setMessages={setMessages} />
        <Input messages={messages} setMessages={setMessages} />
      </div>
    </>
  );
}

export default App;
