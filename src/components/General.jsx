import GeneralBody from "./GeneralBody";
import GeneralInput from "./GeneralInput";
import Nav from "./Nav";
import Footer from "./Footer";
import { useState } from "react";

const welcomeMessage =
	"Welcome to the Cyber Security Assistant! 🔐 I'm here to help you stay secure and informed about online threats. Whether you need advice on strong passwords, identifying suspicious links, or staying safe from cyber-attacks, I've got you covered! To get started, please provide the details of your concern—whether it's a message, link, suspicious activity, or any cyber-security question. I'll analyze it and offer advice to help you stay protected. Together, let’s keep your digital life secure! 🛡️";

const General = () => {
	const [messages, setMessages] = useState([
		{
			type: "chat",
			data: welcomeMessage,
		},
	]);
	return (
		<>
			<GeneralBody messages={messages} setMessages={setMessages} />
			<GeneralInput messages={messages} setMessages={setMessages} />
		</>
	);
};
export default General;
