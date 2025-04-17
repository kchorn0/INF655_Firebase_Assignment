import { useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import Card from "../shared/Card";
import TaskContext from "../context/TaskContext";

import * as Yup from "yup";

export default function AddTask() {
  const { addTask, taskEdit, updateTask } = useContext(TaskContext);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .max(10, "Title must be 10 characters or less")
        .required("Title is required"),
      description: Yup.string()
        .max(20, "Description must be 20 characters or less")
        .required("Description is required"),
    }),

    onSubmit: (values) => {
      if (taskEdit.edit === true) {
        updateTask(taskEdit.task.id, values);
        formik.resetForm();
        taskEdit.edit = false;
      } else {
        addTask(values);
        formik.resetForm();
      }
    },
  });

  const isButtonEdit = taskEdit.edit === true ? false : true;

  useEffect(() => {
    if (taskEdit.edit === true) {
      formik.setValues({
        title: taskEdit.task.data.title,
        description: taskEdit.task.data.description,
      });
    }
  }, [taskEdit.edit]);

  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <h2>Add a Task to your list</h2>
        <div className="inputBox">
          <div className="input_row">
            <label
              htmlFor="title"
              className={`label ${
                formik.errors.title && formik.touched.title ? "error" : ""
              }`}
            >
              {formik.errors.title ? formik.errors.title : "Title"}
            </label>
            <input
              type="text"
              className="input"
              name="title"
              placeholder="Task Title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>
          <div className="input_row">
            <label
              htmlFor="description"
              className={`label ${
                formik.errors.description && formik.touched.description
                  ? "error"
                  : ""
              }`}
            >
              {formik.errors.description
                ? formik.errors.description
                : "Description"}
            </label>
            <input
              type="text"
              className="input"
              name="description"
              placeholder="Task Description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </div>
        </div>
        <div>
          {isButtonEdit ? (
            <button type="submit" className="btn">
              Add Task
            </button>
          ) : (
            <button type="submit" className="btn">
              Edit Task
            </button>
          )}
        </div>
      </form>
    </Card>
  );
}
