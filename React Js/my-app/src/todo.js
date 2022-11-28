import { useState } from "react"; //hook
import logo from "./logo.svg";
import "./App.css";
import "react-edit-text/dist/index.css";

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [item, newItem] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState();

  const addItem = () => {
    const tempList = [...list];
    tempList.push(text);
    setList(tempList);
    setText("");
  };

  const deleteItem = (index) => {
    const tempList = [...list];
    tempList.splice(index, 1);
    setList(tempList);
  };

  const editItem = (index) => {
    setEditMode(true);
    setEditIndex(index);
  };

  const updateItem = (editIndex) => {
    const templist = [...list];
    templist.splice(editIndex, 1, text);
    setList(templist);
    setEditMode(false);
    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Todo Application</h1>

        <input type="text" value={text} onChange={onInputChange} />
        {editMode ? (
          <button onClick={() => updateItem(editIndex)}>Update</button>
        ) : (
          <button onClick={addItem}>Add Item</button>
        )}

        <ul>
          {list.map((item, index) => {
            return (
              <li>
                {item}
                <button onClick={() => deleteItem(index)}>Delete</button>
                <button onClick={() => editItem(index)}>Edit</button>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
