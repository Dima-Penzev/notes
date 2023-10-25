import "./NoteList.css";
import Note from "../Note/Note";

function NoteList({ notes, onEditNote }) {
  return (
    <ul className="note-list">
      {notes.map(({ title, text, id }) => (
        <Note
          key={id}
          title={title}
          text={text}
          noteId={id}
          onEditNote={onEditNote}
        />
      ))}
    </ul>
  );
}

export default NoteList;
