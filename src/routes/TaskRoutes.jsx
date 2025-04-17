import React from "react";
import { Routes, Route } from "react-router-dom";
import Task from "../components/Task/Task";
import NewTask from "../components/Task/NewTask";

export default function TaskRoutes() {
  return (
    <Routes>
      <Route index element={<Task />} />
      <Route path=":id" element={<Task />} />
      <Route path="newTask" element={<NewTask />} />
    </Routes>
  );
}
