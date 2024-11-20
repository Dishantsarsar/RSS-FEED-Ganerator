"use client";
import React from "react";
import { useMyContext } from "../context/ContentContext";

const TextArea = () => {
  const { state, dispatch } = useMyContext();
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(state.content).then(
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };
  return (
    <div className="p-8 h-max m-auto w-full gap-2 max-w-fit lg:w-1/2 rounded-sm flex-5 flex-col dark:bg-gray-900 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <label className="text-xl block font-medium text-gray-900 dark:text-white">
          Content
        </label>
        <button
          onClick={handleCopy}
          className={`py-1 px-2 rounded ${
            copied ? "bg-green-500" : "bg-gray-700"
          }  hover:bg-green-500 transition-colors transform duration-300`}
        >
          {copied ? "Copied! ✅" : "Copy"}
        </button>
        <button
          onClick={() => dispatch({ type: "REMOVE_DATA" })}
          className="py-1 px-2 rounded bg-gray-700 hover:bg-red-500 transition-colors transform duration-300"
        >
          Clear
        </button>
      </div>
      <textarea
        className="bg-gray-800 p-2 rounded-sm text-white "
        value={state.content}
        onChange={(e) =>
          dispatch({ type: "SET_DATA", payload: e.target.value })
        }
        placeholder="Your optimized content will go here..."
        rows={36}
        cols={50}
      ></textarea>
    </div>
  );
};

export default TextArea;
