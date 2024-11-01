import { useRef, useState } from "react";
import { postData } from "../../utils/api";
const Input = ({ messages, setMessages }) => {
	const [data, setData] = useState({ subject: "", sender: "", body: "" });
	const [errors, setErrors] = useState({
		subject: false,
		sender: false,
		body: false,
	});
	const [file, setFile] = useState(null);
	const onSubmit = async () => {
		let error = {};
		let hadError = false;
		if (data.sender.length == 0) {
			error.sender = true;
			hadError = true;
		}
		if (data.subject.length == 0) {
			error.subject = true;
			hadError = true;
		}
		if (data.body.length == 0) {
			error.body = true;
			hadError = true;
		}
		if (hadError) {
			console.log(error);
			setErrors(error);
			return;
		}
		setErrors({ subject: false, sender: false, body: false });
		setMessages([...messages, { type: "user", data }]);
		let returned = await postData(data);
		console.log(returned);
		let msg = "";
		msg = returned?.response?.data || returned.data;

		setMessages([
			...messages,
			{ type: "user", data },
			{ type: "OpenAI", data: msg },
		]);
		setData({ subject: "", body: "", sender: "" });
	};
	const fileInput = useRef();
	const handleRemove = () => {
		setFile(null);
		fileInput.current.value = null;
	};
	return (
		<div className="mx-auto w-[55%] max-w-[1000px] items-center justify-center space-y-2 mb-4 mt-4 h-[270px]">
			<div className="flex items-center justify-center space-x-2 h-[170px]">
				<div className="flex flex-col flex-1">
					<div className="">
						<div className="label">
							<span className="label-text">Sender's Email</span>
							<span className="label-text-alt text-error">
								{errors.sender ? "You must include a sender" : ""}
							</span>
						</div>
						<input
							type="text"
							placeholder="email"
							className="input input-bordered input-accent w-full"
							onChange={(x) => {
								setData({ ...data, sender: x.target.value });
							}}
							value={data.sender}
						></input>
					</div>
					<div className="">
						<div className="label">
							<span className="label-text">Email's Subject</span>
							<span className="label-text-alt text-error">
								{errors.subject ? "You must include a subject" : ""}
							</span>
						</div>
						<input
							type="text"
							placeholder="subject"
							className="input input-bordered input-primary w-full "
							onChange={(x) => {
								setData({ ...data, subject: x.target.value });
							}}
							value={data.subject}
						></input>
					</div>
				</div>
				<div className="flex-1 h-full flex flex-col">
					<div className="label">
						<span className="label-text">Email's Body</span>
						<span className="label-text-alt text-error">
							{errors.body ? "You must include a body" : ""}
						</span>
					</div>
					<textarea
						placeholder="Body"
						className="textarea textarea-error w-full resize-none flex-1"
						onChange={(x) => {
							setData({ ...data, body: x.target.value });
						}}
						value={data.body}
					></textarea>
				</div>
			</div>
			<div
				className="bg-secondary p-2 rounded-lg flex justify-between"
				style={{ display: `${file ? "flex" : "none"}` }}
			>
				<p>{file ? file.name : null}</p>
				<button className="w-[20px] h-[20px]" onClick={() => handleRemove()}>
					x
				</button>
			</div>
			<div className="flex items-center justify-center space-x-2">
				<button className="btn btn-primary flex-1 " onClick={() => onSubmit()}>
					Submit
				</button>
				<div className="dropdown dropdown-top dropdown-end">
					<button className="btn btn-primary flex-3">
						<img src="/AttachFile.svg" />
					</button>
					<ul
						tabIndex={0}
						className="mb-2 w-[300px] dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow"
					>
						<input
							type="file"
							className="file-input file-input-bordered file-input-primary w-full max-w-xs"
							onChange={(x) => setFile(x.target.files[0])}
							ref={fileInput}
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Input;
