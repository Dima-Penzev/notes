import "./App.css";
import Header from "../Header/Header";
import NoteList from "../NoteList/NoteList";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addNote, replaceNote } from "../../redux/notesSlice";
import AddNoteModal from "../AddNoteModal/AddNoteModal";
import EditNoteModal from "../EditNoteModal/EditNoteModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [editedNote, setEditedNote] = useState(null);
  const notes = useSelector((state) => state.notes.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notes.length === 0) {
      dispatch(
        addNote({
          title: "Заголовок",
          text: "Текст заметки",
          id: nanoid(),
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setEditedNote(null);
  }

  function addNoteInList(note) {
    dispatch(addNote(note));
    closeModal();
  }

  function editNote(updatedNote) {
    dispatch(replaceNote(updatedNote));
    closeModal();
  }

  function findEditedNote(idNote) {
    const editedNote = notes.find((note) => note.id === idNote);
    setEditedNote(editedNote);
  }

  return (
    <div className="app">
      <Header openModal={openModal} />
      <NoteList notes={notes} onEditNote={findEditedNote} />
      {showModal && (
        <AddNoteModal onClose={closeModal} onSubmit={addNoteInList} />
      )}
      {editedNote && (
        <EditNoteModal
          editedNote={editedNote}
          onClose={closeModal}
          onSubmit={editNote}
        />
      )}
    </div>
  );
}

export default App;
