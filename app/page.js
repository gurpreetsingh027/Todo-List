"use client";
import React, { useState } from "react";
import Header from "./Components/Header";

const page = () => {
  const [title, settitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, Desc }]);
    console.log(title);
    console.log(Desc);
    console.log(mainTask);
    settitle("");
    setDesc("");
  };
  let renderTask = <h2>No Task Available</h2>;

  const deletehandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };

  if (mainTask.length > 0) {
    renderTask = mainTask.map((e, i) => {
      return (
        <li key={i}>
          <div>
            <h3 class="hh">{e.title}</h3>
            <h4>{e.Desc}</h4>
          </div>
          <button
            class="delete-button"
            onClick={() => {
              deletehandler(i);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <Header />
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          className="form-text"
          placeholder="Enter title"
          required
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-text"
          placeholder="Enter Description"
          required
          value={Desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <input className="form-submit" type="submit" value="Add Task"></input>
      </form>
      <div className="task-container">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
