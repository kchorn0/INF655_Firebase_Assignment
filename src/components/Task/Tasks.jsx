import React, { useState, useContext } from "react";
import TaskContext from "../context/TaskContext";
import SearchTask from "./SearchTask";
import Task from "./Task";

export default function Tasks() {
  const [search, setSearch] = useState("");

  const { taskList } = useContext(TaskContext);

  // const result = taskList.filter((task) =>
  //   task.title.toLowerCase().includes(search.toLowerCase())
  // );

  const result = taskList;

  return (
    <>
      <SearchTask search={search} setSearch={setSearch} />
      {result.length ? (
        <div>
          {result.map((task) => (
            <Task
              key={task.data.id}
              id={task.id}
              title={task.data.title}
              description={task.data.description}
              checked={task.data.checked}
              task={task}
            />
          ))}
        </div>
      ) : (
        <p>Task List is empty</p>
      )}
    </>
  );
}
