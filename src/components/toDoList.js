import React from "react";
import "./../components/styles.css";
import { useState } from "react";

const Demo = () => {
  const [count, setCount] = useState("");
  const [array, setArray] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [edited, setEdited] = useState("");

  const addItem = () => {
    if (!count) {
      alert("Please fill some details");
    } else if (count && toggle) {
      setArray(
        array.map((element) => {
          if (element.id === edited) {
            return { ...element, name: count };
          }
          return element;
        })
      );
      setEdited("");
      setToggle(false);
      setCount("");
    } else {
      const uniqId = {
        id: new Date().getTime().toString(),
        name: count,
      };
      setArray([...array, uniqId]);
      setCount("");
      Document.getElementById("clicked").focus()
    }
  };

  const deleteItem = (index) => {
    const updatedItem = array.filter((element) => {
      return element.id !== index;
    });
    setArray(updatedItem);
  };

  const editItem = (index) => {
    const editedItem = array.find((element) => {
      return element.id === index;
    });
    setEdited(index);
    setToggle(true);
    setCount(editedItem.name);
  };

  return (
    <>
      <div className="mainDiv">
        <div className="rightDiv">
          <div className="childDiv">
            <h2 className="heading">-- ADD YOUR ITEM --</h2>
            <input
              type="text"
              id="fname"
              name="fname"
              className="data"
              placeholder="Write Here...."
              autoComplete="off"
              value={count}
              onChange={(event) => setCount(event.target.value)}
            ></input>
            <div className="buttonDiv">
              {toggle ? (
                <button type="button" onClick={() => addItem()}>
                  -UPDATE-
                </button>
              ) : (
                <button type="button" id="clicked" onClick={() => addItem()}>
                  -ADD-
                </button>
              )}
            </div>
            <div className="uniqueDivs">
              {array.map((element, index) => {
                return (
                  <div className="uniqueDiv" key={index}>
                    <h3>{element.name}</h3>
                    <button type="button" onClick={() => editItem(element.id)}>
                      UPDATE|
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteItem(element.id)}
                    >
                      |DELETE
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="buttonRemove">
              <button type="button" onClick={() => setArray([])}>
                Remove all elements
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
