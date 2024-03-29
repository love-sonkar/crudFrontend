import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UseContextHook } from "./ContextHook";

const AddNotes = () => {
  const {
    store: { user },
  } = UseContextHook();
  const inputVal = useRef();
  const navigate = useNavigate();
  const submitNote = async (e) => {
    e.preventDefault();
    const note = inputVal.current.value;

    if (!note) return alert("Please enter a note");
    const res = await axios.post("http://localhost:8080/addnotes/" + user, {
      notesItem: note,
    });
    if (res.status === 200) alert("Note added successfully");
    inputVal.current.value = "";
    navigate("/home");
  };
  useEffect(() => {
    inputVal.current.focus();
  }, []);

  return (
    <div className="p-3">
      <h2>Add Your Note</h2>
      <form onSubmit={submitNote} className="flex ">
        <input
          ref={inputVal}
          type="text"
          className="w-full px-1 py-2 text-xl border"
        />
        <button className="bg-blue-400 px-2 active:scale-95">Submit</button>
      </form>
    </div>
  );
};

export default AddNotes;
