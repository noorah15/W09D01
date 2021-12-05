import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Tasks() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    try {
      const userID = localStorage.getItem("ID");
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/task/todos/${userID}`
      );

      setItems(result.data);
      console.log(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>add task: </h1>

      <h1>Tasks</h1>
      {items.map((item) => {
        <h1>{item.name} vvv</h1>;
      })}
    </div>
  );
}
