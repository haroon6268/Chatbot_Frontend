import { useRef, useState } from "react";
import { postData } from "../../utils/api";
const GeneralInput = ({ messages, setMessages }) => {
	const [data, setData] = useState({ body: "" });
	const [errors, setErrors] = useState({
		body: false,
	});
	const [file, setFile] = useState(null);
	const onSubmit = async () => {
		let error = {};
		let hadError = false;
		if (data.body.length == 0) {
			error.body = true;
			hadError = true;
		}
		if (hadError) {
			console.log(error);
			setErrors(error);
			return;
		}
		setErrors({ body: false });
		setMessages([...messages, { type: "user", data }]);
		let returned = await postData(data, "general");
		console.log(returned.data);
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
		<div className="mx-auto w-[55%] max-w-[600px] items-center justify-center space-y-2 mb-4 mt-4 h-[270px]">
			<div className="flex items-center justify-center space-x-2 h-[170px]">
				<div className="flex-1 h-full flex flex-col">
					<div className="label">
						<span className="label-text">Message</span>
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

export default GeneralInput;
