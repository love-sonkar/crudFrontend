import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleNotes = () => {
  const [singleNote, setSingleNotes] = useState();
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  const param = useParams();
  const id = param.id;
  const fetchSingleNote = async () => {
    const res = await axios.get(`http://localhost:8080/notes/${id}`);
    setSingleNotes(res.data);
  };

  const editNote = async () => {
    const res = await axios.put(
      `http://localhost:8080/notes/${id}`,
      singleNote
    );
    if (res.status === 200) {
      alert("Note updated successfully");
    }
    navigate("/");
  };

  useEffect(() => {
    fetchSingleNote();
  }, []);

  return (
    <div className="text-center p-4">
      <h2>Your Note</h2>
      {singleNote ? (
        <>
          {edit ? (
            <input
              type="text"
              className="w-full p-4 border rounded-lg"
              value={singleNote.notesItem}
              onChange={(e) =>
                setSingleNotes({ ...singleNote, notesItem: e.target.value })
              }
            />
          ) : (
            <h2 className="bg-blue-400 w-full p-4 text-white rounded-lg">
              {singleNote.notesItem}
            </h2>
          )}
        </>
      ) : (
        "Loading..."
      )}
      {!edit ? (
        <button onClick={() => setEdit(true)}>Edit</button>
      ) : (
        <button onClick={editNote}>Save</button>
      )}
    </div>
  );
};

export default SingleNotes;
