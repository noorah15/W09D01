import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Tasks() {
  const [items, setItems] = useState([]);
  const [taskAdd, setTaskAdd] = useState("");
  const [taskUpdate, setTaskUpdate] = useState("");
  const [createTask, setCreateTask] = useState(1);

  useEffect(() => {
    getAllItems();
  }, []);

  useEffect(() => {
    getAllItems();
  }, [createTask]);

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

  const addTask = async () => {
    try {
      const userID = localStorage.getItem("ID");
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/task/create`,
        { name: taskAdd, user: userID }
      );
      console.log(result.data);
      setCreateTask(createTask + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTask = async (taskId, userId) => {
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/task/todoUpdate`,
        { taskId, userId, taskName: taskUpdate }
      );
      console.log(result.data);
      setCreateTask(createTask + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (taskId, userId) => {
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/task/todoDel`,
        { data: { userId, taskId } }
      );
      console.log(result.data);
      setCreateTask(createTask + 1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>add task: </h1>
      <input
        type="text"
        name="task"
        onChange={(e) => setTaskAdd(e.target.value)}
      />
      <button onClick={() => addTask()}> Add </button>

      <h1>Tasks</h1>
      {items.map((item) => (
        <>
          <h1>{item.name}</h1>
          <input
            type="text"
            name="task"
            onChange={(e) => setTaskUpdate(e.target.value)}
          />
          <button onClick={() => updateTask(item._id, item.user)}>
            {" "}
            update{" "}
          </button>
          <button onClick={() => deleteTask(item._id, item.user)}>
            {" "}
            delete{" "}
          </button>
        </>
      ))}
    </div>
  );
}
