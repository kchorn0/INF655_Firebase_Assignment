import React, { useContext } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Card from "../shared/Card";
import TaskContext from "../context/TaskContext";

export default function Task({ id, title, description, checked, task }) {
  const { checkTask, deleteTask, editTask } = useContext(TaskContext);
  return (
    <>
      <Card>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => checkTask(id)}
        />

        <div
          className="text-display"
          style={checked ? { textDecoration: "line-through" } : null}
        >
          {title}
        </div>
        <div
          className="text-display"
          style={checked ? { textDecoration: "line-through" } : null}
        >
          {description}
        </div>
        <button onClick={() => editTask(task)} className="edit">
          <FaEdit />
        </button>
        <button onClick={() => deleteTask(id)} className="delete">
          <FaTrashAlt />
        </button>
      </Card>
    </>
  );
}
