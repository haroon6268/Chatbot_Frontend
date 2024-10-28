import { useState, useEffect, useRef } from "react";
const GeneralBody = ({ messages, setMessages }) => {
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
							<div
								className="chat-bubble chat-bubble-primary max-w-[45%]"
								style={{ whiteSpace: "pre-wrap" }}
							>
								{x.data.body}
							</div>
						</div>
					) : (
						<div className="chat chat-start" key={i}>
							<div className="chat-header">CyberGuard🛡️</div>
							<div
								className="chat-bubble chat-bubble-secondary max-w-[45%]"
								style={{ whiteSpace: "pre-wrap" }}
							>
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

export default GeneralBody;

/**
 *
 */
