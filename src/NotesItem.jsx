import React from "react";
import { useNavigate } from "react-router-dom";

const NotesItem = ({ item, del }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-400 px-2 py-3 rounded-lg shadow-md flex justify-between">
      <h2 className="text-xl">{item.notesItem}</h2>
      <div className="flex gap-1 items-center">
        <p
          onClick={() => navigate(`/notes/${item.id}`)}
          className="bg-blue-900 w-max p-1 rounded-lg text-white cursor-pointer active:scale-95"
        >
          View
        </p>
        <p
          onClick={() => del(item.id)}
          className="bg-red-900 w-max p-1 rounded-lg text-white cursor-pointer active:scale-95"
        >
          Delete
        </p>
      </div>
    </div>
  );
};

export default NotesItem;
