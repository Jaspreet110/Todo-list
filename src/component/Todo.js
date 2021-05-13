import React, { useState } from "react";
import logo from "../images/logo.svg";
import "../App.css";

const Todo = () => {
  const [inputData, setInputData] = useState(" ");
  const [items, setItems] = useState([]);

  //   remove all
  const removeall = () => {
    setItems([]);
  };

  // delete items

  const deleteItem = (e) => {
    const updatedItem = items.filter((elem, key) => {
      return key !== e;
    });
    setItems(updatedItem);
  };

  const addItem = () => {
    if (!inputData) {
      window.alert("Please Add a valid Data");
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={logo} alt="React logo img" />
            <figcaption>Add your list here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Write a note.."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i className="fa fa-plus add-btn" title="Add" onClick={addItem} />
          </div>
          <div className="showItems">
            {items.map((val, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{val}</h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Remove"
                    onClick={() => deleteItem(ind)}
                  />
                </div>
              );
            })}
          </div>

          {/* Clear all the list */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeall}
            >
              <span>Checklist</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
