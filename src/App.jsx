import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import axios from "axios";


const App = props => {
  const [toDo, setDoTo] = useState([])
  const [text, setText] = useState("")
  const [isUpdate, setIsUpdate] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setDoTo);
  }, []);

  const baseURL = "https://nodeapis-cowvf4umm-sanlinhtike.vercel.app";
  const getAllToDo = (setDoTo) => {
    axios
      .get(baseURL)
      .then(({ data }) => {
        // console.log('data -->', data)
        setDoTo(data);
      })
      .then((err) => console.log(err));
  };

  const addToDo = (text, setText, setDoTo) => {
    if (text === "") {
      return alert('တစ်ခုခုဖြည့်ဟ')
    }
    axios
      .post(baseURL, { name: text })
      .then((data) => {
        console.log(data);
        setText("");
        getAllToDo(setDoTo);
      })
      .then((err) => err);
  };

  const updateToDo = (toDoId, text, setText, setDoTo, setIsUpdate) => {
    axios
      .put(baseURL, { id: toDoId, name: text })
      .then((data) => {
        console.log(data);
        setText("");
        getAllToDo(setDoTo);
        setIsUpdate(false);
      })
      .then((err) => err);
  };

  const updateModeClick = (_id, text) => {
    setIsUpdate(true)
    setText(text)
    setToDoId(_id)
  }

  const deleteToDo = (_id, setDoTo) => {
    // console.log(_id)
    if (confirm("ရမ်းမဖျက်နဲ့ဟ!") === true) {
      axios
        .post(`${baseURL}/delete`, { _id })
        .then((data) => {
          console.log(data);
          getAllToDo(setDoTo);
        })
        .then((err) => err);
    } else {
      alert("မဖျက်တော့ဘူးဘား ညေး");
    }

  };

  return (
    <div className="prose prose-slate max-w-none px-5 lg:px-60">
      <div className="container mx-auto mt-10">
        <div className="flex space-x-5 mb-5">
          <input
            className="w-full border-b p-2"
            type="text"
            placeholder="Your data"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() =>
              isUpdate
                ? updateToDo(toDoId, text, setText, setDoTo, setIsUpdate)
                : addToDo(text, setText, setDoTo)
            }
            className="bg-black text-white rounded-lg p-4"
          >
            {isUpdate ? "Update" : <i className="fa-solid fa-cloud-arrow-up"></i>}
          </button>
        </div>
        {toDo.map((item) => (
          <ToDo
            key={item._id}
            text={item.name}
            updateModeClick={() => updateModeClick(item._id, item.name)}
            deleteToDo={() => deleteToDo(item._id, setDoTo)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;