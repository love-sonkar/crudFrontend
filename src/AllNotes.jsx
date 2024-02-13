import NotesItem from "./NotesItem";
import { UseContextHook } from "./ContextHook";
import axios from "axios";

const AllNotes = () => {
  const {
    store: { notes },
    setStore,
  } = UseContextHook();

  const deleteNote = async (id) => {
    setStore((prev) => ({
      ...prev,
      notes: notes.filter((item) => item.id !== id),
    }));
    const response = await axios.delete(
      `http://localhost:8080/deletenotes/${id}`
    );
    if (response.status === 200) {
      alert("Notes Deleted ");
    }
  };

  return (
    <main className="h-screen">
      <h2 className="text-center text-2xl">Your Notes</h2>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 px-4">
          {notes.length === 0 ? (
            <h2 className="text-center text-2xl">No notes found</h2>
          ) : (
            notes.map((item) => (
              <NotesItem key={item.id} item={item} del={deleteNote} />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default AllNotes;
