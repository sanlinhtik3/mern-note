const ToDo = ({ text, updateModeClick, deleteToDo }) => {
  return (
    <div className="shadow-lg rounded-lg p-3 mb-3 flex justify-between items-center">
      <h1 className="font-bold underline mb-0">{text}</h1>
      <div className="space-x-3">
        <button
          onClick={updateModeClick}
          className="bg-green-500 text-white rounded-lg p-4"
        >
          Edit
        </button>
        <button
          onClick={deleteToDo}
          className="bg-red-500 text-white rounded-lg p-4"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDo;