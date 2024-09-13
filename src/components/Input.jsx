import { useState } from "react";
import { postData } from "../utils/api";
const Input = ({ messages, setMessages }) => {
  const [data, setData] = useState({ subject: "", sender: "", body: "" });
  const onSubmit = async () => {
    setMessages([...messages, { type: "user", data }]);
    let returned = await postData(data);

    setMessages([
      ...messages,
      { type: "user", data },
      { type: "OpenAI", data: returned.data },
    ]);
    setData({ subject: "", body: "", sender: "" });
  };
  return (
    <div className="h-[300px] min-h-[300px] flex justify-center items-center p-3">
      <div className="bg-gray-600 h-[15rem] w-[50rem] rounded-3xl flex flex-col justify-center items-center p-2 space-y-5">
        <div className="flex justify-center w-[100%]">
          <label className="px-2 text-white">Subject:</label>
          <input
            name="subject"
            type="text"
            value={data.subject}
            className="w-[70%] h-[1.7rem]"
            onChange={(x) => {
              setData({ ...data, subject: x.target.value });
            }}
          ></input>
        </div>
        <div className="flex items-center justify-center w-[100%]">
          <label className="px-[17px] text-white">Body:</label>
          <textarea
            name="body"
            type="text"
            className="w-[70%] h-[5rem]"
            style={{ resize: "none" }}
            value={data.body}
            onChange={(x) => {
              setData({ ...data, body: x.target.value });
            }}
          ></textarea>
        </div>
        <div className="flex justify-center w-[100%]">
          <label className="px-2 text-white">Sender:</label>
          <input
            name="sender"
            type="text"
            className="w-[70%] h-[1.7rem]"
            value={data.sender}
            onChange={(x) => {
              setData({ ...data, sender: x.target.value });
            }}
          ></input>
        </div>
        <button className="w-[70%] my-auto bg-white" onClick={() => onSubmit()}>
          send
        </button>
      </div>
    </div>
  );
};

export default Input;
