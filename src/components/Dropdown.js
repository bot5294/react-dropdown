import React from "react";
import { useState, useEffect } from "react";
export default function Dropdown(props) {
  // hooks for hover,currentItem and list(options)
  const [list, setList] = props.options;
  const [isHover, setIsHover] = useState(false);
  const [currentItem, setCurrentItem] = useState("select");

  useEffect(() => {
    // whenever currentItem changes then change the span text to
    // the current Item's value
    let span = document.getElementById("text");
    span.innerHTML = currentItem;
    setIsHover(false);
  }, [currentItem]);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const handleSelectItem = (option) => {
    // when option is clicked set it as current item
    setCurrentItem(option);
  };
  const handleHighlight = (id) => {
    // show white backgound on current hovering list item
    let item = document.getElementById(id);
    item.style.backgroundColor = "white";
  };
  const handleNotHighlight = (id) => {
    let item = document.getElementById(id);
    item.style.backgroundColor = "whitesmoke";
  };
  const handleAddOption = () => {
    let option = document.getElementById("input-option");
    // add the new option at last
    setList([...list, option.value]);
    option.value = "";
    // alert the user
    alert("Option Added Successfully");
  };
  return (
    <div>
      <h1 style={styles.heading}>Sould you use a dropdown ?</h1>
      <div style={styles.btn} onMouseEnter={handleMouseEnter}>
        <span id="text">select</span>
        <span>˅</span>
      </div>
      {isHover && (
        <div style={styles.centerDiv} onMouseLeave={handleMouseLeave}>
          <ul style={styles.ul}>
            {list.map((option, index) => {
              return (
                <li
                  style={styles.li}
                  key={`option-${index}`}
                  id={`option-${index}`}
                  onClick={() => handleSelectItem(option)}
                  onMouseEnter={() => handleHighlight(`option-${index}`)}
                  onMouseLeave={() => handleNotHighlight(`option-${index}`)}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <h1 style={styles.heading}>Add an option to drop-down option :</h1>
      <div style={{ textAlign: "center" }}>
        <input placeholder="Add an option" id="input-option" />
        <button
          style={{ color: "white", backgroundColor: "green" }}
          onClick={() => handleAddOption()}
        >
          Add
        </button>
      </div>
    </div>
  );
}

const styles = {
  centerDiv: {
    width: "10em",
    backgroundColor: "whitesmoke",
    padding: "0 6px",
    alignItems: "start",
    margin: "0 auto",
    borderTop: "1px solid rgb(94, 214, 214)",
    cursor: "default",
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
  },
  btn: {
    width: "10em",
    backgroundColor: "whitesmoke",
    padding: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    margin: "0 auto",
    border: "1px solid white",
    cursor: "default",
  },
  ul: {
    listStyle: "none",
    textAlign: "left",
    padding: "0 0 5px 1px",
    marginTop: "0",
  },
  li: {
    paddingLeft: "10px",
  },
};
