import { useEffect } from "react";

const ToDo = ({ text, updateModeClick, deleteToDo, isAni }) => {
  useEffect(() => {
    ScrollReveal().reveal(".headline", {
      origin: "bottom",
      distance: "30px",
      interval: 600,
    });
  }, [])
  return (
    <div className="shadow-lg rounded-lg p-3 mb-3 flex justify-between headline items-center">
      <h1 className="font-bold mb-0">{text}</h1>
      <div className="space-x-3 flex">
        <button
          onClick={updateModeClick}
          className="bg-green-500 text-white rounded-lg p-4 flex justify-center items-center w-10 h-10"
        >
          <i className="fa-solid fa-user-pen fa-fw"></i>
        </button>
        <button
          onClick={deleteToDo}
          className="bg-red-500 text-white rounded-lg p-4 flex justify-center items-center w-10 h-10"
        >
          <i className="fa-solid fa-trash fa-fw"></i>
        </button>
      </div>
    </div>
  );
};

export default ToDo;
