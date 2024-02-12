import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleNotes = () => {
  const [singleNote, setSingleNotes] = useState();

  const param = useParams();
  const fetchSingleNote = async () => {
    const res = await axios.get(`http://localhost:8080/notes/${param.id}`);
    setSingleNotes(res.data);
  };

  useEffect(() => {
    fetchSingleNote();
  }, []);

  return (
    <div className="text-center p-4">
      <h2>Your Note</h2>
      {singleNote ? (
        <h2 className="bg-blue-400 w-full p-4 text-white rounded-lg">
          {singleNote.notesItem}
        </h2>
      ) : (
        "nothing"
      )}
    </div>
  );
};

export default SingleNotes;
