import "./App.css";
import Header from "../Header/Header";
import NoteList from "../NoteList/NoteList";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import AddNoteModal from "../AddNoteModal/AddNoteModal";
import EditNoteModal from "../EditNoteModal/EditNoteModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [editedNote, setEditedNote] = useState(null);
  const [notesList, setNotesList] = useState(
    () => JSON.parse(localStorage.getItem("notes")) ?? []
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notesList));

    if (notesList.length === 0) {
      addNoteInList({
        title: "Заголовок",
        text: "Текст заметки",
        id: nanoid(),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notesList]);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setEditedNote(null);
  }

  function addNoteInList(note) {
    setIsLoading(true);
    setNotesList([note, ...notesList]);
    closeModal();
    setIsLoading(false);
  }

  function editNote(updatedNote) {
    setIsLoading(true);
    const filteredNotes = notesList.filter((note) => note.id !== editedNote.id);
    setNotesList([updatedNote, ...filteredNotes]);
    closeModal();
    setIsLoading(false);
  }

  function findEditedNote(idNote) {
    const editedNote = notesList.find((note) => note.id === idNote);
    setEditedNote(editedNote);
  }

  function deleteNote(idNote) {
    setNotesList((notes) => notes.filter((note) => note.id !== idNote));
  }

  return (
    <div className="app">
      <Header openModal={openModal} />
      <NoteList
        notes={notesList}
        onEditNote={findEditedNote}
        onDeleteNote={deleteNote}
      />
      {showModal && (
        <AddNoteModal
          isLoading={isLoading}
          onClose={closeModal}
          onSubmit={addNoteInList}
        />
      )}
      {editedNote && (
        <EditNoteModal
          isLoading={isLoading}
          editedNote={editedNote}
          onClose={closeModal}
          onSubmit={editNote}
        />
      )}
    </div>
  );
}

export default App;
